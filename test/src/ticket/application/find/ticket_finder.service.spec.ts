import { TicketFinder } from '@app/ticket/application/find/ticket_finder.service';
import { TicketsResponse } from '@app/ticket/application/find/tickets_response';
import { TicketRepositoryMock } from '../../domain/ticket_repository.mock';

jest.mock('@app/ticket/domain/ticket.repository');

describe('TicketFinder', () => {
  let service: TicketFinder;
  let repositoryMock: TicketRepositoryMock;

  beforeEach(async () => {
    jest.clearAllMocks();
    repositoryMock = new TicketRepositoryMock();
    service = new TicketFinder(repositoryMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it should return a success ticket', async () => {
    const tickets = await repositoryMock.findAll();
    const response = new TicketsResponse(tickets, true, 'ok');
    expect((await service.run({})).data).toEqual(response.data);
  });

  it('it should return a success ticket', async () => {
    const tickets = repositoryMock.getEmptyData();
    jest.spyOn(repositoryMock, 'findAll').mockReturnValue(tickets);

    const response = new TicketsResponse(await tickets, true, 'ok');
    expect((await service.run({})).data).toEqual(response.data);
  });
});