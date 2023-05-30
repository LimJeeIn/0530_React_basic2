// import { useState } from 'react';

function App() {
  const [num, setNum] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  // 화면에 값 변하는거 쓰고싶으면 useState쓰셈 ㅋ
  // state랑 setState가 있는데 setState는 state를 바꿀때 사용
  // setState를 이용해서 값을 바꾸면 화면이 새로그려짐!!

  return (
    <div>
      {num} 뭐하라고있는거임?? {num2}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          setNum2(num2 - 1);
        }}
      >
        빼기
      </button>
    </div>
  );
}

function index() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
}

index();
