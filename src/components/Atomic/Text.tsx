import type { ITextProps } from "../../interfaces/Interface";

const Text = (props: ITextProps) => {
  const { size, weight, content, lineHeight = "24px", className } = props;
  return (
    <>
      <div
        style={{
          fontSize: size,
          fontWeight: weight,
          lineHeight: lineHeight,
        }}
        className={`${className}`}
      >
        {content}
      </div>
    </>
  );
};
export default Text;
