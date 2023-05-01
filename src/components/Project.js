import { Button } from "react-bootstrap";
import { BoxArrowRight } from "react-bootstrap-icons";

function Project(props) {
  return (
    <tr>
      {/* <th scope="row">{props.rowNum}</th> */}
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>
        <Button href={props.link} width="100%" align="center">
          <BoxArrowRight />
        </Button>
      </td>
    </tr>
  );
}

export default Project;
