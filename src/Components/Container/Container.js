import "./Container.scss";

const Container = ({ center, children, scroll = true }) => {
  let classNames = ["Container"];

  if (center) {
    classNames.push("Container--center");
  }

  if (scroll) {
    classNames.push("Container--scroll");
  }

  return <section className={classNames.join(" ")}>{children}</section>;
};

export default Container;
