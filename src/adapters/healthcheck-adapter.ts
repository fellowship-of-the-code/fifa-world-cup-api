import { Request, Response } from 'express';
import { healthcheck } from '../controller/healthcheck-controller';

export default class HealthCheckAdapter {
  public static healthcheck(fn: () => Promise<healthcheck>) {
    return async (_: Request, res: Response): Promise<Response> => res.json(await fn());
  }
}
