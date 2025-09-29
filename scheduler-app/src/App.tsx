import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
