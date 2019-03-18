function bookSearch() {
  const searchResult = document.getElementById("searchBar").value;
  const searchResult3 = document.getElementById("searchBar3").value;
  console.log(searchResult);
  console.log(searchResult3);

  $.ajax({
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190317T233330Z.440105d49ff7d879.1ac07e1dc4a19cd8cd8226a1526f710537e59062&lang=en-de&text=${searchResult}`,
    dataType: "json",
    success(data) {
      console.log(data);
      document.getElementById("searchBar2").value = data.text;
    },
    error() {
      /*    alert(
        "There was an error accessing the API. Please try refreshing the page."
      ); */
    },
    type: "GET"
  });

  $.ajax({
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190317T233330Z.440105d49ff7d879.1ac07e1dc4a19cd8cd8226a1526f710537e59062&lang=de-en&text=${searchResult3}`,
    dataType: "json",
    success(data) {
      console.log(data);
      document.getElementById("searchBar4").value = data.text;
    },
    error() {
      /*  alert(
        "There was an error accessing the API. Please try refreshing the page."
      ); */
    },
    type: "GET"
  });
}

function collectResults() {
  alert("it works");
}

function pressButton(event) {
  if (event.keyCode === 13 && !event.shiftKey) {
    $("#searchButton").click();
  } else if (event.keyCode === 13 && event.shiftKey) {
    $("#pushResults").click();
  }
}

document
  .getElementById("searchButton")
  .addEventListener("click", bookSearch, false);

document
  .getElementById("pushResults")
  .addEventListener("click", collectResults, false);

window.addEventListener("keydown", pressButton);
