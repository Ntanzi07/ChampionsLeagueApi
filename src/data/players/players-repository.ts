import { PlayerModelInterface } from "../../interfaces/players_Interface";
import { statisticsModelInterface } from "../../interfaces/statistc_Interface";
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

export const deletePlayer = async (id: number) => {
    const index = playerDatabase.findIndex(player => player.id === id);
    const data = findPlayerById(id);
    if (index !== -1)
        playerDatabase.splice(index, 1);
    return data;
}

export const findAndModify = async (
    id: number,
    statistics: statisticsModelInterface
) => {
    const playerIndex = playerDatabase.findIndex(player => player.id === id);
    if (playerIndex !== -1) {
        playerDatabase[playerIndex].statistics = statistics;
    }

    return playerDatabase[playerIndex];
};