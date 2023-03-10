# React-For-Beginners
해당 문서 출처는 [ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners) 토대로 작성되었습니다.
## 목차
* **[The Basics of React](#the-basics-of-react)**
   * **[Before React](#before-react)**
   * **[Our First React Element](#Our-First-React-Element)**
   * **[Events in React](#events-in-react)**
   * **[JSX](#jsx)**
      * **[Babel](#Babel)**
      * **[JSX part Two](#jsx-part-two)**
* **[STATE](#state)**
   * **[Understanding State](#understanding-state)**
      * **[setState part One](#setstate-part-one)**
      * **[setState part Two](#setstate-part-two)**
   * **[State Functions](#state-functions)**
      * **[Inputs and State](#inputs-and-state)**
      * **[State Practice part One](#state-practice-part-one)**
      * **[State Practice part Two](#state-practice-part-two)**
      * **[Final Practice and Recap](#final-practice-and-recap)**
* **[PROPS](#props)**
   * **[props](#props-1)**
   * **[Memo(Memorize)](#memomemorize)**
   * **[Prop Types](#prop-types)**
* **[CREATE REACT APP](#create-react-app)**
   * **[Introduction](#introduction)**
   * **[Tour of CRA](#tour-of-cra)**
* **[EFFECTS](#effects)**
   * **[Introduction](#introduction-1)**
   * **[useEffect](#useeffect)**
   * **[useEffect를 더 깊게 알아보기](#useeffect를-더-깊게-알아보기)**
   * **[Cleanup function](#cleanup-function)**
* **[PRACTICE MOVIE APP](#practice-movie-app)**
   * **[To Do List part One](#to-do-list-part-one)**
   * **[To Do List part Two](#to-do-list-part-two)**
   * **[Coin Tracker](#coin-tracker)**
   * **[Movie App part One](#movie-app-part-one)**
   * **[Movie App part Two](#movie-app-part-two)**
   * **[React Router](#react-router)**
   * **[Parameters](#parameters)**
   * **[Styles](#styles)**

## The Basics of React
### Before React
__Vanilla__    
HTML을 먼저 만들고 JavaScript로 가져와서 HTML을 수정하는 방식이다.
```javascript
<html lang="en"> 
    <body>
        <span>Total clicks: 0</span>
        <button id="btn">Click me</button>
    </body>
    <script>
        let counter = 0;
        const button = document.getElementById("btn");
        const span = document.querySelector("span");
        function handleClick() {
            counter = counter + 1;
            span.innerText = `Total clicks: ${counter}`;
        }
        button.addEventListener("click", handleClick);
    </script>
</html>
```
__React JS__   
React JS에서는 모든 것이 JavaScript로 시작해서 HTML이 되는 방식이다.

`react` 를 사용하기 위해선 `react`와 `react-dom` 이 필요하다.   
- `react` : 어플리케이션이 아주 인터랙티브하도록 만들어주는 library. 엔진과 같다.
- `react-dom` : library 또는 package. 모든 react element들을 HTML body에 둘 수 있도록 해준다. 
- `ReactDOM.render()` : render의 의미는 react element를 가지고 HTML로 만들어 배치한다는 것. 즉, 사용자에게 보여준다는 의미이다.
`ReactDOM.render(span, span이 가야할 위치)` -> 그래서 보통 body에 id=“root” 만들어서 span을 root 안에 두라고 한다.
```javascript
<!DOCTYPE html>
<html lang="en">
    <body>
    </body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script>
    </script>
</html>
```
![image](https://user-images.githubusercontent.com/31242766/215322657-8304c212-8c89-476f-b00c-e2b87e42d546.png)

### Our First React Element
```javascript
<!DOCTYPE html>
<html lang="en">
    <body>
      <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script>
      const root = document.getElementById("root");
      const span = React.createElement(
        "span", 
        { id: "sexy-span", style: { color: "red" } },
        "Hello I'm a span"
      );
      ReactDOM.render(span, root);
    </script>
</html>
```

### Events in React
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script>
    const root = document.getElementById("root");
    const h3 = React.createElement(
      "h3",
      {
        id: "title",
        onMouseEnter: () => console.log("mouse enter"),
        style: {
          backgroundColor: "tomato",
        },
      },
      "Hello I'm a span"
    );
    const btn = React.createElement(
      "button",
      {
        onClick: () => console.log("i'm clicked"),
      },
      "Click me"
    );
    const container = React.createElement("div", null, [h3, btn]);
    ReactDOM.render(container, root);
  </script>
</html>
```

### JSX
JSX는 JavaScript를 확장한 문법이다.
```javascript
const Title = (
   <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
     "Hello I'm a title"
   </h3>
 );
```
#### Babel
https://babeljs.io/   
JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔주는 것이다.   
![image](https://user-images.githubusercontent.com/31242766/215336840-ea8355c6-c6de-4b0a-95e9-13af0db4b25d.png)   
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    const Title = (
      <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
        "Hello I'm a title"
      </h3>
    );
    const Button = (
      <button
        style={{
          backgroundColor: "tomato",
        }}
        onClick={() => console.log("i'm clicked")}
      >
        Click me
      </button>
    );
    const container = React.createElement("div", null, [Title, Button]);
    ReactDOM.render(container, root);
  </script>
</html>
```

#### JSX part Two
컴포넌트의 첫 글자는 반드시 대문자여야 한다.
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function Title() {
      return (
        <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
          "Hello I'm a title"
        </h3>
      );
    }
    const Button = () => (
      <button
        style={{
          backgroundColor: "tomato",
        }}
        onClick={() => console.log("i'm clicked")}
      >
        Click me
      </button>
    );
    const Container = () => (
      <div>
        <Title />
        <Button />
      </div>
    );
    ReactDOM.render(<Container />, root);
  </script>
</html>
```

## STATE
### Understanding State
ReactJS는 이전에 렌더링된 컴포넌트가 어떤 것인지 확인하고 다른 부분만 파악한다. `Total clicks`을 다시 생성할 필요가 없고 `button` 도 다시 생성할 필요가 없다. 오로지 바뀐 부분만 업데이트 해준다. 즉, 인터렉티브한 어플을 만들 수 있다는 의미이다. 여러가지 요소들을 리렌더링하려고 해도 전부 다 새로 생성되진 않을 것이다. 오로지 바뀐 부분만 생성된다.
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    let counter = 10;
    function countUp() {
      counter = counter + 1;
      render();
    }
    function render() {
      ReactDOM.render(<Container />, root);
    }
    const Container = () => (
      <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick={countUp}>Click me</button>
      </div>
    );
    ReactDOM.render(<Container />, root);
  </script>
</html>
```

#### setState part One
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function App() {
      const [counter, modifier] = React.useState(0); // [0, f]
      return (
        <div>
          <h3>Total clicks: {counter}</h3>
          <button>Click me</button>
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```

#### setState part Two
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function App() {
      const [counter, setCounter] = React.useState(0); // [0, f]
      const onClick = () => {
        setCounter(counter + 1);
      };
      return (
        <div>
          <h3>Total clicks: {counter}</h3>
          <button onClick={onClick}>Click me</button>
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```

### State Functions
state 를 바꾸는 두 가지 방법   
1. setCounter(값)
2. setCounter(이전 값을 이용하여, 값을 변경)하는 방법
이 괄호 안에는 함수가 들어갈 수도 있는데, 이 함수 안에서 current가 현재의 counter임이 보장되고, current+1을 함으로서, 외부에서 counter의 값이 변경되더라도 이 함수 안에서 값은 안전하게 반환될 수 있게 한다.   
```javascript
const onClick = () => {
  // setCounter(counter + 1);
  setCounter((current) => current + 1);
};
```

#### Inputs and State
ReactJS 에서 `input` 은 `uncontrolled` 이다.
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function App() {
      const [minutes, setMinutes] = React.useState(0); // [0, f]
      const onChange = (event) => {
        setMinutes(event.target.value);
      };
      return (
        <div>
          <h1 className="hi">Super Converter</h1>
          <label htmlFor="minutes">Minutes</label>
          <input
            value={minutes}
            id="minutes"
            placeholder="Minutes"
            type="number"
            onChange={onChange}
          />
          <label htmlFor="hours">Hours</label>
          <input id="hours" placeholder="Hours" type="number" />
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```

### State Practice part One
`minutes` 값을 이용해서 `hours` 값을 셋팅해보자.
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function App() {
      const [minutes, setMinutes] = React.useState(0); // [0, f]
      const onChange = (event) => {
        setMinutes(event.target.value);
      };
      const reset = () => setMinutes(0);
      return (
        <div>
          <h1 className="hi">Super Converter</h1>
          <div>
            <label htmlFor="minutes">Minutes</label>
            <input
              value={minutes}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="hours">Hours</label>
            <input
              value={Math.round(minutes / 60)}
              id="hours"
              placeholder="Hours"
              type="number"
              disabled
            />
          </div>
          <button onClick={reset}>Reset</button>
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```

### State Practice part Two
`minutes` 을 사용하면 `hours` 를 사용불가하게 만들고 `hours` 를 사용하면 `minutes` 을 사용불가하게 하는 `flip` 함수를 만들어보자.
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function App() {
      const [amount, setAmount] = React.useState(0); // [0, f]
      const [fliped, setFliped] = React.useState(false); // [0, f]
      const onChange = (event) => {
        setAmount(event.target.value);
      };
      const reset = () => setAmount(0);
      const onFlip = () => {
        reset();
        setFliped((current) => !current);
      };
      return (
        <div>
          <h1 className="hi">Super Converter</h1>
          <div>
            <label htmlFor="minutes">Minutes</label>
            <input
              value={fliped ? amount * 60 : amount}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
              disabled={fliped === true}
            />
          </div>
          <div>
            <label htmlFor="hours">Hours</label>
            <input
              value={fliped ? amount : Math.round(amount / 60)}
              id="hours"
              placeholder="Hours"
              type="number"
              onChange={onChange}
              disabled={fliped === false}
            />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onFlip}>Flip</button>
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```

### Final Practice and Recap
드롭다운리스트를 추가하여 `Minutes -> Hours` 로 바꾸는 것 외에 `Km -> Miles` 로 바꾸는 것을 만들어보자.
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function MinutesToHours() {
      const [amount, setAmount] = React.useState(0); // [0, f]
      const [fliped, setFliped] = React.useState(false); // [0, f]
      const onChange = (event) => {
        setAmount(event.target.value);
      };
      const reset = () => setAmount(0);
      const onFlip = () => {
        reset();
        setFliped((current) => !current);
      };
      return (
        <div>
          <div>
            <label htmlFor="minutes">Minutes</label>
            <input
              value={fliped ? amount * 60 : amount}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
              disabled={fliped === true}
            />
          </div>
          <div>
            <label htmlFor="hours">Hours</label>
            <input
              value={fliped ? amount : Math.round(amount / 60)}
              id="hours"
              placeholder="Hours"
              type="number"
              onChange={onChange}
              disabled={fliped === false}
            />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onFlip}>{fliped ? "Turn back" : "fliped"}</button>
        </div>
      );
    }
    function KmToMiles() {
      return <h3>KM 2 M</h3>;
    }
    function App() {
      const [index, setIndex] = React.useState("xx");
      const onSelect = (event) => {
        setIndex(event.target.value);
      };
      console.log("render w/", index);
      return (
        <div>
          <h1>Super Converter</h1>
          <select value={index} onChange={onSelect}>
            <option value="xx">Select your units</option>
            <option value="0">Minutes & Hours</option>
            <option value="1">Km & Miles</option>
          </select>
          <hr />
          {index === "0" ? <MinutesToHours /> : null}
          {index === "1" ? <KmToMiles /> : null}
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```

## PROPS
### Props
`Pros` 는 일종의 방식이다. 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있는 방식이다. `Pros` 는 첫번째 인자이자 유일한 인자이다.
```java
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    //function Btn(props) {
    function Btn({ text, big }) {
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize: big ? 18 : 16,
          }}
        >
          {text}
        </button>
      );
    }
    function App() {
      return (
        <div>
          {/*Btn({banana: "save changes", x: false})*/}
          <Btn text="Save Changes" big={true} />
          <Btn text="Continue" />
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```

### Memo(Memorize)
`App` 컴포넌트의 state 값인 `value` 값이 변경되면서 App 하위 컴포넌트인 `Continue` 컴포넌트까지 다시 `re-render` 된다. 하지만 `Continue`는 변경된 사항이 없기 때문에 변하지 않도록 하는 것이 최적화 성능에 좋다. 그래서 우리는 `props`, `Memo` 를 통해 컴포넌트가 다시 그릴지 어떨지 결정할 수 있다. 아래의 소스에서 `App` 컴포넌트의 state 값인 `value` 는 첫번째 `Btn` 에 전달되지만 두번째 `Btn` 엔 전달되지 않는다. 그렇다면 첫번째 `Btn` 만 `re-render` 되도록 하고 두번째 `Btn`은 안되도록 하자.
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    //function Btn(props) {
    function Btn({ text, changeValue }) {
      console.log(text, "was rendered");
      return (
        <button
          onClick={changeValue}
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize: 16,
          }}
        >
          {text}
        </button>
      );
    }
    const MemorizedBtn = React.memo(Btn);
    function App() {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");
      return (
        <div>
          {/*<Btn text={value} changeValue={changeValue} />
          <Btn text="Continue" />*/}
          <MemorizedBtn text={value} changeValue={changeValue} />
          <MemorizedBtn text="Continue" />
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```
1. `render` 시    
![image](https://user-images.githubusercontent.com/31242766/215431148-f99df5d0-42ee-453e-a9a5-c7a3f36a5f67.png)   
2. 첫번째 버튼 클릭 후 `re-render`   
![image](https://user-images.githubusercontent.com/31242766/215431319-278fd2a5-4b1f-4934-a1bf-9099e232ee3c.png)

### Prop Types
```javascript
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    //function Btn(props) {
    function Btn({ text, fontSize }) {
      console.log(text, "was rendered");
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize,
          }}
        >
          {text}
        </button>
      );
    }
    Btn.propTypes = {
      text: PropTypes.string.isRequired,
      fontSize: PropTypes.number.isRequired,
    };
    function App() {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");
      return (
        <div>
          <Btn text={value} fontSize={18} />
          <Btn text={14} fontSize={"Continue"} />
        </div>
      );
    }
    ReactDOM.render(<App />, root);
  </script>
</html>
```
![image](https://user-images.githubusercontent.com/31242766/215494779-1c948e7b-8a88-4b0d-91b5-8d1ccfceaf50.png)

## CREATE REACT APP
### Introduction
```shell
npx create-react-app 프로젝트명
```
https://github.com/haeyonghahn/react-for-beginners/tree/master/create-react-app

### Tour of CRA
__library__   
```shell
npm i prop-type
```
__project structure__   
https://unicode-table.com/kr/blocks/box-drawing/   
https://emojipedia.org/package/    
https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md   
```
📦 create-react-app
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 App.module.css
 ┃ ┣ 📜 Button.js
 ┃ ┣ 📜 Button.module.css
 ┣ 📜 package-lock.json
 ┗ 📜 package.json
```
__App.js__   
```javascript
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
```
__App.module.css__   
```javascript
.title {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
}
```
__Button.js__   
```javascript
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
```
__Button.module.css__   
```css
.btn {
  color: white;
  background-color: tomato;
}
```

## EFFECTS
### Introduction
컴포넌트가 처음 `render`될 때만 코드가 실행되길 원할 수가 있다. 첫번째 `reander` 에만 코드가 실행되고 다른 `state` 변화에는 실행되지 않도록 하길 원할 수도 있다. 예를 들어, API를 통해 데이터를 가져올 때 첫번째 `컴포넌트 render` 에서 API 를 call 하고 이후에 `state` 가 변화할 때 API에서 또 다시 가져오고 싶지 않을 것이다. 이러한 경우에 `useEffect` 를 사용한다.   

__API를 통해 데이터를 가져올 때__   
아래의 코드의 경우 `state` 가 변할 때마다 `컴포넌트 render`되면서 API를 호출하게 될 것이다.
```javascript
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
```

> 참고 : 첫 렌더링 시 `render` 가 두 번씩 찍히는 현상은 `index.js` 에서 `React.StrictMode` 때문이다. `StrictMode` 는 `create-react-app` 설치하면 기본적으로 생성되어 있는 태그인데 해당 태그로 감싸져 있는 경우에는 코드의 문제를 감지하고 경고하기 위해서 구성 요소를 두 번 렌더링한다.   

__index.js__   
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
![image](https://user-images.githubusercontent.com/31242766/215640721-82d4b4d7-0128-4eb8-90d9-0d8361be2c37.png)

### useEffect
- 첫번째 인자 : argument
- 두번째 인자 : dependency(의존성) 
```javascript
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("call the api...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
```
![image](https://user-images.githubusercontent.com/31242766/215647655-6f0a4979-07ce-452b-adb7-20d0b237c0cb.png)

> 참고 : useMemo vs useEffect   
`useMemo` 의 경우 `생성` 함수에 관련된 기능이다. 생성자 함수가 고비용(처리 시간이 오래 걸리는 등)인 경우 렌더링마다 계산하는 것은 처리 시간이 오래 걸리므로 값을 기억해놓고 의존성이 변경되었을 경우에만 다시 계산해주는 기능이다. `useEffect` 의 경우는 api 호출, 타이머 등 렌더링 과정에서 한 번만 호출해도 될 기능이 렌더링마다 실행되거나 호출 과정에서 렌더링에 영향을 끼칠 수 있는 것을 모아서 따로 처리하기 위한 기능이다.
>
> 둘의 결정적인 차이는 `useEffect` 는 컴포넌트의 렌더링이 완료된 후에 실행되지만 `useMemo` 는 렌더링 중에 실행되는 차이가 있다.   

### useEffect를 더 깊게 알아보기
해당 목차에서는 아래 코드를 예시로 `search keyword` 에 변화가 있을 때만 검색하도록 하고 것이고 `counter` 가 변화할 때에는 검색하지 않도록 하고 싶은 것이다. 해당 부분을 특정한 부분만 변화했을 때 원하는 코드를 실행할 수 있는 방법을 배워보자. 즉, `keyword state` 가 변화했을 때만 사용자가 원하는 것을 검색할 수 있도록 해보자.
```javascript
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
```

### Cleanup function
컴포넌트가 `destroy` 될 때(`showing === false`) 무엇인가 할 수 있도록 하는 것이다. 예를 들어, 컴포넌트가 `destroy` 될 때 어떤 분석 결과를 보내고 싶어할 수도 있다. 중요한 건 컴포넌트가 `create` 됐는지 `destroy` 됐는지 알 수 있다는 것이다. react 앱을 만들 때에는 주로 `destroyedFn` 이 필요하진 않다.
```javascript
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
```

## PRACTICE MOVIE APP
### To Do List part One
수정하는 함수를 사용할 때 두가지 옵션이 있다.   
1. 단순히 값만 보내는 방식 
```javascript
setToDo("");
```
2. 단순히 값만 보내는 것이 아니라 함수를 보내는 방식이다.
```javascript
setToDos((currentArray) => [toDo, ...currentArray]);
```
```javascript
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
```

### To Do List part Two
이번 내용에서는 array(`toDos`) 로부터 동일한 컴포넌트에 있는 많은 것들을 `render` 할 수 있는 방법을 알아 보자. 다시 말하면,   
![image](https://user-images.githubusercontent.com/31242766/215973178-cd2f772e-f088-4057-b3f6-e5256bee78b0.png)   
배열에 있는 요소를 각각의 컴포넌트로 만드는 작업을 해보자.

> 참고 : 컴포넌트의 리스트를 `render` 할 때에는 `key` 라는 prop 을 넣어주어야 한다. 그리고 `key` 는 유일해야 한다.

```javascript
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
```

### Coin Tracker
```javascript
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Conins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loding...</strong>
      ) : (
        <select>
          {coins.map((coin, index) => (
            <option>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
```

### Movie App part One
```javascript
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <strong>Loding...</strong>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
```

### Movie App part Two
`Movie App part Two` 는 `Movie App part One` 의 연장선이다.   

__project structure__   
```
📦 create-react-app
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Movie.js
 ┃ ┃ ┗ 📜 Movie.module.css
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📜 Detail.js
 ┃ ┃ ┣ 📜 Home.js
 ┃ ┃ ┗ 📜 Home.module.css
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 App.module.css
 ┃ ┣ 📜 index.js
 ┃ ┗ 📜 styles.css
 ┣ 📜 package-lock.json
 ┗ 📜 package.json
```
__Movie.js__   
```javascript
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```
__Movie.module.css__   
```css
.movie {
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
}

.movie__img {
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

.movie__title,
.movie__year {
  margin: 0;
  font-weight: 300;
  text-decoration: none;
}

.movie__title a {
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
  text-decoration: none;
}

.movie__genres {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
}

.movie__genres li,
.movie__year {
  margin-right: 10px;
  font-size: 14px;
}
```
__Detail.js__   
```javascript
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
```
__Home.js__   
```javascript
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
```
__Home.module.css__    
```javascript
.container {
  height: 100%;
  display: flex;
  justify-content: center;
}

.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}

.movies {
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
}

@media screen and (max-width: 1090px) {
  .movies {
    grid-template-columns: 1fr;
    width: 100%;
  }
}
```
__App.js__   
```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "movie/:id",
    element: <Detail />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
```
__App.module.css__   
```javascript
.title {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
}
```
__index.js__   
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
```
__styles.css__   
```javascript
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #eff3f7;
  height: 100%;
}
```

### React Router
__React Router 버전 : 6.8.0__
```console
npm i react-router-dom
```
__하이퍼링크의 문제__   
화면 전체가 재실행된다. React Router 에서 제공하는 `<Link />` 를 사용하자.
```javascript
<a href="/movie">{title}</a>
```
__Movie.js__   
```javascript
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```
__App.js__   
```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "movie",
    element: <Detail />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
```

### Parameters
`Parameters` 는 `Movie App part Two` 와 `React Router` 의 연장선이다.
```javascript
<Link to={`/movie/${id}`}>{title}</Link>
```
```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "movie/:id",
    element: <Detail />,
  },
]);
```
__useParams__   
```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "movie/:id",
    element: <Detail />,
  },
]);
```
```javascript
<Link to={`/movie/${id}`}>{title}</Link>
```
```javascript
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
```

### Styles
__Home.module.css__   
```css
.container {
  height: 100%;
  display: flex;
  justify-content: center;
}

.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}

.movies {
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
}

@media screen and (max-width: 1090px) {
  .movies {
    grid-template-columns: 1fr;
    width: 100%;
  }
}
```
__Home.js__   
```javascript
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
```
