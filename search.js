document.body.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) // enter key
        doSearch();
})

function doSearch() {
  var inp = document.getElementById("searchbox").value;
  if (inp == null) {}
  else {
  window.location.href = "https://www.google.com/search?q=" + inp;
  }
}