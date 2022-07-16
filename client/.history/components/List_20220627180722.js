import { Table, Button } from "reactstrap";
import toDate from "../lib/toDate";
import PaginationApp from "./PaginationApp";

function List(props) {
  const data = props.data;
  const query = props.query;
  var dataFiltered = [];

  if (data && data.length) {
    dataFiltered = data.filter((doc) =>
      doc.attributes.texto.toLowerCase().includes(query)
    );
  }

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Documento</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((doc) => (
            <tr key={doc.id}>
              <th scope="row">{doc.id}</th>
              <td>{doc.attributes.texto}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default List;
