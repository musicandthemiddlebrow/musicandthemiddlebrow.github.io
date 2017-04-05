Array.prototype.forEach.call(document.querySelectorAll("p.abstract-arrow a"), function (el) {
  el.addEventListener("click", function (e) {
    var abstractEl = el.parentNode.parentNode.querySelector("div.abstract");

    if (abstractEl.className.match(/expanded/)) {
      el.innerHTML = "&or; abstract";
      abstractEl.className = "abstract";
    } else {
      el.innerHTML = "&and; abstract";
      abstractEl.className = "abstract expanded";
    }
    e.preventDefault();
  });
});
