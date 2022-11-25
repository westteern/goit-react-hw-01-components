import { GlobalStyle } from './GlobalStyle';
import { Profile } from './UserProfile/UserProfile';

import user from 'data/user.json';
// import data from 'data/data.json';
// import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}/>
    </>
  );
};
