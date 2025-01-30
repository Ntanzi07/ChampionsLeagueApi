import { Request, Response } from "express";
import { getPlayerService } from "../services/playersServices";
import { validateDataResponse } from "../utils/http-helper";

export const getPlayers = async (req: Request, res: Response) => {
    const data = await getPlayerService();
    const response = await validateDataResponse(data);

    res.status(response.statusCode).send(response.body);
}