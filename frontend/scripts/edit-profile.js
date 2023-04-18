function showChangePasswordForm() {
var overlay = document.createElement("div");
overlay.classList.add("form-overlay");
var formContainer = document.createElement("div");
formContainer.classList.add("form-container");
var form = document.createElement("div");
form.innerHTML = `
<div id="change-password-form" class="hidden">
<form id="change-psw-form">
<h2>Change Password</h2>
<label for="current-password">Current Password</label>
<input type="password" id="current-password" name="current-password" required>
<label for="new-password">New Password</label>
<input type="password" id="new-password" name="new-password" required>
<label for="confirm-password">Confirm Password</label>
<input type="password" id="confirm-password" name="confirm-password" required>
<button type="submit">Save Changes</button>
</form>
</div>
`;
form = form.children[0];
form.classList.remove("hidden");
formContainer.appendChild(form);
overlay.appendChild(formContainer);
document.body.appendChild(overlay);

var closeButton = document.createElement("button");
closeButton.innerText = "Close";
closeButton.classList.add("close-button");
closeButton.addEventListener("click", function() {
overlay.removeChild(formContainer);
document.body.removeChild(overlay);
});
formContainer.appendChild(closeButton);
}