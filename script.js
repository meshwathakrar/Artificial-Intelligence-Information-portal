document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    if (searchInput && searchBtn) {
        searchBtn.addEventListener("click", function () {
            const query = searchInput.value.trim();
            if (query !== "") {
                alert("Search functionality for: '" + query + "' will be implemented in the next feature update!");
                searchInput.value = "";
            } else {
                alert("Please enter a topic to search.");
            }
        });
    }

});
