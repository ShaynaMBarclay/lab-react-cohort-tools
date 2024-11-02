import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/students/1">Student Details</Link> 
      </nav>
      <div className="pages">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students/:studentId" element={<StudentDetailsPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
