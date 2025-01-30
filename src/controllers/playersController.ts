import { Request, Response } from "express";
import { getPlayerService } from "../services/playersServices";

export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();

    res.status(httpResponse.statusCode).send(httpResponse.body);
}