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
