import React from "react";
import Message from "./components/message";

const App = () => {
  // const contentstyle = {
  //   color:"blue",
  //   Fontsize:"18px"
  //   // React上の記法として、font-sizeをFontsizeにしている。
  // };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* <p　style={contentstyle}>お元気ですか</p> */}
      <Message color="pink">元気です</Message>
      <Message color="blue">元気です</Message>
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
