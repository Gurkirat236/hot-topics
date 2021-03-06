const container = document.querySelector('.new-content');
const links = document.querySelectorAll('header a');
let url = 'partials/home.html';

function loadContent(url){
    fetch(url).then(function (rsp) {
    return rsp.text();
  })

  .then(function (data) {
    container.innerHTML = data;
  });
}
loadContent(url);

function selectContent(event){
    event.preventDefault();
    let clicked = event.target.href;
    loadContent(clicked);
}

for (let i = 0; i < links.length; i++) {

  links[i].addEventListener("click", selectContent);

}