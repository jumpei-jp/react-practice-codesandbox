import React from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  //ボタンをクリックした時の動作 アラートを表示
  const onClickButtton = () => alert();

  //複数タグをレンダリングする時は()を使って複数のタグを囲む
  //()の中身は一つのタグで囲まないといけない
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気ですよ。</ColofulMessage>
      <button onClick={onClickButtton}>ボタン</button>
    </React.Fragment>
  );
};

//Appを他ファイルから利用できるようにする
export default App;
