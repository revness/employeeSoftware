import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import FormPage from "./pages/FormPage/FormPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/addemployee" element={<FormPage type="CREATE" />} />
          <Route path="/employee/:id/edit" element={<FormPage type="EDIT" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
