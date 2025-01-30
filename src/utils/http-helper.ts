import { HttpResponseInterface } from "../interfaces/http_Response_Interface";
import * as status from "./http-methods";

export const validateDataResponse = async (data:any): Promise<HttpResponseInterface> => {
    return data ? status.ok(data) : status.notFounded();
}
