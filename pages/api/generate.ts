import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { inputText } = req.body;

  if (!inputText) {
    return res.status(400).json({ error: 'No input provided' });
  }

  const systemPrompt = `
You are a frontend AI developer. Take the following plain language mockup description and generate a responsive website layout using HTML + Tailwind CSS only. 
Focus on clarity, clean structure, and semantic HTML. Don't include <html>, <head>, or <body> tags — just the body content.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: inputText },
      ],
      temperature: 0.5,
    });

    const html = completion.choices[0].message.content;
    res.status(200).json({ html });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate layout' });
  }
}
Add OpenAI API route