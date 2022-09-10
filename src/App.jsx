export const App = () => {
  // ボタンを押したときに走る処理
  const onClickButton = () => {
    alert('Hello!!');
  };

  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
