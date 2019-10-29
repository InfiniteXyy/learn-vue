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
    update();
  });
}

document.querySelectorAll(".container").forEach(withCodeHelper);
