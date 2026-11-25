class DatabaseError extends Error {
  status: number;

  constructor(message: string, status = 500) {
    super(message);
    this.name = "Database Error";
    this.status = status;
  }
}

export { DatabaseError };
