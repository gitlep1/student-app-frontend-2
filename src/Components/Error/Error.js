import "./Error.scss";

const Error = ({ error }) => {
  return (
    <section className="Error">
      There was an error: {error}
      <br />
      Please refresh the page or contact support.
    </section>
  );
};

export default Error;
