const map = L.map('map').setView([55.723121, 37.584297], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([55.723121, 37.584297]).addTo(map)
    .bindPopup('DENEX<br>Our shop is here!')
    .openPopup();