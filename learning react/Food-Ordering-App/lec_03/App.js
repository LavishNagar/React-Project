import React from "react";
import  ReactDOM  from "react-dom/client";
const parent = React.createElement("div",{id: "parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "This is the beauty of the world"),
        React.createElement("h1", {}, "Hello To Every One Myname Is Aditya Pandey")
    ]),
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "Currently I Try to Learn React.js by Namaste React"),
        React.createElement("h1", {}, "This is the beauty of the world")
    ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);