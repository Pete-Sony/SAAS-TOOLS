'use server'
import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
});

export async function generateHaiku(){
    console.log('Running Prompt')

    try{
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: "Write a haiku about recursion in programming.",
                },
            ],
        });

        return { 
            message: completion.choices[0].message.content,
            error: null 
          };
    }catch(error){{
        console.error('OpenAI API Error:', error);
        return { 
          message: null, 
          error: 'Failed to generate haiku' 
        };
      }}

}
