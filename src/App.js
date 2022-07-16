import logo from "./logo.svg";
import "./App.css";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";
import ExampleReducer from "./ExampleReducer";
import ExampleMemo from "./hooks/ExampleMemo";
import ExampleRef from "./hooks/ExampleRef";

function App({ hasMounted }) {
  const width = useWindowWidth();
  // console.log(hasMounted);

  const hasMountedFromHooks = useHasMounted();

  return (
    <div className="App">
      <ExampleReducer />
      <ExampleMemo />
      <ExampleRef />
    </div>
  );
}

export default withHasMounted(App);
