const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

const AIDesignIdea = {
    async sendMessage(prompt) {
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig,
        });
        
        const response = result.response;
        const ideas = JSON.parse(response.text()).logoIdeas.map(item => item.idea);
        return { response: { text: () => JSON.stringify({ ideas }) } };
    },
};

module.exports = {
    model,
    generationConfig,
    HarmCategory,
    HarmBlockThreshold,
    AIDesignIdea,
};