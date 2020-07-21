//// This snippet selects all checkboxes and checks them ////

function selectAllCheckboxes() {
  Object.keys($( "[type=checkbox]" )).forEach((key)=>{
    let checkbox = $( "[type=checkbox]" )[key];
    if (checkbox.id  && checkbox.id.includes('chkSelectAll')) { checkbox.click();}
  })
}

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



function findDocument(documentList, searchTerm, property) {
  function termCleaner(string){
    return string.toLowerCase().replace(/[()]/gmi, "")
  }
  let keyResult = [];
  let term = termCleaner(searchTerm);
  let searchField= property;
  console.log(searchField)
  Object.keys(documentList).forEach((key)=>{
    let match = false;
    let comparisonField = termCleaner(documentList[key][searchField]);
    term.split(' ').forEach(word =>{
      if (comparisonField.includes(word.trim())) {match = true;}
    })
    if (match) {keyResult.push(key)};
  })
  return keyResult;
}

selectAllCheckboxes();
let masterDocumentList = gatherDocumentList();
let matches = findDocument(masterDocumentList, "agency", "docNameCategoryCombined");
console.log(matches)
