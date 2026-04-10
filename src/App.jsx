import Home from "./pages/Home";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();
  return <Home />;
}

export default App;
