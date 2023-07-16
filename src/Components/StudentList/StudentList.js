import "./StudentList.scss";
import { Card } from "react-bootstrap";
import { nanoid } from "nanoid";
import StudentCard from "../StudentCard/StudentCard";

const StudentList = ({ studentData }) => {
  return (
    <section className="StudentList-Container">
      <h2>StudentList</h2>
      {studentData.map((student) => {
        return <StudentCard key={nanoid()} student={student} />;
      })}
    </section>
  );
};

export default StudentList;
