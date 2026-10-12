const userSelect = (requesterId: string) => {
  return {
    id: true,
    username: true,
    bio: true,
    avatar: true,
  };
};

export { userSelect };
