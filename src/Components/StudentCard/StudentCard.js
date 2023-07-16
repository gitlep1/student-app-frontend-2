import "./StudentCard.scss";
import { Card, ListGroup } from "react-bootstrap";

const StudentCard = ({ student }) => {
  const { city, company, email, firstName, grades, id, lastName, pic, skill } =
    student;

  const numericGrades = grades.map((grade) => Number(grade));

  let total = 0;

  for (const grade of numericGrades) {
    total += grade;
  }

  const average = total / numericGrades.length;

  return (
    <section className="StudentCard-container">
      <Card className="StudentCard-card">
        <Card.Img
          className="StudentCard-image"
          src={pic}
          alt={`${firstName} ${lastName}`}
        />
        <Card.Header className="StudentCard-header">
          <h3>
            {firstName} {lastName}
          </h3>
          <h4>{email}</h4>
        </Card.Header>
        <Card.Body className="StudentCard-body">
          <ListGroup className="StudentCard-info">
            <ListGroup.Item>City: {city}</ListGroup.Item>
            <ListGroup.Item>company: {company}</ListGroup.Item>
            <ListGroup.Item>skill: {skill}</ListGroup.Item>
            <ListGroup.Item>Average: {average}%</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </section>
  );
};

export default StudentCard;
