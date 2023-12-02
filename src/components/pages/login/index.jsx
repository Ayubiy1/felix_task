import { Button, Card, Form, Input } from "antd";
import Accaunts from "../../accaunts";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { api } from "../../../api";

const LoginPage = () => {
  const notify = () => toast.success("Wow so easy!");
  const notifyError = () => toast.error("Wow so easy!");
  const errorLogin = () => toast.error("Qaytadan urinib ko'ring!");
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { data } = useQuery(["myself"], () => {
    return api.get("https://0001.uz/myselfs");
  });
  console.log(data);

  // const { data, isLoading, isError } = useQuery(["users"], () => {
  //   return axios.get("http://localhost:3006/books");
  // });

  const onFinish = (values) => {
    // console.log(data);
    // mutate({
    //   name: "Jackson test",
    //   email: "jacksontest@gmail.com",
    //   key: "Mason",
    //   secret: "MySecrettest",
    // });
    //
    //
    //
    //
    //
    // const name = data.data.find((i) => (i.name == values.name ? true : false));
    // const userN = data.data.find((i) =>
    //   i.userName == values.userName ? true : false
    // );
    // const pas = data.data.find((i) =>
    //   i.password == values.password ? true : false
    // );
    // console.log(name);
    // if (name && userN && pas) {
    //   navigate("/");
    // } else {
    //   errorLogin();
    // }
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <ToastContainer />
      <Card className="w-[400px] shadow-lg">
        <h1>Sign in</h1>
        <Accaunts />

        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Your name"
            name={"name"}
            rules={[{ required: true }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            label="Your username"
            name={"userName"}
            rules={[{ required: true }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            label="Your password"
            name={"password"}
            rules={[{ required: true }]}
          >
            <Input.Password placeholder="password" />
          </Form.Item>

          <Form.Item>
            <Button className="w-[100%]" type="primary" htmlType="submit">
              Login
            </Button>{" "}
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
