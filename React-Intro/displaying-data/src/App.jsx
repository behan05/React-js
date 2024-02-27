
// const userData = {
//   imageUrl : "https://avatars.githubusercontent.com/u/83676505?s=48&v=4"
// }


// function Profile() {
//   return (
//     <img 
//       className="avatar"
//       src={userData.imageUrl}
//     />
//   )
// }

// you can put more complex expession inside jSX curly braces.

const user = {
  name: "behan",
  imageUrl: "https://avatars.githubusercontent.com/u/83676505?s=48&v=4",
  imageSize: 300,
  borderBox: "1rem 1rem 1rem red"
};


function Profile() {
  return (
    <img
      src={user.imageUrl}
      alt={"photo of" + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize,
        boxShadow: user.borderBox,
      }}
    />
  )
}

export default function App() {

  const user = "behan";
  const message = `Hello ${user}`;

  return (
    <h1>
      {message}
      <Profile />
    </h1>
  )
}