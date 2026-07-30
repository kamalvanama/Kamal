

function GlobalState() {
  const { theme } = useContext(ThemeContext);

  return <h2>Current Theme: {theme}</h2>;
}

export default GlobalState;