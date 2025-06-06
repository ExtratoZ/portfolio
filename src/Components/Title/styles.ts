import styled from 'styled-components';
import { Props } from '.';

export const Title = styled.h3<Props>`
  font-size: ${(props) => props.fontSize || 16}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colorPrimary};
  margin-bottom: 16px;
`;
