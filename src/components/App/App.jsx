import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../Friends/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import user from '../../path/user';
import data from '../../path/data';
import friends from '../../path/friends';
import transactions from '../../path/transactions';
import { Main, Section } from './App.styled';

export const App = () => {
  return (
    <Main>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Main>
  );
};
