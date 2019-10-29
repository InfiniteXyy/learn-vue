var activeCodeElement = document.getElementById("code-preview");
var codeCard = document.getElementsByClassName("card")[0];
for (var i in list) {
  list[i] = html_beautify(list[i], {
    indent_size: 2,
    space_in_empty_paren: true
  });
}
var activeCode = list["#basic"];
update();
function update() {
  activeCodeElement.innerText = activeCode;
  hljs.highlightBlock(activeCodeElement);
}

document.getElementById("close-btn").addEventListener("click", function() {
  codeCard.classList.toggle("visible");
});

function withCodeHelper(element) {
  var innerHtml = window.list["#" + element.firstElementChild.id];
  element.addEventListener("click", function(e) {
    activeCode = innerHtml;
    activate(element);
    update();
  });
}

function activate(element) {
  var el = document.querySelector(".active");
  while (el) {
    el.classList.remove("active");
    el = document.querySelector(".active");
  }
  element.classList.add("active");
}

document.querySelectorAll(".container").forEach(withCodeHelper);
