import { Request, Response } from 'express';
import { HealthCheck } from '../controller/healthcheck-controller';

type HealthCheckFn = () => Promise<HealthCheck>;
export default class HealthCheckAdapter {
  public static healthcheck(fn: HealthCheckFn) {
    return async (_: Request, res: Response): Promise<Response> => {
      const result = await fn();
      return res.json(result);
    };
  }
}
