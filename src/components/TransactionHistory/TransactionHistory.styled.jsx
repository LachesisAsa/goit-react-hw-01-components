import styled from '@emotion/styled';

export const Transaction_History = styled.table`
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  width: 80%;
  border-collapse: collapse;
  text-align: center;
`;
export const Table_Header = styled.thead`
  background-color: blue;
`;
export const Column_Name = styled.th`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.18;
  padding: 10px 20px;
  color: white;
  text-transform: uppercase;
`;
export const Table_Row = styled.tr`
  font-size: 18px;
  & + & {
    border-top: 1px solid grey;
  }
`;
export const Cell_Value = styled.td`
  padding: 10px 20px;
  & + & {
    border-left: 1px solid grey;
  }
`;
export const Table_Body = styled.tbody`
  background-color: #ffffff;
`;
