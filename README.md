# React-For-Beginners
## 목차
* **[The Basics of React](#the-basics-of-react)**
    * **[Before React](#before-react)**
    * **[Our First React Element](#Our-First-React-Element)**
    * **[Events in React](#events-in-react)**

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
