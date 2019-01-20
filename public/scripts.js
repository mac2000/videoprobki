let map;

const url = "https://europe-west1-videoprobki-d4bbb.cloudfunctions.net/";

async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 50.489267, lng: 30.494404 }
  });

  const data = await fetch(`${url}getMapObjects`).then(r => r.json());
  data
    .map(({ polygons }) => polygons)
    .reduce((a, b) => a.concat(b), [])
    .map(
      polygons =>
        new google.maps.Polygon({
          paths: polygons.map(({ lat, lon }) => ({ lat, lng: lon })),
          strokeColor: "orange",
          strokeOpacity: 0.8,
          strokeWeight: 1,
          fillColor: "orange",
          fillOpacity: 0.35,
          map
        })
    );

  // var bermudaTriangle = new google.maps.Polygon({
  //   paths: [{ lat: 50.489254, lng: 30.497883 }, { lat: 50.489259, lng: 30.49629 }, { lat: 50.489267, lng: 30.494404 }, { lat: 50.489271, lng: 30.492763 }],
  //   strokeColor: "#FF0000",
  //   strokeOpacity: 0.8,
  //   strokeWeight: 2,
  //   fillColor: "#FF0000",
  //   fillOpacity: 0.35,
  //   map
  // });

  // bermudaTriangle.setMap(map);
}
