let map;

const url = "https://europe-west1-videoprobki-d4bbb.cloudfunctions.net/";

async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 50.49631083426618, lng: 30.538005989746118 }
  });

  const data = await fetch(`${url}getMapObjects`).then(r => r.json());
  console.log(data);

  // data
  //   .map(({ polygons }) => polygons)
  //   .reduce((a, b) => a.concat(b), [])
  //   .map(
  //     polygons =>
  //       new google.maps.Polygon({
  //         paths: polygons.map(({ lat, lon }) => ({ lat, lng: lon })),
  //         strokeColor: "orange",
  //         strokeOpacity: 0.8,
  //         strokeWeight: 1,
  //         fillColor: "orange",
  //         fillOpacity: 0.35,
  //         map
  //       })
  //   );

  const popup = new google.maps.InfoWindow({
    content: ""
  });

  data.map(item => {
    const marker = new google.maps.Marker({
      position: { lat: item.lat, lng: item.lon },
      title: item.address,
      map
    });

    marker.addListener("click", () => {
      popup.setContent(`<img src="${item.gif}?r=${Date.now()}" />`);
      popup.open(map, marker);
    });

    return marker;
  });
}
