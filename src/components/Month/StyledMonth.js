import styled, { keyframes } from "styled-components";

// firs animation when you load the page
const animateBars = keyframes`
  from{height: 0; opacity:0.2;  }
  to{height: ${({ height }) => height}; opacity:1; }
`;

export const MonthName = styled.h1`
  font-size: 20px;
  color: ${({ isSelected }) => (isSelected ? "#428dfc" : "#fff")};
  background-color: ${({ isSelected }) => (isSelected ? "#fff" : "none")};
  border-radius: 10px;
  font-weight: 400;
  height: 25px;
  padding: 10px 15px 0 15px;
  margin: 10px 0;
  line-height: 15px;
`;

const StyledMonth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0.7")};
  cursor: pointer;

  &:hover {
    opacity: 1;
    ${MonthName} {
      background-color: #fff;
      color: #428dfc;
    }
  }
`;

export const ChartBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
`;

export const ChartBar = styled.div`
  background-color: #0ce381;
  background: ${({ backgroundColor }) => backgroundColor};
  height: ${({ height }) => height};
  width: 15px;
  border-radius: 20px;
  margin: 0 5px;
  z-index: 15;
  opacity: 0;
  animation: ${animateBars} 2s;
  // animation delay a depends on month id
  animation-delay: ${({ id }) => `${id * 0.2}s`};
  animation-fill-mode: forwards;
`;

export default StyledMonth;
