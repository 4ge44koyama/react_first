export const App = () => {
  // ボタンを押したときに走る処理
  const onClickButton = () => {
    alert('Hello!!');
  };
  // CSSオブジェクト
  const contentStyle = {
    color: 'blue',
    fontSize: '20px'
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
