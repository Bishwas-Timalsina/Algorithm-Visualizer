import React from "react";
import Text from "../../../components/Atomic/Text";
import { DSA } from "../../../constants/Content";

const HeaderText = () => {
  return (
    <>
      <div className="flex flex-col justify-start align-center gap-4">
        <Text content="Stack" size="52px" weight="600" />
        <Text content={DSA.stack} size="16px" weight="300" />
      </div>
    </>
  );
};

export default HeaderText;
