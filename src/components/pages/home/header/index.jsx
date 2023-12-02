import { Button, Drawer } from "antd";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiMenuFoldFill } from "react-icons/ri";
import Logo from "../../../imgs/logo.png";
import User from "../../../imgs/17192581_1140324592744139_3381332769681077534_o 2.png";
import styled from "styled-components";
import { useState } from "react";
import "../style.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <HeaderWrapper>
      <div className="flex items-center justify-between pt-3">
        <div className="flex items-center">
          <img src={Logo} alt="" />
          <div className="md:flex items-center justify-center hidden">
            <Button className="search-btn text-[24px]" size="middle">
              <BiSearchAlt />
            </Button>
            <input
              placeholder="Search for any training you want "
              className="w-[300px] search-input outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-[30px] cursor-pointer hidden md:block">
            <MdOutlineNotificationsActive />
          </span>

          <img
            src={User}
            className="rounded-full w-[40px] h-[40px] cursor-pointer"
            style={{ border: "2px solid #FD648E" }}
            alt=""
          />

          <Button
            type="text"
            className="md:hidden text-[#6200EE] menu-btn"
            onClick={showDrawer}
          >
            <RiMenuFoldFill />
          </Button>
        </div>
      </div>
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        style={{ backgroundColor: "#333333", color: "white" }}
      >
        <div
          className="flex items-center justify-center w-[100%] h-[30px] rounded-md px-2 py-1"
          style={{ border: "1px solid" }}
        >
          <input
            placeholder="Search for any training you want"
            className="w-[100%] h-[30px] outline-none bg-transparent text-white border-none"
          />
          <span className="p-1 rounded-sm" style={{ border: "1px solid" }}>
            ENTER
          </span>
        </div>

        <div></div>
      </Drawer>
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled.div`
  .search-btn,
  .search-input {
    color: #fff;
    background: transparent;
    border: transparent;
  }
`;
