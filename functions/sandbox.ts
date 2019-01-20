import { getMapObjects } from "./src/getMapObjects";
import { getStreams } from "./src/getStreams";

const sandbox = async () => {
  const items = await getMapObjects();
  const item = items.find(({ id }) => id === 22);
  if (item) {
    const streams = await getStreams(item.id, item.gpl, item.base);
    console.log(item);
    console.log(streams);
  }
};

sandbox();
