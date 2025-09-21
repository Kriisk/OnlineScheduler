import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button>
        <Link to="/signup">Sign Up</Link>
      </Button>
    </div>
  );
};

export default HomePage;
