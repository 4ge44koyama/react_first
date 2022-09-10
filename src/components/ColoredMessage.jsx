export const ColoredMessage = (props) => {
  // 分割代入
  const { color, children } = props;

  const contentStyle = {
    // プロパティ名と同じなので省略できる
    color,
    fontSize: '20px'
  };

  return <p style={contentStyle}>{children}</p>;
};