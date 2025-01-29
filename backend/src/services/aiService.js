const openai = require("../config/openaiClient");

const extractHealthClaims = async (content) => {
  const prompt = `Extract concise health claims from the following text. Return ONLY a JSON array with 'claim_text' fields.
  Content: "${content}"`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: prompt }],
    temperature: 0.3,
    max_tokens: 50,
    response_format: "json",
  });

  return response.choices[0].message.content || [];
};

module.exports = { extractHealthClaims };
