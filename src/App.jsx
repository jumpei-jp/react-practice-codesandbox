import React from "react";

const App = () => {
  //複数タグをレンダリングする時は()を使って複数のタグを囲む
  //()の中身は一つのタグで囲まないといけない
  return (
    <React.Fragment>
      <h1>hello</h1>
      <p>how are you?</p>
    </React.Fragment>
  );
};

//Appを他ファイルから利用できるようにする
export default App;
