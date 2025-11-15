import { Injectable } from '@nestjs/common';
import { InferenceClient } from '@huggingface/inference';
import { ConfigService } from '@nestjs/config';

const client = new InferenceClient(process.env.HF_TOKEN);

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
      role: 'user' | 'editor';
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
        messages: messages.map((m) => ({
          role: m.role as any,
          content: m.content,
        })),
      });
    } catch (err) {
      throw err;
    }

    // const chatCompletionAnw = await client.chatCompletion({
    //   model: process.env.HF_MODEL,
    //   messages: [
    //     {
    //       role: 'user',
    //       content: 'Whats is the capital of France',
    //     },
    //   ],
    // });
    // return chatCompletionAnw.choices[0].message;
  }
}
