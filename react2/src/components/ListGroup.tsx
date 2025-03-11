import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const localidades = [
    "Funchal",
    "Santa Cruz",
    "Rib Brava",
    "Calheta",
    "Porto Moniz",
  ];
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Titulo da lista</h1>
      <ul className="list-group">
        {localidades.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
