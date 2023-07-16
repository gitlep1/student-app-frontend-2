import "./StudentCard.scss";
import { Card } from "react-bootstrap";
import { nanoid } from "nanoid";

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
    <Card>
      <Card.Header>
        <Card.Img
          className="student-image"
          src={pic}
          alt={`${firstName} ${lastName}`}
        />
        <h3>
          {id}: {firstName} {lastName}
        </h3>
        <h4>{email}</h4>
      </Card.Header>
      <Card.Body>
        <ul>
          <li>City: {city}</li>
          <li>company: {company}</li>
          <li>skill: {skill}</li>
          <li>Average: {average}%</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
