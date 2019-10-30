for (var i in list) {
  list[i] = html_beautify(list[i], {
    indent_size: 2,
    space_in_empty_paren: true
  });
}
var previewComponent = new Vue({
  el: "#preview-plugin",
  template: `
    <div>
      <div :class="['card', cardVisible && 'visible']">
        <pre><code class="xml" id="code-preview"></code></pre>
      </div>
      <div id="close-btn" @click="toggleCard">
        <img src="./assets/keyboard-left-arrow-button.svg" alt="left icon">
      </div>
    </div>
`,
  data: {
    cardVisible: false
  },
  methods: {
    toggleCard() {
      if (document.getElementById("code-preview").innerText === "") return;
      this.cardVisible = !this.cardVisible;
    }
  }
});

var activeCodeElement = document.getElementById("code-preview");

function withCodeHelper(element) {
  var innerHtml = window.list["#" + element.firstElementChild.id];
  element.addEventListener("click", function(e) {
    activate(element);
    activeCodeElement.innerText = innerHtml;
    hljs.highlightBlock(activeCodeElement);
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

document
  .querySelectorAll(".container:not([disable-active])")
  .forEach(withCodeHelper);
