import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";

import StudentList from "./Components/StudentList/StudentList";

const API = process.env.REACT_APP_API_URL;

const App = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API}/students`)
        .then((res) => {
          // console.log(res.data.payload);
          setStudentData(res.data.payload);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchData();
  }, []); // eslint-disable-line

  return (
    <section className="App-container">
      <h1>student app</h1>
      <StudentList studentData={studentData} />
    </section>
  );
};

export default App;
