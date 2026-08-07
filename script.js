document.addEventListener("DOMContentLoaded", function () { 
    const searchInput = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");

    function searchCards() {
        const query = searchInput.value.toLowerCase().trim();
        const cards = document.querySelectorAll(".card, .tech-box, .tool-card, .why-card");

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(query)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    if (searchInput && searchButton) {
        searchInput.addEventListener("input", searchCards);
        searchButton.addEventListener("click", searchCards);
    }

    // --- In-Page Form Feedback Banner ---
    const forms = document.querySelectorAll(".contact-form");

    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

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

            feedbackMsg.textContent = "Thank you! Your message has been received successfully.";
            form.reset();
        });
    });
});