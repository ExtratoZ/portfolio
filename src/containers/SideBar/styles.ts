import styled from 'styled-components';
import { P } from '../../Components/Paragraph/styles';

export const Desc = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 12px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colorBackgroundButton};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colorButtonHover};
  }
`;

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    button {
      margin-bottom: 30px;
    }
  }
`;
