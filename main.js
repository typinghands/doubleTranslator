function bookSearch() {
  const searchResult = document.getElementById("searchBar").value;
  const searchResult3 = document.getElementById("searchBar3").value;
  console.log(searchResult);
  console.log(searchResult3);

  $.ajax({
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20140720T191145Z.05605441c6ee16dc.eaaf6c6c8690cb5fb094cea2bfec4f787af6170c&lang=en-de&text=${searchResult}`,
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
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20140720T191145Z.05605441c6ee16dc.eaaf6c6c8690cb5fb094cea2bfec4f787af6170c&lang=de-en&text=${searchResult3}`,
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

document
  .getElementById("searchButton")
  .addEventListener("click", bookSearch, false);
