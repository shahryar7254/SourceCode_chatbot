const API_URL = "YOUR_GOOGLE_AI_STUDIO_API_ENDPOINT";
const API_KEY = "YOUR_API_KEY"; 

export async function getAIResponse(userMessage) {
  try {
    // Example payload: user message + optional website context
    const payload = {
      prompt: `Website context: [Extract your website content here or use JSON] \nUser question: ${userMessage}`,
      max_tokens: 200,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    // Adjust according to Google AI Studio response structure
    return data.response || "Sorry, I cannot answer that.";
  } catch (error) {
    console.error("AI API Error:", error);
    return "Error connecting to AI.";
  }
}
