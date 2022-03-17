import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export interface ConfigType {
  method: "GET" | "POST" | "DELETE";
  handlerFunction: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}
