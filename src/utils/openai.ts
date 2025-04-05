'use client';

export type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

// System prompt for the chatbot
export const CHATBOT_SYSTEM_PROMPT = 
  "You are an expert Director of Product for gaming companies, serving as an AI-powered consultant. " +
  "Your mission is to provide strategic guidance, practical advice, and data-driven insights to help product managers and teams succeed. " +
  "You have deep expertise in the entire product lifecycle within the gaming industry, including F2P, premium, and hybrid monetization models. " +
  "You understand the unique challenges and opportunities in mobile, PC, and console gaming. " +
  "Maintain a supportive, coaching tone while speaking with the confidence and strategic vision of a senior product leader." +
  
  "\n\n**Core Capabilities:**" +
  
  "\n\n**1. Roadmapping:**" +
  "\n- Assist in developing, refining, and communicating product roadmaps aligned with company strategy and objectives." +
  "\n- Advise on prioritization frameworks (e.g., RICE, MoSCoW, Kano model) based on potential impact, user value, effort, and strategic fit." +
  "\n- Help balance feature development, technical debt, and live operations within the roadmap." +
  "\n- Guide the process of incorporating market trends, competitive analysis, and user feedback into roadmap planning." +
  
  "\n\n**2. Feature Sizing & Funnel Analysis:**" +
  "\n- Provide guidance on estimating feature complexity and development effort (e.g., T-shirt sizing, story points)." +
  "\n- Help define and analyze feature adoption funnels (e.g., awareness, activation, engagement, retention, monetization) to identify drop-offs." +
  "\n- Suggest metrics and methods for tracking feature performance through its lifecycle." +
  "\n- Advise on optimizing feature funnels based on data analysis." +
  
  "\n\n**3. User Testing:**" +
  "\n- Recommend appropriate user testing methodologies (qualitative interviews, usability testing, surveys, beta programs) based on the product stage and research goals." +
  "\n- Assist in designing user test plans, including defining objectives, target audience, and key questions." +
  "\n- Help craft effective interview scripts and survey questions." +
  "\n- Suggest tools and best practices for participant recruitment, test execution, and data synthesis." +
  
  "\n\n**4. PM Team Org Design:**" +
  "\n- Advise on structuring product management teams based on factors like company size, product portfolio complexity, and strategic focus (e.g., by product line, user segment, platform, growth vs. core)." +
  "\n- Help define clear roles, responsibilities, and reporting structures within the PM team." +
  "\n- Provide recommendations for scaling the PM organization effectively." +
  "\n- Discuss the pros and cons of different org models (e.g., Spotify model, functional alignment)." +
  
  "\n\n**5. Managing PMs:**" +
  "\n- Offer strategies for coaching and mentoring product managers at different career levels." +
  "\n- Provide frameworks for setting clear goals and expectations (e.g., using OKRs)." +
  "\n- Advise on conducting effective performance reviews and creating development plans for PMs." +
  "\n- Suggest techniques for fostering collaboration, accountability, and a strong product culture within the team." +
  
  "\n\n**6. Interviewing PMs:**" +
  "\n- Assist in designing structured interview processes for various PM roles (Associate PM, PM, Senior PM, Group PM)." +
  "\n- Help define key competencies and assessment criteria for product managers." +
  "\n- Provide examples of effective behavioral questions, case study scenarios, and take-home assignments relevant to gaming PM roles." +
  "\n- Offer guidance on evaluating candidate responses and making hiring decisions." +
  
  "\n\n**7. Designing A/B Tests:**" +
  "\n- Guide the process of formulating clear, testable hypotheses for A/B experiments." +
  "\n- Help define primary and secondary success metrics for experiments." +
  "\n- Advise on designing experiment variations and control groups." +
  "\n- Provide guidance on calculating required sample sizes and determining test duration." +
  "\n- Discuss potential pitfalls and best practices in A/B testing implementation and interpretation." +
  
  "\n\n**8. Analyzing Feature Results:**" +
  "\n- Help structure the analysis of post-launch feature performance against predefined KPIs." +
  "\n- Guide the interpretation of quantitative data (e.g., from analytics dashboards, A/B test results) and qualitative feedback (e.g., user surveys, support tickets)." +
  "\n- Assist in identifying the key drivers of feature success or failure." +
  "\n- Advise on communicating feature results to stakeholders and determining next steps (iterate, pivot, kill)." +
  
  "\n\n**9. Gap Analysis:**" +
  "\n- Assist in conducting market and competitive analysis to identify gaps in the current product offering or market positioning." +
  "\n- Help leverage user feedback, support logs, and sales data to uncover unmet user needs." +
  "\n- Guide the process of evaluating potential opportunities based on market size, strategic alignment, and feasibility." +
  "\n- Provide frameworks for prioritizing identified gaps and translating them into potential roadmap items." +
  
  "\n\n**10. Bottoms-Up Modeling:**" +
  "\n- Guide the creation of forecast models for potential feature impact, market sizing, or revenue projections." +
  "\n- Help break down complex problems into smaller, estimable components (e.g., user segments, conversion rates, ARPU, retention curves)." +
  "\n- Advise on identifying key assumptions and input variables for the model." +
  "\n- Assist in building simple spreadsheet models and interpreting their sensitivity to different inputs." +
  
  "\n\nWhen responding, clearly reference which capability you are leveraging if applicable, and always strive to provide actionable, specific, and data-informed advice tailored to the gaming industry context.";

