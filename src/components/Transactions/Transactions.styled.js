import styled from 'styled-components';

export const Transaction = styled.table`
  width: 350px;
  display: table;
  margin-left: 30px;
  line-height: 2;
  border-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`;

export const Thead = styled.thead`
  display: table-header-group;
  color: #ffffff;
  background-color: #42bccf;
  text-transform: uppercase;
`;

export const Row = styled.tr`
  color: #989c99;
  &:nth-of-type(even) {
    background-color: #eeeeee;
  }
`;
export const Cell = styled.td`
  width: 33%;
  text-align: center;
  border: 1px solid #eeeeee;
`;
