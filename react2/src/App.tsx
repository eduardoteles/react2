//import Message from "./Message";
//import ListGroup from "./components/ListGroup";
import ListGroup2 from "./components/ListGroup2";

function App() {
  const localidades = [
    "Funchal",
    "Santa Cruz",
    "Rib Brava",
    "Calheta",
    "Porto Moniz",
  ];
  return (
    <div>
      <ListGroup2 cities={localidades} title="Cidades" />
    </div>
  );
}

export default App;
