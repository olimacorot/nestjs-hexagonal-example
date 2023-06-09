import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { TicketFinder } from '../application/find/ticket_finder.service';
import { TicketCreator } from '../application/create/ticket_creator.service';

@Controller('ticket')
export class TicketController {
  private readonly logger = new Logger(TicketController.name);

  constructor(
    private ticketFinder: TicketFinder,
    private ticketCreator: TicketCreator,
  ) {}

  @Get()
  async findAll(@Query() query: { limit; offset; search }) {
    return await this.ticketFinder.run(query);
  }

  @Post()
  async create(@Body() body) {
    this.logger.debug(body);
    return await this.ticketCreator.run(body);
  }
}
