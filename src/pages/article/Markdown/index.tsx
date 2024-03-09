import { memo, useEffect, useState } from 'react'
import mdit from 'markdown-it'
import hljs from 'highlight.js'
import copy from 'copy-to-clipboard'
import 'highlight.js/styles/atom-one-dark.css'

import './highlight.css'

interface Props {
  content: string
}

const Markdown = ({ content }: Props) => {
  const [htmlContent, setHtmlContent] = useState('')

  const handleCopyButtonClick = (event: Event) => {
    const btn = event.target as HTMLElement
    const code = btn.parentNode?.parentNode?.querySelector('code')
    if (code) {
      let clearTimer
      const codeText = code.innerText
      clearTimeout(clearTimer)
      btn.textContent = '已代码！'
      copy(codeText)
      clearTimer = window.setTimeout(() => {
        btn.textContent = '复制代码'
      }, 1500)
    }
  }

  useEffect(() => {
    const md = mdit({
      html: true,
      breaks: true,
    })
    md.set({
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return `<pre class="hljs"><div class="code-block-extension-headerRight"><span class="code-block-extension-lang">${lang}</span><button class="code-block-extension-copyCodeBtn">复制代码</button></div><code class='${lang}'>${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`
          } catch (err) {}
        }

        return `<pre class="hljs"><div class="code-block-extension-headerRight"><button class="code-block-extension-copyCodeBtn">复制代码</button></div><code class="${lang}">${md.utils.escapeHtml(str)}</code></pre>`
      },
    })
    const html = md.render(content)
    setHtmlContent(html)
  }, [content])

  useEffect(() => {
    const copyBtn = document.querySelectorAll('.code-block-extension-copyCodeBtn')
    const articleContent = document.querySelector('.mark-img div')
    articleContent?.querySelectorAll('h1, h2, h3').forEach((item: Element) => {
        (item as HTMLElement).style.borderBottom = '1px solid #ccc'
    })

    copyBtn.forEach((btn) => {
      btn.addEventListener('click', handleCopyButtonClick)
      // let clearTimer
      // btn.addEventListener('click', () => {
      //   clearTimeout(clearTimer)
      //   btn.textContent = '已代码！'
      //   copy(btn.parentNode?.parentNode?.querySelector('code')?.innerText || '')
      //   clearTimer = window.setTimeout(() => {
      //     btn.textContent = '复制代码'
      //   }, 1500)
      // })
    })

    return () => {
      copyBtn.forEach((btn) => {
        btn.removeEventListener('click', handleCopyButtonClick)
        console.log('Event listener removed for button:', btn)
      })
    }
  }, [htmlContent])

  return (
    <>
      {/* <MarkdownToJsx options={options} children={content} /> */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  )
}

export default memo(Markdown)
