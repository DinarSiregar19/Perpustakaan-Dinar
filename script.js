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


// Form Login
document.getElementById("adminLoginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username === "" || password === ""){
        alert("Mohon isi semua field terlebih dahulu.");
        return;
    }

    // Dummy validation
    if(username === "admin" && password === "123456"){
        alert("Login berhasil! Selamat datang admin.");
        // Redirect ke halaman admin (bisa diganti sesuai kebutuhan)
        window.location.href = "admin.html";
    } else {
        alert("Username atau password salah.");
    }
});

