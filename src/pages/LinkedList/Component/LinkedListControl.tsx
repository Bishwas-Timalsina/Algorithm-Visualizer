import Text from "../../../components/Atomic/Text";
import Button from "../../../components/Atomic/Button";

type LinkedListControlProps = {
  inputValue: string;
  setInputValue: (val: string) => void;
  onInsertFront: () => void;
  onInsertRear: () => void;
  onDeleteFront: () => void;
  onDeleteRear: () => void;
  onReset: () => void;
};

const LinkedListControl = ({
  inputValue,
  setInputValue,
  onInsertFront,
  onInsertRear,
  onDeleteFront,
  onDeleteRear,
  onReset,
}: LinkedListControlProps) => {
  return (
    <div className="border-[var(--accent-color)] border-2 rounded-md px-4 py-4 flex flex-col gap-4 justify-start items-start w-[45%] h-[300px]">
      <Text content="Linked List Controls" size="22px" weight="500" />

      <input
        type="number"
        placeholder="Enter Value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-[var(--accent-color)]/70 border rounded px-2 py-2 w-full"
      />

      <div className="flex flex-row gap-2 w-full">
        <Button
          onClick={onInsertFront}
          label="Insert Front"
          className="bg-[var(--accent-color)] px-3 py-2 rounded-md flex-1"
        />
        <Button
          onClick={onInsertRear}
          label="Insert Rear"
          className="bg-[var(--accent-color)] px-3 py-2 rounded-md flex-1"
        />
      </div>

      <div className="flex flex-row gap-2 w-full">
        <Button
          onClick={onDeleteFront}
          label="Delete Front"
          className="bg-[var(--secondary-color)]/30 px-3 py-2 rounded-md flex-1"
        />
        <Button
          onClick={onDeleteRear}
          label="Delete Rear"
          className="bg-[var(--secondary-color)]/30 px-3 py-2 rounded-md flex-1"
        />
      </div>

      <Button
        onClick={onReset}
        label="Reset"
        className="bg-[var(--primary-color)]/40 px-3 py-2 rounded-md w-full"
      />
    </div>
  );
};

export default LinkedListControl;
