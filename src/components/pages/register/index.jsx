import { Button, Card, Form, Input } from "antd";
import Accaunts from "../../accaunts";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import md5 from "md5";
import { useEffect, useState } from "react";

const RegisterPage = ({ setUserKey, setUserSecret, setUser }) => {
  const notify = () => toast.success("Wow so easy!");
  const errorLogin = () =>
    toast.error(
      "Ro'yhatdan o'tishda xatolik yuzberdi!!! \n Qaytadan urinib ko'ring!"
    );
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);

  // console.log(md5("1"));

  const { data, isLoading, mutate } = useMutation(
    (newUser) => {
      return axios.post("https://0001.uz/signup", newUser);
    },
    {
      onSuccess: () => {
        notify();
        navigate("/");
        setSuccess(true);
      },
      onError: () => {
        errorLogin();
      },
    }
  );

  console.log(data);

  useEffect(() => {
    if (success && data) {
      setUserKey(data.data.key);
      setUserSecret(data.data.secret);
      setUser(data.data);
    }
  }, [data]);

  const onFinish = (values) => {
    mutate({
      name: values.name,
      // userName: values.userName,
      email: values.email,
      key: values.key,
      secret: values.secret,
    });
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <ToastContainer />
      {isLoading ? (
        <div class="large progress">
          <div>Loading…</div>
        </div>
      ) : (
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
              label="Your email"
              name={"email"}
              rules={[{ required: true }]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>

            <Form.Item
              label="Your key"
              name={"key"}
              rules={[{ required: true }]}
            >
              <Input.Password placeholder="password" />
            </Form.Item>

            <Form.Item
              label="Your secret"
              name={"secret"}
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
      )}
    </div>
  );
};

export default RegisterPage;
