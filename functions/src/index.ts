import * as functions from "firebase-functions";
import * as cors from "cors";
import { getMapObjects as internalGetMapObjects } from "./getMapObjects";
import { getStreams as internalGetStreams } from "./getStreams";

const middleware = cors({ origin: true });

export const getMapObjects = functions.region("europe-west1").https.onRequest((req, res) =>
  middleware(req, res, async () => {
    try {
      const data = await internalGetMapObjects();
      res.set("Cache-Control", "public, max-age=60");
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  })
);

export const getStreams = functions.region("europe-west1").https.onRequest((req, res) =>
  middleware(req, res, async () => {
    const { id, gpl, base } = req.query;
    if (!id || !gpl || !base) {
      return res.status(400).json({ message: "id, gpl and base - required" });
    }
    try {
      const data = await internalGetStreams(id, gpl, base);
      res.set("Cache-Control", "public, max-age=60");
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  })
);
