// import { useState } from 'react';
// 마운트(컴포넌트의 첫 번째 렌더링이 발생하여 DOM에 삽입되는 것) ->
// 업데이트(=리렌더링 , setState변경될때 실행) ->
// 언마운트(컴포넌트가 사라지는 과정)
// 흐름 알기
// effect가 일어나면 cleanup이 일어난다, 언마운트에서는 없기 때문에 클린업 일어나지 않는다
// effect는 마운트, 업데이트 때만 일어난다

function App() {
  const [num, setNum] = React.useState(0);
  const [num2, setNum2] = React.useState(0);

  // 매 렌더링때 어떤 효과를 실행하고싶으면, 의존성 배열에 아무것도 넣지 않는게아니라
  // 아예 아무것도 적지 않는다. 배열도 적지마 그냥 함수만 넣어.
  React.useEffect(() => {
    // 여기는 마운트, 업데이트때 일어남.
    return () => {
      // 그럼 여기는..? 업데이트때랑 언마운트때 일어남.
    };
  });

  React.useEffect(() => {
    //이렇게 적으면 마운트일때만(최초 컴포넌트가 만들어질때만)실행이된다
    // 최초에 한번만 실행하고 싶을때!
    setNum(10);
    setNum2(10);
    console.log('마운트가되었습니다.');
    return () => {
      // 의존성 배열에 아무것도안적은 클린업 함수는 언마운트때! 한번!
      console.log('언마운트 되었습니다.');
    };
  }, []);

  // 처음에 무조건 한번 실행된다
  React.useEffect(() => {
    console.log('num이 바뀌었습니다.');
    if (num % 2 == 0) {
      alert('num이 짝수입니다');
    }
    return () => console.log(num, 'num에 의존하는 클린업!'); //클린업 : 다음 이펙트 전에 할일
  }, [num]);

  // num2 에 관련해서 뭔가 하고있음
  React.useEffect(() => {
    console.log('num2가 바뀌었습니다');
  }, [num2]);

  // useEffect는 [의존성배열]안의 값이 바뀌면 효과를 일으켜준다!
  // 그래서 언제쓰는데? 내가 원하는 state가 변할때 마다
  // 관련하여 어떤 행동을 하고싶을때 합니다.

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
