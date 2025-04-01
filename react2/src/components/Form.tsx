import Panel from "./Panel";
import Button from "./Button";
import { useTheme } from "./hooks/ThemeContext";

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

export default Form;
