let links = document.querySelectorAll("a");
let filteredLinks = [];
links.forEach((link)=>{
  let id = link.id;
  if (id.slice(0,8)===`GridView`) {
    let targetId = $(`#${id}`)
    filteredLinks.push(targetId);
  }
})
console.log(filteredLinks.length);

let interval= setInterval(clickFunction,1500,filteredLinks);

let count = 0;

function clickFunction(filteredLinks) {
  let node = filteredLinks.pop();
  // console.log(node);
  count +=1;
  node.click();
  if (filteredLinks.length == 0) {
    console.log(count)
    clearInterval(interval);
  }
}
