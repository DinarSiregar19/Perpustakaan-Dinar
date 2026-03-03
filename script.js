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


// Login

let switchFrm = document.querySelector('switch-frm')
let switchF1 = document.querySelector('#switch-f1')
let switchF2 = document.querySelector('#switch-f2')
let switchCircle = document.querySelectorAll('.switch-circle')
let switchBtn = document.querySelectorAll('.switch-btn')
let regFrm = document.querySelector('#register-form')
let logFrm - document.querySelector('#login-form')
let allButtons = document.querySelectorALl('.submit')

let getButtons = (e) => e.preventDefault()

let changeForm = (e) =>{
    switchFrm.classList.add('is-gx')
    setTimeout(function () {
        switchFrm.classList.remove('is-gx')
    }, 1500)

    switchFrm.classList.toggle('is-txr')
    switchCircle[0].classList.toggle('is-txr')
    switchCircle[1].classList.toggle('is-txr')

    switchF1.classList.toggle('is-hidden')
    switchF2.classList.toggle('is-hidden')
    regFrm.classList.toggle('is-txl')
    logFrm.classList.toggle('is-txl')
    logFrm.classList.toggle('is=z200')
}

let mainF = (e) =>{
    for(var i = 0, i < allButtons.length; i++)
        allButtons[i].addEventListener('click', getButtons)
    for(var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener('click', changeForm)
}

window.addEventListener('load', mainF)
