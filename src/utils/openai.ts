'use client';

export type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

// System prompt for the chatbot
export const CHATBOT_SYSTEM_PROMPT = 
  "You are an expert Director of Product for gaming companies, serving as an AI-powered consultant. " +
  "Your expertise spans product strategy, feature prioritization, user engagement metrics, monetization strategies, and team building in the gaming industry. " +
  "You understand the unique challenges of F2P, premium, and hybrid monetization models. " +
  "You can analyze game metrics (DAU, ARPDAU, retention), identify optimization opportunities, and provide actionable insights. " +
  "You have knowledge of product management methodologies tailored to game development cycles. " +
  "Be concise, data-driven, and practical in your responses. " +
  "When making recommendations, consider both player experience and business objectives. " +
  "Speak with the confidence and strategic vision of a senior product leader while maintaining a supportive, coaching tone.";

/**
 * Makes a real API call to OpenAI using the Fetch API
 */
export const getChatCompletion = async (messages: Message[]): Promise<string> => {
  try {
    // In a production app, this would call a backend API that securely stores your OpenAI key
    // For demonstration purposes, we're using a mock implementation
    
    // Uncomment the following code to make real API calls to OpenAI:
    /*
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
    */

    // Simulate network delay for a more realistic experience
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple response logic based on user input
    const userMessage = messages.filter(m => m.role === 'user').pop()?.content.toLowerCase() || '';

    if (userMessage.includes('team structure') || userMessage.includes('team composition')) {
      return "For a gaming product team, I recommend a core structure with:\n\n" +
        "1. **Product Manager**: Owns the roadmap and prioritization\n" +
        "2. **Game Designer**: Focuses on core gameplay mechanics\n" +
        "3. **UX Designer**: Specializes in player experience flows\n" +
        "4. **Data Analyst**: Tracks metrics and identifies opportunities\n" +
        "5. **Engineering Lead**: Coordinates technical implementation\n\n" +
        "For a mid-sized game, you might want 2-3 engineers per designer. How large is your current team?";
    } 
    
    if (userMessage.includes('feature') && (userMessage.includes('prioritize') || userMessage.includes('ranking'))) {
      return "For feature prioritization in gaming products, I recommend using a combination of metrics:\n\n" +
        "1. **Player Impact**: How many players will this benefit?\n" +
        "2. **Retention Impact**: Will this improve D1/D7/D30 retention?\n" +
        "3. **Monetization Impact**: Will this drive revenue?\n" +
        "4. **Development Cost**: Time and resources required\n" +
        "5. **Strategic Alignment**: Does it support long-term goals?\n\n" +
        "Would you like me to help you create a prioritization framework for your specific game?";
    }
    
    if (userMessage.includes('kpi') || userMessage.includes('metrics')) {
      return "Essential KPIs for gaming products include:\n\n" +
        "1. **Retention metrics**: D1, D7, D30 retention rates\n" +
        "2. **Engagement metrics**: DAU/MAU ratio, session length, sessions per day\n" +
        "3. **Monetization metrics**: ARPDAU, conversion rate, average transaction value\n" +
        "4. **User acquisition metrics**: CAC, k-factor, viral coefficient\n\n" +
        "Which area would you like to focus on improving?";
    }

    if (userMessage.includes('monetization') || userMessage.includes('revenue')) {
      return "For game monetization strategies, consider these approaches:\n\n" +
        "1. **In-app purchases**: Cosmetic items tend to be most accepted by players\n" +
        "2. **Battle Pass**: Offers excellent value while driving engagement\n" +
        "3. **Subscription model**: Creates predictable revenue streams\n" +
        "4. **Ad monetization**: For casual games, rewarded video ads work well\n\n" +
        "The key is balancing monetization with player experience. What's your current monetization model?";
    }

    if (userMessage.includes('user acquisition') || userMessage.includes('growth')) {
      return "For gaming user acquisition strategies:\n\n" +
        "1. **ASO (App Store Optimization)**: Improve visibility in stores\n" +
        "2. **Performance marketing**: Focus on ROAS rather than CPI\n" +
        "3. **Content creator partnerships**: Authentic promotion through streamers\n" +
        "4. **Cross-promotion**: Leverage your existing game portfolio\n\n" +
        "What's your current CAC, and which channels perform best for you?";
    }
    
    // Default response
    return "As Director of Product for your gaming company, I'm here to help optimize your product strategy. I can provide guidance on feature prioritization, monetization strategies, user engagement, team structure, or market analysis. What specific challenge can I help you with today?";
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return "I apologize, but I'm having trouble processing your request at the moment. Please try again later.";
  }
};

/**
 * Handles sending a message to the chatbot and getting a response
 */
export const sendMessageToChatbot = async (
  messages: Message[],
  onMessageReceived: (message: string) => void
): Promise<void> => {
  try {
    const response = await getChatCompletion(messages);
    onMessageReceived(response);
  } catch (error) {
    console.error('Error sending message to chatbot:', error);
    onMessageReceived('Sorry, I encountered an error processing your request. Please try again later.');
  }
}; 