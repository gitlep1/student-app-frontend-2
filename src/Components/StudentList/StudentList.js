import "./StudentList.scss";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "react-bootstrap";

import StudentCard from "../StudentCard/StudentCard";

const StudentList = ({ studentData }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let dataToDisplay = studentData;
  if (search) {
    dataToDisplay = studentData.filter((student) => {
      const { firstName, lastName } = student;

      const fullName = `${firstName} ${lastName}`.toLowerCase();

      return fullName.includes(search.toLowerCase());
    });
  } else {
    dataToDisplay = studentData;
  }

  const renderContent = () => {
    if (dataToDisplay.length === 0) {
      return (
        <div className={contentClassName}>No results found for {search}</div>
      );
    } else {
      return (
        <div className={contentClassName}>
          {dataToDisplay.map((student) => (
            <StudentCard key={nanoid()} student={student} />
          ))}
        </div>
      );
    }
  };

  let contentClassName = "StudentList_content";

  if (dataToDisplay.length === 0) {
    contentClassName += " StudentList_content--center";
  }

  return (
    <section className="StudentList-container">
      <Form>
        <Form.Control
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleChange}
          className="StudentList_input"
        />
      </Form>
      <br />

      {renderContent()}
    </section>
  );
};

export default StudentList;
