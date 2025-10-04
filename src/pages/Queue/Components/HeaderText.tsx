import Text from "../../../components/Atomic/Text";
import { DSA } from "../../../constants/Content";

const HeaderText = () => {
  return (
    <>
      <div className="flex flex-col justify-start align-center gap-4">
        <Text content="Queue" size="52px" weight="600" />
        <Text content={DSA.Queue} size="16px" weight="300" />
      </div>
    </>
  );
};

export default HeaderText;
