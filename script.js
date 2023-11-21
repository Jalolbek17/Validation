const inputs = document.querySelectorAll(".form-input");
const submitBtn = document.querySelector(".submit-btn");

function createError(input, msg) {
    var errorElement = document.createElement("p");
    var errorText = document.createTextNode(msg)
    errorElement.classList.add("error");
    errorElement.appendChild(errorText);
    input.parentNode.insertBefore(errorElement, input.nextSibling);
};

function verifyEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
};

submitBtn.addEventListener("click", () => {
    inputs.forEach((input) => {
        if (input.value === "") {
            event.preventDefault();
            if (input.nextSibling.tagName === "P") {
                input.nextSibling.textContent = "Field is required";
            } else {
                createError(input, "Field is required");
            };
        } else {
            if (input.name === "email" && verifyEmail(input.value) === false) {
                if (input.nextSibling.tagName === "P") {
                    input.nextSibling.textContent = "Enter valid email";
                } else {
                    createError(input, "Enter valid email");
                };
            } else if (input.nextSibling.tagName === "P") {
                input.nextSibling.remove();
            };
            if (inputs[2].value !== inputs[3].value) {
                event.preventDefault();
                if (inputs[3].nextSibling.tagName === "P") {
                    inputs[3].nextSibling.textContent = "Failed confirmation";
                } else {
                    createError(inputs[3], "Failed confirmation");
                };
            } else if (inputs[3].nextSibling.tagName === "P") {
                inputs[3].nextSibling.remove();
            };
        };
    });
});