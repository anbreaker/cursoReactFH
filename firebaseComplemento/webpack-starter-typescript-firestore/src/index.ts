import db from './firebase/config';
import {showDocuments} from './helpers/showDocuments';

const usersRef = db.collection('users');

usersRef.limit(1).get().then(showDocuments);

// Limit y Pagination

// btnNext
const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext);

let firstDocument: any = null;
let lastDocument: any = null;
btnNext.addEventListener('click', () => {
  const query = usersRef.orderBy('name').startAfter(lastDocument);

  query
    .limit(2)
    .get()
    .then((snapItem) => {
      firstDocument = snapItem.docs[0] || null;
      lastDocument = snapItem.docs[snapItem.docs.length - 1] || null;
      showDocuments(snapItem);
    });
});

btnNext.click();

// btnPrevious
const btnPrev = document.createElement('button');
btnPrev.innerText = 'Previous Page';
document.body.append(btnPrev);

btnPrev.addEventListener('click', () => {
  const query = usersRef.orderBy('name').endBefore(firstDocument);

  query
    .limit(2)
    .get()
    .then((snapItem) => {
      firstDocument = snapItem.docs[0] || null;
      lastDocument = snapItem.docs[snapItem.docs.length - 1] || null;
      showDocuments(snapItem);
    });
});
