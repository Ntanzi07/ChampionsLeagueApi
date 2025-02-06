import * as playerRepository from "../data/players/players-repository";
import { PlayerModelInterface } from "../interfaces/players_Interface";
import { statisticsModelInterface } from "../interfaces/statistc_Interface";
import { validateDataRequest, validateDataResponse } from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers()
    const response = await validateDataResponse(data);
    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await playerRepository.findPlayerById(id);
    const response = await validateDataResponse(data);
    return response;
}

export const postPlayerService = async (data: PlayerModelInterface) => {
    const response = await validateDataRequest(data);
    if(response.body !== null)
        playerRepository.postPlayer(data)
    return response;
}

export const deletePlayerService = async (id: number) => {
    const data = await playerRepository.deletePlayer(id);
    const response = await validateDataResponse(data);
    return response;
}

export const updatePlayerService = async (id: number, statistics: statisticsModelInterface) => {
    const data = await playerRepository.findAndModify(id, statistics);
    const response = await validateDataResponse(data);
    return response;
}