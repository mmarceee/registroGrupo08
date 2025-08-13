function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function passwordEqual() {
    document.addEventListener("DOMContentLoaded", function () {
        const btn = document.getElementById("regBtn");

        btn.addEventListener("click", function (event) {
            const pass1 = document.getElementById("password1").value;
            const pass2 = document.getElementById("password2").value;

            if (pass1 !== pass2) {
                event.preventDefault();
                showAlertError();
            } else {
                showAlertSuccess();
            }
        });
    });
}
passwordEqual();