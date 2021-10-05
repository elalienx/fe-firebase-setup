// Project files
import { useEffect, useState } from "react";
import firebase from "scripts/firebase";

export default function App() {
  // Local state
  const [status, setStatus] = useState(0); // 0 = loading, 1 = loaded, 2 = error.
  const [candidates, setCandidates] = useState([]);

  // Properties

  // Methods
  useEffect(() => {
    const database = firebase.firestore();

    database
      .collection("technologies")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => console.log(doc.id, doc.data()));
      });
  }, [candidates, status]);

  return (
    <div className="App">
      <h1>Hello world - Firebase</h1>
      <ol>
        <li>Connect the project to the hosting ✅</li>
        <li>Connect the project to the Fireabse SDK ✅</li>
        <li>Create a FireStore database ✅</li>
        <li>Play around C.R.U.D. methods (imcomplete)</li>
        <li>Refactor to add TypeScript interface 🚨</li>
      </ol>
    </div>
  );
}

