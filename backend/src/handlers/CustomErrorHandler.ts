export class AppError extends Error {
  constructor(
    public statusCode: number = 500,
    public override message: string = 'Internal Server Error',
    public code: string = 'INTERNAL_SERVER_ERROR',
    public details?: unknown,
  ) {
    super(message);
    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(message = 'User already exists') {
    super(400, message, 'BAD_REQUEST');
  }
}

export class ClerkError extends AppError {
  constructor(message: string, details: unknown) {
    super(500, message, 'CLERK_ERROR', details);
  }
}
