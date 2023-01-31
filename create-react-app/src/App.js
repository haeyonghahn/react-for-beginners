import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  /*
   * 처음 렌더링될 때 한 번만 실행
   * react가 지켜볼 것이 없으니 처음 한 번만 실행된다.
   */
  useEffect(() => {
    console.log("i run only once. ex) call the api...");
  }, []);
  /*
   * keyword 가 변화할 때만 실행
   * react가 지켜볼 것이 keyword 가 있다.
   * keyword 가 변화할 때 실행된다.
   */
  useEffect(() => {
    // 첫 렌더링될 때 실행되는 것을 방지하기 위한 keyword 조건
    if (keyword !== "" && keyword.length > 5) {
      console.log("i run when 'keyword' changes.", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.", counter);
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
