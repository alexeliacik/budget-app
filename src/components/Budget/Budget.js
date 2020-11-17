import React from "react";
import BudgetBarContent, { BudgetBar } from "./StyledBudget";
import Text from "../StyledComponents/Text";
const Budget = ({ data }) => {
  return (
    <>
      {/* made budget level responsive */}
      <BudgetBar budgetHeight={`${data.overall_budget / 33.33}vh`}>
        <BudgetBarContent>
          <Text fontSize="25px">Budget</Text>
          <Text fontSize="32px" fontWeight="bold">
            {/* used template literals in order to add '$' sign */}
            {`$${data.overall_budget}`}
          </Text>
        </BudgetBarContent>
      </BudgetBar>
    </>
  );
};

export default Budget;
