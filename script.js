// Dummy search functionality
document.getElementById("searchBtn").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value.trim();
    const resultsDiv = document.getElementById("searchResults");

    if(query === "") {
        resultsDiv.textContent = "Masukkan kata kunci pencarian terlebih dahulu.";
    } else {
        // Ini bisa diganti dengan API/Database nanti
        resultsDiv.textContent = `Hasil pencarian untuk "${query}" akan ditampilkan di sini.`;
    }
});

// Form Contact Us
document.getElementById("contactUsForm").addEventListener("submit", function(e) {
    e.preventDefault(); // cegah reload halaman

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name && email && message){
        alert(`Terima kasih ${name}, pesanmu telah terkirim!`);
        this.reset(); // reset form
    } else {
        alert("Mohon isi semua field terlebih dahulu.");
    }
});

// Modal Buku
const modal = document.getElementById("bookModal");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".modal .close");

document.querySelectorAll(".book-item").forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "block";
        modalTitle.textContent = item.dataset.title;
        modalAuthor.textContent = item.dataset.author;
        modalDesc.textContent = item.dataset.desc;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});


 <script>
        // Toggle Login / Register
        const loginBtn = document.getElementById("loginBtn");
        const registerBtn = document.getElementById("registerBtn");
        const loginForm = document.getElementById("login-form");
        const registerForm = document.getElementById("register-form");

        loginBtn.addEventListener("click", () => {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        });

        registerBtn.addEventListener("click", () => {
            registerForm.style.display = "block";
            loginForm.style.display = "none";
        });

        // Dummy login
        document.getElementById("userLoginForm").addEventListener("submit", function(e){
            e.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            if(username && password){
                alert(`Login berhasil! Selamat datang ${username}.`);
                this.reset();
            } else {
                alert("Mohon isi semua field.");
            }
        });

        // Dummy register
        document.getElementById("userRegisterForm").addEventListener("submit", function(e){
            e.preventDefault();
            const name = document.getElementById("regName").value.trim();
            const email = document.getElementById("regEmail").value.trim();
            const username = document.getElementById("regUsername").value.trim();
            const password = document.getElementById("regPassword").value.trim();
            if(name && email && username && password){
                alert(`Registrasi berhasil! Selamat datang ${name}.`);
                this.reset();
                loginForm.style.display = "block";
                registerForm.style.display = "none";
            } else {
                alert("Mohon isi semua field.");
            }
        });
    </script>
</body>
</html>
