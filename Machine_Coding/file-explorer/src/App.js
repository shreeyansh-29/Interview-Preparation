import {useState} from "react";
import Folder from "./components/folder";
import useTraverseTree from "./hooks/useTraverseTree";
import "./App.css";
import explorer from "./data/folderData";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

// fix connect script in latest video
