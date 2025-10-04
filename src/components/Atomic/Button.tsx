import type { IButtonProps } from "../../interfaces/Interface";
import Text from "./Text";

const Button = (props: IButtonProps) => {
  const { label, onClick, style, className } = props;
  return (
    <>
      <div
        onClick={onClick}
        style={style}
        className={`${className} cursor-pointer`}
      >
        <Text content={label} />
      </div>
    </>
  );
};

export default Button;
