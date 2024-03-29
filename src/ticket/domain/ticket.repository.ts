import { TicketId } from './ticked_id';
import { Ticket } from './ticket.model';

export interface TicketRepository {
  create(ticket: Ticket): Promise<Ticket>;
  findAll(query: Record<string, string>): Promise<Ticket[]>;
  findById(id: TicketId): Promise<Ticket | undefined>;
}

export const TicketRepository = Symbol('TicketRepository');
