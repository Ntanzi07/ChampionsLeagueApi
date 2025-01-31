import { findAllPlayers, findPlayerById } from "../data/players/players-repository";
import { validateDataResponse } from "../utils/http-helper";

export const getPlayerService = async (id?: number) => {
    const data = !id ? await findAllPlayers() : await findPlayerById(id);
    const response = await validateDataResponse(data);
    return response;
}