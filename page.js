var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("act");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const hamMenu = document.querySelector('.hamburger');
const offScreenMenu = document.querySelector('.off-screen');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('act2');
    offScreenMenu.classList.toggle('act2');
})

