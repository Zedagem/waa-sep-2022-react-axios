export default function (props) {
  return (
    <div>
      <img
        className="mb-4"
        src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">{props.text}</h1>
    </div>
  );
}
