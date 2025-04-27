var map = L.map('main_map').setView([10.975038, -63.866259], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([10.968382, -63.866174]).addTo(map);
L.marker([10.975272, -63.866442]).addTo(map);
