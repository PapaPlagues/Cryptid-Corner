const likesSelect = (requesterId: string) => {
  return {
    likers: {
      select: { id: true },
      ...(requesterId && {
        where: { id: requesterId },
      }),
    },
  };
};

export { likesSelect };
