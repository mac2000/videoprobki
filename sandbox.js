const http = require("http");
const querystring = require("querystring");

const getMapObjects = () => {
  return new Promise(resolve => {
    const url = "http://mobile.videoprobki.ua/getMapObjects/0";
    http.get(url, res => {
      let data = "";
      res.on("data", chunk => (data += chunk));
      res.on("end", () => resolve(data));
    });
  });
};

const post = ({ gpl, id, base }) => {
  return new Promise(resolve => {
    const req = http.request(
      {
        method: "POST",
        host: "videoprobki.ua",
        path: "/" + gpl,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      },
      res => {
        let data = "";
        res.on("data", chunk => (data += chunk));
        res.on("end", () => {
          const [image, stream1, stream2] = data.split(", ");
          resolve([`${base}${stream1}`, `${base}${stream2}`]);
        });
      }
    );

    req.end(
      querystring.stringify({
        p1: `cam${id}`,
        p2: "2",
        p3: "1",
        p4: "1"
      })
    );
  });
};

const main = async () => {
  const setPolyline = (coord, condition, cam_sid) => ({
    id: cam_sid,
    polygon: coord
      .split("|")
      .map(pair => pair.split(", "))
      .map(([lat, lon]) => ({ lat: parseFloat(lat), lon: parseFloat(lon) }))
  });

  const setMarkers = (icon, lat, lon, address, html, active_marker) => ({
    id: parseInt(
      html
        .split("/camimg/cam")
        .pop()
        .split("-")
        .shift()
    ),
    lat,
    lon,
    address
  });

  const sectorsload = [];
  const cam_info = [];
  const cam_city = [];
  const gpl_arr = [];
  const baseurl_arr = [];
  const img_arr = [];
  const advert = [];
  const markerload = [];
  const trafficProblems = [];

  eval((await getMapObjects()).replace(/(setPolyline|setMarkers)/g, "return $1"));

  const polylines = sectorsload.map(fn => fn());
  const markers = markerload.map(fn => fn());

  return Object.keys(gpl_arr)
    .map(id => parseInt(id))
    .filter(id => !isNaN(id))
    .map(id => ({
      id,
      city: cam_city[id],
      gpl: gpl_arr[id],
      base: baseurl_arr[id],
      jpg: img_arr[id],
      gif: `http://w2.videoprobki.com.ua/animation/images/animcam${id}_180.gif?r=${Date.now()}`,
      polygons: polylines.filter(item => item.id === id).map(({ polygon }) => polygon),
      ...markers
        .filter(item => item.id === id)
        .map(({ lat, lon, address }) => ({ lat, lon, address }))
        .shift()
    }));
};

const main2 = async () => {
  const items = await main();
  const i22 = items.find(item => item.id === 611);
  const data = await post(i22);
  console.log(i22);
  console.log(data);
  // console.log(items.map(({ city }) => city));
};
main2();
