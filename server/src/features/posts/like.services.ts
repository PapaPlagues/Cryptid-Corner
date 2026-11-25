type LikeContent = {
  likers: { id: string }[];
  _count: { likers: number };
};

const setLikes = <T extends LikeContent>(content: T) => {
  const { likers, ...formattedContent } = content;
  return {
    ...formattedContent,
    hasLiked: likers.length > 0,
    likeCount: content._count.likers ? content._count.likers : 0,
  };
};

export { setLikes };
