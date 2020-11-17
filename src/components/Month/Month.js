import React from "react";
import StyledMonth, { ChartBar, ChartBox, MonthName } from "./StyledMonth";

const Month = ({ data, selectMonth }) => {
  return (
    <>
      {data.adjustedMonth &&
        data.adjustedMonth.map((month) => (
          <StyledMonth
            key={month.id}
            // changed styled according to isSelected
            isSelected={month.isSelected}
            // showed user selected month info in widget
            onClick={() => selectMonth(month.id)}
          >
            <ChartBox>
              <ChartBar
                // added animation delay with id
                id={month.id}
                backgroundColor="#428DFC"
                // adjusted bar height according to spending
                height={`${month.spending / 33.33}vh`}
              >
                &nbsp;
              </ChartBar>
              <ChartBar
                id={month.id}
                backgroundColor="#0CE381"
                height={`${month.income / 33.33}vh`}
              >
                &nbsp;
              </ChartBar>
            </ChartBox>
            {/* changed style if it selected */}
            <MonthName isSelected={month.isSelected}>
              {/* abbreviated month name */}
              {month.name.slice(0, 3).toUpperCase()}
            </MonthName>
          </StyledMonth>
        ))}
    </>
  );
};

export default Month;
