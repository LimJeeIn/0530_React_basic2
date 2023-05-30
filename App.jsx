// import { useState } from 'react';

function App() {
  const [num, setNum] = React.useState(0);

  return (
    <div>
      {num}
      <button
        onClick={() => {
          setNum(num + 1); // 0 + 1
          console.log(num); // 왜 0? -> num이 0인곳에서는 무조건 0이다
        }}
      >
        {num}
      </button>
    </div>
  );
}

function index() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
}

index();
