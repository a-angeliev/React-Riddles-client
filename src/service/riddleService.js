import * as request from "./requester"

let baseUrl = "http://127.0.0.1:5000/riddles"

export const getAll= () => request.get(`http://127.0.0.1:5000/riddles/public`)

export const createEvent= (riddleId) => request.post(`${baseUrl}/${riddleId}/events`)