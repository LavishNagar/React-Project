// const heading = React.createElement("h1", { id:"heading", class:"hello"}, "Hello World From JavaScript!")
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// Nested Element 

/* <div id="parent">
        <div id="child">
                <h1>I'm h1 tag</h1>
        </div>
</div> */

const parent = React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
                "div",
                {id:"child"},
                [React.createElement(
                        "h1",
                        {},
                        "I'm h1 tag")
                ,React.createElement("h2",
                 {id:"class"},
                  "I'm an h2 tag")] 
        )
); 
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

