import React, { useEffect, useState } from "react";
import Message from "./components/message";
import nabeatu from "./images/nabeatsu.webp";

const App = () => {
  // const contentstyle = {
  //   color:"blue",
  //   Fontsize:"18px"
  //   // React上の記法として、font-sizeをFontsizeにしている。
  // };
  const onClickCountUp = () => {
    setNum(Num + 1);
  };

  const onClickCountDown = () => {
    setNum(Num - 1);
  };

  const onClickCountReset = () => {
    setNum(Num - Num);
    FaseShowFlag && setFaseShowFlag(false);
  };

  const [Num, setNum] = useState(0);

  const onClickSwichFaseShowFlag = () => {
    setFaseShowFlag(!FaseShowFlag);
  };
  const [FaseShowFlag, setFaseShowFlag] = useState(false);

  useEffect(() => {
    if (Num > 0) {
      if (Num % 3 === 0) {
        FaseShowFlag || setFaseShowFlag(true);
      } else {
        FaseShowFlag && setFaseShowFlag(false);
      }
    }
  }, [Num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* <p　style={contentstyle}>お元気ですか</p> */}
      <Message color="pink">元気です</Message>
      <Message color="blue">元気です</Message>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>
      <button onClick={onClickCountReset}>リセット</button>
      <br />
      <button onClick={onClickSwichFaseShowFlag}>on/off</button>
      <p>{Num}</p>
      {FaseShowFlag && (
        <p>
          <img src={nabeatu} alt="" />
        </p>
      )}
      {FaseShowFlag || <p></p>}
    </>
  );
};

// このファイル以外でApp関数を利用できるよう指定
export default App;

// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
