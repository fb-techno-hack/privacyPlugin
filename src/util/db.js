import { db, auth } from './firebase-init';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const doAddSite = (location, education, race, age) => {
  const userInfo = {
    location, education, race, age,
  };
  const user = auth.currentUser;
  const updates = {};

  console.log(userInfo, 'user info db');
  updates[`users/${user.uid}/userInfo/`] = userInfo;
  console.log(updates, ':  updates');
  db.ref().update(updates)
    .then(res => console.log(res))
    .catch(err => console.log(err)); 
};


export const onceGetUsers = () => db.ref('users').once('value');
