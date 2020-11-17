import styled from "styled-components";

const Text = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: #fff;
`;

export default Text;
