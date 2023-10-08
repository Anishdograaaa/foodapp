// const heading = React.createElement("h1",{id:"heading",xyx:"abc"},"Hello World from React")

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},
    [React.createElement("h1",{id:"grandchild1"},"i am h1"),React.createElement("h2",{id:"grandchild2"},"i am h2")]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{id:"grandchild11"},"i am h1"),React.createElement("h2",{id:"grandchild22"},"i am h2")])
]);
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(parent); //object
root.render(parent)