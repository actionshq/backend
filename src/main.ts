import express from 'express';
import { getActionBySlug } from './getActionBySlug.js';
import { createManifest } from './createManifest.js';
import { getOriginOfRequest } from "./getOriginOfRequest.js"

if (process.env["PORT"] == null) throw "env PORT must be set!"
const port = process.env["PORT"]

const app = express();

app.get('/manifest', async (req, res) => {
    const actionSlug = req.query["actionSlug"]
    if (actionSlug == null) {
        return res.status(400).json({ error: "query parameter 'actionSlug' is needed" })
    }
    const action = await getActionBySlug(actionSlug as string)
    const origin = getOriginOfRequest(req)
    const manifest = createManifest(action, origin)
    return res.json(manifest)
});

app.listen(port, () => {
    console.log(`[server]: Server is running at port ${port}`);
});
