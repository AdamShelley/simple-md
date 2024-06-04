import React, {useCallback} from 'react';
import './app.css';
import Editor from './components/editor';

const App: React.FC = () => {
  const [doc, setDoc] = React.useState<string>('#Hello, World!\n');

  const handleDocChange = useCallback((newDoc: any) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="app">
      TEST
      <Editor
        onChange={handleDocChange}
        initialDoc={doc}
      />
    </div>
  );
};

export default App;
