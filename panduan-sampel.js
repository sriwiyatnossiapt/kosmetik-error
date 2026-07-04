
const dataPanduan = [
    { kategori: "Lipstik/Lipglos/Lipcare", kimia: "16 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Blush On", kimia: "16 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Eye Shadow", kimia: "16 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Bedak Padat/Powder", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Pembersih Muka", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Penyegar Muka", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Hand & Body Lot", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Shampo", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Sabun mandi", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Sed Bayi Lainnya", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Parfum/Cologne", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Krim Malam", kimia: "50 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Krim Siang", kimia: "50 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Pelembab", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Mascara", kimia: "16 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Pewarna Kuku", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Skin Lightener", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Pewarna Rambut", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Masker Wajah", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Deodorant", kimia: "35 gr/ 2 kmsn", mikro: "1 kmsn min 10gr" },
    { kategori: "Anti Jerawat", kimia: "6 Kmsn @ 10gr", mikro: "1 kmsn min 10gr" }
];
function loadTablePanduan() {
    const tableBody = document.getElementById('isiTabelPanduan');
    if (tableBody) {
        let html = '';
        dataPanduan.forEach(item => {
            html += `
                <tr>
                    <td>${item.kategori}</td>
                    <td>${item.kimia}</td>
                    <td>${item.mikro}</td>
                </tr>`;
        });
        tableBody.innerHTML = html;
    }
}