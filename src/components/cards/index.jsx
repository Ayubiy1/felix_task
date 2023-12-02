import {
  Button,
  Card,
  Drawer,
  Form,
  Input,
  List,
  Modal,
  Typography,
} from "antd";
import styled from "@emotion/styled";
import { MdDelete } from "react-icons/md";
import "./style.css";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import CryptoJS from "crypto-js";
import { FaPen } from "react-icons/fa";

const Cards = ({ user }) => {
  const method = "POST";
  const url = "/books";
  const body = {
    isbn: "9781118464465",
  };

  const stringToSign = `${method}${url}${JSON.stringify({
    isbn: "9781118464465",
  })}${user?.data?.secret}`;

  const md5Sign = CryptoJS.MD5(stringToSign).toString();

  const { data: allBoks, mutate } = useMutation(() => {
    return axios.post(
      "https://0001.uz/books",
      {
        headers: {
          Key: user?.data?.key,
          Sign: md5Sign,
        },
      },
      {
        id: 121,
        isbn: "9781118464465",
        title: "Raspberry Pi User Guide",
        cover: "http://url.to.book.cover",
        author: "Eben Upton",
        published: 2012,
        pages: 221,
      }
    );
  });

  const { data: bookData } = useQuery(["bookss"], () => {
    return axios.get("https://0001.uz/books", {
      headers: { Key: user?.data?.key, Sign: md5Sign },
    });
  });

  console.log(bookData);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = () => {};

  const [data, setDat] = useState([{}, {}, {}, {}, {}, {}]);
  return (
    <div>
      <List
        grid={{
          gutter: 35,
          column: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item onClick={mutate} className="my-2 card">
            <Card onClick={mutate}>
              <Typography className="font-bold">
                Raspberry Pi User Guide
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
                varius vestibulum magna in. Tortor quisque nisl congue ut tellus
                sem id.
              </Typography>
              <div className="flex items-center justify-between">
                <Typography>Eben Upton: 2012-year</Typography>
                <span className="bg-[#EFE6FD] text-[#9654F4] px-3 rounded-xl flex items-center justify-center">
                  211 pages
                </span>
              </div>
              <div className="option absolute top-[2px] right-[-30px]">
                <div className="flex items-center flex-col">
                  <Button size="small" type="primary" onClick={showDrawer}>
                    <FaPen />
                  </Button>

                  <Button size="small" type="primary" danger>
                    <MdDelete />
                  </Button>
                </div>
              </div>
            </Card>{" "}
          </List.Item>
        )}
      />

      <Modal title="Basic Modal" footer={false} open={open} onCancel={onClose}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Book Title"
            name="title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Book page" name="page" rules={[{ required: true }]}>
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
  );
};

const ClockWrapper = styled.div``;

export default Cards;
