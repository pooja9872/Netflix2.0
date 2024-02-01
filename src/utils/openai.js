import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constant";

const openaiInstance = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openaiInstance;
