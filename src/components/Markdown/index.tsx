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
    copyBtn.forEach((btn) => {
      let clearTimer = 0
      btn.addEventListener('click', () => {
        clearTimeout(clearTimer)
        btn.textContent = '已代码！'
        copy(btn.parentNode?.parentNode?.querySelector('code')?.innerText || '')
        clearTimer = window.setTimeout(() => {
          btn.textContent = '复制代码'
        }, 1500)
      })
    })
  }, [htmlContent])

  return (
    <>
      {/* <MarkdownToJsx options={options} children={content} /> */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  )
}

export default memo(Markdown)
