import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  // ボタンを押したときに走る処理
  const onClickButton = () => {
    alert('Hello!!');
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
