import styled from '@emotion/styled';

export const HistoryTransaction = styled.table`
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  width: 80%;
  border-collapse: collapse;
  text-align: center;
`;
export const TableHeader = styled.thead`
  background-color: blue;
`;
export const ColumnName = styled.th`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.18;
  padding: 10px 20px;
  color: white;
  text-transform: uppercase;
`;
export const TableRow = styled.tr`
  font-size: 18px;
  & + & {
    border-top: 1px solid grey;
  }
`;
export const CellValue = styled.td`
  padding: 10px 20px;
  & + & {
    border-left: 1px solid grey;
  }
`;
export const TableBody = styled.tbody`
  background-color: #ffffff;
`;
