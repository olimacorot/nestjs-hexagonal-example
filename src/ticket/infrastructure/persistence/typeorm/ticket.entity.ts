import { ValueObjectTransformer } from '@app/shared/infrastructure/persistence/typeorm/value_object_transformer';
import { TicketCreatedAt } from '@app/ticket/domain/ticked_created_at';
import { TicketDescription } from '@app/ticket/domain/ticked_description';
import { TicketId } from '@app/ticket/domain/ticked_id';
import { TicketPriority } from '@app/ticket/domain/ticked_priority';
import { TicketStatus } from '@app/ticket/domain/ticked_status';
import { Ticket } from '@app/ticket/domain/ticket.model';
import { Status } from '@app/ticket/domain/enum/status.enum';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class TicketsEntity extends Ticket{
  @PrimaryColumn({
    type: 'character varying',
    nullable: false,
    name: 'id',
    transformer: ValueObjectTransformer(TicketId),
  })
  id: TicketId;

  @Column({
    type: 'text',
    nullable: false,
    name: 'description',
    transformer: ValueObjectTransformer(TicketDescription),
  })
  description: TicketDescription;

  @Column({
    type: 'character varying',
    default: 'OPEN',
    enum: Status,
    nullable: false,
    name: 'status',
    transformer: ValueObjectTransformer(TicketStatus),
  })
  status: TicketStatus;

  @Column({
    type: 'integer',
    nullable: false,
    name: 'priority',
    transformer: ValueObjectTransformer(TicketPriority),
  })
  priority: TicketPriority;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP(6)',
    transformer: ValueObjectTransformer(TicketCreatedAt),
  })
  createdAt: TicketCreatedAt;
}
