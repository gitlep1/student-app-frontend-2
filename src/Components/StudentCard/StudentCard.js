import { useState } from "react";
import "./StudentCard.scss";
import { Button, Card, ListGroup } from "react-bootstrap";
import { nanoid } from "nanoid";
import { FaMinus, FaPlus } from "react-icons/fa";

const StudentCard = ({ student }) => {
  const [expanded, setExpanded] = useState(false);

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
          <br />

          {expanded && (
            <ListGroup className="StudentCard-grades">
              {grades.map((grade, index) => (
                <ListGroup.Item
                  key={nanoid()}
                  style={{
                    color: grade < 80 ? "red" : "green",
                  }}
                >
                  Test: {index + 1} {grade}%
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          <Button
            className="StudentCard-button"
            onClick={() => setExpanded(!expanded)}
            variant="dark"
          >
            {expanded ? <FaMinus /> : <FaPlus />}
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default StudentCard;
