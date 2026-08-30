export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
  ) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
