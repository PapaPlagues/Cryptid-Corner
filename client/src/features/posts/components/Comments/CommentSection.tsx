import { useComments } from "@/features/posts/hooks/useComments.js";
import { CommentInput } from "@/features/posts/components/Comments/CommentInput.js";
import { Comments } from "@/features/posts/components/Comments/Comments.js";
import { useAuthStore } from "@/features/auth/stores/auth.store.js";
import { usePostStore } from "@/features/posts/stores/posts.store.js";

const CommentSection = ({ postId }: { postId: string }) => {
  const userId = useAuthStore((state) => state.user?.id);
  const incrementCommentCount = usePostStore(
    (state) => state.incrementCommentCount,
  );

  const {
    comments,
    isLoadingComments,
    createComment,
    deleteComment,
    toggleLike,
  } = useComments(postId);

  const handleCreateComment = async (content: string) => {
    await createComment(postId, content);
    incrementCommentCount(postId);
  };

  return (
    <section className="border-t border-border/70 bg-background/25">
      <div className="px-4 sm:px-5">
        <Comments
          currentUserId={userId}
          comments={comments}
          isLoadingComments={isLoadingComments}
          deleteComments={deleteComment}
          toggleLike={toggleLike}
        />
      </div>

      <CommentInput onSubmit={handleCreateComment} />
    </section>
  );
};

export { CommentSection };
