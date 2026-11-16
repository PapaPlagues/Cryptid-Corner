import type { Post as PostType } from "@/shared/types/post.types.js";
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
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";

type PostProps = {
  post: PostType;
};

const Post = ({ post }: PostProps) => {
  return (
    <article className="rounded-xl border bg-secondary/40 shadow-sm overflow-hidden">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={post.author.avatar ?? undefined} />
              <AvatarFallback>
                {post.author.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="font-semibold leading-none">
              <p>{post.author.username}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              }
            ></DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Delete Post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>

          {post.media && (
            <img
              src={post.media}
              alt="Post attachment"
              className="w-full max-h-125 object-cover rounded-lg border"
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 border-t px-4 py-4">
        <Button variant="ghost" size="sm" className="gap-2">
          <Heart className="h-4 w-4" />
          <span>0</span>
        </Button>

        <Button variant="ghost" size="sm" className="gap-2">
          <MessageCircle className="h-4 w-4" />
          <span>0</span>
        </Button>
      </div>
    </article>
  );
};

export { Post };
