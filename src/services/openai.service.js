import OpenAI from "openai";

class OpenAIService {
  openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  async getDescription(characterName) {
    const completion = await this.openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Write few sentences about ${characterName} - disney movie character.`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
  }
}

export default new OpenAIService();
