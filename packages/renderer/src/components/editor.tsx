import React, {useCallback, useEffect} from 'react';
import useCodeEditor from './use-codemirror';
import './editor.css';

interface EditorProps {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor: React.FC<EditorProps> = ({initialDoc, onChange}) => {
  const handleChange = useCallback((state: any) => onChange(state.doc.toString()), [onChange]);

  const [refContainer, editorView] = useCodeEditor<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
    }
  }, [editorView]);

  return (
    <div
      className="editor-wrapper"
      ref={refContainer}
    >
      Editor
    </div>
  );
};

export default Editor;
