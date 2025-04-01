import { useTheme } from "./hooks/ThemeContext";

function Button({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return <button className={`btn btn-${theme}`}>{children}</button>;
}

export default Button;
