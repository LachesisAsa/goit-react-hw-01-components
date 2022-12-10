import styled from '@emotion/styled';

export const ListFriend = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
`;
export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 8px 70px 8px 10px;
  background-color: #ffffff;
`;
export const FriendStatus = styled.span`
  margin-right: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${props =>
    props.isOnline ? 'rgb(49, 167, 75)' : 'rgb(240, 29, 29)'};
`;
export const FriendAvatar = styled.img`
  margin-right: 8px;
`;
export const FriendName = styled.p`
  font-weight: 500;
  font-size: 28px;
`;
