# React-For-Beginners
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
