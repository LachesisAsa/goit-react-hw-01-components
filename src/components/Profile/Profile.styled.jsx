import styled from '@emotion/styled';

export const Profile_Card = styled.div`
  width: 320px;
  border: 1.5px solid grey;
  border-radius: 10px;
`;
export const Profile_Description = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 30px;
  background-color: #ffffff;
  text-align: center;
`;
export const Profile_DescImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;
export const Profile_DescName = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.18;
  margin-bottom: 10px;
`;
export const Profile_DescTag = styled.p`
  font-size: 16px;
  line-height: 1.36;
  color: #5c5b5b;
  margin-bottom: 10px;
`;
export const Profile_DescLocation = styled.p`
  font-size: 20px;
  line-height: 1.18;
  color: #757575;
  margin-bottom: 20px;
`;
export const Profile_Stats = styled.ul`
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
export const Profile_StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  flex-basis: calc(100% / 3);
  & + & {
    border-left: 1px solid #a1a1a1;
  }
`;
export const Profile_StatsLabel = styled.span`
  &:first-letter {
    text-transform: uppercase;
  }
  font-size: 16px;
  color: #757575;
  margin-bottom: 5px;
`;
export const Profile_StatsQuantity = styled.span`
  font-weight: 500;
  font-size: 18px;
`;