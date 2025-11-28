import { useState } from "react";
import HeaderText from "../../components/Atomic/HeaderText";
import { DSA } from "../../constants/Content";
import ListControl from "./components/ListControlPage";
import ListView from "./components/ListView";

const ListPage = () => {
  const [list, setList] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInsert = () => {
    if (inputValue.trim() === "") return;
    const value = Number(inputValue);
    setList((prev) => [...prev, value]);
    setInputValue("");
  };

  const handleDelete = () => {
    if (list.length === 0) return;
    setList((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setList([]);
    setInputValue("");
  };

  return (
    <>
      <div className="flex flex-col justify-start align-center gap-4 py-4">
        <HeaderText content={DSA.List} title="Simple List" />
        <div className="flex flex-row justify-between align-center gap-4">
          <ListControl
            onInsert={handleInsert}
            onDelete={handleDelete}
            onReset={handleReset}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <ListView list={list} />
        </div>
      </div>
    </>
  );
};

export default ListPage;
