import React from "react";

const Message = (props) => {
  const { color, children } = props; //分割代入
  const ContentStyle = {
    //オブジェクト
    color: props.color,
    // 上記の文は左がCSSのcolor、右が引数のcolorであり、意味が違う同じ言葉は下記のように小楽可能
    // color,
    Fontsize: "18px"
  };

  return <p style={ContentStyle}>{children}</p>;
};

export default Message;
