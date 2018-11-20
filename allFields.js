var allFields = [
  { name: "Mechanical Engineering", percentage: 72 },
  { name: "Electronics Engineering", percentage: 73 },
  { name: "Chemical Engineering", percentage: 74 },
  { name: "Materials Engineering", percentage: 75 },
  { name: "Petroleum Engineering", percentage: 76 },
  { name: "Telecommunication Engineering", percentage: 77 },
  { name: "Civil Engineering", percentage: 78 },
  { name: "Computer System Engineering", percentage: 79 },
  { name: "Software Engineering", percentage: 80 },
  { name: "Electrical Power Engineering", percentage: 81 },
  { name: "Bio-Medical Engineering", percentage: 83 },
  { name: "Eastern Medicine", percentage: 84 },
  { name: "Pharm.D", percentage: 85 },
  {
    name: "MBBS (Bachelors of Medicine and Bachelors of Surgery)",
    percentage: 86
  },
  { name: "BDS (Bachelors of Dental Surgery)", percentage: 87 },
  { name: "Media Sciences", percentage: 88 },
  { name: "Fashion Designing", percentage: 60 },
  { name: "Textile Designing", percentage: 61 },
  { name: "Computer Science", percentage: 62 },
  { name: "BBA (Human Resources)", percentage: 63 },
  { name: "BBA (Supply Chain)", percentage: 64 },
  { name: "BBA (Accounts)", percentage: 65 },
  { name: "BBA (Finance)", percentage: 66 },
  { name: "Law Sciences", percentage: 67 },
  { name: "Social Sciences", percentage: 68 },
  { name: "Architecture", percentage: 69 }
];

var fieldsOnFirebase = null;
function getAllFields() {
  firebase
    .database()
    .ref("allFields")
    .once("value", function(params) {
      fieldsOnFirebase = params.val();
      if (!!fieldsOnFirebase) {
        // setCheckBoxes(fieldsOnFirebase);
      }
    });
}

function removeAllFields() {
  console.log(firebase.database().ref("allFields"));
  firebase
    .database()
    .ref("allFields")
    .remove(console.log);
}

function uploadAllFields() {
  for (let i = 0; i < allFields.length; i++) {
    firebase
      .database()
      .ref("allFields")
      .push(allFields[i], console.log);
  }
}
// removeAllFields();
// uploadAllFields();
// getAllFields();
