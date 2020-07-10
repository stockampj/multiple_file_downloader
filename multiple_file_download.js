let links = document.querySelectorAll("a");
links.forEach((link)=>{
  let id = link.id;
  if (id.slice(0,8)===`GridView`) {
    console.log(id)
  }
})


// var urls = [
//   'http://example.com/file1',
//   'http://example.com/file2',
//   'http://example.com/file3'
// ]

// var interval = setInterval(download, 300, urls);

// function download(urls) {
//   var url = urls.pop();

//   var a = document.createElement("a");
//   a.setAttribute('href', url);
//   a.setAttribute('download', '');
//   a.setAttribute('target', '_blank');
//   a.click();

//   if (urls.length == 0) {
//     clearInterval(interval);
//   }
// }


// $link = $('a:first');
// $link.click()


