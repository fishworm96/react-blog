import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

interface Props {
  content: string
}

const Markdown = ({ content }: Props) => {
  return (
    <>
      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return (!inline && match)
              ? (<SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={darcula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />)
              : (
                <code className={className} {...props}>
                  {children}
                </code>)
          },
        }} remarkPlugins={[remarkGfm]}
      />
    </>
  )
}
export default Markdown