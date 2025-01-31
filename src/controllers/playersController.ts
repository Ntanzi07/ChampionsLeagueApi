import { Request, Response } from "express";
import { getPlayerService } from "../services/playersServices";

export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();

    res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerService(id);

    res.status(httpResponse.statusCode).send(httpResponse.body);
}