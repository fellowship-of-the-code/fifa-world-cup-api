import { Request, Response } from 'express';
import { healthcheck } from '../controller/healthcheck-controller';

export default class HealthCheckAdapter {
  public static healthcheck(fn: () => healthcheck) {
    return (_: Request, res: Response): Response => res.json(fn());
  }
}