// OpenAI API response types for streaming
interface OpenAIStreamingEvent {
  type: string;
  [key: string]: any;
}

interface ContentPartTextEvent extends OpenAIStreamingEvent {
  type: 'response.content_part.text';
  text: string;
}

/**
 * Makes a real API call to OpenAI using the Fetch API with streaming support
 */
export const getChatCompletion = async (
  messages: Message[], 
  onChunkReceived: (chunk: string) => void,
  onComplete: () => void
): Promise<void> => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  
  if (!apiKey) {
    // Fall back to mock implementation if no API key
    await handleMockChatCompletion(messages, onChunkReceived, onComplete);
    return;
  }
  
  try {
    // Using the /v1/chat/completions endpoint which is more stable
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: messages.map(msg => ({ role: msg.role, content: msg.content })),
        stream: true,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`OpenAI API error: ${response.status}`, errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    if (!response.body) {
      throw new Error('Response body is null');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';
    
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        onComplete();
        break;
      }
      
      buffer += decoder.decode(value, { stream: true });
      
      // Process complete server-sent events
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      
      for (const line of lines) {
        if (line.trim() === '') continue;
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          
          // Check for the [DONE] message
          if (data.trim() === '[DONE]') {
            continue;
          }
          
          try {
            const parsedData = JSON.parse(data);
            
            // Handle different data formats
            if (parsedData.choices && parsedData.choices[0]) {
              const { delta, finish_reason } = parsedData.choices[0];
              
              if (delta && delta.content) {
                onChunkReceived(delta.content);
              }
              
              if (finish_reason === 'stop') {
                // We'll let the while loop handle completion
              }
            }
          } catch (e) {
            console.error('Error parsing SSE data:', e, 'Raw data:', data);
          }
        }
      }
    }
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    onChunkReceived("I apologize, but I'm having trouble processing your request at the moment. Please try again later.");
    onComplete();
  }
};

/**
 * Mock implementation for testing or when API key is not available
 */
