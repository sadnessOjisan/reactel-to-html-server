import { NowRequest, NowResponse } from "@vercel/node";

export default (request: NowRequest, response: NowResponse) => {
  const { name } = request.body;
  response.status(200).json({ name });
};
