import { useState } from "react";
import HeaderText from "./Components/HeaderText";
import QueueControl from "./Components/QueueControl";
import QueueViewer from "./Components/QueueViewer";

const QueuePage = () => {
  const [queue, setQueue] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleEnqueue = () => {
    if (inputValue.trim() === "") return;
    const value = Number(inputValue);
    console.log(value);
    setQueue((prev: any) => [...prev, value]);
    setInputValue("");
  };
  const handleDequeue = () => {
    if (queue.length === 0) return;
    setQueue((prev: any) => prev.slice(1));
  };

  const handleReset = () => {
    setQueue([]);
  };
  return (
    <>
      <div className="flex flex-col justify-start align-center gap-4 py-4">
        <HeaderText />
        <div className="flex flex-row justify-between align-center gap-4">
          <QueueControl
            onEnQueue={handleEnqueue}
            onDeQueue={handleDequeue}
            onReset={handleReset}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <QueueViewer queue={queue} />
        </div>
      </div>
    </>
  );
};

export default QueuePage;
