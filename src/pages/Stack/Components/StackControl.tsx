import React from "react";
import Text from "../../../components/Atomic/Text";
import Button from "../../../components/Atomic/Button";

const StackControl = () => {
  const onPushClick = () => {
    console.log("Push");
  };

  const onPopClick = () => {
    console.log("Pop");
  };

  const onResetClick = () => {
    console.log("Reset");
  };
  return (
    <>
      <div className="border-[var(--accent-color)] border-2 rounded-md px-4 py-4 flex flex-col gap-4 justify-start items-start w-[40%]">
        <Text content="Stack Controls" size="22px" weight="500" />

        <div className="grid grid-cols-12 justify-start items-center gap-x-2 w-full gap-y-4">
          <input
            type="text"
            placeholder="Enter Value"
            className="border-[var(--accent-color)]/70 border-[1px] rounded px-1 py-2 col-span-10"
          />
          <Button
            onClick={onPushClick}
            label={"Push"}
            className="bg-[var(--accent-color)] rounded-md px-2 py-2 col-span-2 h-[10]"
          />
          <Button
            onClick={onPopClick}
            label={"Pop"}
            className="bg-[var(--secondary-color)]/20 rounded-md px-2 py-2 col-span-6 h-[10]"
          />
          <Button
            onClick={onResetClick}
            label={"Reset"}
            className="bg-[var(--primary-color)]/40 rounded-md px-2 py-2 col-span-6 h-[10]"
          />
        </div>
      </div>
    </>
  );
};

export default StackControl;
