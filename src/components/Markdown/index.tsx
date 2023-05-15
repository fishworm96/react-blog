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
    const code: NodeListOf<HTMLElement> = document.querySelectorAll('p code')
    code.forEach((item) => {
      if (item) {
        // Prism.highlightElement(codeBlock)
        item.style.color = '#3594f7'
        item.style.background = '#0095ff1a'
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