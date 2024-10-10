/*

<div id ='parent'>
    <div id='child'>
        <h1>Ramji</h1>
        <h2>Sitaji</h2>
    </div>
</div>

 */

const heading = React.createElement("h1", {}, "Ramji");
const headingTwo = React.createElement("h2",{} , 'Sitaji')
const child = React.createElement("div", { id: "child" }, [heading , headingTwo]);
const parent = React.createElement("div", { id: "parent" }, child);

// JSX

console.log(parent);

// const newElement = React.createElement(
//   "h1",
//   { id: "rootElement", className: "rootgi" },
//   "Hello World from React!",
// );
// console.log(newElement); // this will print an object
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(parent);
