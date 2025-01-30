import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
})

app.listen(port);

