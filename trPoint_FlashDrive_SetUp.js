//// This snippet selects all checkboxes and checks them ////

let checkList = $( "[type=checkbox]" )
Object.keys(checkList).forEach((key)=>{
  let checkbox = checkList[key];
  if (checkbox.id) {
    if (checkbox.id.includes('chkSelectAll')){checkbox.click();}
  }
})





