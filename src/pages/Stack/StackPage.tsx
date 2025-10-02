import React from "react";
import HeaderText from "./Components/HeaderText";
import StackControl from "./Components/StackControl";
import StackViewer from "./Components/StackViewer";

const StackPage = () => {
  return (
    <>
      <div>
        <HeaderText />
        <StackControl />
        <StackViewer />
      </div>
    </>
  );
};

export default StackPage;
