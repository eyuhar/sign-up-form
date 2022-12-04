const pwInput = document.getElementById("password");
const pwConfirmInput = document.getElementById("confirm_password");
pwInput.addEventListener("change", showUnmatchingPW);
pwConfirmInput.addEventListener("change", showUnmatchingPW);

function showUnmatchingPW(){
    if (pwInput.value === pwConfirmInput.value) {
        pwInput.classList.remove("pwError");
        pwConfirmInput.classList.remove("pwError");
    }else {
        pwInput.classList.add("pwError");
        pwConfirmInput.classList.add("pwError");
    }
}