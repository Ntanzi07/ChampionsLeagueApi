import { findAllPlayers } from "../data/players/players-repository";
import { validateDataResponse } from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await findAllPlayers();
    const response = await validateDataResponse(data);
    return response;
}