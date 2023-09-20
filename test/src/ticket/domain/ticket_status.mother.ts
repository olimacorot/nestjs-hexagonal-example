import { TicketStatus } from '@app/ticket/domain/ticked_status';
import { EnumMother } from '@testApp/src/shared/domain/enum.mother';
import { Status } from '@app/ticket/domain/enum/status.enum';

export class TicketStatusMother {
  public static create(value: string): TicketStatus {
    return new TicketStatus(value);
  }

  public static random(): TicketStatus {
    return this.create(EnumMother.random(Object.values(Status)));
  }
}
