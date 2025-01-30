import { Request, Response } from "express";
import { getPlayerService } from "../services/playersServices";

export const getPlayers = async (req: Request, res: Response) => {
    const data = await getPlayerService();
    res.status(200).send(data);
}