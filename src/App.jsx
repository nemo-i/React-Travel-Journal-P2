import data from "../public/data.js";
import Card from "./components/Card.jsx";
import NavBar from "./components/Navbar.jsx";
export default function App() {
  let cards = data.map((e) => {
    return <Card {...e} key={e.description} />;
  });
  return (
    <div className="main-app">
      <NavBar />
      {cards}
    </div>
  );
}
