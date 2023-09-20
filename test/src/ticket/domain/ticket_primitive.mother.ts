import { TicketCreatedAt } from '@app/ticket/domain/ticked_created_at';
import { TicketDescription } from '@app/ticket/domain/ticked_description';
import { TicketId } from '@app/ticket/domain/ticked_id';
import { TicketPriority } from '@app/ticket/domain/ticked_priority';
import { TicketStatus } from '@app/ticket/domain/ticked_status';
import { TicketPrimitive } from '@app/ticket/domain/ticket.primitive';
import { Status } from '@app/ticket/domain/enum/status.enum';
import { TicketIdMother } from './ticket_id.mother';
import { TicketDescriptionMother } from './ticket_description.mother';
import { TicketStatusMother } from './ticket_status.mother';
import { TicketPriorityMother } from './ticket_priority.mother';
import { TicketCreatedAtMother } from './ticket_created_at.mother';

export class TicketPrimitiveMother {
  public static create(
    id: TicketId,
    description: TicketDescription,
    status: TicketStatus,
    priority: TicketPriority,
    createdAt: TicketCreatedAt,
  ): TicketPrimitive {
    return {
      id: id.value,
      description: description.value,
      status: status.value as Status,
      priority: priority.value,
      createdAt: createdAt.value,
    };
  }

  public static random(): TicketPrimitive {
    return this.create(
      TicketIdMother.random(),
      TicketDescriptionMother.random(),
      TicketStatusMother.random(),
      TicketPriorityMother.random(),
      TicketCreatedAtMother.random(),
    );
  }
}
