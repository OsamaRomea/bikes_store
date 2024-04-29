AOS.init();





function showImage(imageUrl) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image" class="product-img">`;
}

function showImage2(imageUrl) {
    const imageContainer = document.getElementById('imageContainer2');
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image" class="product-img">`;
}

document.addEventListener('DOMContentLoaded', function() {
    var dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var btn = document.getElementById('dropdownMenuButton1');
            btn.textContent = this.textContent;
            btn.setAttribute('data-bs-toggle', 'dropdown');
        });
    });
});