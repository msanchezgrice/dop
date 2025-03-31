'use client';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

// System prompt for the chatbot
export const CHATBOT_SYSTEM_PROMPT = 
  "You are an expert Director of Product tasked with helping the user in any way possible to build their team. " +
  "You can help with team configuration requests, feature funnel rankings, strategy, data analysis, and so on. " +
  "You're knowledgeable about product management best practices, team structures, and gaming industry trends. " +
  "Be concise but thorough, professional but friendly. Offer actionable advice whenever possible.";

/**
 * Simulates a chat call to OpenAI API
 * In a real implementation, this would make an actual API call
 */
export const getChatCompletion = async (messages: Message[]): Promise<string> => {
  // This is a mock implementation
  // In a real app, you would make an API call to OpenAI

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
  
  // Default response
  return "I'm happy to help with your product management needs for your gaming company. I can provide guidance on team structure, feature prioritization, roadmap planning, market analysis, or other product strategy topics. What specific challenge can I help you with today?";
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