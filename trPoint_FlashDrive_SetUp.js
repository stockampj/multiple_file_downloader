//// This snippet selects all checkboxes and checks them ////

function selectAllCheckboxes() {
  Object.keys($( "[type=checkbox]" )).forEach((key)=>{
    let checkbox = $( "[type=checkbox]" )[key];
    if (checkbox.id  && checkbox.id.includes('chkSelectAll')) { checkbox.click();}
  })
}

// This snippet will gather all rows with docnames and format them into an Object//////////////////////////////


let documentList={};
let rowId = 0;
Object.keys($("tr")).forEach((key)=>{
  let row = $("tr")[key];
  if (row.children && row.children.length === 12 && !(row.classList.contains('tr-head'))){
    row.id= `docRowId-${rowId}`
    
    let docName = row.children[2].children[0].outerText;
    let docCategory = row.children[2].children[1].outerText;
    let docCheckBoxId= row.children[0].children[0].children[0].id;
    let docLinkId = row.children[2].children[0].children[0].id;

    let tempDocRows = documentList;    
    let rowObject = Object.assign({}, tempDocRows, {
      [rowId]: {
        docRowId: row.id,
        docName: docName,
        docCategory: docCategory,
        docNameCategoryCombined: `${docName.toLowerCase()} ${docCategory.toLowerCase()}`,
        docCheckBoxId: docCheckBoxId,
        docLinkId: docLinkId
      }
    })
    documentList = rowObject;
    rowId+=1;
  };
})
console.log(documentList);


