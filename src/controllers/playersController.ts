import { Request, Response } from "express";

export const getPlayers = async (req: Request, res: Response) => {
    res.status(200).send({player : "messi" });
}