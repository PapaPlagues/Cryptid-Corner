import { Link } from "react-router";
import { CommentSkeleton } from "@/features/posts/components/Comments/CommentSkeleton.js";
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
import { Button } from "@/shared/components/ui/button.js";
import { MoreHorizontal, Heart, MessageCircle } from "lucide-react";
import { IncrementButton } from "@/features/posts/components/IncrementButton.js";
import type { Comment } from "@/shared/types/comment.types.js";

type CommentsProps = {
  currentUserId: string | undefined;
  comments: Comment[];
  isLoadingComments: boolean;
  deleteComment: (commentId: string) => Promise<void>;
  toggleLike: (commentId: string, hasLiked: boolean) => void;
};

const Comments = ({
  currentUserId,
  comments,
  isLoadingComments,
  deleteComment,
  toggleLike,
}: CommentsProps) => {
  if (isLoadingComments) {
    return (
      <div>
        {Array.from({ length: 2 }).map((_, i) => (
          <CommentSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!comments.length) {
    return (
      <div className="flex items-center gap-4 py-7">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <MessageCircle className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold">No comments yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Be the first to join the conversation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul>
      {comments.map((comment) => {
        if (!comment?.author) return null;

        const isAuthor = currentUserId === comment.authorId;

        return (
          <li key={comment.id} className="py-3 first:pt-4 last:pb-4">
            <div className="flex items-start gap-3.5">
              <Avatar className="mt-0.5 h-9 w-9 shrink-0">
                <AvatarImage src={comment.author.avatar ?? undefined} />
                <AvatarFallback className="bg-accent/10 text-xs font-semibold text-accent">
                  {comment.author.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <p className="truncate text-sm font-semibold text-card-foreground">
                      <Link
                        className="hover:text-accent"
                        to={`/users/${comment.author.id}`}
                        title={comment.author.username}
                      >
                        {comment.author.username}
                      </Link>
                    </p>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {isAuthor && (
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="ghost"
                            size="icon"
                            className="-mr-2 -mt-1 h-7 w-7 shrink-0 text-muted-foreground hover:text-foreground"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        }
                      />
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          onClick={() => deleteComment(comment.id)}
                        >
                          Delete comment
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>

                <p className="mt-1 whitespace-pre-wrap break-words text-sm leading-relaxed text-foreground/90">
                  {comment.content}
                </p>

                <div className="mt-1 -ml-2">
                  <IncrementButton
                    count={comment.likeCount}
                    onClick={() => toggleLike(comment.id, comment.hasLiked)}
                    icon={Heart}
                    isActive={comment.hasLiked}
                    activeClassName="text-primary"
                  />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { Comments };
