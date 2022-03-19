import React from "react";

const App = () => {
  //ボタンをクリックした時の動作 アラートを表示
  const onClickButtton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  //複数タグをレンダリングする時は()を使って複数のタグを囲む
  //()の中身は一つのタグで囲まないといけない
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>hello</h1>
      <p style={contentStyle}>how are you?</p>
      <button onClick={onClickButtton}>ボタン</button>
    </React.Fragment>
  );
};

//Appを他ファイルから利用できるようにする
export default App;
