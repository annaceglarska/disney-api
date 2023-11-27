import { Outlet } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";

const author = "Anna Kikut";

function App() {
  return (
    <Container fluid>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <span>Create by {author}</span>
      </footer>
    </Container>
  );
}

export default App;
