import React, {Fragment, ReactElement, createElement, useEffect, useState} from 'react';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import * as prod from 'react/jsx-runtime';
import rehypeReact from 'rehype-react';
import './preview.css';
import 'github-markdown-css/github-markdown.css';
import remarkRehype from 'remark-rehype';

interface PreviewProps {
  doc: string;
}

const production = {Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs};

const Preview: React.FC<PreviewProps> = ({doc}) => {
  const [content, setContent] = useState<ReactElement | null>(null);

  useEffect(() => {
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeReact, production as any);

    const result = processor.processSync(doc);
    setContent(result.result as ReactElement);
  }, [doc]);

  return <div className="preview markdown-body">{content}</div>;
};

export default Preview;

// TODO: IDEAS FOR LATER
//  // Support HTML embedded inside markdown
//  .use(rehypeRaw)
//  // Improve code highlighting
//  .use(rehypeHighlight)
//  // Serialize syntax tree to HTML
//  .use(rehypeStringify)
//  // And finally, process the input
//  .processSync(content)
