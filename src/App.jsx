import { Outlet } from "react-router-dom";
import "./App.css";

const author = "Anna Kikut";

function App() {
  return (
    <>
      <header></header>
      <main>
        <h1 className="header">Disney App</h1>
        <Outlet />
      </main>
      <footer>
        <span>Create by {author}</span>
      </footer>
    </>
  );
}

export default App;
