let germanResult = "";
let englishResult = "";
let firstLanguage = "en";
let targetLanguage = "de";

function bookSearch() {
  const searchResult = document.getElementById("searchBar").value;
  const searchResult3 = document.getElementById("searchBar3").value;
  console.log(searchResult);
  console.log(searchResult3);

  $.ajax({
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190317T233330Z.440105d49ff7d879.1ac07e1dc4a19cd8cd8226a1526f710537e59062&lang=${firstLanguage}-${targetLanguage}&text=${searchResult}`,
    dataType: "json",
    success(data) {
      console.log(data);
      document.getElementById("searchBar2").value = data.text;
      console.log(data.text);

      if (data.text) {
        germanResult = data.text;
      }
    },
    error() {
      /*    alert(
        "There was an error accessing the API. Please try refreshing the page."
      ); */
    },
    type: "GET"
  });

  $.ajax({
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190317T233330Z.440105d49ff7d879.1ac07e1dc4a19cd8cd8226a1526f710537e59062&lang=${targetLanguage}-${firstLanguage}&text=${searchResult3}`,
    dataType: "json",
    success(data) {
      console.log(data);
      document.getElementById("searchBar4").value = data.text;

      if (data.text) {
        englishResult = searchResult3;
      }
    },
    error() {
      /*  alert(
        "There was an error accessing the API. Please try refreshing the page."
      ); */
    },
    type: "GET"
  });
}

function deleteWriting() {
  document.getElementById("searchBar").value = "";
  document.getElementById("searchBar2").value = "";
  document.getElementById("searchBar3").value = "";
  document.getElementById("searchBar4").value = "";
  germanResult = "";
  englishResult = "";
}

function clearTranslation() {
  document.getElementById("searchBar4").value = "";
  document.getElementById("searchBar2").value = "";

  document.getElementById("searchBar3").value = "";

  if (germanResult !== "") {
    document.getElementById("searchBar").value = "";
  }

  germanResult = "";
  englishResult = "";
}

function collectResults() {
  englishResult = document.getElementById("searchBar3").value;

  document.getElementById(
    "bookContainer"
  ).innerHTML += `\n ${germanResult} ${englishResult}  `;

  clearTranslation();
}

function pressButton(event) {
  if (event.keyCode === 13 && !event.shiftKey) {
    $("#searchButton").click();
  } else if (event.keyCode === 13 && event.shiftKey) {
    $("#pushResults").click();
  } else if (event.keyCode === 8 && event.shiftKey) {
    deleteWriting();
  }
}

function toggleTabs(e) {
  if (
    e.keyCode === 9 &&
    document.activeElement === document.getElementById("searchBar3")
  ) {
    e.preventDefault();
    document.getElementById("searchBar").focus();
  } else if (
    e.keyCode === 9 &&
    document.activeElement === document.getElementById("searchBar")
  ) {
    e.preventDefault();
    document.getElementById("searchBar3").focus();
  }
}

function getSelectValue() {
  firstLanguage = document.getElementById("firstLanguageList").value;
  targetLanguage = document.getElementById("targetLanguageList").value;
}

getSelectValue();

document
  .getElementById("searchButton")
  .addEventListener("click", bookSearch, false);

document
  .getElementById("pushResults")
  .addEventListener("click", collectResults, false);

window.addEventListener("keydown", pressButton);
window.addEventListener("keydown", toggleTabs);
