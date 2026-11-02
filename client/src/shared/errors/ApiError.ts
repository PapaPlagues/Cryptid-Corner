class ApiError extends Error {
  status: number;
  validationErrors?: unknown;

  constructor(message: string, status: number, validationErrors?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.validationErrors = validationErrors;
  }
}

export { ApiError };
