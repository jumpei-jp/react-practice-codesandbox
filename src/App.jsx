import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  //ボタンをクリックした時の動作 アラートを表示
  const onClickButtton = () => alert();
  //動的に更新されるnum,それを更新するsetNum
  const [num, setNum] = useState(0);

  const [faceShowFlag, setFaceShowFlag] = useState(true);

  //stateにカウントアップ
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  //クリックするとフラグをon,offに入れ替える
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //numに変化があった時だけ処理を実行
  useEffect(() => {
    //numが3の時だけ絵文字を表示する
    if (num % 3 === 0) {
      //左辺がfalseの時に右辺を実行
      faceShowFlag || setFaceShowFlag(true);
    } else {
      //左辺がtrueの時に右辺を実行
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  //複数タグをレンダリングする時は()を使って複数のタグを囲む
  //()の中身は一つのタグで囲まないといけない
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気ですよ。</ColofulMessage>
      <button onClick={onClickButtton}>ボタン</button>
      <br />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {/* 左辺がtrueの時に右辺を返す */}
      {faceShowFlag && <p>(о´∀`о)</p>}
    </React.Fragment>
  );
};

//Appを他ファイルから利用できるようにする
export default App;
