import type { Request } from "express";
import { validationResult } from "express-validator";
import { ValidationError } from "#shared/errors/ValidationErrors.js";

const validateInput = (req: Request) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    throw new ValidationError(validationErrors.array());
  }
};

export { validateInput };
