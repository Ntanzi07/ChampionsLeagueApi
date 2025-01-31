import * as playerRepository from "../data/players/players-repository";
import { PlayerModelInterface } from "../interfaces/players_Interface";
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