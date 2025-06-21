function escapeHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

function addTags(nameTags, link) {
    var safeName = escapeHTML(nameTags);
    var new_tags = `<a href="${link}">${safeName}</a>`;
    var khungTags = document.querySelector('.tags');
    if(khungTags) {
        khungTags.innerHTML += new_tags;
    }
}

function togglePassword(password, icon) {
    const inputpassword = document.getElementById(password);
    const isPassword = inputpassword.type === 'password';
    inputpassword.type = isPassword ? 'text' : 'password';
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
}

function closeAuthenModal() {
    const closeBtn = document.querySelector(".close__btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            document.getElementById("authen__modal").style.display = "none";
        });
    }
}

function openAuthenModal() {
    const closeBtn = document.querySelector(".openauthen__btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            document.getElementById("authen__modal").style.display = "block";
        });
    }
}