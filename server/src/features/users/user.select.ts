const userSelect = (requesterId: string) => {
  return {
    id: true,
    username: true,
    bio: true,
    avatar: true,
  };
};

const USER_SELECT_BASIC = {
  id: true,
  username: true,
  avatar: true,
};

export { userSelect, USER_SELECT_BASIC };
