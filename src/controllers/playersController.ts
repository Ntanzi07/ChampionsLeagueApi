import { Request, Response } from "express";
import * as playerService from "../services/playersServices";
import { statisticsModelInterface } from "../interfaces/statistc_Interface";

export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await playerService.get();
    res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await playerService.getById(id);
    res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const postPlayerController = async (req: Request, res: Response) => {
    const data = req.body;
    const httpResponse = await playerService.post(data)
    res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const deletePlayerController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await playerService.deleteS(id);
    res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const updatePlayerController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: statisticsModelInterface = req.body;
    const httpResponse = await playerService.update(id, bodyValue);
    res.status(httpResponse.statusCode).send(httpResponse.body);
}