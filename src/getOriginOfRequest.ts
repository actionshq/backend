import type { Request } from "express";

/**
 * Gets the origin of the request
 * 
 * @param req Request
 * @returns URL
 */
export function getOriginOfRequest(req: Pick<Request, "protocol" | "headers">): string {
    return `${req.protocol}://${req.headers.host}`;
}
