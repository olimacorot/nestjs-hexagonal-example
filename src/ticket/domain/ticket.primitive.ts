import { Status } from '@app/ticket/domain/enum/status.enum';

export interface TicketPrimitive {
  id: string;
  description: string;
  status: Status;
  priority: number;
  createdAt: string;
}
