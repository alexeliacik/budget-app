import styled from "styled-components";

export const BudgetBar = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 98%;
  height: 76px;
  // height of budget bar is depens on "overall_budget"
  /* bottom: ${({ budgetHeight }) => budgetHeight}; */
  top: calc(50% - 38px);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;

  // becomes budget bar
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    border-radius: 3px;
    opacity: 0.5;
  }
`;

const BudgetBarContent = styled.div`
  align-items: right;
  padding-right: 20px;
`;

export default BudgetBarContent;
