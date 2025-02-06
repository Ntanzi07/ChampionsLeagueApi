import { Request, Response } from "express";
import * as clubService from "../services/clubServices";

export const getClub = async (req: Request, res: Response) => {
    const httpResponse = await clubService.get();
    res.status(httpResponse.statusCode).send(httpResponse.body);
}