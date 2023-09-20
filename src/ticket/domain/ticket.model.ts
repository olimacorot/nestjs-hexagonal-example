import { TicketDescription } from './ticked_description';
import { TicketId } from './ticked_id';
import { TicketPriority } from './ticked_priority';
import { TicketStatus } from './ticked_status';
import { TicketCreatedAt } from './ticked_created_at';
import { Status } from '@app/ticket/domain/enum/status.enum';
import { TicketPrimitive } from './ticket.primitive';

export class Ticket {
  public constructor(
    public readonly id: TicketId,
    public readonly description: TicketDescription,
    public readonly status: TicketStatus,
    public readonly priority: TicketPriority,
    public readonly createdAt: TicketCreatedAt,
  ) {}

  public static fromPrimitives(request: {
    id: string;
    description: string;
    status: Status;
    priority: number;
    createdAt: string;
  }): Ticket {
    return new Ticket(
      new TicketId(request.id),
      new TicketDescription(request.description),
      new TicketStatus(request.status),
      new TicketPriority(request.priority),
      new TicketCreatedAt(request.createdAt),
    );
  }

  public toPrimitives(): TicketPrimitive {
    return {
      id: this.id.value,
      description: this.description.value,
      status: this.status.value as Status,
      priority: this.priority.value,
      createdAt: this.createdAt.toString(),
    };
  }
}
