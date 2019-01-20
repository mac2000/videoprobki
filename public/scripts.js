const url = "https://europe-west1-videoprobki-d4bbb.cloudfunctions.net/";

const getMapObjects = () => fetch(`${url}getMapObjects`).then(r => r.json());

getMapObjects().then(console.log);
