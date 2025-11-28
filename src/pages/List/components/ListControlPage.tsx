import Text from "../../../components/Atomic/Text";
import Button from "../../../components/Atomic/Button";

type ListControlProps = {
  onInsert: () => void;
  onDelete: () => void;
  onReset: () => void;
  inputValue: string;
  setInputValue: (val: string) => void;
};

const ListControl = ({
  onInsert,
  onDelete,
  onReset,
  inputValue,
  setInputValue,
}: ListControlProps) => {
  return (
    <div className="border-[var(--accent-color)] border-2 rounded-md px-4 py-4 flex flex-col gap-4 justify-start items-start w-[40%] h-[200px]">
      <Text content="List Controls" size="22px" weight="500" />

      <div className="grid grid-cols-12 gap-3 w-full">
        <input
          type="number"
          placeholder="Enter Value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-[var(--accent-color)]/70 border rounded px-2 py-2 col-span-9"
        />

        <Button
          onClick={onInsert}
          label={"Insert"}
          className="bg-[var(--accent-color)] rounded-md px-3 py-2 col-span-3"
        />

        <Button
          onClick={onDelete}
          label={"Delete"}
          className="bg-[var(--secondary-color)]/30 rounded-md px-3 py-2 col-span-6"
        />

        <Button
          onClick={onReset}
          label={"Reset"}
          className="bg-[var(--primary-color)]/40 rounded-md px-3 py-2 col-span-6"
        />
      </div>
    </div>
  );
};

export default ListControl;
