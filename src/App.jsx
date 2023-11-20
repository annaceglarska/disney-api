import "./App.css";
import Table from "./components/table/Table";

const author = "Anna Kikut";

function App() {

  return (
    <>
      <header></header>
      <main>
        <h1>Disney App</h1>
        <Table /> 
      </main>
      <footer>
        <span>Create by {author}</span>
      </footer>
    </>
  );
}

export default App;
