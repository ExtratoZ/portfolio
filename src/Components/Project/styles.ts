import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colorBorder};
  padding: 16px;
`;

export const LinkButton = styled.a`
  display: inline-block;
  color: #eee;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colorBackgroundButton};
  text-decoration: none;
  padding: 8px;
  margin-top: 24px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colorButtonHover};
  }
`;
