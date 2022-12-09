import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 320px;
  border: 1.5px solid grey;
  border-radius: 10px;
`;
export const ProfileDescription = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 30px;
  background-color: #ffffff;
  text-align: center;
`;
export const ProfileDescImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;
export const ProfileDescName = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.18;
  margin-bottom: 10px;
`;
export const ProfileDescTag = styled.p`
  font-size: 16px;
  line-height: 1.36;
  color: #5c5b5b;
  margin-bottom: 10px;
`;
export const ProfileDescLocation = styled.p`
  font-size: 20px;
  line-height: 1.18;
  color: #757575;
  margin-bottom: 20px;
`;
export const ProfileStats = styled.ul`
  background-color: #e5e5e5;
  width: 100%;
  font-size: 20px;
  line-height: 1.18;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #a1a1a1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0;
  margin: 0;
`;
export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  flex-basis: calc(100% / 3);
  & + & {
    border-left: 1px solid #a1a1a1;
  }
`;
export const ProfileStatsLabel = styled.span`
  &:first-letter {
    text-transform: uppercase;
  }
  font-size: 16px;
  color: #757575;
  margin-bottom: 5px;
`;
export const ProfileStatsQuantity = styled.span`
  font-weight: 500;
  font-size: 18px;
`;