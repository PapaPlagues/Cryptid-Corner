import { USER_SELECT_BASIC } from "#features/users/user.select.js";

const postSelect = (requesterId: string) => {
  return {
    id: true,
    title: true,
    content: true,
    media: true,
    isSelfHosted: true,
    createdAt: true,
    authorId: true,
    author: {
      select: USER_SELECT_BASIC,
    },
  };
};

export { postSelect };
