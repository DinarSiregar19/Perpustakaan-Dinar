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
