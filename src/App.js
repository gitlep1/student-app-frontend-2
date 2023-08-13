import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";

import Container from "./Components/Container/Container";
import Error from "./Components/Error/Error";
import Loading from "./Components/Loading/Loading";
import StudentList from "./Components/StudentList/StudentList";

const API = process.env.REACT_APP_API_URL;

const App = () => {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      await axios
        .get(`${API}/students`)
        .then((res) => {
          setStudentData(res.data.payload);
        })
        .catch((err) => {
          setError(err);
        });
      setLoading(false);
    };
    fetchData();
  }, []); // eslint-disable-line

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  };

  return (
    <section className="App-container">
      <Container center={Boolean(error || loading)} scroll={false}>
        {renderContent()}
      </Container>
    </section>
  );
};

export default App;
