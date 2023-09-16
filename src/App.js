import "./App.css";
import Routes from "./routes";
import { useRoutes } from "react-router-dom";
function App() {
  let element = useRoutes(Routes);
  return <div>  {element}</div>;
}

export default App;