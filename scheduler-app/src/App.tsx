import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import SignUpPage from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
