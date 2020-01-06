import styled from "@emotion/styled";

const Button = styled.button`
  font-size: 0.9rem;
  font-weight: 300;
  width: 180px;
  border-radius: 15px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  outline: none;
  margin: 40px 60px 20px auto;
  height: 35px;
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
  :active {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;

export default Button;
