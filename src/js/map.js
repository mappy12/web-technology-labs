const map = L.map('map').setView([55.751244, 37.618423], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([55.751244, 37.618423]).addTo(map)
    .bindPopup('DENEX<br>Our shop is here!')
    .openPopup();