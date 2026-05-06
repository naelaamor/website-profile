const newsData = {
    1: {
        title: "Perkembangan Multimedia di Era Digital",
        content: `
        Multimedia adalah kombinasi dari berbagai bentuk konten seperti teks, gambar, audio, video, dan animasi
        yang digunakan untuk menyampaikan informasi secara lebih menarik dan interaktif.

        Di era digital saat ini, multimedia banyak digunakan dalam berbagai bidang seperti pendidikan,
        hiburan, bisnis, dan teknologi. Penggunaan multimedia membantu meningkatkan pemahaman pengguna
        karena informasi disajikan secara visual dan dinamis.

        Selain itu, perkembangan teknologi seperti internet, perangkat mobile, dan software desain
        membuat multimedia semakin mudah diakses dan dikembangkan oleh banyak orang.
        `,
        source: "https://en.wikipedia.org/wiki/Multimedia"
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");

// 👉 kalau ada ID → tampilkan sesuai berita
if (id && newsData[id]) {
    showNews(newsData[id]);
} 
// 👉 kalau TIDAK ADA ID (klik menu News Detail)
else {
    showNews(newsData[1]); // default tampilkan berita utama
}

// function tampilkan berita
function showNews(data) {
    titleEl.innerText = data.title;

    contentEl.innerHTML = `
        ${data.content}
        <br><br>
        <strong>Source:</strong><br>
        <a href="${data.source}" target="_blank">
            Multimedia - Wikipedia
        </a>
    `;
}