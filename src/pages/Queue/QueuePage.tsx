import { useState } from "react";
import QueueControl from "./Components/QueueControl";
import QueueViewer from "./Components/QueueViewer";
import HeaderText from "../../components/Atomic/HeaderText";
import { DSA } from "../../constants/Content";

const MAX_SIZE = 6; // <-- SET YOUR MAX SIZE HERE

const QueuePage = () => {
  const [queue, setQueue] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleEnqueue = () => {
    if (inputValue.trim() === "") return;

    if (queue.length === MAX_SIZE) {
      alert("Queue is full!");
      return;
    }

    const value = Number(inputValue);
    setQueue((prev: number[]) => [...prev, value]);
    setInputValue("");
  };

  const handleDequeue = () => {
    if (queue.length === 0) {
      alert("Queue is empty!");
      return;
    }
    setQueue((prev: number[]) => prev.slice(1));
  };

  const handleReset = () => {
    setQueue([]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col justify-start align-center gap-4 py-4">
      <HeaderText content={DSA.Queue} title="Queue" />

      <div className="flex flex-row justify-between align-center gap-4">
        <QueueControl
          onEnQueue={handleEnqueue}
          onDeQueue={handleDequeue}
          onReset={handleReset}
          inputValue={inputValue}
          setInputValue={setInputValue}
          isFull={queue.length === MAX_SIZE}
          isEmpty={queue.length === 0}
        />

        <QueueViewer queue={queue} maxSize={MAX_SIZE} />
      </div>
    </div>
  );
};

export default QueuePage;
