import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, close } = props;
  const data = [...Array(1000).keys()];
  console.log("ChildAreaがレンダリングされた!!");
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={close}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
