import { DNSHealthIndicator, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';
import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  const result = {
    status: 'ok',
    info: { database: { status: 'up' }, dns: { status: 'up' } },
    error: {},
    details: { database: { status: 'up' }, dns: { status: 'up' } },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthCheckService,
          useValue: {
            check: jest.fn().mockResolvedValue(result),
          },
        },
        TypeOrmHealthIndicator,
        {
          provide: DNSHealthIndicator,
          useValue: {
            pingCheck: jest.fn().mockImplementation(),
          },
        },
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('Definição do controller', () => {
    expect(controller).toBeDefined();
  });
});
