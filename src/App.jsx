import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/shared/Layout";
import Login from "./components/Login"; // Import the Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Add the login route */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
