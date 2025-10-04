import React from "react";
import HeaderText from "./Components/HeaderText";
import StackControl from "./Components/StackControl";
import StackViewer from "./Components/StackViewer";

const StackPage = () => {
  return (
    <>
      <div className="flex flex-col justify-start align-center gap-4 py-4">
        <HeaderText />
        <div className="flex flex-row justify-between align-center gap-4">
          <StackControl />
          <StackViewer />
        </div>
      </div>
    </>
  );
};

export default StackPage;
