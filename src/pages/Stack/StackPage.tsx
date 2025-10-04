import  { useState } from "react";
import HeaderText from "./Components/HeaderText";
import StackControl from "./Components/StackControl";
import StackViewer from "./Components/StackViewer";

const StackPage = () => {
  const [stack, setStack] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");
  // const [history, setHistory] = useState<string[]>([]);

  const handlePush = () => {
    if (inputValue.trim() === "") return;
    const value = Number(inputValue);
    console.log(value);
    setStack((prev: any) => [...prev, value]);
    setInputValue("");
  };
  const handlePop = () => {
    if (stack.length === 0) return;
    // const popped = stack[stack.length - 1];
    setStack((prev: any) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setStack([]);
  };
  return (
    <>
      <div className="flex flex-col justify-start align-center gap-4 py-4">
        <HeaderText />
        <div className="flex flex-row justify-between align-center gap-4">
          <StackControl
            onPush={handlePush}
            onPop={handlePop}
            onReset={handleReset}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <StackViewer stack={stack} />
        </div>
      </div>
    </>
  );
};

export default StackPage;
