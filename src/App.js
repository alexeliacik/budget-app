import React, { useState, useEffect } from "react";
import StyledApp, { GlobalStyle } from "./StyledApp";
import SelectedMonthInfo from "./components/SelectedMonthInfo/SelectedMonthInfo";
import Month from "./components/Month/Month";
import Budget from "./components/Budget/Budget";

function App() {
  const [data, setData] = useState({
    overall_budget: 650,
    spending: [
      {
        month: 10,
        spending: 700,
      },
      {
        month: 9,
        spending: 300,
      },
      {
        month: 8,
        spending: 200,
      },
      {
        month: 7,
        spending: 400,
      },
    ],
    income: [
      {
        month: 10,
        income: 500,
      },
      {
        month: 9,
        income: 500,
      },
      {
        month: 8,
        income: 575.55,
      },
      {
        month: 7,
        income: 1000,
      },
    ],
  });

  useEffect(() => {
    // immutable way of updating state

    const cloneData = { ...data };
    const cloneIncome = [...cloneData.income];
    const sortedIncome = cloneIncome.sort((a, b) => a.month - b.month);
    const cloneSpending = [...cloneData.spending];
    const sortedSpending = cloneSpending.sort((a, b) => a.month - b.month);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let adjustedMonth = [];

    // looped as many time as array of income length
    const loopCount = data.income.length;

    for (let i = 0; i < loopCount; i++) {
      // created another array in data objedt
      adjustedMonth.push({
        id: i,

        // converted numbers to month names
        name: monthNames[sortedSpending[i].month - 1],
        income: sortedIncome[i].income,
        spending: sortedSpending[i].spending,

        // select last month
        isSelected: i === loopCount - 1 ? true : false,
      });
    }

    // set the state immutably
    setData({
      ...cloneData,
      adjustedMonth,
    });
  }, []);

  const selectMonth = (id) => {
    // again immutable way of state update
    const cloneData = { ...data };
    const cloneAdjustedMonth = [...cloneData.adjustedMonth];

    // update isSelected property
    const newAdjustedMonth = cloneAdjustedMonth.map((month) =>
      month.id === id
        ? { ...month, isSelected: true }
        : { ...month, isSelected: false }
    );

    // set data with new adjustedMont data
    setData({
      ...data,
      adjustedMonth: newAdjustedMonth,
    });
  };

  return (
    <StyledApp>
      <GlobalStyle />
      {/* new Date() trigers animation */}
      <SelectedMonthInfo key={new Date()} data={data} />
      <Budget data={data} />
      <Month data={data} selectMonth={selectMonth} />
    </StyledApp>
  );
}

export default App;
// TODO
// let user to change spending and or income for each month
// let user to add another months and/or years
// show user current date=
// show user average spending and/or income
// let user to add spend limit and show how far user from the maximum limit
// show user how much he/she saved if did not hit maximum spend limit
// show average of savings
// add overflow property and style scroll bar for better user experience
