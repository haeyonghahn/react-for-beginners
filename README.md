# React-For-Beginners
## 목차
* **[The Basics of React](#the-basics-of-react)**
    * **[Before React](#before-react)**

## The Basics of React
### Before React
__vanilla.html__   
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
__react__   
`react` 를 사용하기 위해선 `react`와 `react-dom` 이 필요하다.
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