<a id="GridView1_ctl04_lblDocName" href="javascript:__doPostBack('GridView1$ctl04$lblDocName','')">
  Contingency Removal-Disclosures and Prelim
</a>



<a id="ctl00_ctl00_ctl00_cphTPMainBodyContent_cphTCBodyContent_cphTabContent_dgTxnDocList_ctl05_lbViewDocument" title="356 Rules &amp; Regulations Acknowledgement Form 2020" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$ctl00$cphTPMainBodyContent$cphTCBodyContent$cphTabContent$dgTxnDocList$ctl05$lbViewDocument&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">
  356 Rules &amp; Regulations Acknowledgement Form 2020
</a>



javascript:__doPostBack('GridView1$ctl04$lblDocName','')

javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl00$ctl00$cphTPMainBodyContent$cphTCBodyContent$cphTabContent$dgTxnDocList$ctl05$lbViewDocument&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))

ctl00_ctl00_ctl00_cphTPMainBodyContent_cphTCBodyContent_cphTabContent_dgTxnDocList_ctl05_lbViewDocument
ctl00$ctl00$ctl00$cphTPMainBodyContent$cphTCBodyContent$cphTabContent$dgTxnDocList$ctl05$lbViewDocument

const regex1 = /ViewDocument/g;
const regex2= /_/g;
let linkId = 'ctl00_ctl00_ctl00_cphTPMainBodyContent_cphTCBodyContent_cphTabContent_dgTxnDocList_ctl05_lbViewDocument'
let targetLink= $(`#${linkId}`)
let hrefString= targetLink[0].id;
let variation1 = hrefString.replace(/_/g,'$$');
// let variation1 = hrefString.replace('ViewDocument', 'lDocName').replace(/_/g,'$$');
console.log(variation1);
let newHrefString= `javascript:__doPostBack('${variation1}','')`
targetLink[0].href = newHrefString;
console.log(targetLink[0].href)
targetLink[0].click();

javascript:__doPostBack('GridView1$ctl04$lblDocName','')
javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$ctl00$ctl00$cphTPMainBodyContent$cphTCBodyContent$cphTabContent$dgTxnDocList$ctl05$lbDocName", "", true, "", "", false, true))

// let testString = 'ctl00_ctl00_ctl00_cphTPMainBodyContent_cphTCBodyContent_cphTabContent_dgTxnDocList_ctl05_lbViewDocument'
// console.log(testString)
// let regex = /ViewDocument/g;
// let newTestString = testString.replace(regex, 'DocName');
// console.log(newTestString);

javascript:__doPostBack('ctl00$ctl00$ctl00$cphTPMainBodyContent$cphTCBodyContent$cphTabContent$dgTxnDocList$ctl05$lbDocName','')