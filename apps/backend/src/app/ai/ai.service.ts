import { Injectable } from '@nestjs/common';
import { CompletionsDto } from './dtos/completions.dto';

@Injectable()
export class AIService {
  async askChat(completions: CompletionsDto) {
    return {
      output: {
        userPrompt: completions.message,
      },
    };
  }
}
