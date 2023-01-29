# React-For-Beginners
## 목차
* **[The Basics of React](#the-basics-of-react)**
    * **[Before React](#before-react)**

## The Basics of React
### Before React
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
