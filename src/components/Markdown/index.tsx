import ReactMarkdown from 'markdown-to-jsx'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-typescript.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/components/prism-go.min.js'
import 'prismjs/components/prism-c.min.js'
import 'prismjs/components/prism-csharp.min.js'
import 'prismjs/components/prism-java.min.js'
import 'prismjs/components/prism-jsx.min.js'
import 'prismjs/components/prism-tsx.min.js'
import 'prismjs/components/prism-sql.min.js'
import 'prismjs/components/prism-git.min.js'
import 'prismjs/components/prism-shell-session.min.js'
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-nginx.min.js'
import { useEffect } from 'react'

interface Props {
  content: string
}

const Markdown = ({ content }: Props) => {
  const hlCode = () => {
    const p = document.querySelectorAll('p')
    p.forEach((item) => {
      const codeBlock = item.querySelector('code')
      if (codeBlock) {
        Prism.highlightElement(codeBlock)
        codeBlock.style.color = 'rgb(253 186 116)'
      }
    })
  }

  useEffect(() => {
    Prism.highlightAll()
    hlCode()
  }, [content])

  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  )
}

export default Markdown