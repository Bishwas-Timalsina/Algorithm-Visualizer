import Text from "../../../components/Atomic/Text";

type LinkedListViewProps = {
  list: number[];
  maxSize: number;
};

const LinkedListView = ({ list, maxSize }: LinkedListViewProps) => {
  return (
    <div className="border border-gray-700 rounded-md w-[400px] m-auto h-[120px] p-3">
      <div className="flex flex-row justify-start items-center overflow-x-auto space-x-2">
        {list.length > 0 ? (
          list.map((val, index) => (
            <div
              key={index}
              className="border border-gray-600 bg-[#1c1c1c] text-center px-4 py-2 rounded"
            >
              {val}
            </div>
          ))
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
