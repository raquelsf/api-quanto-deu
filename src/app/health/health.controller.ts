import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DNSHealthIndicator, HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';
import { HealthCheckResult } from '@nestjs/terminus/dist/health-check/health-check-result.interface';

@ApiTags('Health Check')
@Controller('health')
export class HealthController {
  constructor(
    private healthCheckService: HealthCheckService,
    private databaseService: TypeOrmHealthIndicator,
    private dnsService: DNSHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  getHealth(): Promise<HealthCheckResult> {
    return this.healthCheckService.check([
      async () => this.databaseService.pingCheck('database', { timeout: 300 }),
      async () => this.dnsService.pingCheck('dns', 'https://google.com'),
    ]);
  }
}
