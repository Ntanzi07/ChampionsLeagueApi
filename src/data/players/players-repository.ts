import { PlayerModelInterface } from "../../interfaces/players_Interface";
import { playerDatabase } from "./playersData";

export const findAllPlayers = async (): Promise<PlayerModelInterface[]> => {
    return playerDatabase;
}

export const findPlayerById = async (id: number | undefined): Promise<PlayerModelInterface | undefined> => {
    return playerDatabase.find(player => player.id === id);
}

export const postPlayer = async (data: PlayerModelInterface) => {
    playerDatabase.push(data);
}