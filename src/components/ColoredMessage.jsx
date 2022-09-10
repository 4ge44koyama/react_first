// 引数を分割代入
export const ColoredMessage = ({ color, children }) => {
  const contentStyle = {
    // プロパティ名と同じなので省略できる
    color,
    fontSize: '20px'
  };

  return <p style={contentStyle}>{children}</p>;
};