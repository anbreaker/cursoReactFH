import firebase from 'firebase';

export const showDocuments = (snapshot: firebase.firestore.QuerySnapshot) => {
  const documents: any[] = [];
  snapshot.forEach((snapItem) => {
    documents.push({
      id: snapItem.id,
      ...snapItem.data(),
    });
  });

  console.log(documents);
  return documents;
};
