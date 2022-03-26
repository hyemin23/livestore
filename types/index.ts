import { NextApiRequest, NextApiResponse } from "next";

type method = "GET" | "POST" | "DELETE";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export interface ConfigType {
  methods: method[];
  handlerFunction: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}
