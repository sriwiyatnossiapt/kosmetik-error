// Database riwayat TMS sederhana
    const dataTMK = [
       { nama: "Agus Mira Mandiri Utama, PT", riwayat: "Asam tioglikolat (2023), Merkuri (2024)" },
  { nama: "Akasha Wira International, PT", riwayat: "Mikroba (2022), Mikroba (2025)" },
  { nama: "Alamanda Global Health, PT", riwayat: "Mikroba (2022), Mikroba (2025)" },
  { nama: "Aleyah Sintasint Farma, PT", riwayat: "Mikroba (2024), Hidrokuinon (2025)" },
  { nama: "Alfa Viktori Familia, PT", riwayat: "Metanol (2022), 1,4-Dioksan; Metanol; Mikroba; Pewarna (2023), Mikroba; Metanol; Pewarna (2024), Pewarna; Metanol (2025)" },
  { nama: "Alfa Viva Famili, PT", riwayat: "Pewarna (2023), Mikroba (2024), Pewarna (2025)" },
  { nama: "Alwinda Pratama Jaya, PT", riwayat: "Metanol (2022), Asam retinoat (2024), Asam retinoat; Steroid; Merkuri; Metanol (2025)" },
  { nama: "Amanah Kosmetik Indonesia, PT", riwayat: "Asam retinoat; Steroid; Merkuri; Metanol (2025)" },
  { nama: "Andara Cantika Indonesia, PT", riwayat: "Metanol (2024), Metanol (2025)" },
  { nama: "Anjalis Group Indonesia, PT", riwayat: "Metanol (2024), Merkuri; Mikroba (2025)" },
  { nama: "Aquila Magna, CV", riwayat: "Mikroba (2025)" },
  { nama: "Arasy Cosmetindo, CV", riwayat: "Merkuri (2025)" },
  { nama: "Arba'in Jaya Mandiri, CV", riwayat: "Mikroba (2022)" },
  { nama: "Arundathi, CV", riwayat: "Mikroba (2025)" },
  { nama: "Aryati, CV", riwayat: "Mikroba (2025)" },
  { nama: "Asfindo Barakah Mandiri, PT", riwayat: "Metanol (2023), Metanol (2024), Patogen (2025)" },
  { nama: "Asia Chemic Indonusa, PT", riwayat: "Metanol (2024)" },
  { nama: "Asia Skinlab, CV", riwayat: "Mikroba (2022), Mikroba (2023), Metanol (2024), Mikroba (2025)" },
  { nama: "Astagina, CV", riwayat: "Mikroba (2024), Metanol (2025)" },
  { nama: "Athena Royal Kosmetika, PT", riwayat: "Metanol (2024), Metanol (2025)" },
  { nama: "Aulia Citra Lestari, PT", riwayat: "Merkuri (2022)" },
  { nama: "Aulia Cosmetic Indonesia, PT", riwayat: "Mikroba (2022), Mikroba (2023), Asam retinoat; Triklosan; Mikroba (2024), Mikroba (2025)" },
  { nama: "Avicenna Sanjaya, CV", riwayat: "Mikroba (2025)" },
  { nama: "Ayara Beauty Indonesia, PT", riwayat: "Mikroba (2023), Mikroba (2025)" },
  { nama: "Ayu Jaya Lestari, PT", riwayat: "Metanol (2022), Metanol (2023), Metanol (2024)" },
  { nama: "Ayu Naturally Cemerlang, PT", riwayat: "Mikroba (2023)" },
  { nama: "Azzwars Perfume", riwayat: "Metanol (2023)" },
  { nama: "Bali Alus, PT", riwayat: "Timbal (2022)" },
  { nama: "Bali Radiance, PT", riwayat: "Mikroba (2024)" },
  { nama: "Barclay Products, PT", riwayat: "Mikroba (2023), Merkuri; Arsen (2025)" },
  { nama: "Batara Bayu Buana, CV", riwayat: "Asam retinoat (2024)" },
  { nama: "Beauty Source Indonesia, PT", riwayat: "Pewarna; Arsen; Timbal (2025)" },
  { nama: "Belle Amanah Sejahtera, PT", riwayat: "Metanol; Mikroba (2022)" },
  { nama: "Bening's Clinic", riwayat: "Metanol (2023), Hidrokuinon (2024), Hidrokuinon; Metanol; Mikroba (2025)" },
  { nama: "Berlian Kosmetik, CV", riwayat: "Hidrokuinon; Asam retinoat; Merkuri (2023)" },
  { nama: "Berlian Kosmetika Manufaktur, PT", riwayat: "Hidrokuinon (2024)" },
  { nama: "Bina Karya Prima, PT", riwayat: "Mikroba (2025)" },
  { nama: "Bucar Megatama Kosmetika, PT", riwayat: "Mikroba (2024)" },
  { nama: "Budi Andhika, PT", riwayat: "Metanol (2024)" },
  { nama: "Bungan Jepun, UD", riwayat: "Mikroba (2023)" },
  { nama: "Cahaya Asia Gemilang, PT", riwayat: "Mikroba (2025)" },
  { nama: "Cahaya Multi Mandiri, CV", riwayat: "Mikroba (2023)" },
  { nama: "Cakra Daya Makmur, PT", riwayat: "Mikroba (2022), Patogen (2025)" },
  { nama: "Cantik Jelita, CV", riwayat: "Mikroba (2023), Mikroba (2024)" },
  { nama: "Catel, CV", riwayat: "Pewarna; Arsen (2025)" },
  { nama: "Chavasindo Jaya, CV", riwayat: "Mikroba (2022), Metanol (2024)" },
  { nama: "Cipta Anugerah Bakti Mandiri, PT", riwayat: "Merkuri (2023), Mikroba (2025)" },
  { nama: "Citra Ayu Bali, UD", riwayat: "Mikroba (2024)" },
  { nama: "Citra Kosmetika Industri, PT", riwayat: "Metanol (2022), Metanol (2024)" },
  { nama: "Citra Marvella, CV", riwayat: "Metanol (2024)" },
  { nama: "Continental Cosmetic, PT", riwayat: "Mikroba (2022)" },
  { nama: "Cosline Pasifik Indonesia, PT", riwayat: "Pewarna (2025)" },
  { nama: "Cosmax Indonesia, PT", riwayat: "Metanol (2023), Metanol (2024)" },
  { nama: "Cosmetindo Global Internasional, PT", riwayat: "Merkuri (2025)" },
  { nama: "Cosmolab Prima, PT", riwayat: "Pewarna (2022), Pewarna (2023), Pewarna (2025)" },
  { nama: "Cosmotech Multi Mandiri, PT", riwayat: "Hidrokuinon (2024), Mikroba (2025)" },
  { nama: "Cressindo Kusuma, PT", riwayat: "Mikroba (2024)" },
  { nama: "Crush Global Indonesia, PT", riwayat: "Mikroba (2022)" },
  { nama: "Deavy Bening Cipta, CV", riwayat: "Mikroba (2025)" },
  { nama: "Derma Beauty Indonesia", riwayat: "Hidrokuinon (2025)" },
  { nama: "Derma Elok Farma, PT", riwayat: "Asam retinoat; Klindamisin; Steroid; Merkuri (2025)" },
  { nama: "Dermixora Morsa Asia, PT", riwayat: "Mikroba (2024)" },
  { nama: "Dian Indah Abadi, CV", riwayat: "Metanol (2022)" },
  { nama: "Dion Farma Abadi, PT", riwayat: "Metanol (2025)" },
  { nama: "Diva Asia Kosmetika, PT", riwayat: "Asam retinoat (2023), Asam retinoat (2024)" },
  { nama: "Dobha Putra Salim, PT", riwayat: "Metanol (2025)" },
  { nama: "Dua Naga Kosmetindo, PT", riwayat: "Mikroba (2022)" },
  { nama: "Dunia Cantik Indonesia, PT", riwayat: "Pewarna (2025)" },
  { nama: "Dunia Sehat Sejahtera, PT", riwayat: "Merkuri (2023)" },
  { nama: "Duta Jaya Makmur, CV", riwayat: "Metanol; Mikroba (2022), Merkuri; Metanol (2025)" },
  { nama: "Dutry Saputra Abadi, PT", riwayat: "Mikroba (2023)" },
  { nama: "Dwi Mitra Perkasa, CV", riwayat: "Pewarna (2023), Pewarna (2025)" },
  { nama: "Elshe Estetika Nusantara, PT", riwayat: "Mikroba (2025)" },
  { nama: "Enerel Kosmetik, CV", riwayat: "Merkuri; Hidrokuinon (2023), Hidrokuinon (2024)" },
  { nama: "Enerel Kosmetika Biotech, PT", riwayat: "Mikroba (2024)" },
  { nama: "Equity Cosmindo Biotech, PT", riwayat: "Merkuri (2022)" },
  { nama: "Erfi Karya Abadi, PT", riwayat: "Hidrokuinon; Metanol (2022)" },
  { nama: "Eropa Fragance Indonesia, PT", riwayat: "Metanol (2024)" },
  { nama: "Eskol Surya Anugerah, PT", riwayat: "Mikroba (2022)" },
  { nama: "Essenza Natural Indonesia, PT", riwayat: "Metanol (2024)" },
  { nama: "Estee Internasional Kosmetika, PT", riwayat: "Merkuri (2025)" },
  { nama: "Estetika Medika Utama, PT", riwayat: "Mikroba (2025)" },
  { nama: "Etercon Pharma, PT", riwayat: "Mikroba (2023)" },
  { nama: "Eva Prima Cosmetic, UD", riwayat: "Mikroba (2023), Metanol; Mikroba (2025)" },
  { nama: "Fabindo Sejahtera, PT", riwayat: "Pengawet (2024)" },
  { nama: "FCL Internasional Indonesia, PT", riwayat: "Pewarna (2024), Pewarna; Arsen (2025)" },
  { nama: "Feali Internasional Indonesia, PT", riwayat: "Metanol (2024)" },
  { nama: "Flower Beauty Corp, CV", riwayat: "Mikroba (2025)" },
  { nama: "Followme Indonesia, PT", riwayat: "Metanol (2022)" },
  { nama: "Fonda Mas, UD", riwayat: "Pewarna; Metanol (2022), Metanol (2023)" },
  { nama: "Formula Jelita Internasional, PT", riwayat: "Mikroba (2022)" },
  { nama: "Galuh Chandra Kirana, CV", riwayat: "Mikroba (2024)" },
  { nama: "Galuh Licin, UD", riwayat: "Mikroba (2022), Mikroba (2023), Mikroba (2024), Mikroba (2025)" },
  { nama: "Gautama Indah Perkasa, PT", riwayat: "Mikroba (2024), Mikroba; Timbal (2025)" },
  { nama: "Gemilang, CV", riwayat: "Hidrokuinon; Metanol (2022), Hidrokuinon; Asam retinoat (2024), Hidrokuinon; Asam retinoat; Patogen (2025)" },
  { nama: "Gemilang Ayu Perdana, PT", riwayat: "Mikroba (2025)" },
  { nama: "Gerasia", riwayat: "Mikroba (2025)" },
  { nama: "Global Estetik Medika, PT", riwayat: "Mikroba (2025)" },
  { nama: "Gloria Origita Cosmetics, PT", riwayat: "Timbal (2023), Mikroba (2024), Pewarna (2025)" },
  { nama: "Grasse Parfume, PT", riwayat: "Metanol (2024)" },
  { nama: "Hafabi, UD", riwayat: "Mikroba (2022), Mikroba (2023), Mikroba (2024)" },
  { nama: "Hana Cosmetic, UD", riwayat: "Mikroba (2022), Mikroba (2025)" },
  { nama: "Harith Sinergi Mulia, CV", riwayat: "Merkuri (2022)" },
  { nama: "Hasanayu Putri Jelita, PT", riwayat: "Mikroba (2025)" },
  { nama: "Hebe Beauty Style, PT", riwayat: "Mikroba (2024), Pewarna; Oktil Metoksi Sinamat (2025)" },
  { nama: "Her Bayu Inti, PT", riwayat: "Asam retinoat; Hidrokuinon (2025)" },
  { nama: "Herlina Indah, CV", riwayat: "Mikroba (2025)" },
  { nama: "Idlan Waranie Perkasa, CV", riwayat: "Pengawet; Mikroba (2022), Mikroba (2025)" },
  { nama: "Immortal Cosmedika Indonesia, PT", riwayat: "Mikroba (2022), Mikroba (2024), Mikroba (2025)" },
  { nama: "Implora Sukses Abadi, PT", riwayat: "Mikroba (2022), Pewarna; Arsen (2025)" },
  { nama: "Indah, UD", riwayat: "Mikroba (2025)" },
  { nama: "Indah Mulia Abadi, CV", riwayat: "Arsen (2025)" },
  { nama: "Indo Galuh Utama, PT", riwayat: "Metanol (2025)" },
  { nama: "Indo Online Pratama, PT", riwayat: "Arsen (2025)" },
  { nama: "Innova Kosmetik Indonesia, PT", riwayat: "Metanol (2022), Metanol (2024)" },
  { nama: "Inticosmetic Lestari, PT", riwayat: "Mikroba (2024), Mikroba (2025)" },
  { nama: "Javinci Berkat Kreatif Sentosa, PT", riwayat: "Pengawet (2024)" },
  { nama: "Jaya Wangi, UD", riwayat: "Metanol (2022), Metanol (2023), Metanol (2024)" },
  { nama: "Jelita Kosmetik, CV", riwayat: "Pewarna (2022)" },
  { nama: "Jenny Cosmetics, PT", riwayat: "Mikroba (2025)" },
  { nama: "Jensina Estetika, CV", riwayat: "Mikroba (2025)" },
  { nama: "JJ Top Cosmindo Jaya, UD", riwayat: "Mikroba (2024)" },
  { nama: "Joya Hougan Lestari, PT", riwayat: "Oktil metoksi sinamat; Butil metoksi dibenzoil metan; Oktil salisilat (2025)" },
  { nama: "Kaizen Aesthetic Medicore, PT", riwayat: "Mikroba; Asam salisilat (2023), Mikroba (2024)" },
  { nama: "Kaleido Kosmetik Internasional, PT", riwayat: "Merkuri (2023)" },
  { nama: "Kalista Pesona Natur, PT", riwayat: "Mikroba (2024)" },
  { nama: "Karya Iwin Insani, CV", riwayat: "Mikroba (2023)" },
  { nama: "Kitoshindo International Biotech PT", riwayat: "Mikroba (2022)" },
  { nama: "Klinik Permata Hati, CV", riwayat: "Merkuri; Minoksidil; Mikroba (2022)" },
  { nama: "Kosmetika Global Indonesia, PT", riwayat: "Oksibenzon (2022)" },
  { nama: "Kosmetikatama Super Indah, PT", riwayat: "Asam retinoat; Hidrokuinon; Merkuri (2024)" },
  { nama: "L'Oreal Indonesia, PT", riwayat: "Asam retinoat (2023)" },
  { nama: "Langit Citra Nusantara, PT", riwayat: "Mikroba (2023)" },
  { nama: "Laras Natura, CV", riwayat: "Merkuri (2022), Metanol; Mikroba (2024)" },
  { nama: "Larassanti Makmur Sejahtera, PT", riwayat: "Metanol (2024)" },
  { nama: "Latisha Derma Kosmetik, PT", riwayat: "Mikroba (2024)" },
  { nama: "Lawu Flora Wijaya, PT", riwayat: "Metanol (2023)" },
  { nama: "Leonathan Sukses Mandiri, PT", riwayat: "Mikroba (2024)" },
  { nama: "Levederm Aesthetic Clinic", riwayat: "Metanol (2023), Metanol (2024)" },
  { nama: "Lapwih Synergylab Estetika, PT", riwayat: "Mikroba (2023)" },
  { nama: "Lulur Sari Pengantin, UD", riwayat: "Mikroba (2023), Mikroba (2024)" },
  { nama: "Lulur Timung Kiara", riwayat: "Mikroba (2024)" },
  { nama: "Magicskin, CV", riwayat: "Mikroba (2024)" },
  { nama: "Mahar Dharma Putri, PT", riwayat: "Metanol (2022), Mikroba (2024)" },
  { nama: "Maia Natural, CV", riwayat: "Timbal (2022)" },
  { nama: "Mandom Indonesia Tbk, PT", riwayat: "Triklosan (2023), Timbal (2024)" },
  { nama: "Martina Berto Tbk, PT", riwayat: "Mikroba (2022)" },
  { nama: "Metro Cosmetic Indonesia, CV", riwayat: "Mikroba (2023), Mikroba (2024)" },
  { nama: "Miracle Bio Cosmetica Laboratories, CV", riwayat: "Asam retinoat; Metanol (2022), Mikroba (2023), Mikroba (2024)" },
  { nama: "Miswak Utama, PT", riwayat: "Mikroba (2024)" },
  { nama: "Mitha Skincare, CV", riwayat: "Metanol; Mikroba (2024)" },
  { nama: "Mitra Bersama Jaya, PT", riwayat: "Triklorokarbanilida (2024)" },
  { nama: "Motto Beringin Abadi, PT", riwayat: "Mikroba (2022), Mikroba (2023), Mikroba (2024), Metanol (2025)" },
  { nama: "Mount Hermon Laboratories, CV", riwayat: "Metanol (2022), Mikroba (2024)" },
  { nama: "Mulei Puspita Indonesia, PT", riwayat: "Mikroba (2023)" },
  { nama: "Mulia Kairos Industri, PT", riwayat: "Metanol (2022)" },
  { nama: "Multi Prestasi Mas, PT", riwayat: "Mikroba (2024)" },
  { nama: "Multi Produk Indonesia, PT", riwayat: "Mikroba (2024)" },
  { nama: "Mustika Ratu, PT", riwayat: "Mikroba (2022), Mikroba (2024)" },
  { nama: "Mustika Satya Nusantara, PT", riwayat: "Pewarna (2022)" },
  { nama: "Mustika Wangi, UD", riwayat: "Metanol (2022), Metanol (2023), Metanol (2024)" },
  { nama: "Namo Natural Indonesia, PT", riwayat: "Mikroba (2022), Pewarna (2024)" },
  { nama: "Natura Deca Kosmetika, PT", riwayat: "Oktil Salisilat; Mikroba (2024)" },
  { nama: "Nayue Kosmetik Indonesia, PT", riwayat: "Mikroba (2022)" },
  { nama: "Neo Kosmetika Industri, PT", riwayat: "Mikroba (2022)" },
  { nama: "New Total, PD", riwayat: "Mikroba (2022)" },
  { nama: "Nosin Indonesia, CV", riwayat: "Steroid (2025)" },
  { nama: "NR Herbal Care, CV", riwayat: "Metanol; Mikroba (2022), Mikroba (2024), Hidrokuinon; Mikroba (2025)" },
  { nama: "NSH Azizah Beauty, CV", riwayat: "Mikroba (2023), Mikroba (2024)" },
  { nama: "Paris Varnjapa Lampung, CV", riwayat: "Metanol (2023)" },
  { nama: "Pesona Mahameru, PT", riwayat: "Mikroba (2023)" },
  { nama: "Pillars Cosmetiklon Indonesia, FT", riwayat: "Mikroba (2022), Mikroba (2023)" },
  { nama: "Poedji Anugerah Sejahtera, PT", riwayat: "Mikroba (2022)" },
  { nama: "Poly Usaha Sejati, PT", riwayat: "Merkuri (2024)" },
  { nama: "Prima Mandiri Estetika, PT", riwayat: "Mikroba (2025)" },
  { nama: "Prioritas Jaya Indonesia, PT", riwayat: "Metanol; Mikroba (2022), Mikroba (2023), Metanol (2024), Mikroba (2025)" },
  { nama: "Proderma Sukses Mandiri, PT", riwayat: "Metanol (2022), Metanol (2023)" },
  { nama: "Pulchra Anugerah Sentosa, PT", riwayat: "Mikroba (2022), Metanol; Mikroba (2024), Mikroba (2025)" },
  { nama: "Pulung Jaya Selaju, CV", riwayat: "Mikroba (2024)" },
  { nama: "Pupur Bunga Tanjung, UD", riwayat: "Mikroba (2023), Mikroba (2024), Mikroba (2025)" },
  { nama: "Pureo Kosmetik Masindo, PT", riwayat: "Asam retinoat; Mikroba (2024), Asam retinoat (2025)" },
  { nama: "Puteri Rinjani, CV", riwayat: "Mikroba (2022)" },
  { nama: "Putikayo International, PT", riwayat: "Metanol (2024)" },
  { nama: "Putra Bumi Yusuf, PT", riwayat: "Mikroba (2024)" },
  { nama: "Putra Mandiri, CV", riwayat: "Pewarna (2025)" },
  { nama: "Putra Perkasa, PD", riwayat: "Mikroba (2022)" },
  { nama: "Ratansha Purnama Abadi, PT", riwayat: "Asam retinoat (2024)" },
  { nama: "Ratih Kreasi Group, CV", riwayat: "Mikroba (2025)" },
  { nama: "RDL Distribusi Indonesia, PT", riwayat: "Asam retinoat; Hidrokuinon (2023), Metanol (2024)" },
  { nama: "Rembaka, PT", riwayat: "Asam retinoat (2024)" },
  { nama: "Resik Mitra Anugerah, PT", riwayat: "Asam retinoat (2023), Deksametason; Asam retinoat (2024)" },
  { nama: "Reyasa Nandamar Indah, CV", riwayat: "Mikroba (2025)" },
  { nama: "Rezky Jaya Borneo, CV", riwayat: "Mikroba (2023), Mikroba (2024)" },
  { nama: "Rias Maju Sejahtera, CV", riwayat: "Pewarna (2022), Timbal (2023), Timbal (2024), Pewarna (2025)" },
  { nama: "Rohto Laboratories Indonesia, PT", riwayat: "Mikroba (2024), 1,4-Dioksan (2025)" },
  { nama: "Romos Inti Cosmetic Industries, PT", riwayat: "Asam tioglikolat (2024)" },
  { nama: "RRA Ratu Beauty, PT", riwayat: "Mikroba (2025)" },
  { nama: "Rudy Soetadi, PT", riwayat: "Merkuri (2025)" },
  { nama: "Sagara Purnama, PT", riwayat: "Asam retinoat; Hidrokuinon; Mikroba (2024)" },
  { nama: "Sandrica Beauty Derma, PT", riwayat: "Metanol (2022), Asam retinoat; Hidrokuinon (2023), Steroid; Asam retinoat; Hidrokuinon (2024), Steroid; Asam retinoat; Hidrokuinon (2025)" },
  { nama: "Sarana Inter Cosindo, PT", riwayat: "Mikroba (2024)" },
  { nama: "Satya Pranata Jaya, PT", riwayat: "Metanol (2022), Metanol (2023), Metanol (2024)" },
  { nama: "Sejahtera Baru, UD", riwayat: "Metanol (2022), Metanol (2023)" },
  { nama: "Sekar Jagat, UD", riwayat: "Mikroba (2022), Mikroba (2023), Mikroba (2024), Mikroba (2025)" },
  { nama: "Sekar Jawi, UD", riwayat: "Mikroba (2022), Mikroba (2024)" },
  { nama: "Sekar Sari Alam, PT", riwayat: "Mikroba (2025)" },
  { nama: "Sekawan, CV", riwayat: "Triklosan; Mikroba (2022)" },
  { nama: "Selamat Makmur, PT", riwayat: "Pewarna (2022), Pewarna; Timbal; Mikroba (2023)" },
  { nama: "Semarak Sukha, PT", riwayat: "Metanol (2024), Oktil salisilat (2025)" },
  { nama: "Semeloto, UD", riwayat: "Mikroba (2022)" },
  { nama: "Sidomukti Megah Perkasa, PT", riwayat: "Metanol; Mikroba (2022), Mikroba (2024)" },
  { nama: "Sinar Antjol, PT", riwayat: "Asam retinoat; Hidrokuinon; Merkuri; Pewarna; Steroid (2025)" },
  { nama: "Sinergi Integra Prima, PT", riwayat: "Mikroba (2025)" },
  { nama: "Siwak Utama, PT", riwayat: "Mikroba (2023)" },
  { nama: "SJA Global Cosmindo, PT", riwayat: "Mikroba (2022)" },
  { nama: "Skin Kosmetika Chandra, CV", riwayat: "Mikroba (2024), Mikroba (2025)" },
  { nama: "Sri Tanjung, PO", riwayat: "Metanol; Mikroba (2023)" },
  { nama: "Star Abadi Ratu Indonesia, PT", riwayat: "Mikroba (2024), Mikroba (2025)" },
  { nama: "STC Sarana Estetika, PT", riwayat: "Mikroba (2024), Mikroba (2025)" },
  { nama: "Sukma Skin Treatment, PT", riwayat: "Pewarna (2025)" },
  { nama: "Sumber Aroma Baru, PT", riwayat: "Metanol (2024)" },
  { nama: "Sunggal Inti Makmur, PT", riwayat: "Metanol (2022), Metanol (2024), Mikroba (2025)" },
  { nama: "Surya Dermato Medica Laboratories, PT", riwayat: "Mikroba; Metanol (2024), Metanol (2025)" },
  { nama: "Syradz Indo Global, CV", riwayat: "Metanol (2023)" },
  { nama: "Team Rumah Cantik Bintan, PT", riwayat: "Merkuri; Mikroba (2023)" },
  { nama: "Tempo Utama Sejahtera, PT", riwayat: "Mikroba (2022), Metanol (2024)" },
  { nama: "Tjhindatama Mulia, PT", riwayat: "Pewarna (2022), Pewarna; Mikroba (2025)" },
  { nama: "Tri Putri Ayu, PD", riwayat: "Mikroba (2022), Mikroba (2025)" },
  { nama: "Tritunggal Sinarjaya, PT", riwayat: "Mikroba (2025)" },
  { nama: "UICCP Indonesia, PT", riwayat: "Merkuri (2025)" },
  { nama: "United Farmatic Indonesia, PT", riwayat: "Oktil salisilat (2025)" },
  { nama: "Urban Indo Manufaktur, PT", riwayat: "Metanol (2022), Mikroba (2023)" },
  { nama: "Usaha Mandiri Makmur, PT", riwayat: "Mikroba (2025)" },
  { nama: "Usaha Sekawan Farmasi, PT", riwayat: "Asam salisilat (2025)" },
  { nama: "Varia Niaga Sukses, PT", riwayat: "Pengawet (2024), Pengawet; Mikroba (2025)" },
  { nama: "Vavindo Global Kosmetika, PT", riwayat: "Merkuri (2023)" },
  { nama: "Victoria Care Indonesia, PT", riwayat: "Mikroba (2022), Mikroba (2023), Pengawet; Mikroba (2024)" },
  { nama: "Vitapharm, PT", riwayat: "Timbal (2022), Timbal (2023)" },
  { nama: "Wahana Kosmetika Indonesia, PT", riwayat: "Mikroba (2022), Metanol (2024)" },
  { nama: "Young Kosmetikindo, CV", riwayat: "Mikroba (2022), Mikroba (2023), Mikroba (2025)" },
  { nama: "Yubina Clinic", riwayat: "Asam retinoat (2025)" },
  { nama: "ZN Zayan Glow Skincare", riwayat: "Asam retinoat (2024)" },
  { nama: "Zoey Cosmedika Putra, PT", riwayat: "Asam retinoat; Flucinolon; Hidrokuinon (2025)" },
  { nama: "Zogi Cosmeceutical, PT", riwayat: "Mikroba (2023)" },
  { nama: "Zweena Adi Nugraha, CV", riwayat: "Mikroba (2023), Mikroba (2024)" }

    ];

    const databasePenotif = [

  // --- NEGARA: THAILAND ---
  { nama: "Aladdin Sarana Indonesia, PT", negara: "Thailand" }, // [cite: 22]
  { nama: "Alliance Cosmetics, PT", negara: "Thailand" }, // [cite: 22]
  { nama: "Amindoway Jaya, PT", negara: "Thailand" }, // [cite: 22]
  { nama: "Anugerah Pharmindo Lestari, PT", negara: "Thailand" }, // [cite: 22]
  { nama: "Aroma Abadi, PT", negara: "Thailand" }, // [cite: 22]
  { nama: "Aroma Bintang Asia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Balindojaya Sejahtera, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Beiersdorf Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Better Way Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Bima Artha, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Bintang Fajar Abadi, CV", negara: "Thailand" }, // [cite: 23]
  { nama: "Bio Lotus Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Cekindo Business International, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Citra Gemilang Prima, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Citra Usaha Lamindo, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Colgate Palmolive Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Darya-Varia Laboratoria Tbk, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "DFI Retail Nusantara Tbk, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Dhifa Pasti Sukses, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Distribusi Kesehatan dan Kecantikan Nusantara, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Duta Indonesia Permai, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Duta Intidaya Tbk, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Era Ventura Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Eres Revco, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Formasi Kreasi Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Giffindo Sukses Perkasa, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Glori Global Sukses, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Granton Marketing, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Haleon Indonesia Trading, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Infiniti Marvela Estella, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Infiniti Marvela Levana, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Inova Pharmaceuticals Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Johnson & Johnson Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "KK Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "KKI Nusantara Sukses, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Koleksi Jaya, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Kurnia Cosmolab Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Laneige Indonesia Pacific, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "L'Oreal Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Manna Indo Selaras, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Mega Lifesciences, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Miano Esensial Jaya, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Mimi Global Asia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Mitra Bersama Jaya, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Mitra Selaras Sempurna, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Monica Lestari, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Muaq Berkah Sejahtera, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Multi Indocitra Tbk, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Naraay Anugerah Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Narchi Gold Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Natural Alam Abadi, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Niaga Warna Persada, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Nosredna, CV", negara: "Thailand" }, // [cite: 23]
  { nama: "Nu Skin Distribution Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Panen Selaras Adiperkasa, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Paragon Technology And Innovation, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Parama Global Inspira, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Procter & Gamble Home Products Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Procter & Gamble Operations Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "PZ Cussons Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Rahmat Eka Yaksa, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Raja Asia Perkasa, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Ran Kosmetik Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Siam Nusantara Sinergi, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Social Bella Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Soho Industri Pharmasi, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Sukses Kalimantan Struktur, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Tanamas Kosmetik Indonesia, PT", negara: "Thailand" }, // [cite: 23]
  { nama: "Testing Varperush, PT", negara: "Thailand" }, // [cite: 27]
  { nama: "Tirta Buana Indoraya, PT", negara: "Thailand" }, // [cite: 27]
  { nama: "Trilestari Indometika Sejati, PT", negara: "Thailand" }, // [cite: 27]
  { nama: "UICCP Indonesia, PT", negara: "Thailand" }, // [cite: 27]
  { nama: "Unilever Enterprises Indonesia, PT", negara: "Thailand" }, // [cite: 27]
  { nama: "Unilever Indonesia Tbk, PT", negara: "Thailand" }, // [cite: 27]
  { nama: "Unirama Sukses Internasional, PT", negara: "Thailand" }, // [cite: 27]
  { nama: "Universal Jaya Sentosa, PT", negara: "Thailand" }, // [cite: 27]
  { nama: "Varia Niaga Sukses, PT", negara: "Thailand" }, // [cite: 27]
  { nama: "Victoria Care Indonesia Tbk, PT", negara: "Thailand" }, // [cite: 27]
  { nama: "Wicaksana Overseas International Tbk, PT", negara: "Thailand" }, // [cite: 27]

  // --- NEGARA: FILIPINA ---
  { nama: "Darya-Varia Laboratoria Tbk, PT", negara: "Filipina" }, // [cite: 30]
  { nama: "Lloyd Laboratories Indonesia, PT", negara: "Filipina" }, // [cite: 30]
  { nama: "RDL Distribusi Indonesia, PT", negara: "Filipina" }, // [cite: 30]
  { nama: "UICCP Indonesia, PT", negara: "Filipina" }, // [cite: 30]
  { nama: "Unilever Enterprises Indonesia, PT", negara: "Filipina" }, // [cite: 30]
  { nama: "Unza Vitalis, PT", negara: "Filipina" }, // [cite: 30]

  // --- NEGARA: TIONGKOK (BAGIAN 1: 1-139) ---
  { nama: "Abeaudy Sukses International, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Aepura Kosmetik Indonesia, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Aestetika Sejahtera Nusantara, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Agung Mulia Chemindo, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Agung Sejahtera, CV", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Akasha Wira International Tbk, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Alfa Viva Famili, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Alia Kreasi Cantika, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Aliyachat Sukses Sejahtera, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Alliance Cosmetics, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Alpha Bella Pasifik, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Alpha Delta Nusantara, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Amara Maju Jaya, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Amindoway Jaya, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Amira Estetika Mulia, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Anak Seneng Sejahtera, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Aneka Digital Online, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Annerolyn Sukses Indonesia, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Antar Benua Bersaudara, CV", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Ante Ecommerce Indonesia, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Anugerah Bangun Jelita, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Anugerah Familindo Lestari, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Anugerah Filia Asia, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Anugerah Indoraya Cemerlang, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Anugerah Raja Mizumi, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Anugrah Inti Persada, CV", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Anve Estetika Indonesia, CV", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Aroma Abadi, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Aroma Bintang Asia, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Aromatik International Indonesia, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Arta Anugerah Trading, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Asanka Wijaya, CV", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Asia Anugerah Biologis, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Astra Taipan Indonesia, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Attamana, CV", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Aurora Cosmo Beauty, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Aurora Enam Mentari, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Aventrada Jaya Dharma, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Avione Surya Cemerlang, PT", negara: "Tiongkok" }, // [cite: 38]
  { nama: "Avo Innovation Technology, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Ayu Agung, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bahagia Mandiri Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bali Babe Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bansko Btater Global, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Barclay Products, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "BBG Trada Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Beach Street Asia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Beamarry Indonesia Makmur, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Beaute Luxe Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Beautika Cipta Mandiri, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Beautimax Kosmetika Berjaya, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Beauty Bath Concept International, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Beauty Essential Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Beauty Source Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bensen Guna Mandiri, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Berhan, CV", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Berkah Tiga Matahari, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Berkilau Cantik Alami, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bersama Perawatan Cantik, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Better Way Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bima Artha, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bintang Busana Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bintang Cemerlang, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bintang Semesta Cakrawala, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bio Secret Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Biying Biotech International, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Blue Origin International, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Boehls Cosmetics Trading, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bonnie Coo Beauty, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Botryo Herba Bioteknologi, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Brahma Tek Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Budi Jaya Amenities, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bunee Sejaya", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bunto Mulia Abadi, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Bydesign Cipta Graha Indah, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cahaya Asia Gemilang, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cahaya Aurora Makmur, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cahaya Cantika Nusantara, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cahaya Daring Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cakra Daya Makmur, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Callysta Abadi Sejahtera, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cantika Tanjaya Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cantikme Beautycare Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Catel, CV", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cekindo Business International, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cerah Semesta Gemilang, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Chosen Mitra Abadi, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Christopher Tarigans Concept, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cikos Indonesia, PT", negara: "Tiongkok" }, // [cite: 40]
  { nama: "Cipta Makmur Utama, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Citra Alam Aromindo, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Citra Harapan Anugrah, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Citra Kosmetika Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Citra Nusa Insan Cemerlang, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Citra Pasifik Kosmetik, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Citra Pratama Kosmetindo, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Citra Usaha Lamindo, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Claira Usaha Sukses, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Cle Cosmetics International, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Cobra Dental Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Cocosight Beauty International, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Colgate Palmolive Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Cosme Jaya Utama, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Crystal Beauty Solution, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dargiss Inti Sejahtera, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dawey Etech Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dedi Jaya Sentosa, CV", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Delight Connection Cosmetics Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dewha Skincare Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dewi Maju Bahagia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dexter International Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Diamante Abadi Jaya, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dipori Kreatif Rekatama, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Distribus Kesehatan dan Kecantikan Nusantara, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Doctor Kim Biotech Beauty, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Doctor Plant Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dojako Kosmetik Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dongbang Medical Global, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dream Skin Care, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dresyee Kosmetik Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dua Srikandi Lestari, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Dunia Kecantikan Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Duta Cantik Dewata, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Duta Intidaya Tbk, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Efja, CV", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Eka Jaya Internasional, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Ekawangsa Alexindo, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Ekspedisi Data Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Elc Beauty Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Emerald Cipta Utama, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Empower Beauty Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Enchanted Beauty Sparkle, CV", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Era Ventura Indonesia, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Eres Revco, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Esa Jaya Makmur Abadi, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Estetika Infiniti Makmur, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Estetika Pro International, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Evaglow Skin Essen, PT", negara: "Tiongkok" }, // [cite: 42]
  { nama: "Evo Sinergi Asia, PT", negara: "Tiongkok" }, // [cite: 42]

  // --- NEGARA: TIONGKOK (BAGIAN 2: 140-288) ---
  { nama: "Evy Beautrec, CV", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Eye 1 Indo Investment, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Fabindo Sejahtera, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Fajar Makmur Abadi, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "FCL Internasional Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Feali Internasional Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Fensoye Beauty Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Feodora Makmur Abadi, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Focusee Technology Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Forever Nurture Internasional, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Formasi Kreasi Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Formula Inti Raharja Sinarmas Tridjaya, CV", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Fortuna Arunika Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Fyc Maju Terus, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Gabrielle Odette Dwitunggal, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Gajah Gading Mas, CV", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Gellin, UD", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Genero Pharmaceuticals, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Global Energy Alkesindo, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Global Green International, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Global Jaya Ultima, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Global Kreasi Indah, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Global Laboratory, CV", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Global Next Biotech, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Global Nutri Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Global Trade Internusa, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Glori Global Sukses, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Gloria Origita Cosmetics, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Gmee Technology Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Golden Belle Global, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Gondowangi Tradisional Kosmetika, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Good Sale Tech, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Graha Supra Mandiri, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Greenleaf Global Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Guna Sarana Meditama", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Guoyu Feng Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Hae Cahaya Global, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Haimeili Jaya, CV", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Haleon Indonesia Trading, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Happi Kosmetik Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Harta Cosmo Mestika Indah, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Has Maju Sejahtera, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Hawley & Hazel Distribution Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Hebe Beauty Style, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Hello White Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Herca Cipta Dermal Perdana, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Heros Sagita Fortino, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Hexze Cosmetic Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Hidup Senantiasa Senyum, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Himalaya Wellness Indonesia, PT", negara: "Tiongkok" }, // [cite: 44]
  { nama: "Hobe Bar Indonesia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Huagao Trading International, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Huaho Glorious Innovation, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Hypefast Distribusi Nusantara, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Indah Cahaya Group, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Indah Mulia Abadi, CV", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Indo Chic Trading, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Indo Jaya Kosmetik, CV", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Indo Online Jaya, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Indo Online Pratama, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Indo Tama Glory, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Indocos Global Trading, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Indotama Sentosa Lestari, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Inow Global Internasional, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Inspirasi Untuk Wanita, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Inti Kreasi Indonesia, CV", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Inti Muda Andalan, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Ivy Beauty Collection, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jakarta Digital Nusantara, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jala Indonesia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Java Global Kosmetika, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Javinci Berkat Kreatif Sentosa, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jay Ecommerce Indonesia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jaya Indah Abadi Niaga Gemilang, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jaya Rahayu Bahagia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jaysuling Cosmetics Beauty, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "JEC Kosmetik Indo, CV", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jelita Anugerah Indonesia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jelita Indah Berseri, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jenny Cosmetics, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jichong Trada Indonesia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jimon Group Indonesia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "JNR Sosial Indonesia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Joint Synergy Indonesia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Jowell Group Indonesia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kaleido Kosmetik Internasional, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kalimas Mitra Perkasa, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kammacitta Ekspor Impor, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kao Indonesia Distribution, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kapuas Lintas Utama, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Karya Arsa Loka, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kecantikan Permata Indo, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kei Nusantara Persada, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Keva Cosmetics Internasional, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kilau Abadi Sempurna, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kilau Interfarma Sakti, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kilau Pesona Tsaritsa, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Kinara Sinergi Aura, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "KKV International Indonesia, PT", negara: "Tiongkok" }, // [cite: 46]
  { nama: "Koleksi Jaya, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Komar Cosmetics Technology, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Kosme Pusat Distribusi, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Kreasi Pesona Alami, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Kyo Cipta Kosmetindo Nirmala, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Laif Untuk Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Laleah Kosmetik Indo, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lanbena Trada International, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Laskar Ayu Pertiwi, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lautan Mas Sunardi, CV", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lestari Estetik Indah, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lets Cosmetic Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lets Glow Group International, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lily Kreasi Inovasi, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lime International Trading, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lincorp Indo Nusa, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lintas Mitra Perkasa, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lion Wings, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Livas Wijaya Global, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Liya Cosmetics Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Loe Cantik Kita Cuan, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lola Rose Beauty Trading, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "L'Oreal Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lsy Makmur Sentosa, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Lumi Kosmetik Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Luna Woo Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Luxasia Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "MS Union International, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Mag Niaga Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Mahar Dharma Putri, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Mahkota Indah Internasional, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Maju Kirana Gemilang, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Maklonlab Global, CV", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Makmur Sinar Sejati, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Mandom Indonesia Tbk, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Manggala Sukses Bersama, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "MAP Aktif Adiperkasa Tbk, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "MAQ Indonesia Abadi, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Market America Indonesia Imports, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Marnia International Cosmetik, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Marui Solusindo Atmadja, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Matahari, CV", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Matahari Indonusa, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Matso Sukses Makmur, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Maximus Retail Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "May Sun Yvan, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Maya Cosmetics Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Mazta Farma, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Mega Payung Mas Sakti, PT", negara: "Tiongkok" }, // [cite: 48]
  { nama: "Meishang Kosmetik Indonesia, PT", negara: "Tiongkok" }, // [cite: 48]

  // --- NEGARA: TIONGKOK (BAGIAN 3: 289-438) ---
  { nama: "Mekar Abadi Sentosa Jaya, CV", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Melional Bintang Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Merita Abadi Sejahtera, CV", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Metoo Beauty International, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "MGI Nusantara Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Miduo Commercial Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mimi Global Asia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Minika Perfekta Mandiri, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Miniso Lifestyle Trading Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Miraigo Teknologi Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mister Wish Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mitra Cantik Alami, CV", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mitra Laras Sukses, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mitra Mas Sentosa, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mitra Selaras Sempurna, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Miya Ecommerce Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mjoptim Indonesia Abadi, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Monica Lestari, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Moseco Cantik Sejahtera, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Muaq Berkah Sejahtera, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Multi Berkat Pratama, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Multi Indocitra Tbk, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Multi Kosmetik Lestari, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Multi Safe Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mumuso Trading Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mustika Indah Sejahtera, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mustika Ratu Tbk, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mustika Satya Nusantara, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mutiara Cantika Bersama, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Mutiara Erly Sejahtera, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "My Everything Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Naga Perkasa Group, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Nagatama Synergy Corp, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Napolopersada Abadi, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Naraay Anugerah Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Narchi Gold Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Natura Deca Kosmetika, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Natura Pesona Mandiri, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Nave Mega Nusantara, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Nayue Kosmetik Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Nayue Skin Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Niaga Warna Persada, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "North West Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Nosredna, CV", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Nu Skin Distribution Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Nurraysa Global Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Ocineid Global Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Office Fashion Indonesia, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Oktagon Inti Pasifik, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Oliken Abadi Jaya, PT", negara: "Tiongkok" }, // [cite: 50]
  { nama: "Onesmile Distribution Indonesia, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Onix Teknologi Makmur, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Onmouse Trading Group, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Oriflame Cosmetics Indonesia, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Otwoo Cosmetic Indonesia, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Ozzaskin Cantik Muda Alami, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Palm Burnet Rumania, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Panca Talentamas, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Panen Selaras Adiperkasa, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Pangestu Jaya Abadi, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Paragon Technology and Innovation, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Parama Global Inspira, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Pasifik Distribusi Indonesia, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Passportindo Asia Global, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Paten Jaya Abadi, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "PBL Perdagangan International, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Pentanika Warna Indonesia, CV", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Pepper Prime Trading, PT", negara: "Tiongkok" }, // [cite: 51]
  { nama: "Perdagangan Selera Bumi, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Pesona Gemilang Sejahtera, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Pesona Indah Kosmetik, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Pharmex Global Astrindo, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Phileo Republik Perkasa, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Pink Pick Indonesia, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Pink Wistle Decoration, CV", negara: "Tiongkok" }, // [cite: 52]
  { nama: "PMY Trada Indonesia, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Premiere Beaute Kosmetik, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Prima Sinergi Internasional, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Priskila Prima Makmur, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Procter & Gamble Home Products Indonesia, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Putikayo International, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Putra Mandiri, CV", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Putri Gemilang Berkarya, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Qianfan Biotechnology International, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Qincai Cosmetic Internasional, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Ravalindo Megah Perkasa, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Relindo Multi Cipta, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Rembaka, PT", negara: "Tiongkok" }, // [cite: 52]
  { nama: "Remedy Natural Indonesia, PT", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Remimpi Kosmetik Indonesia, PT", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Royal Pesona Indonesia, PT", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Royal Tata Visindo, PT", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Rui Lang Technology, PT", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Rusen Trading Indonesia, PT", negara: "Tiongkok" }, // [cite: 53]
  { nama: "S & R, CV", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Sabang Merauke Trading, PT", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Sahabat Perawatan Kulit Optimal, PT", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Sai Indonesia, PT", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Samudera Lindo Group, CV", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Samudera Makmur Jaya, PT", negara: "Tiongkok" }, // [cite: 53]
  { nama: "Sangpyo Bersinar Indonesia, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Saras Subur Abadi, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Sarua Subur, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Satya Pranata Jaya, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Saudara Ekatama Jaya, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Sekar Estetik Aura, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Sekawan Kosmetik Wasantara, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Selfinc Retail Indonesia, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Semarak Sukha, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Semoga Berkah Sukses Tiga, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Sentra Digimarket, CV", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Senyum Karya Muda, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Sephora Indonesia, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Serendippo Makmur Abadi, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Shanghe Keji Indonesia, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Shangyang Technology Indonesia, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Sheng Fei Rui, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Sheva Jordan Bersama, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Shunda Sejahtera Indonesia, PT", negara: "Tiongkok" }, // [cite: 54]
  { nama: "Siap Kirim Indonesia, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sinar Gemilang Kosmetik, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sinar Grastesse, CV", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sinar Mulia Kosmetik, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sinar Omega Sejahtera, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sinar Terang Megantara, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sinergi Karisma Indonesia, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sinergia Beaute Indonesia, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sing Foo Cosmetic, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Skin Future Lab Indonesia, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Skin Kosmetika Chandra, CV", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sninety Nine Corp, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Social Bella Indonesia, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sonaf Cosmetic Indonesia, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Spring Letter Indonesia, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Star Mandiri Global, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Suaka Kecantikan Indonesia, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sukses Agung Sentosa, CV", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sumber Ayu Cemerlang, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sumber Kosmetika Indah, PT", negara: "Tiongkok" }, // [cite: 55]
  { nama: "Sumber Teguh Jaya, PT", negara: "Tiongkok" }, // [cite: 56]
  { nama: "Sumed Jaya Abadi, PT", negara: "Tiongkok" }, // [cite: 56]
  { nama: "Summer Fix Indonesia, PT", negara: "Tiongkok" }, // [cite: 56]
  { nama: "Sunoro Trading Indonesia, PT", negara: "Tiongkok" }, // [cite: 56]
  { nama: "Suntone Wisdom Indonesia, PT", negara: "Tiongkok" }, // [cite: 56]
  { nama: "Super Home Product Indonesia, PT", negara: "Tiongkok" }, // [cite: 56]
  { nama: "Surya Kemenangan Sejahtera, PT", negara: "Tiongkok" }, // [cite: 56]
  { nama: "Swanbella Pesona Makmur Abadi, PT", negara: "Tiongkok" }, // [cite: 56]
  { nama: "Takara Professional Indonesia, PT", negara: "Tiongkok" }, // [cite: 56]
  { nama: "Talent International Indonesia, PT", negara: "Tiongkok" }, // [cite: 56]
  { nama: "Tan Kosmetika Dunia, PT", negara: "Tiongkok" }, // [cite: 56]

  // --- NEGARA: TIONGKOK (BAGIAN 4: 439-500) ---
  { nama: "Teguh Pesona, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "The Nail Shoppe, CV", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Thevan Wellknown Trade, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Thriveways Trading Indonesia, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tian Xing Cloud Supply Chain Indonesia, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tiens Indonesia Logistics Trading, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tiga Lab Anugrah, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Timmi Commerce Perdagangan, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tiros Jaya Bersama, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tirta Kumala Sari, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tirta Surya, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tissor Indonesia, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tjhindatama Mulia, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tona Sukses Indonesia, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Top Glow Indonesia, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tosyen Omni Potensi, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Toys Games Indonesia, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Tri Sentosa Abadi, PT", negara: "Tiongkok" }, // [cite: 57]
  { nama: "Trilestari Indometika Sejati, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Triniti Tunggal Abadi, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Trio Jaya Kosmestika, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Trio Kosmetika Indonesia, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Trivk Maju Bersama, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Trueve Mitra Indonesia, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Tuva Global Utama, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Ubeauty Cosmetics Indonesia, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Ultra Moon Media, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "UMC Media Indonesia, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Unibio Indonesia, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Unilever Enterprises Indonesia, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Unitary Cosmetic Group, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Unza Vitalis, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Uplus Technology Indonesia, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Urban Beauty Indonesia, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Vasa Star Indonesia, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Velindo Estetika Kosmetik, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Vendome Aroma Beauty, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Vibrant Glamour Beauty, PT", negara: "Tiongkok" }, // [cite: 58]
  { nama: "Victoria Care Indonesia Tbk, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "Vigor Trading Group, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "Vitalveil Investment Indonesia, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "Vitamin Organik Indonesia, CV", negara: "Tiongkok" }, // [cite: 59]
  { nama: "Vitapharm, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "Vitta Natura Kosmetika, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "VNV Mitra Lestari, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "Wahana Putra Akipindo, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "Wanfu Glow Indonesia, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "Wellz Life Global, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "Winida Lestari International, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "Winmax Inovasi Indonesia, PT", negara: "Tiongkok" }, // [cite: 59]
  { nama: "WNW Indonesia, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Woleco Amenities & Accessories, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Wook Global Technology, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Xianghui Trading Indonesia, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Xiao Yao Teknology, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Xing Jian Maoyi, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Xingchen Cosmetics International Trade, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Yes San International, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Yin Jie International Trading, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Young Vision Kosmetik Indonesia, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Yozzi Jaya Indonesia, PT", negara: "Tiongkok" }, // [cite: 60]
  { nama: "Yunyi Ecommerce Indonesia, PT", negara: "Tiongkok" } // [cite: 60]
    ];

    const dataKategori = {
        "Kosmetik Beresiko Tinggi": ["Sediaan bayi","Sediaan pewarna rambut", "Sediaan perawatan wajah", "Sediaan rias mata dan perawatan sekitar mata", "Sediaan rias wajah (perona pipi)", "Sediaan rias bibir (lip color)", "Sediaan parfum (eau de cologne)", "Sediaan pewarna kuku"],
        "Kosmetik dengan riwayat Tidak Memenuhi Syarat": ["Sediaan untuk alis (pensil alis)", "Eye shadow", "Eye liner", "Blush on", "Bedak padat/ compact powder", "Pembersih kulit muka", "Mascara", "Eye Make Up Remover", "Penyegar kulit muka/toner", "Lip colour, Lip liner, Lip glos, Lip care", "Pewarna kuku", "Sediaan parfum (eau de cologne)", "Krim pencerah/Skin lightener", "Eau de Toilette/ Eau de Parfume/ Eau de Cologne/ Parfume", "krim siang", "krim malam", "Sediaan tabir surya"],
        "Kosmetik yang disampling secara mandiri oleh UPT": ["Kosmetik yang diproduksi negara Filipina", "Kosmetik Prioritas", "Kosmetik kasus khusus (Wasprod)", "Mainan berkosmetik", "Kosmetik yang diproduksi negara Thailand","sediaan untuk kulit berjerawat"],
        "Kosmetik yang diproduksi negara Tiongkok": ["Krim malam", "Krim Siang/ Day Cream", "Masker Wajah", "Bedak padat/ compact powder", "Eye Make Up Remover", "Lip colour, Lip liner, Lip glos, Lip care", "Mascara", "Pelembab/ Moisturiser", "Pembersih Kulit Muka", "Eau de Toilette/ Eau de Parfume/ Eau de Cologne/ Parfume", "lipstik"],
        "Kosmetik yang dibuat berdasarkan kontrak produksi": ["Day Cream", "Night Cream", "Eau de Toilette/ Eau de Parfume/ Eau de Cologne/ Parfume", "Sediaan tabir surya", "Skin aging product", "Pembersih kulit muka", "Penyegar kulit muka/toner", "Pelembab/ Moisturiser", "Krim pencerah/Skin lightener"],
        "Kosmetik yang dibuat berdasarkan kuasa merek": ["Day Cream", "Night Cream", "Perawatan Kulit Badan Tangan/ Hand Body Lotion", "Eau de Toilette/ Eau de Parfume/ Eau de Cologne/ Parfume", "Pembersih kulit muka", "Penyegar kulit muka/toner", "Pelembab/ Moisturiser", "Lip colour, Lip liner, Lip glos, Lip care", "Bedak padat/ compact powder", "Bedak wajah", "Hair Body wash", "Baby Hair Body wash"],
        "Kosmetik menengah ke bawah": ["Krim malam","Krim siang", "Bedak padat/ compact powder", "Pembersih kulit muka", "Lem bulu mata", "Eye Make Up Remover", "Penyegar kulit muka/toner", "Lip colour, Lip liner, Lip glos, Lip care", "Pembersih pewarna kuku/ Nail polish remover", "Perawatan Kulit Badan Tangan/ Hand Body Lotion", "External Intimate Hygiene", "Pelembab/ Moisturiser", "Astringent", "Deodoran / Antiperspiran", "Pembersih Rambut dan Badan/ Hair and Body Wash", "Sediaan untuk kulit berjerawat", "Eau de Toilette/ Eau de Parfume/ Eau de Cologne/ Parfume"],
        "Kosmetik dengan klaim komposisi bahan tertentu": ["Baby cream", "sediaan bayi lainnya", "sediaan tabir surya", "-"],
        "Kosmetik yang diduga mengandung DNA porcine": ["pelembam/moisturizer"],
        "Kosmetik viral": ["Lip colour, Lip liner, Lip glos, Lip care", "Skin aging product", "Day Cream", "Night Cream", "Pelembab/ Moisturiser"],
        "Kosmetik di online official store/reseller": ["Lip colour, Lip liner, Lip glos, Lip care", "Skin aging product", "Day Cream", "Night Cream", "Pelembab/ Moisturiser"]

    };
// database-sampling.js

// ... (data lain yang mungkin sudah ada di sini, misal dataTMK atau dataKategori) ...

const daftarBahanHewani = [
    { nama: "Allantoin", deskripsi: "Asam urat dari sapi, sebagian besar mamalia. Juga terdapat di banyak tanaman." },
    { nama: "Arachidonic Acid", deskripsi: "Asam lemak tak jenuh cair yang ditemukan di hati, otak, kelenjar, serta lemak hewan dan manusia." },
    { nama: "Bee Pollen", deskripsi: "Lilin yang dimurnikan dari sarang lebah Apis mellifera." },
    { nama: "Biotin", deskripsi: "Terdapat di setiap sel hidup dan dalam jumlah yang lebih besar pada susu dan ragi." },
    { nama: "Casein", deskripsi: "Kombinasi kompleks yang diproduksi di jaringan kelenjar susu dari asam amino yang disuplai oleh darah. Bisa didapatkan dari susu kedelai." },
    { nama: "Leukocyte", deskripsi: "Sel darah putih." },
    { nama: "Serum albumin", deskripsi: "Albumin, serum darah." },
    { nama: "Gelatin, arginine", deskripsi: "Kombinasi protein kompleks yang diperoleh melalui hidrolisis kolagen dengan cara merebus kulit, tendon, ligamen, tulang, dan lain-lain." },
    { nama: "Carmine (CI 75470)", deskripsi: "Pigmen merah dari serangga cochineal betina yang dihancurkan." },
    { nama: "Cerebrosides", deskripsi: "Sfingolipid yang diisolasi dari otak dan sistem saraf pusat hewan. Catatan: Cerebrosides termasuk bahan yang dilarang di Eropa (Annex II/419)." },
    { nama: "Cholesterol", deskripsi: "Alkohol steroid yang terdapat di semua lemak dan minyak hewani, jaringan saraf, kuning telur, dan darah." },
    { nama: "Collagen", deskripsi: "Protein berserat yang mencakup sepertiga dari total protein." },
    { nama: "Elastin", deskripsi: "Protein tidak larut yang diekstraksi dari organisme mamalia." },
    { nama: "Hyaluronic Acid", deskripsi: "Jika berasal dari hewan, protein ini ditemukan di tali pusat dan cairan di sekitar sendi. Dapat juga bersumber dari tanaman atau sintetis." },
    { nama: "Keratins", deskripsi: "Protein berserat alami yang terdapat pada vertebrata." },
    { nama: "Lactic Acid", deskripsi: "Biasanya berasal dari tanaman seperti bit. Jika berasal dari hewan, ditemukan dalam darah dan jaringan otot." },
    { nama: "Lactose", deskripsi: "Gula susu dari susu mamalia." },
    { nama: "Lanolin", deskripsi: "Turunan murni dari sekresi kelenjar sebasea (lemak kulit) domba yang menyerupai lemak." },
    { nama: "Embryo Extract", deskripsi: "Ekstrak yang diperoleh dari kulit embrio mamalia." },
    { nama: "Lecithin", deskripsi: "Zat lilin dalam jaringan saraf semua organisme hidup. Untuk komersial: telur/kedelai. Juga dari darah, susu, jagung, atau sintetis." },
    { nama: "Lipase", deskripsi: "Enzim dari lambung dan kelenjar lidah anak sapi, anak kambing, dan anak lamb." },
    { nama: "Methionine", deskripsi: "Asam amino esensial yang ditemukan dalam berbagai protein (biasanya dari albumin telur dan kasein). Dapat juga dibuat secara sintetis." },
    { nama: "Milk Protein", deskripsi: "Campuran protein yang diperoleh dari susu sapi." },
    { nama: "Glycerides", deskripsi: "Dari lemak hewani atau nabati." },
    { nama: "Mink Oil", deskripsi: "Jaringan lemak sub-dermal (di bawah kulit) cerpelai." },
    { nama: "Oleic Acid", deskripsi: "Diperoleh dari berbagai lemak dan minyak hewani serta nabati." },
    { nama: "Nucleic Acid", deskripsi: "Terdapat dalam inti semua sel hidup, juga dapat diperoleh dari tanaman." },
    { nama: "Placenta", deskripsi: "Plasenta mamalia." },
    { nama: "Myristic Acid", deskripsi: "Asam organik yang biasanya berasal dari minyak kacang-kacangan, tetapi kadang-kadang berasal dari hewan." },
    { nama: "Stearic Acid", deskripsi: "Asam lemak dari hewan atau tanaman." },
    { nama: "Tyrosine", deskripsi: "Asam amino yang sering berasal dari tanaman atau sintetis, tetapi terkadang dihidrolisis dari kasein (susu)." },
    { nama: "Colostrum", deskripsi: "Cairan yang disekresikan oleh kelenjar susu setelah kelahiran hewan." },
    { nama: "Glycosphingolipid", deskripsi: "Sfingolipid." },
    { nama: "Soluble Proteoglycan", deskripsi: "Glikoprotein sapi yang larut." },
    { nama: "Placental Protein", deskripsi: "Zat ekstraktif yang diperoleh dari plasenta mamalia." }
];

// Tambahkan ini di bagian bawah file database-sampling.js
window.dataSubSubKategori = {
    // Kunci (Key) harus sama persis dengan teks Nama Sub Kategori yang ada di dropdown kedua
    "Sediaan bayi": [
        "baby oil", 
        "baby lotion", 
        "baby cream"
    ],
    "Sediaan perawatan wajah": [
        "krim siang", 
        "krim malam", 
        "Pelembab/ Moisturiser"
    ],
    "Sediaan rias mata dan perawatan sekitar mata": [
        "eye shadow", 
        "sediaan untuk alis (pensil alis)", 
        "maskara"
    ],
 "Kosmetik yang diproduksi negara Thailand": ["Krim malam","shampoo","Conditioner", "Krim Siang/ Day Cream", "Masker Wajah", "Bedak padat/ compact powder", "Eye Make Up Remover", "Lip colour, Lip liner, Lip glos, Lip care", "Mascara", "Pelembab/ Moisturiser", "Pembersih Kulit Muka", "Eau de Toilette/ Eau de Parfume/ Eau de Cologne/ Parfume", "lipstik", "Cairan Cukur / Pra Cukur / Pasca Cukur"],

 "Kosmetik yang diproduksi negara Filipina": ["Sabun Mandi Padat"],

"Kosmetik Prioritas": ["Kosmetik TL (kasus UPT mandiri)","Kosmetik mudah terurai","Kosmetik  sesuai peredaran (Eau de Cologne)"]


    // Silakan teruskan pola ini untuk sub-kategori lainnya...
};
