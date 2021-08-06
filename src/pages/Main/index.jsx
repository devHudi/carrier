import { firestore } from 'misc/firebase';

firestore
  .collection('users')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });

const Main = () => <>I am Main Page</>;

export default Main;
