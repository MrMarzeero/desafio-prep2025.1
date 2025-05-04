import openai from '../../lib/openai';
import { Request, Response } from 'express'; 
import { fillPrompt } from '../prompts';

export class FillController {
    static async fillTemplate(req: Request, res: Response) {
        try {
            const completion = await openai.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: fillPrompt },
                    { role: 'user', content: JSON.stringify(req.body) }
                ],
            });

            const messageContent = completion.choices[0].message.content;

            if(messageContent == null) 
                return res.status(500).json("Internal Server Error");
            const toJson = JSON.parse(messageContent);

            return res.status(201).json(toJson);
        } catch(err) {
            if(err instanceof Error) return res.status(500).send("Internal Server Error");
        }
    } 
}