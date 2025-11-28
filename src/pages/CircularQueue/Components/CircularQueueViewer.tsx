import Text from "../../../components/Atomic/Text";
import { Tooltip } from "antd";
import type {ICircularQueueViewProps } from "../../../interfaces/Interface";


const CircularQueueViewer = ({
  queue,
  front,
  rear,
  maxSize,
}: ICircularQueueViewProps ) => {
  return (
    <div className="border-1 border-white/90 rounded-md w-[400px] h-[120px] p-2">
      <div className="flex flex-row justify-start items-center overflow-x-auto space-x-2">
        {queue.map((val: any, idx: any) => {
          const isFront = idx === front;
          const isRear = idx === rear;

          return (
            <div
              key={idx}
              className="border border-gray-700 bg-[#1c1c1c] text-center px-4 py-2"
            >
              {isFront ? (
                <Tooltip title="Front">
                  <span className="cursor-pointer">{val ?? "-"}</span>
                </Tooltip>
              ) : isRear ? (
                <Tooltip title="Rear">
                  <span className="cursor-pointer">{val ?? "-"}</span>
                </Tooltip>
              ) : (
                val ?? "-"
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-center items-center text-[var(--primary-color)]/50 mt-3 gap-3">
        <Text size="14px" weight="500" content={`Max Size: ${maxSize}`} />
        <Text size="14px" weight="500" content={`Front: ${front}`} />
        <Text size="14px" weight="500" content={`Rear: ${rear}`} />
      </div>
    </div>
  );
};

export default CircularQueueViewer;
