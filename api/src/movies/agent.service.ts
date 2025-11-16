import { Injectable } from '@nestjs/common';
import { InferenceClient } from '@huggingface/inference';
import { ConfigService } from '@nestjs/config';
import { Ai_INSTRUCTIONS } from '../data';

// const client = new InferenceClient(process.env.HF_TOKEN);

@Injectable()
export class AgentService {
  private client: InferenceClient;
  private readonly defaultModel: string;
  constructor(private readonly config: ConfigService) {
    const token =
      this.config.get<string>('HF_TOKEN') ||
      this.config.get<string>('HF_API_TOKEN');

    if (!token) {
      throw new Error(
        'Hugging Face token not found in env (HF_TOKEN or HF_API_TOKEN).',
      );
    }
    this.client = new InferenceClient(token);
    this.defaultModel =
      this.config.get<string>('HF_MODEL') || 'google/flan-t5-small';
  }

  async chat(
    messages: {
      role: string;
      content: string;
    }[],
    model?: string,
  ): Promise<string> {
    const usedModel = model || this.defaultModel;

    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error('messages must be a non-empty array');
    }

    try {
      const resp = await this.client.chatCompletion({
        model: usedModel,
        max_tokens: 105,
        top_p: 0.6,
        temperature: 0.9,

        messages: [{ role: 'system', content: Ai_INSTRUCTIONS }],

        // messages: messages.map((m) => ({
        //   role: m.role as any,
        //   content: `Create short anwser for post ${m.content}`,
        // })),
        repetition_penalty: 1.1,
        top_k: 50,
        stream: false,
      } as any);
      const choices = resp.choices;

      // console.log(choices);
      if (choices.length > 0) {
        const first = choices[0];
        if (first.message?.content) return first.message.content;
        if (typeof first.text === 'string') return first.text;
      }
      return JSON.stringify(resp);
    } catch (err) {
      throw err;
    }
  }
}
