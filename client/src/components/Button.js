import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  font-size: 1.2rem;
  font-weight: 300;
  width: 180px;
  border-radius: 15px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  outline: none;
  margin: 40px auto 20px auto;
  height: 35px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
  :active {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;

export default Button;
