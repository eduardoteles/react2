import { useTheme } from "./hooks/ThemeContext";

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Panel;
