import styled, { keyframes } from "styled-components";

const animateWidget = keyframes`
  from{opacity:0; transform: scale(0.98) translateY(5px)}
  to{opacity:1; transform: translateY(0)}
`;

const StyledSelectedMonthInfo = styled.div`
  position: absolute;
  top: 1%;
  left: 7%;
  z-index: 25;
  animation: ${animateWidget} 0.8s;
`;

export const SelectedMonthInfoBox = styled.div`
  display: flex;
`;

export const SelectedMonthInfoSmallBox = styled.div`
  margin: 5px 0 0 30px;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 8px;
    left: -20px;
    width: 15px;
    height: 15px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 50%;
  }

  & > span {
    color: #fff;
    font-weight: bold;
    font-size: 25px;
  }
`;
export default StyledSelectedMonthInfo;
