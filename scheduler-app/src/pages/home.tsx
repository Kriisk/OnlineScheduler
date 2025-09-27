import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button type="button" href="/signup">Sign Up</Button>
    </div>
  );
};

export default HomePage;
