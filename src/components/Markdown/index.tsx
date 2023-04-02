import ReactMarkdown from 'markdown-to-jsx'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-typescript.min.js'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/components/prism-go.min.js'
import 'prismjs/components/prism-c.min.js'
import 'prismjs/components/prism-csharp.min.js'
import 'prismjs/components/prism-java.min.js'
import 'prismjs/components/prism-jsx.min.js'
import 'prismjs/components/prism-tsx.min.js'

interface Props {
  content: string
}

const Markdown = ({ content }: Props) => {
  Prism.highlightAll()
  return (
    <>
      <ReactMarkdown >{content}</ReactMarkdown>
    </>
  )
}

export default Markdown