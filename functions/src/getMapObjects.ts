import * as axios from "axios";

export const getMapObjects = async () => {
  const { data } = await axios.default.get("http://mobile.videoprobki.ua/getMapObjects/0");

  const setPolyline = (coord: string, condition: string, cam_sid: number) => ({
    id: cam_sid,
    polygon: coord
      .split("|")
      .map(pair => pair.split(", "))
      .map(([lat, lon]) => ({ lat: parseFloat(lat), lon: parseFloat(lon) }))
  });

  const setMarkers = (icon: string, lat: number, lon: number, address: string, html: string, active_marker: number) => ({
    id: parseInt((html.split("/camimg/cam").pop() || "").split("-").shift() || ""),
    lat,
    lon,
    address
  });

  const sectorsload: Function[] = [];
  const cam_info: string[] = [];
  const cam_city: string[] = [];
  const gpl_arr: string[] = [];
  const baseurl_arr: string[] = [];
  const img_arr: string[] = [];
  const advert: string[] = [];
  const markerload: Function[] = [];
  const trafficProblems: { [key: string]: string }[] = [];

  eval(data.replace(/(setPolyline|setMarkers)/g, "return $1"));

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
      gif: `http://w2.videoprobki.com.ua/animation/images/animcam${id}_180.gif`,
      polygons: polylines.filter(item => item.id === id).map(({ polygon }) => polygon),
      ...markers
        .filter(item => item.id === id)
        .map(({ lat, lon, address }) => ({ lat, lon, address }))
        .shift()
    }));
};
