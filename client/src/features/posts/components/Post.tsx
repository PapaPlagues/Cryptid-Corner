import type { Post as PostType } from "@/shared/types/post.types.js";
import { Link } from "react-router";
import { Heart } from "lucide-react";
import { Button } from "@/shared/components/ui/button.js";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { MessageCircle, MoreHorizontal } from "lucide-react";
import { PostSkeleton } from "@/features/posts/components/PostSkeleton.js";
import { IncrementButton } from "@/features/posts/components/IncrementButton.js";
import { CommentSection } from "@/features/posts/components/Comments/CommentSection.js";
import { useState } from "react";

type PostProps = {
  post: PostType;
  isLoadingInit: boolean;
};

const Post = ({
  post,
  isLoadingInit,
  toggleLike,
  isLoadingLike,
  deletePost,
}: PostProps) => {
  const [isShowingComments, setIsShowingComments] = useState(false);

  if (isLoadingInit) {
    return <PostSkeleton />;
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-border/80 border-t-2 border-t-primary/80 bg-card shadow-lg shadow-black/10 transition-colors hover:border-border">
      <div className="space-y-5 p-5 sm:p-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-11 w-11 ring-2 ring-accent/20 ring-offset-2 ring-offset-card">
              <AvatarImage src={post.author.avatar ?? undefined} />
              <AvatarFallback className="bg-secondary text-sm font-semibold text-secondary-foreground">
                {post.author.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <Link
                className="hover:text-accent"
                to={`/users/${post.author.id}`}
                title={post.author.username}
              >
                {post.author.username}
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">
                {new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                </Button>
              }
            />
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Delete Post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Content */}
        <div className="space-y-4">
          <p className="whitespace-pre-wrap text-[0.95rem] leading-7 text-card-foreground">
            {post.content}
          </p>

          {post.media && (
            <img
              src={post.media}
              alt="Post attachment"
              className="max-h-125 w-full rounded-xl border border-border/70 object-cover shadow-sm"
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center gap-2 border-t border-border/60 bg-background/25 px-4 py-3">
        <IncrementButton
          count={post.likeCount}
          onClick={() => toggleLike(post.id, post.hasLiked)}
          icon={Heart}
          isActive={post.hasLiked}
          activeClassName="text-primary"
        />

        <IncrementButton
          count={post.commentCount}
          onClick={() => setIsShowingComments(!isShowingComments)}
          icon={MessageCircle}
        />
      </footer>
      {isShowingComments && <CommentSection postId={post.id} />}
    </article>
  );
};

export { Post };
