import * as clubRepository from "../data/clubs/clubRepository";
import { validateDataResponse } from "../utils/http-helper";


export const get = async () => {
    const data = await clubRepository.findAll();
    const response = await validateDataResponse(data);
    return response;
}