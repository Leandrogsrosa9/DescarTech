function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.550520, lng: -46.633308 }, // Coordenadas de São Paulo
        zoom: 12,
    });

    const locations = [
        { lat: -23.550520, lng: -46.633308, title: "Ponto de Coleta 1" },
        { lat: -23.561520, lng: -46.642308, title: "Ponto de Coleta 2" },
        { lat: -23.543520, lng: -46.623308, title: "Ponto de Coleta 3" },
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
        });
    });
}

window.onload = initMap;

