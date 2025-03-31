import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: false, // We'll use this client only on the server side
});

interface ChatCompletionOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

export async function generateChatCompletion(
  messages: OpenAI.Chat.ChatCompletionMessageParam[],
  options: ChatCompletionOptions = {}
): Promise<string> {
  const {
    model = 'gpt-4-turbo',
    temperature = 0.7,
    maxTokens = 1000,
  } = options;

  try {
    const response = await openai.chat.completions.create({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    });

    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating chat completion:', error);
    throw new Error('Failed to generate AI response');
  }
}

export { openai }; 