export type healthcheck = {
  message: string;
};

export default class HealthCheckController {
  public static healthcheck(): healthcheck {
    return { message: 'Hello World!' };
  }
}
