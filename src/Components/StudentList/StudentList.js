import "./StudentList.scss";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Button, Form } from "react-bootstrap";

import StudentCard from "../StudentCard/StudentCard";

const StudentList = ({ studentData }) => {
  const [search, setSearch] = useState("");

  const [expanded, setExpanded] = useState([]);

  const [expandedAll, setExpandedAll] = useState(false);

  const handleToggleExpanded = (id) => {
    if (!expanded.includes(id)) {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  };

  const handleExpandAll = () => {
    const allIds = studentData.map((student) => student.id);
    setExpanded(allIds);
  };

  const handleCollapseAll = () => {
    setExpanded([]);
  };

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
            <StudentCard
              key={nanoid()}
              student={student}
              expanded={expanded.includes(student.id)}
              onClick={() => handleToggleExpanded(student.id)}
            />
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
      <Form className="studentList-form">
        <Form.Control
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleChange}
          className="StudentList_controls"
        />
        <Button
          variant={expandedAll ? "dark" : "outline-dark"}
          onClick={() => {
            setExpandedAll(true);
            handleExpandAll();
          }}
        >
          Expand All
        </Button>
        <Button
          variant={expandedAll ? "outline-dark" : "dark"}
          onClick={() => {
            setExpandedAll(false);
            handleCollapseAll();
          }}
        >
          Collapse All
        </Button>
      </Form>

      {renderContent()}
    </section>
  );
};

export default StudentList;
