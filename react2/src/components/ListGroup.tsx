import { Fragment } from "react/jsx-runtime";

const localidades = [
  "Funchal",
  "Santa Cruz",
  "Rib Brava",
  "Calheta",
  "Porto Moniz",
];

function ListGroup() {
  return (
    <>
      <h1>Titulo da lista</h1>
      <ul className="list-group">
        {localidades.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
