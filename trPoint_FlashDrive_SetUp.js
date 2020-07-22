//// This snippet selects all checkboxes and checks them ////

// function selectAllCheckboxes() {
//   Object.keys($( "[type=checkbox]" )).forEach((key)=>{
//     let checkbox = $( "[type=checkbox]" )[key];
//     if (checkbox.id  && checkbox.id.includes('chkSelectAll')) { checkbox.click();}
//   })
// }

// This snippet will gather all rows with docnames and format them into an Object//////////////////////////////

function gatherDocumentList() {
  let documentList = {};
  let rowId = 0;
  Object.keys($("tr")).forEach((key)=>{
    let row = $("tr")[key];
    if (row.children && row.children.length === 12 && !(row.classList.contains('tr-head'))){
      row.id = `docRowId-${rowId}`
      
      let docName = row.children[2].children[0].outerText;
      let docCategory = row.children[2].children[1].outerText;
      let docCheckBoxId= row.children[0].children[0].children[0].id;
      let docCheckBoxParent = row.children[0];
      let docLinkId = row.children[2].children[0].children[0].id;
      let pageCount = row.children[3].innerText;
      let uploadDate = row.children[6].children[0].innerText;
  
      let tempDocRows = documentList;    
      let rowObject = Object.assign({}, tempDocRows, {
        [rowId]: {
          docRowId: row.id,
          docName: docName,
          docCategory: docCategory,
          docNameCategoryCombined: `${docName.toLowerCase()} ${docCategory.toLowerCase()}`,
          docCheckBoxId: docCheckBoxId,
          docCheckBoxParent: docCheckBoxParent,
          docLinkId: docLinkId,
          pageCount: pageCount,
          uploadDate: uploadDate
        }
      })
      documentList = rowObject;
      rowId+=1;
    };
  })
  return documentList;
}

function findDocument(documentList, searchTerms, property) {
  function termCleaner(string){
    return string.toLowerCase().replace(/[()]/gmi, "")
  }
  let keyResult = [];
  let searchField= property; 
  Object.keys(documentList).forEach((key)=>{
    let match = false;
    searchTerms.forEach((searchTerm)=>{
      term = termCleaner(searchTerm);
      let comparisonField = termCleaner(documentList[key][searchField]);
      if (comparisonField.includes(term)) {match = true;}
    })
    if (match) {keyResult.push(key)};
  })
  return keyResult;
}

function selectAllCheckboxes() {
  Object.keys($( "[type=checkbox]" )).forEach((key)=>{
    let checkbox = $( "[type=checkbox]" )[key];
    if (checkbox.id  && checkbox.id.includes('chkSelectAll')) { checkbox.click();}
  })
};

function selectDocument(documentList, key, value){
  let targetId = documentList[key]['docCheckBoxId']
  $(`#${targetId}`)[0].checked = value;
};

function changeRowColor(documentList, key, color) {
  let targetId = documentList[key]['docRowId']
  $(`#${targetId}`).css('background-color', color);
};

function changeCheckBoxBackground(documentList, key, color) {
  let targetId = documentList[key]['docCheckBoxParent'];
  targetId.style.backgroundColor = color; 
}

let deSelectList = [
  'facing',
  'key',
  'letters',
  'mls',
  'commission',
  'sales report',
  'sign up',
  'profile'
]

function filterOutDocuments (documentList, filterArray) {
  let matches = findDocument(documentList, filterArray, "docNameCategoryCombined");
  Object.keys(documentList).forEach((key)=>{
    selectDocument(documentList, key, true)
  })
  matches.forEach(key=>{
    selectDocument(documentList, key, false);
    changeCheckBoxBackground(documentList, key, '#ffd9b3');
  })
}

// function showMatches(documentList) {
//   let matchArray = [];
//   let oldKeys = [];
//   Object.keys(documentList).forEach((key)=>{
//     let targetDoc = documentList[key];
//     // let {docName, docCategory, pageCount, docRowId} = documentList[key];
//     Object.keys(documentList).forEach((comparisonKey)=>{

//       console.log('hello')
//       let comparisonDoc = documentList[comparisonKey];
//       if ((key !== comparisonKey) && (oldKeys.includes(comparisonKey)===false)) {
//         let pageCompare = (targetDoc[`pageCount`] === comparisonDoc[`pageCount`]) ? true: false;
//         let categoryCompare = (targetDoc[`docCategory`] === comparisonDoc[`docCategory`]) ? true: false;
//         function nameCompare (targetDoc, comparisonDoc) {
//           let targetNameArray = targetDoc[`docName`];
//           let targetCount = targetNameArray.length;
//           let matchedWordsCount = 0;
//           targetNameArray.forEach(word=>{
//             if (comparisonDoc[`docName`].toLowerCase().trim() === word.toLowerCase().trim()){
//               matchedWordsCount += 1;
//             }
//           })
//           console.log(targetCount+' '+matchedWordsCount);

//         }        
        

//       }
//     })
//   })
// }

function showMatches(documentList) {
  let matchesArray = [];
  let keys = Object.keys(documentList);
  let count = keys.length;

  while (keys.length>0){
    let key = keys.pop();
    let targetDocument = documentList[key];
    let {docName, docCategory, pageCount, docRowId} = targetDocument;
    console.log(key);
    console.log(keys);
    
  }
}


let masterDocumentList = gatherDocumentList();
filterOutDocuments(masterDocumentList, deSelectList);
showMatches(masterDocumentList);