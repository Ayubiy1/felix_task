import { Button } from "antd";
import { useNavigate } from "react-router";
import Imagee from "../imgs/undraw_page_not_found_re_e9o6 1.png";

const NotFounded = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <img src={Imagee} />

      <Button className="mt-10" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </div>
  );
};

export default NotFounded;
