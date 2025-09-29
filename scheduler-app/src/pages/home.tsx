import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button type="button" href="/signup">Sign Up</Button>
      <Button type="button" href="/login">Log In</Button>
    </div>
  );
};

export default HomePage;
