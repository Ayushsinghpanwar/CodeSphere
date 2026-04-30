import axios from 'axios';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';

export const askGemini = async (message) => {
  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: message,
      }
    );

    return (
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      '🤖 No response from Gemini.'
    );
  } catch (error) {
    console.error('Gemini API Error:', error);
    return '❌ Failed to get a response from Gemini.';
  }
};
