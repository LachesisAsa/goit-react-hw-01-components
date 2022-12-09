import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatGraph = styled.section`
  width: 480px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: #ffffff;
`;
export const StatTitle = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.18;
  text-align: center;
  text-transform: uppercase;
  color: grey;
`;
export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;
export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  flex-basis: calc(100% / 5);
  background-color: ${getRandomHexColor};
  &:first-of-type {
    border-bottom-left-radius: 5px;
  }
  &:last-of-type {
    border-bottom-right-radius: 5px;
  }
`;
export const StatListLabel = styled.samp`
  font-size: 16px;
  color: white;
  margin-bottom: 5px;
`;
export const StatListPercentage = styled.samp`
  font-size: 16px;
  color: white;
`;
