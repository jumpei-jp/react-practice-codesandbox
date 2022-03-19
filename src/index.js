import React from "react";
import ReactDom from "react-dom";

//nullを返すApp関数
const App = () => {
  //複数タグをレンダリングする時は()を使って複数のタグを囲む
  //()の中身は一つのタグで囲まないといけない
  return (
    <React.Fragment>
      <h1>hello world</h1>
    </React.Fragment>
  );
};

//render関数を使って画面に表示
ReactDom.render(<App />, document.getElementById("root"));
