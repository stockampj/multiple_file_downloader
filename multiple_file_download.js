let links = document.querySelectorAll("a");
let filteredLinks = [];
links.forEach((link)=>{
  let id = link.id;
  if (id.slice(0,8)===`GridView`) {
    let targetId = $(`#${id}`)
    filteredLinks.push(targetId);
  }
})
let interval= setInterval(clickFunction,3000,filteredLinks);

function clickFunction(filteredLinks) {
  let node = filteredLinks.pop();
  console.log(node);
  node.click();
  if (filteredLinks.length == 0) {
    clearInterval(interval);
  }
}
