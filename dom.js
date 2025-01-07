
function updateFlowerCount() {
    const basketImages = document.querySelectorAll('#basket img');
    const countText = document.querySelector('.flower-count');
    countText.textContent = `The flower basket currently contains ${basketImages.length} flowers.`;
}

document.querySelectorAll('.top-flowers img').forEach(img => {
    img.addEventListener('click', function() {
        // Buat elemen gambar baru
        const newFlower = document.createElement('img');
        
        // Set atribut untuk gambar baru
        newFlower.setAttribute('src', this.src);
        newFlower.setAttribute('alt', 'Flower in basket');
        
        // Tambahkan ke basket
        document.getElementById('basket').appendChild(newFlower);
        
        // Update counter
        updateFlowerCount();
    });
});

document.getElementById('basket').addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        // Hapus gambar yang diklik
        e.target.remove();
        // Update counter
        updateFlowerCount();
    }
});

//untuk mengubah warna text 
document.getElementById('changeTextColor').addEventListener('click', function() {
    const color = prompt('Masukkan warna teks:');
    if (color) {
        document.body.style.color = color;
    }
});

//untuk merubah background
document.getElementById('changeBackgroundColor').addEventListener('click', function() {
    const color = prompt('Masukkan warna latar belakang:');
    if (color) {
        document.body.style.backgroundColor = color;
    }
});
