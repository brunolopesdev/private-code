import CourseInfo from "./components/CourseInfo";
import Header from "./components/Header";
import Home from "./components/Home";
import Info from "./components/Info";
import Plans from "./components/Plans";
import { Reviews } from "./components/Reviews";
import "./styles/globals.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Info />
      <CourseInfo />
      <Plans />
      <Reviews />
    </div>
  );
}

export default App;
