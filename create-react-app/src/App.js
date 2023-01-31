import { useState, useEffect } from "react";

function Hello() {
  // 첫번째 방법
  /*function destroyedFn() {
    console.log("destroyed :(");
  }
  function createdFn() {
    console.log("created :)");
    return destroyedFn;
  }
  useEffect(createdFn, []);*/

  // 두번째 방법
  useEffect(() => {
    console.log("created :)");
    // 컴포넌트가 destory 될 때 실행 될 function
    return () => console.log("destroyed :(");
  }, []);

  // 세번째 방법
  /*useEffect(function () {
    console.log("created :)");
    return function () {
      console.log("destroyed :(");
    };
  }, []);*/

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
