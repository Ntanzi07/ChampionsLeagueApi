import { Request, Response } from "express";
import * as playerService from "../services/playersServices";

export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await playerService.getPlayerService();
    res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await playerService.getPlayerByIdService(id);
    res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const postPlayerController = async (req: Request, res: Response) => {
    const data = req.body;
    const httpResponse = await playerService.postPlayerService(data)
    res.status(httpResponse.statusCode).send(httpResponse.body);
}