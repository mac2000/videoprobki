import * as axios from "axios";
import * as querystring from "querystring";

export const getStreams = async (id: number, gpl: string, base: string) => {
  const { data } = await axios.default.post(
    `http://videoprobki.ua/${gpl}`,
    querystring.stringify({
      p1: `cam${id}`,
      p2: "2",
      p3: "1",
      p4: "1"
    }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  const [image, stream1, stream2] = data.split(", ");
  return [`${base}${stream1}`, `${base}${stream2}`];
};
