import { HttpResponse } from "../interfaces/httpResponseInterface";
import * as status from "./http-methods";

export const validateDataResponse = async (data:any): Promise<HttpResponse> => {
    return data !== 0 ? status.ok(data) : status.notFounded();
}
