function bookSearch() {
  const searchResult = document.getElementById("searchBar").value;
  const searchResult3 = document.getElementById("searchBar3").value;
  console.log(searchResult);
  console.log(searchResult3);

  $.ajax({
    url: `https://www.googleapis.com/books/v1/volumes?q=${searchResult}`,
    dataType: "json",
    success(data) {
      console.log(data);
      document.getElementById("searchBar2").value = searchResult;
      document.getElementById("searchBar4").value = searchResult3;
    },
    error() {
      alert(
        "There was an error accessing the API. Please try refreshing the page."
      );
    },
    type: "GET"
  });
}

document
  .getElementById("searchButton")
  .addEventListener("click", bookSearch, false);
