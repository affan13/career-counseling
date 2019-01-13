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

var allCities = [
  "Karachi",
  "Islamabad",
  "Lahore",
  "Peshawar",
  "Hyderabad",
  "Multan",
  "Faisalabad",
  "Gujrat",
  "Jamshoro",
  "Taxila",
  "Quetta",
  "Rawalpindi",
  "Topi (KPK)",
]

var fieldsOnFirebase = null;
function getAllFields() {
  firebase
    .database()
    .ref("allFields")
    .once("value", function (params) {
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

function universityDIV(key, value) {
  return `<div class="uni-box">
            <h4>${value.name}</h4>
            <p>${value.address} <strong>${value.city}</strong> </p>
            <p>${value.phone}</p>
            <a href="${value.web}" target="_blank" rel="noopener noreferrer">Check website</a>
            <div>${value.fields && value.fields.map ? value.fields.map(function (v) {
    return `<span>${v.name} (${v.percentage})</span>`;
  }) : ""}
            </div>
          </div>`;
}

function matchedUniDIV(uni, matching) {
  return `<div class="uni-box">
            <h4><strong>${matching.field}</strong> in ${uni.name}</h4>
            <p>Percentage Required: ${matching.percentage}%</p>
            <p>${uni.address} <strong>${uni.city}</strong> </p>
            <p>Admission Fee: ${uni.fee}</p>
            <p>Contact No: ${uni.phone}</p>
            <a href="${uni.web}" target="_blank" rel="noopener noreferrer">Check website</a>
          </div>`;
}

// removeAllFields();
// uploadAllFields();
// getAllFields();

/*
 RIASEC is mapped with 123456
 So, if an answer is "R" then we will give it "1",
 if "R" then "1"
 if "I" then "2"
 if "A" then "3"
 if "S" then "4"
 if "E" then "5"
 if "C" then "6"
*/
var _questions = [
  { question: "I like to work on cars", answer: "1" },
  { question: "I like to do puzzles", answer: "2" },
  { question: "I am good at working independently", answer: "3" },
  { question: "I like to work in teams", answer: "4" },
  { question: "I am an ambitious person, I set goals for myself", answer: "5" },
  { question: "I like to organize things, (files, desks/offices)", answer: "6" },
  { question: "I like to build things", answer: "1" },
];

var _options = {
  "1": "R",
  "2": "I",
  "3": "A",
  "4": "S",
  "5": "E",
  "6": "C",
}
