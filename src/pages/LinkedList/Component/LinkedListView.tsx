import Text from "../../../components/Atomic/Text";

type LinkedListViewProps = {
  list: number[];
  maxSize: number;
};

const generateMemoryLocation = () => Math.floor(1000 + Math.random() * 9000);

const LinkedListView = ({ list, maxSize }: LinkedListViewProps) => {
  const memoryLocations = list.map(() => generateMemoryLocation());

  return (
    <div className="border border-gray-700 rounded-md w-[400px] m-auto h-[160px] p-3">
      <div className="flex flex-row justify-start items-center overflow-x-auto space-x-4">
        {list.length > 0 ? (
          list.map((val, index) => {
            const nextAddr = memoryLocations[index + 1] || "null";
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="border border-gray-600 bg-[#1c1c1c] text-center px-3 py-2 rounded w-[80px] h-[150px]">
                  <div className="border">
                    <Text
                      size="12px"
                      weight="400"
                      content={`Addr: ${memoryLocations[index]}`}
                    />
                  </div>
                  <div className="border">
                    <Text size="14px" weight="500" content={`${val}`} />
                  </div>
                  <div className="border">
                    <Text
                      size="12px"
                      weight="400"
                      content={`Next: ${nextAddr}`}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-gray-400 w-full text-center">
            Linked List is Empty
          </div>
        )}
      </div>

      <div className="flex flex-row gap-2 justify-center items-center text-[var(--primary-color)]/60 mt-3">
        <Text size="14px" weight="500" content={`Size:`} />
        <Text size="14px" weight="500" content={list.length.toString()} />
        <Text size="14px" weight="500" content={`Max Size:`} />
        <Text size="14px" weight="500" content={maxSize.toString()} />
      </div>
    </div>
  );
};

export default LinkedListView;
