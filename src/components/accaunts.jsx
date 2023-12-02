import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Typography } from "antd";
import styled from "styled-components";

const Accaunts = () => {
  return (
    <AccauntsWrapper>
      <div>
        <div className="card-acc">
          <FcGoogle className="logo" />
          <Typography>Continue with Google</Typography>
        </div>

        <div className="card-acc">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 20.9C6.25 20.15 3 16.45 3 12C3 7.05 7.05 3 12 3C16.95 3 21 7.05 21 12C21 16.45 17.75 20.15 13.5 20.9L13 20.5H11L10.5 20.9Z"
              fill="url(#paint0_linear_793_161)"
            />
            <path
              d="M15.5 14.5L15.9 12H13.5V10.25C13.5 9.55 13.75 9 14.85 9H16V6.7C15.35 6.6 14.65 6.5 14 6.5C11.95 6.5 10.5 7.75 10.5 10V12H8.25V14.5H10.5V20.85C11 20.95 11.5 21 12 21C12.5 21 13 20.95 13.5 20.85V14.5H15.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_793_161"
                x1="12"
                y1="20.377"
                x2="12"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0062E0" />
                <stop offset="1" stop-color="#19AFFF" />
              </linearGradient>
            </defs>
          </svg>
          {/* <FaFacebook className="logo" /> */}
          <Typography>Continue with Google</Typography>
        </div>

        <div className="flex gap-3 items-center justify-center">
          <span className="line"></span>
          <Typography>OR</Typography>
          <span className="line"></span>
        </div>
      </div>
    </AccauntsWrapper>
  );
};

export default Accaunts;

const AccauntsWrapper = styled.div`
  .card-acc {
    margin: 10px 0;
    padding: 8px 5px;
    border-radius: 4px;
    border: 1px solid var(--foundation-grey-grey-900, #151515);
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .logo {
    font-size: 25px;
  }
  .line {
    // width: 151px;
    // max-width: 151px;
    padding: 0 65px;
    height: 1px !important;
    background-color: black;
  }
`;
