import { NowRequest, NowResponse } from "@vercel/node";
import "@babel/plugin-transform-react-jsx";
import convert from "reactel-to-html";

export default (req: NowRequest, res: NowResponse) => {
  console.log("req.body", req.body);
  const body = req.body;
  const { html } = body;
  const convertedHtml = convert(html);
  res.status(200).json(convertedHtml);
};
