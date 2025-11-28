import { useState } from "react";
import HeaderText from "../../components/Atomic/HeaderText";
import { DSA } from "../../constants/Content";
import LinkedListControl from "./Component/LinkedListControl";
import LinkedListView from "./Component/LinkedListView";

const MAX_SIZE = 5;

const LinkedListPage = () => {
  const [list, setList] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInsertFront = () => {
    if (!inputValue.trim()) return alert("Enter a value");
    if (list.length >= MAX_SIZE) return alert("Linked List is full");
    setList((prev) => [Number(inputValue), ...prev]);
    setInputValue("");
  };

  const handleInsertRear = () => {
    if (!inputValue.trim()) return alert("Enter a value");
    if (list.length >= MAX_SIZE) return alert("Linked List is full");
    setList((prev) => [...prev, Number(inputValue)]);
    setInputValue("");
  };

  const handleDeleteFront = () => {
    if (list.length === 0) return alert("List is empty");
    setList((prev) => prev.slice(1));
  };

  const handleDeleteRear = () => {
    if (list.length === 0) return alert("List is empty");
    setList((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setList([]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col justify-start align-center gap-4 py-4">
      <HeaderText content={DSA.LinkedList} title="Linked List" />
      <div className="flex flex-row justify-between align-center gap-4">
        <LinkedListControl
          inputValue={inputValue}
          setInputValue={setInputValue}
          onInsertFront={handleInsertFront}
          onInsertRear={handleInsertRear}
          onDeleteFront={handleDeleteFront}
          onDeleteRear={handleDeleteRear}
          onReset={handleReset}
        />
        <LinkedListView list={list} maxSize={MAX_SIZE} />
      </div>
    </div>
  );
};

export default LinkedListPage;
