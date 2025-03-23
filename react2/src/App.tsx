//import Message from "./Message";
//import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const localidades = [
    "Funchal",
    "Santa Cruz",
    "Rib Brava",
    "Calheta",
    "Porto Moniz",
  ];

  //Handler for selection event
  const handleSelectItem = (item: string) => {console.log(item)};

  return (
    <div>
      <ListGroup cities={localidades} title="Cidades" onSelectItem={handleSelectItem}/>
      <Alert text="Hello alert world"/>
    </div>
  );
}

export default App;
