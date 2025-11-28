import type { IHeaderType } from "../../interfaces/Interface";
import Text from "./Text";

const HeaderText = (props: IHeaderType) => {
  const { content, title } = props;
  return (
    <>
      <div className="flex flex-col justify-start align-center gap-4">
        <Text content={title} size="52px" weight="600" />
        <Text content={content} size="16px" weight="300" />
      </div>
    </>
  );
};

export default HeaderText;
