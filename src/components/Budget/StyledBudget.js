import styled from "styled-components";

export const BudgetBar = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 98%;

  // height of budget bar is depens on "overall_budget"
  bottom: ${({ budgetHeight }) => budgetHeight};
  left: 1%;
  color: #fff;
  margin-bottom: 65px;

  // becomes budget bar
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -10px;
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