const handleMockChatCompletion = async (
  messages: Message[],
  onChunkReceived: (chunk: string) => void,
  onComplete: () => void
): Promise<void> => {
  // Simple response logic based on user input
  const userMessage = messages.filter(m => m.role === 'user').pop()?.content.toLowerCase() || '';
  let responseText = '';

  if (userMessage.includes('team structure') || userMessage.includes('team composition')) {
    responseText = "For a gaming product team, I recommend a core structure with:\n\n" +
      "1. **Product Manager**: Owns the roadmap and prioritization\n" +
      "2. **Game Designer**: Focuses on core gameplay mechanics\n" +
      "3. **UX Designer**: Specializes in player experience flows\n" +
      "4. **Data Analyst**: Tracks metrics and identifies opportunities\n" +
      "5. **Engineering Lead**: Coordinates technical implementation\n\n" +
      "For a mid-sized game, you might want 2-3 engineers per designer. How large is your current team?";
  } else if (userMessage.includes('feature') && (userMessage.includes('prioritize') || userMessage.includes('ranking'))) {
    responseText = "For feature prioritization in gaming products, I recommend using a combination of metrics:\n\n" +
      "1. **Player Impact**: How many players will this benefit?\n" +
      "2. **Retention Impact**: Will this improve D1/D7/D30 retention?\n" +
      "3. **Monetization Impact**: Will this drive revenue?\n" +
      "4. **Development Cost**: Time and resources required\n" +
      "5. **Strategic Alignment**: Does it support long-term goals?\n\n" +
      "Would you like me to help you create a prioritization framework for your specific game?";
  } else if (userMessage.includes('kpi') || userMessage.includes('metrics')) {
    responseText = "Essential KPIs for gaming products include:\n\n" +
      "1. **Retention metrics**: D1, D7, D30 retention rates\n" +
      "2. **Engagement metrics**: DAU/MAU ratio, session length, sessions per day\n" +
      "3. **Monetization metrics**: ARPDAU, conversion rate, average transaction value\n" +
      "4. **User acquisition metrics**: CAC, k-factor, viral coefficient\n\n" +
      "Which area would you like to focus on improving?";
  } else if (userMessage.includes('monetization') || userMessage.includes('revenue')) {
    responseText = "For game monetization strategies, consider these approaches:\n\n" +
      "1. **In-app purchases**: Cosmetic items tend to be most accepted by players\n" +
      "2. **Battle Pass**: Offers excellent value while driving engagement\n" +
      "3. **Subscription model**: Creates predictable revenue streams\n" +
      "4. **Ad monetization**: For casual games, rewarded video ads work well\n\n" +
      "The key is balancing monetization with player experience. What's your current monetization model?";
  } else if (userMessage.includes('user acquisition') || userMessage.includes('growth')) {
    responseText = "For gaming user acquisition strategies:\n\n" +
      "1. **ASO (App Store Optimization)**: Improve visibility in stores\n" +
      "2. **Performance marketing**: Focus on ROAS rather than CPI\n" +
      "3. **Content creator partnerships**: Authentic promotion through streamers\n" +
      "4. **Cross-promotion**: Leverage your existing game portfolio\n\n" +
      "What's your current CAC, and which channels perform best for you?";
  } else {
    responseText = "As Director of Product for your gaming company, I'm here to help optimize your product strategy. I can provide guidance on feature prioritization, monetization strategies, user engagement, team structure, or market analysis. What specific challenge can I help you with today?";
  }

  // Simulate streaming by sending chunks of text
  const chunks = responseText.split(' ');
  const chunkSize = 3; // Number of words per chunk
  
  for (let i = 0; i < chunks.length; i += chunkSize) {
    const textChunk = chunks.slice(i, i + chunkSize).join(' ') + ' ';
    
    // Add a small delay between chunks to simulate typing
    await new Promise(resolve => setTimeout(resolve, 50));
    
    onChunkReceived(textChunk);
  }
  
  // Signal completion
  onComplete();
};

/**
 * Handles sending a message to the chatbot and getting a streaming response
 */
export const sendMessageToChatbot = async (
  messages: Message[],
  onChunkReceived: (chunk: string) => void,
  onComplete: () => void
): Promise<void> => {
  try {
    await getChatCompletion(messages, onChunkReceived, onComplete);
  } catch (error) {
    console.error('Error sending message to chatbot:', error);
    onChunkReceived('Sorry, I encountered an error processing your request. Please try again later.');
    onComplete();
  }
}; 