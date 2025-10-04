 
import type { IStackViewProps } from "../../../interfaces/Interface";
import { Tooltip } from "antd";

const StackViewer = (props: IStackViewProps) => {
  const { stack } = props;
  return (
    <>
      <div className="border-1 border-white/90 rounded-md  w-[400px] m-auto h-[400px] flex flex-col-reverse justify-start items-stretch overflow-hidden">
        {stack && stack.length > 0 ? (
          stack.map((val: any, idx: any) => {
            const isTop = idx === stack.length - 1;
            return (
              <div
                key={idx}
                className="border-t border-gray-700 bg-[#1c1c1c] text-center py-2"
              >
                {isTop ? (
                  <Tooltip placement="right" title="TOS">
                    <span className="cursor-pointer">{val}</span>
                  </Tooltip>
                ) : (
                  val
                )}
              </div>
            );
          })
        ) : (
          <div className="flex-1 flex item-center justify-center text-gray-400">
            Stack is Empty
          </div>
        )}
      </div>
    </>
  );
};

export default StackViewer;
