import Text from "../../../components/Atomic/Text";
import Button from "../../../components/Atomic/Button";
import type { IQueueControlProps } from "../../../interfaces/Interface";

const QueueControl = (props: IQueueControlProps) => {
  const { onEnQueue, onDeQueue, onReset, inputValue, setInputValue } = props;
  return (
    <>
      <div className="border-[var(--accent-color)] border-2 rounded-md px-4 py-4 flex flex-col gap-4 justify-start items-start w-[40%] h-[180px]">
        <Text content="Queue Controls" size="22px" weight="500" />

        <div className="grid grid-cols-12 justify-start items-center gap-x-2 w-full gap-y-4">
          <input
            type="number"
            placeholder="Enter Value"
            value={inputValue}
            onChange={(e) => setInputValue(e?.target?.value)}
            className="border-[var(--accent-color)]/70 border-[1px] rounded px-1 py-2 col-span-9"
          />
          <Button
            onClick={onEnQueue}
            label={"Enqueue"}
            className="bg-[var(--accent-color)] rounded-md px-3 py-2 col-span-3 h-[10] text-center"
          />
          <Button
            onClick={onDeQueue}
            label={"DeQueue"}
            className="bg-[var(--secondary-color)]/20 rounded-md px-2 py-2 col-span-6 h-[10]"
          />
          <Button
            onClick={onReset}
            label={"Reset"}
            className="bg-[var(--primary-color)]/40 rounded-md px-2 py-2 col-span-6 h-[10]"
          />
        </div>
      </div>
    </>
  );
};

export default QueueControl;
