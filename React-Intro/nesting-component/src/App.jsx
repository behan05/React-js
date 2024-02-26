import "./App.css"

// MyButton is a function component that returns a markup called JSX syntax.
// function component name always start with the capital letter.

function MyButton() {
  return <button>i'm a button!</button>
}


// export default keyword can specify the main component in the file.

export default function MyApp() {
  return (
    // empty wrapper is important because react component can not return multiple JSX tags so you have to wrap then with the empty tag.

    <>
      <p className="bgColor">Welcome to my App</p>

      {/* nesting MyButton component in MyApp component */}
      <MyButton />
    </>
  )
}