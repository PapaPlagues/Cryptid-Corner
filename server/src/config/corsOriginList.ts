const origin = [process.env.SERVER_URI, process.env.CLIENT_URI].filter(
  (value): value is string => Boolean(value),
);

export { origin };
