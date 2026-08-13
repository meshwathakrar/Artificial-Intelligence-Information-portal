// --- In-Page Form Feedback Banner (Applies to ALL forms) ---
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            // Check if it's the login form — let it redirect normally if you want
            if (form.classList.contains("login-form")) {
                return; // Let login redirect to home.html
            }

            e.preventDefault(); // Stop normal submission for contact/feedback

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
            form.reset();
        });
    });