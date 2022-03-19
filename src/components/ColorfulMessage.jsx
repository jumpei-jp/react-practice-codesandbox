import React from "react";

//componentに対して動的にpropsとして受け取る
const ColorfulMessage = (props) => {
  const { color, children } = props; //propsからcolor,childrenを抜き出す　propsの指定がいらない。
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
