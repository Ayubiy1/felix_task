import { Button, Form, Input, Modal } from "antd";
import Header from "./header";
import "./style.css";
import Cards from "../../cards";
import { useState } from "react";

const HomePage = ({ user }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = () => {};

  return (
    <div className="px-3 sm:px12 md:px-12 lg:px-28">
      <Header />

      <div className="mt-6 book">
        <h1 className="title">You’ve got 7 book </h1>

        <div className="flex gap-2 items-center justify-center">
          <Form className="h-[30px] w-[300px] form">
            <Form.Item name={""}>
              <Input placeholder="Enter your name" />
            </Form.Item>
          </Form>

          <Button
            className="bg-[#6200EE] text-white border-none crare-btn"
            onClick={showDrawer}
          >
            + Create a book
          </Button>
        </div>

        <Modal
          title="Basic Modal"
          footer={false}
          open={open}
          onCancel={onClose}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item label="Title" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Author" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Book page"
              name="page"
              rules={[{ required: true }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item className="text-right">
              <Button type="primary" htmlType="submit">
                Edit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>

      <div className="mt-5">
        <Cards user={user} />
      </div>
    </div>
  );
};

export default HomePage;
