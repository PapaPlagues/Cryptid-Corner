import type { Post as PostType } from "@/shared/types/post.types.js";
import { Post } from "@/features/posts/components/Post.js";

type PostsProps = {
  posts: PostType[];
};

const Posts = ({ posts }: PostsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export { Posts };
