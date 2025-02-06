import * as playerRepository from "../data/players/players-repository";
import { PlayerModelInterface } from "../interfaces/players_Interface";
import { statisticsModelInterface } from "../interfaces/statistc_Interface";
import { validateDataRequest, validateDataResponse } from "../utils/http-helper";

export const get = async () => {
    const data = await playerRepository.findAll()
    const response = await validateDataResponse(data);
    return response;
}

export const getById = async (id: number) => {
    const data = await playerRepository.findById(id);
    const response = await validateDataResponse(data);
    return response;
}

export const post = async (data: PlayerModelInterface) => {
    const response = await validateDataRequest(data);
    if(response.body !== null)
        playerRepository.postPlayer(data)
    return response;
}

export const deleteS = async (id: number) => {
    const data = await playerRepository.deleteById(id);
    const response = await validateDataResponse(data);
    return response;
}

export const update = async (id: number, statistics: statisticsModelInterface) => {
    const data = await playerRepository.findAndModify(id, statistics);
    const response = await validateDataResponse(data);
    return response;
}