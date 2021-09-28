// library for "resources" firestore collection

// import firebase lib, returns firestore db in firebase var

import firebase from "./firebase";

// returns all valid IDs for getStaticPaths()
export async function getResourceIds() {
  let output = [];
  //wrap try around our code to catch any errors that happen
  try {
    
    // retrieve ALL docs from firestore collection named "resources"
    const snapshot = await firebase.collection("List").get();

    // loop thru and build out an array of all data from firestore collection
    snapshot.forEach(
      (doc) => {
        output.push(
          {
            params: {
              id:doc.id
            }
          }
        );
      }
    );
  } catch(error) {
    console.error(error);
  }
  // console.log(output);
  return output

}

//returns one document's data for matching ID

export async function getResourceData(idRequested) {
  // retrieves ONE document from our firestore collection matched by unique id
  const doc = await firebase.collection("List").doc(idRequested).get();

  // return all data from firestore document as json
  let output;
  if (!doc.empty) {
    output = { id:doc.id, data:doc.data() };
  } else {
    output = null;
  }

  return output;
}

export async function getSortedList() {

  let output = [];
  //wrap try around our code to catch any errors that happen
  try {
    
    // retrieve ALL docs from firestore collection named "resources"
    const snapshot = await firebase.collection("List").get();

    // loop thru and build out an array of all data from firestore collection
    snapshot.forEach(
      (doc) => {
        output.push(
          {
            id:doc.id,
            name:doc.data().name
            
          }
        );
      }
    );
  } catch(error) {
    console.error(error);
  }
  // console.log(output);
  return output
}

// returns one documnet's data for matching ID for getStaticProps()