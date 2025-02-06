import { PlayerModelInterface } from "../../interfaces/players_Interface";
import { statisticsModelInterface } from "../../interfaces/statistc_Interface";
import fs from "fs/promises";

const database = async (): Promise<PlayerModelInterface[]> => {
    const data = await fs.readFile("./src/data/players/playersData.json", "utf-8");
    const players = JSON.parse(data);
    return players;
}

export const findAll = async (): Promise<PlayerModelInterface[]> => {
    const playersDatabase = await database();
    return playersDatabase
}

export const findById = async (id: number | undefined): Promise<PlayerModelInterface | undefined> => {
    const playersDatabase = await database();
    return playersDatabase.find(player => player.id === id);
}

export const postPlayer = async (data: PlayerModelInterface) => {
    const playersDatabase = await database();
    playersDatabase.push(data);
}

export const deleteById = async (id: number) => {
    const playersDatabase = await database();
    const index = playersDatabase.findIndex(player => player.id === id);
    const data = findById(id);
    if (index !== -1)
        playersDatabase.splice(index, 1);
    return data;
}

export const findAndModify = async (
    id: number,
    statistics: statisticsModelInterface
) => {
    const playersDatabase = await database();
    const playerIndex = playersDatabase.findIndex(player => player.id === id);
    if (playerIndex !== -1) {
        playersDatabase[playerIndex].statistics = statistics;
    }

    return playersDatabase[playerIndex];
};