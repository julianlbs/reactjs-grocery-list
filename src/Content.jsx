// import { useState } from "react";

// const Content = () => {
//   const [name, setName] = useState("Dave");
//   const [count, setCount] = useState(0);

//   const handleNameChange = () => {
//     const names = ["Bob", "Kevin", "Dave"];
//     const int = Math.floor(Math.random() * 3);
//     setName(names[int]);
//   };

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log(count);
//   };

//   const handleClick2 = (name) => {
//     console.log(`${name} was clicked `);
//   };

//   const handleClick3 = (e) => {
//     console.log(e.target.innerText);
//   };

//   return (
//     <main>
//       <p onDoubleClick={handleClick} style={{ marginBottom: "30px" }}>
//         Hello {name}!
//       </p>
//       <button onClick={handleNameChange}>Change Name</button>
//       <button onClick={handleClick}>Click It</button>
//       <button onClick={(e) => handleClick3(e)}>Click It</button>
//     </main>
//   );
// };

// export default Content;

// LISTS AND KEYS

import ItemList from "./ItemList";
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </>
  );
};

export default Content;
