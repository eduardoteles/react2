import { useState } from "react";

interface ListGroupProps {
  localidades: string[];
  titulo: string;
  //signature function
  onSelectItem: (item: string) => void;
}

function checkEmptyArray(localidades: string[]) {
  if (localidades.length === 0) {
    return <h1>Lista vazia</h1>;
  }
}

function ListGroupAula4(props: ListGroupProps) {
  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      {checkEmptyArray(props.localidades)}
      <h1>{props.titulo}</h1>
      <ul className="list-group">
        {props.localidades.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroupAula4;
