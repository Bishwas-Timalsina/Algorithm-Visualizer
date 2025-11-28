import { useState } from "react";
import CircularQueueControl from "./Components/CircularQueueControl";
import CircularQueueViewer from "./Components/CircularQueueViewer";
import HeaderText from "../../components/Atomic/HeaderText";
import { DSA } from "../../constants/Content";

const MAX_SIZE = 6; // you can change this

const CircularQueuePage = () => {
  const [queue, setQueue] = useState(Array(MAX_SIZE).fill(null));
  const [front, setFront] = useState(-1);
  const [rear, setRear] = useState(-1);
  const [inputValue, setInputValue] = useState("");

  const isFull = () => (rear + 1) % MAX_SIZE === front;

  const isEmpty = () => front === -1;

  const handleEnqueue = () => {
    if (inputValue.trim() === "") return;
    const value = Number(inputValue);

    if (isFull()) {
      alert("Queue is full!");
      return;
    }

    if (isEmpty()) {
      setFront(0);
      setRear(0);
      const newQueue = [...queue];
      newQueue[0] = value;
      setQueue(newQueue);
    } else {
      const newRear = (rear + 1) % MAX_SIZE;
      const newQueue = [...queue];
      newQueue[newRear] = value;
      setQueue(newQueue);
      setRear(newRear);
    }

    setInputValue("");
  };

  const handleDequeue = () => {
    if (isEmpty()) {
      alert("Queue is empty!");
      return;
    }

    const newQueue = [...queue];
    newQueue[front] = null;

    if (front === rear) {
      setFront(-1);
      setRear(-1);
    } else {
      setFront((front + 1) % MAX_SIZE);
    }

    setQueue(newQueue);
  };

  const handleReset = () => {
    setQueue(Array(MAX_SIZE).fill(null));
    setFront(-1);
    setRear(-1);
    setInputValue("");
  };

  return (
    <div className="flex flex-col justify-start align-center gap-4 py-4">
      <HeaderText content={DSA.CircularQueue} title="Circular Queue" />

      <div className="flex flex-row justify-between align-center gap-4">
        <CircularQueueControl
          onEnQueue={handleEnqueue}
          onDeQueue={handleDequeue}
          onReset={handleReset}
          inputValue={inputValue}
          setInputValue={setInputValue}
          isFull={isFull()}
          isEmpty={isEmpty()}
        />

        <CircularQueueViewer
          queue={queue}
          front={front}
          rear={rear}
          maxSize={MAX_SIZE}
        />
      </div>
    </div>
  );
};

export default CircularQueuePage;
