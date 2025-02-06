import fs from "fs/promises";

export const database = async () => {
    const data = await fs.readFile("./src/data/clubs/clubData.json", "utf-8");
    const clubs = JSON.parse(data);
    return clubs;
}

export const findAll = async () => {
    const clubDatabase = await database();
    return clubDatabase;
}