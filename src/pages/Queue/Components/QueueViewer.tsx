import Text from "../../../components/Atomic/Text";
import type { IQueueViewProps } from "../../../interfaces/Interface";
import { Tooltip } from "antd";

const QueueViewer = (props: IQueueViewProps) => {
  const { queue } = props;
  return (
    <>
      <div className="border-1 border-white/90 rounded-md w-[400px] m-auto h-[100px] p-2">
        <div className=" flex flex-row justify-start items-center overflow-x-auto space-x-2">
          {queue && queue.length > 0 ? (
            queue.map((val: any, idx: any) => {
              const isFront = idx === 0;
              const isRear = idx === queue.length - 1;
              return (
                <div
                  key={idx}
                  className="border border-gray-700 bg-[#1c1c1c] text-center px-4 py-2"
                >
                  {isFront ? (
                    <Tooltip placement="top" title="Front">
                      <span className="cursor-pointer">{val}</span>
                    </Tooltip>
                  ) : isRear ? (
                    <Tooltip placement="top" title="Rear">
                      <span className="cursor-pointer">{val}</span>
                    </Tooltip>
                  ) : (
                    val
                  )}
                </div>
              );
            })
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              Queue is Empty
            </div>
          )}
        </div>
        <div className="flex flex-row gap-2 justify-center items-center text-[var(--primary-color)]/50 my-3">
          <Text
            size="14px"
            weight="500"
            content={"Queue Size: "}
            className="col-span-10"
          />
          <Text
            size="14px"
            weight="500"
            content={queue.length}
            className="col-span-2"
          />
        </div>
      </div>
    </>
  );
};

export default QueueViewer;
