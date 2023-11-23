import { Outlet } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";

const author = "Anna Kikut";

function App() {
  return (
    <Container fluid>
      <header></header>
      <main>
        <h1 className="header">Disney App</h1>
        <Outlet />
      </main>
      <footer>
        <span>Create by {author}</span>
      </footer>
    </Container>
  );
}

export default App;
