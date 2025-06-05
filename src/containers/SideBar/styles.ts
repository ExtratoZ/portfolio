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
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3c3f4a;
  }
  &:active {
    background-color: #4f525d;
  }
`;

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
