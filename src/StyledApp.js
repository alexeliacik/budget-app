import styled, { createGlobalStyle } from "styled-components";

// created Global Style, removed margin and paddings, set box-sizing border-box
export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  `;

const StyledApp = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  background-color: #172041;
  height: 80vh;
  padding: 0 15% 0 10%;
  margin: 20px 15px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.9);
`;

export default StyledApp;
