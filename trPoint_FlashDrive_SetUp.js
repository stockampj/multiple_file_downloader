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
    let docCheckBoxId= row.children[0].children[0].children[0].id;
    let docName = row.children[2].children[0].outerText;
    let docCategory = row.children[2].children[1].outerText;
    let docLinkId = row.children[2].children[0].children[0].id;

    let tempDocRows = documentList;    
    let rowObject = Object.assign({}, tempDocRows, {
      [rowId]: {
        rowId: rowId,
        rowNode: row,
        docCheckBoxId: docCheckBoxId,
        docLinkId: docLinkId,
        docName: docName,
        docCategory: docCategory
      }
    })
    documentList = rowObject;
    rowId+=1;
  };
})
console.log(documentList);






<a id="ctl00_ctl00_ctl00_cphTPMainBodyContent_cphTCBodyContent_cphTabContent_dgTxnDocList_ctl04_lbViewDocument" title="Agency From Listing Agent to Seller" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$ctl00$cphTPMainBodyContent$cphTCBodyContent$cphTabContent$dgTxnDocList$ctl04$lbViewDocument&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">Agency From Listing Agent to Seller</a>

<div class="small" style="color:GrayText; font-style:italic;">(Agency From Listing Agent to Seller)</div>