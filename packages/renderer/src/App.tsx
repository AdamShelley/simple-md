import React, {useCallback} from 'react';
import './app.css';
import Editor from './components/editor';
import Preview from './components/preview';

const App: React.FC = () => {
  const [doc, setDoc] = React.useState<string>('#Hello, World!\n');

  const handleDocChange = useCallback((newDoc: any) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="app">
      <Editor
        onChange={handleDocChange}
        initialDoc={doc}
      />
      <Preview doc={doc} />
    </div>
  );
};

export default App;
