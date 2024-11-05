import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { AIService } from './ai.service';
import { CompletionsDto } from './dtos/completions.dto';
import { AssistantDto } from './dtos/assistant.dto';

@ApiTags('ai')
@Controller('ai') // http://localhost:3000/api/ai
export class AIController {
  constructor(private readonly aiService: AIService) {}

  //@ApiBody({ type: [CompletionsDto] })
  @Post('completions')
  askChat(@Body() completionsDto: CompletionsDto) {
    return this.aiService.askChat(completionsDto);
  }

  @Post('assistant')
  askAssistant(@Body() assistantDto: AssistantDto) {
    return this.aiService.askAssistant(assistantDto);
  }
}
