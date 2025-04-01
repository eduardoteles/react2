//import Message from "./Message";
//import ListGroup from "./components/ListGroup";
//import ListGroup2 from "./components/ListGroup2";
import ListGroupAula4 from "./components/ListGroupAula4";
import Alert from "./components/Alert";
import RefHook from "./components/hooks/RefHook";
import Form from "./components/Form";
import { ThemeContext } from "./components/hooks/ThemeContext";

const localidadesArray = [
  "Funchal",
  "Santa Cruz",
  "Rib Brava",
  "Calheta",
  "Porto Moniz",
];

//Handler function
const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroupAula4
        localidades={localidadesArray}
        titulo="Lista de cidades"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        <h1>Alerta</h1>
        <p>Este é um alerta</p>
      </Alert>

      {/*  Hooks examples */}
      {/*  Reference hook */}
      <RefHook />
      {/*  Context hook */}
      <ThemeContext.Provider value="light">
        <Form />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
