import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFKr92nRA3z1xrpBi3HM8-4cL5m4tuG5M",
  authDomain: "decor-react.firebaseapp.com",
  projectId: "decor-react",
  storageBucket: "decor-react.appspot.com",
  messagingSenderId: "762016343778",
  appId: "1:762016343778:web:bf18b4b6596093807c60bb"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)

async function getItems() {
  const itemsRef = collection(db, "items");
  const documentsSnapshot = await getDocs(itemsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => ({...item.data(), id: item.id}));
  return(docsData);
}

async function getItem(id) {
    const itemRef = doc(db, "items", id);
    const docSnapshot = await getDoc(itemRef);
    
    if (docSnapshot.exists()) {
        return { ...docSnapshot.data(), id: docSnapshot.id};
    } else {
        throw new Error("No encontramos ese producto");
    }
}

async function getCategoryItem(categoryId) {
    const itemsRef = collection(db, "items");
    const q = query(itemsRef, where("category", "==", categoryId))
    const documentsSnapshot = await getDocs(q);
    const documents = documentsSnapshot.docs;
    const docsData = documents.map((item) => ({...item.data(), id: item.id}));

    if (docsData.length === 0) {
      throw new Error("No encontramos esa categoría");
    } else {
      return(docsData);
    }
  }

  async function createOrder(orderData) {
    const collectionRef = collection(db, "orders");
    const docCreated = await addDoc(collectionRef, orderData);

    return (
      docCreated.id
    )
  }

  async function getOrder(id) {
    const docRef = doc(db, "orders", id);
    const docSnapshot = await getDoc(docRef);

    if(docSnapshot.exists()) {
      return {
        ...docSnapshot.data(), id: docSnapshot.id
      }
    } else {
      throw new Error("No pudimos procesar la solicitud");
    }
  }

export { getItems, getItem, getCategoryItem, createOrder, getOrder }