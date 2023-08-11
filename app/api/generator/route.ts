import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    console.log("[CONVERSATION]", prompt);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", {
        status: 500,
      });
    }

    console.log("made it here");

    if (!prompt) {
      return new NextResponse("Prompts are required", { status: 400 });
    }

    console.log("made it here 2");

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 2050,
      temperature: 0.9,
    });

    console.log("made it here 3");

    console.log("[CONVERSATION_RESPONSE]", response.data.choices[0].text);
    return new NextResponse(response.data.choices[0].text, { status: 200 });
  } catch (error) {
    console.log("[CONVERSATION_ERROR]");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
