import React from "react";
import CountUp from "react-countup";
import Text from "../StyledComponents/Text";
import StyledSelectedMonthInfo, {
  SelectedMonthInfoBox,
  SelectedMonthInfoSmallBox,
} from "./StyledSelectedMonthInfo";

const SelectedMonthInfo = ({ data }) => {
  return (
    <StyledSelectedMonthInfo>
      {data.adjustedMonth &&
        data.adjustedMonth

          // filtered non isSelected months in order to show selected one

          .filter((month) => month.isSelected)
          .map((month) => {
            return (
              <div key={month.name}>
                <Text fontSize="30px" fontWeight="bold">
                  {month.name}
                </Text>
                <SelectedMonthInfoBox>
                  <SelectedMonthInfoSmallBox backgroundColor="#428DFC">
                    {/* reusable text component was handy */}

                    <Text fontSize="20px">Spending</Text>
                    <Text
                      style={{ display: "inline" }}
                      fontSize="25px"
                      fontWeight="bold"
                    >
                      $
                    </Text>
                    <CountUp end={month.spending} duration={0.7}></CountUp>
                  </SelectedMonthInfoSmallBox>
                  <SelectedMonthInfoSmallBox backgroundColor="#0CE381">
                    <Text fontSize="20px">Income</Text>
                    <Text
                      style={{ display: "inline" }}
                      fontSize="25px"
                      fontWeight="bold"
                    >
                      $
                    </Text>

                    {/* animated digits with CountUp */}
                    <CountUp end={month.income} duration={0.7}></CountUp>
                  </SelectedMonthInfoSmallBox>
                </SelectedMonthInfoBox>
              </div>
            );
          })}
    </StyledSelectedMonthInfo>
  );
};

export default SelectedMonthInfo;
