import "./Container.scss";

const Container = ({ center, children }) => {
  let classNames = ["Container"];

  if (center) {
    classNames.push("Container--center");
  }

  return <section className={classNames.join(" ")}>{children}</section>;
};

export default Container;
