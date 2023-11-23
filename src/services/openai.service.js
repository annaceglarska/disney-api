import OpenAI from "openai";

class OpenAIService {
  openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  async sample() {
    const completion = await this.openai.chat.completions.create({
      messages: [
        { role: "system", content: "Podaj imiona 5 książniczek Disneya" },
      ],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
  }
}

export default new OpenAIService();
