import logo from "./logo.svg";
import "./App.css";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";

function App({ hasMounted }) {
  const width = useWindowWidth();
  console.log(hasMounted);

  const hasMountedFromHooks = useHasMounted();

  return <div className="App">{width}</div>;
}

export default withHasMounted(App);
