import styled from "styled-components";
import { motion } from "framer-motion";

export const CardHeaderContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2em;
  padding-bottom: 4em;
`;

export const Card = styled.div`
  width: 330px;
  min-height: 650px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.h2`
  font-size: 35px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
`;

export const SubtitleText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  z-index: 10;
  margin-top: 1em;
  width: 90%;
  line-height: 1.24;
`;

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Backdrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  transform: rotate(60deg);
  top: -270px;
  left: -70px;
  z-index: 5;
  border-radius: 50%;
  background: rgb(0, 174, 66);
  background: linear-gradient(
    50deg,
    rgba(15, 48, 28, 1) 15%,
    rgba(0, 174, 66, 1) 100%
  );
`;

export const BackdropAnimation = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(65deg)",
  },
  collapes: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

export const ExpandAnimation = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};
