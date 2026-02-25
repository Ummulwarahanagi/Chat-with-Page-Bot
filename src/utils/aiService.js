const API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;

export async function askAI(context, question) {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                `You are a strict page assistant.
You must answer ONLY if the answer is explicitly present in the provided context.
If the question is unrelated, unclear, or the answer is not directly stated,
reply exactly with:
"I don't have that information."
`
            },
            {
              role: "user",
              content: `Context:\n${context}\n\nQuestion:\n${question}`
            }
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("AI error:", data);
      return "I'm having trouble connecting right now.";
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error("AI error:", error);
    return "I'm having trouble connecting right now.";
  }
}