// ==========================================
// ARTIFICIAL INTELLIGENCE PORTAL - SCRIPT.JS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // --- 1. Form Submission Handling (Contact & Feedback Forms) ---
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevents page reload on submission

            // Check if a feedback message element already exists
            let feedbackMsg = form.querySelector(".form-feedback-msg");
            
            if (!feedbackMsg) {
                feedbackMsg = document.createElement("p");
                feedbackMsg.className = "form-feedback-msg";
                feedbackMsg.style.marginTop = "15px";
                feedbackMsg.style.padding = "10px";
                feedbackMsg.style.backgroundColor = "#e6fffa";
                feedbackMsg.style.color = "#047857";
                feedbackMsg.style.border = "1px solid #a7f3d0";
                feedbackMsg.style.borderRadius = "6px";
                feedbackMsg.style.fontWeight = "bold";
                feedbackMsg.style.textAlign = "center";
                form.appendChild(feedbackMsg);
            }

            feedbackMsg.textContent = "Thank you! Your submission has been received successfully.";
            form.reset(); // Clear input fields after submission
        });
    });

    // --- 2. Search Bar Placeholder Interaction ---
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