import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

const localidades = [
  "Funchal",
  "Santa Cruz",
  "Rib Brava",
  "Calheta",
  "Porto Moniz",
];

//localidades = [];

const validateArray = () => {
  return localidades.length === 0 ? <h1>Array vazio</h1> : null;
};

const getMessage = (param) => {
  console.log(param);
};

function ListGroup() {
  //Add conditional rendering
  //if (localidades.length === 0) return <h1>O array está vazio</h1>;
  //return localidades.length === 0 ? <h1>Array vazio</h1> : null;

  return (
    <>
      <h1>Titulo da lista</h1>
      {validateArray()}
      <ul className="list-group">
        {localidades.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => getMessage("teste")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
