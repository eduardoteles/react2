import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

const localidades = [
  "Funchal",
  "Santa Cruz",
  "Rib Brava",
  "Calheta",
  "Porto Moniz",
];
const getMessage = () => {
  return localidades.length === 0 ? <p>No item found</p> : null;
};

//Event handler
const handleClick = (event: MouseEvent) => console.log(event);

function ListGroup() {
  //Add conditional rendering
  // if (localidades.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>The list is empty</p>
  //     </>
  //   );

  return (
    <>
      <h1>Titulo da lista</h1>
      {getMessage()}
      {getMessage()}
      <ul className="list-group">
        {localidades.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
