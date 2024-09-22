import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import FormPage from "./pages/FormPage/FormPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/addemployee" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
