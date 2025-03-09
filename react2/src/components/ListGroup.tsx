import { Fragment } from "react/jsx-runtime";

const localidades = [
  "Funchal",
  "Santa Cruz",
  "Rib Brava",
  "Calheta",
  "Porto Moniz",
];

const getMessage = () => {
  return localidades.length === 0 ? <p> List is empty </p> : null;
};

function ListGroup() {
  return (
    <>
      <h1>Titulo da lista</h1>
      {getMessage()}
      <ul className="list-group">
        {localidades.map((item) => (
          //As completxity grows, move logic to separate function
          <li className="list-group-item" key={item} onClick={(event) => console.log(event)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
