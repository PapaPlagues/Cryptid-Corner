import { useEffect, useRef, type ReactNode } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

type ScrollableProps = {
  className?: string;
  hasMore: boolean;
  isLoadingMore: boolean;
  onReachBottom?: () => void | Promise<void>;
  children: ReactNode;
};

const Scrollable = ({
  className = "",
  hasMore,
  isLoadingMore,
  onReachBottom,
  children,
}: ScrollableProps) => {
  const callbackRef = useRef(onReachBottom);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const scrollRootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    callbackRef.current = onReachBottom;
  }, [onReachBottom]);

  useEffect(() => {
    const root = scrollRootRef.current;
    const sentinel = sentinelRef.current;
    if (!root || !sentinel || !hasMore || isLoadingMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void callbackRef.current?.();
        }
      },
      {
        root,
        rootMargin: "0px 0px 200px",
        threshold: 0,
      },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, isLoadingMore]);

  return (
    <SimpleBar
      scrollableNodeProps={{ ref: scrollRootRef }}
      className={`min-h-0 min-w-0 ${className}`}
    >
      <div className="pr-3">
        {children}
        <div className="h-1" ref={sentinelRef} />
      </div>
    </SimpleBar>
  );
};

export { Scrollable };
