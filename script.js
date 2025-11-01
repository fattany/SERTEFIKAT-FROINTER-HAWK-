// Menunggu DOM (Document Object Model) siap
document.addEventListener('DOMContentLoaded', () => {

    // === 1. Selektor DOM ===
    const nameInput = document.getElementById('name-input');
    const certificateName = document.getElementById('certificate-name');
    const downloadBtn = document.getElementById('download-btn');
    const certificateContainer = document.getElementById('certificate-container');

    // === 2. Event Listener untuk Input Nama ===
    nameInput.addEventListener('input', () => {
        const name = nameInput.value;
        
        // Jika input tidak kosong, tampilkan nama
        if (name.trim() !== '') {
            certificateName.textContent = name;
        } else {
            // Jika kosong, kembalikan ke teks placeholder
            certificateName.textContent = 'Masukkan nama';
        }
    });

    // === 3. Event Listener untuk Tombol Download ===
    downloadBtn.addEventListener('click', () => {
        
        // Gunakan library html2canvas
        html2canvas(certificateContainer, {
            scale: 2, // Kualitas gambar lebih baik
            useCORS: true 
        }).then(canvas => {
            // Konversi canvas (gambar) menjadi URL data
            const imageURL = canvas.toDataURL('image/png');
            
            // Buat elemen link <a> sementara
            const link = document.createElement('a');
            
            // Set nama file download
            const fileName = nameInput.value.trim() !== '' ? nameInput.value.trim() : 'Sertifikat';
            link.download = `${fileName} - Sertifikat.png`;
            
            // Set URL gambar sebagai href link
            link.href = imageURL;
            
            // Klik link secara otomatis untuk memulai download
            link.click();
        });
    });

});