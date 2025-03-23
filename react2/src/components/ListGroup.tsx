import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface ListGroupProps {
  cities: string[];
  title: string;
  //Signature function
  //(item: string) => void;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{props.title}</h1>
      <ul className="list-group">
        {props.cities.map((item, index) => (
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
export default ListGroup;
