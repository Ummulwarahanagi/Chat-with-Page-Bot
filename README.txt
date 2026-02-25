Chat with Page – ReactJS AI Feature
----------------------------------

Project Overview
----------------
This project implements a “Chat with Page” feature using ReactJS.  
The application allows users to ask questions related only to the visible page content.
The AI assistant strictly answers based on the scraped page data and does not hallucinate
information outside the page context.

The chat interface appears as a floating button and opens a sidebar that matches
the visual style of the existing webpage.


AI API Used
-----------
API Provider: OpenRouter (OpenAI-compatible API)

Reason for Choosing OpenRouter:
- It provides stable and reliable access to AI models
- It supports OpenAI-compatible request formats
- It avoids frequent model deprecation issues
- Easy to test and integrate in frontend applications


How the AI Works (Prompt Engineering)
------------------------------------
When a user asks a question:
1. The visible page content is scraped from the DOM
2. The page content is concatenated with the user’s question
3. A system instruction is added:
   “Answer the user’s question using strictly the context provided below.”
4. The combined prompt is sent to the AI API
5. The AI response is displayed in the chat sidebar

This ensures the AI answers are strictly based on page content only.


API Key Setup (For Testing)
---------------------------
1. Create an account on https://openrouter.ai
2. Generate an API key from the OpenRouter dashboard
3. Create a `.env` file in the project root directory
4. Add the following line in the `.env` file:

   REACT_APP_OPENROUTER_API_KEY=INSERT_KEY_HERE

5. In `aiService.js`, access the API key using:

   const API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;

 Important:
- Replace INSERT_KEY_HERE with your own key while testing locally


Project Features
----------------
- Floating chat button with modern UI
- Smooth open/close animated sidebar
- AI answers strictly based on page content
- Clean and modular React components
- Secure API key handling using environment variables


Verification Example
--------------------
Question:
What is the projected population for 2050?

AI Answer:
9.7 billion

This confirms that the AI is reading and responding based on the page content.
