import { NowRequest, NowResponse } from "@vercel/node";
import convert from "html-jsx-html";

export default (request: NowRequest, response: NowResponse) => {
  const { name = "World" } = request.query;
  response.status(200).send(`Hello ${name}!`);
};
