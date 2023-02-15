// reactを使う時の準備として、Reactを読み込む処理が最初に必要
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

//Reactでは 関数の中でHTMLタグを書く
// 出力する内容はreturnの先でHTMLとほぼ同じ構造で記述する
// 複数のHTMLタグを表示する場合は（）を使って記述する
// divタグで囲むとHTMLの入れ子構造が変わってしまうので
// <React.Fragment>もしくは<>で囲む

// const App = () => {
//   return (
//     // <div>
//     // <React.Fragment>
//     <>
//       <h1>こんにちは</h1>
//       <p>元気ですか</p>
//     </>
//     // </React.Fragment>
//     // </div>
//   );
// };

// Render関数
ReactDom.render(<App />, document.getElementById("root"));

// コンポーネント命名規則　名前を決めるルールのこと
// 正しい例
// App
// SomeComponent
// ⇒頭文字を大文字にする

// 正しくない例
// app
// somecomponent
// ⇒頭文字が小文字になっている

// エラーにはならないが推奨されない例
// Some_component
// some_Component
// ⇒記号は推奨されていない

// 頭文字が大文字で始まり、単語の区切りを大文字とする変数名のつけ方を
// [パスカルケース]と呼ぶ。
// Reactのコンポーネントはパスカルケースで命名する事
