import { memo, useEffect, useRef } from 'react'
import MarkdownToJsx from 'markdown-to-jsx'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/toolbar/prism-toolbar.min.css'
import 'prismjs/plugins/toolbar/prism-toolbar.min.js'
import 'prismjs/plugins/diff-highlight/prism-diff-highlight.min.css'
import 'prismjs/plugins/diff-highlight/prism-diff-highlight.min.js'
import 'prismjs/plugins/show-language/prism-show-language.min.js'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'
import 'prismjs/plugins/autoloader/prism-autoloader.min.js'

import styles from './highlight.module.css'

interface Props {
  content: string
}

const Markdown = ({ content }: Props) => {
  const codeRef = useRef<HTMLDivElement | null>(null)
  const options = {
    overrides: {
      li: {
        props: {
          className: styles['markdown-li'],
        },
      },
    },
  }

  useEffect(() => {
    Prism.highlightAll()
    return () => {
      console.log(codeRef.current)
    }
  }, [content])

  return (
    <>
    <div ref={codeRef}>
      <MarkdownToJsx options={options} children={content} />
    </div>
    </>
  )
}

export default memo(Markdown)
