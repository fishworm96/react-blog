import { memo, useEffect } from 'react'
import MarkdownToJsx from 'markdown-to-jsx'
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
import 'prismjs/components/prism-yaml.min.js'

import './highlight.css'

interface Props {
  content: string
}

const Markdown = ({ content }: Props) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [content])

  return (
    <>
      <MarkdownToJsx>
        {content}
        </MarkdownToJsx>
    </>
  )
}

export default memo(Markdown)