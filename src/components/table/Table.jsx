import Row from "./../row/Row";
import BootstrapTable from "react-bootstrap/Table";
import "./Table.css";

function Table(props) {
  return (
    <>
      <BootstrapTable striped bordered responsive>
        <thead className="thead">
          <th>Id</th>
          <th>Films</th>
          <th>Short film</th>
          <th>Tv shows</th>
          <th>Video Games</th>
          <th>Park Attractions</th>
          <th>Allies</th>
          <th>Enemies</th>
          <th>Source Url</th>
          <th>Name</th>
          <th>Image Url</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Url</th>
        </thead>
        <tbody>
          {props.charactersDataResponse &&
            props.charactersDataResponse.data.map((element) => (
              <Row key={element._id} element={element} />
            ))}
        </tbody>
      </BootstrapTable>
    </>
  );
}

export default Table;
