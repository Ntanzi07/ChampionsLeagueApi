import { PlayerModelInterface } from "../../interfaces/players_Interface";
import { playerDatabase } from "./playersData";

export const findAllPlayers = async (): Promise<PlayerModelInterface[]> => {
    return playerDatabase;
}

export const findPlayerById = async (id: number): Promise<PlayerModelInterface | undefined> => {
    return playerDatabase.find(player => player.id === id);
}