import { Status } from '@app/ticket/domain/enum/status.enum';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TicketCreateDto {
  @IsNotEmpty()
  public id: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsEnum(Status)
  @IsNotEmpty()
  public status: Status;

  @IsNumber()
  @IsNotEmpty()
  public priority: number;

  @IsString()
  @IsNotEmpty()
  public createdAt: string;
}
