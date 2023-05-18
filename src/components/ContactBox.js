import "./ContactBox.css";

function ContactBox(props) {
  return (
    <div className="rowflex col-sm-3 text-center">
      <a className="d-block" href={props.href}>
        {props.icon}
        <br />
        {props.title}
      </a>
    </div>
  );
}

export default ContactBox;
