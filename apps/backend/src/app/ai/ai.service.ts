import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { CompletionsDto } from './dtos/completions.dto';
import { AssistantDto } from './dtos/assistant.dto';

@Injectable()
export class AIService {
  openai = new OpenAI();

  async askChat(completions: CompletionsDto) {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful programmer please give IT advices.',
        },
        { role: 'user', content: completions.message },
        // {
        //   role: 'assistant',
        //   content: 'I am a helpful programmer, I will give you IT advices.',
        // },
        // {
        //   role: 'user',
        //   content: 'I am having trouble with my computer, can you help me?',
        // },
      ],
    });

    console.log(completion);
    // console.log(completion.choices[0]);

    return {
      output: {
        userPrompt: completions.message,
        response: completion,
      },
    };
  }

  async askAssistant(assistantDto: AssistantDto) {
    const assistant = await this.openai.beta.assistants.retrieve(
      process.env.OPENAI_ASSISTANT_ID
    );
    const assistantId = assistant.id;

    const thread = await this.openai.beta.threads.create();
    const threadId = thread.id;

    const messages = await this.openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: assistantDto.message,
    });

    let run = await this.openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });

    const runId = run.id;

    run = await this.openai.beta.threads.runs.retrieve(threadId, runId);
    return {
      assistant,
      thread,
      messages,
      run,
    };
  }
}
