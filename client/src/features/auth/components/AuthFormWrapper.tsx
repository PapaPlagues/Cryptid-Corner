const AuthFormWrapper = ({ children, variant = "default" }) => {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-12 ">
        <div
          className={`w-full max-w-md space-y-9 ${variant === "card" ? "bg-card p-10 rounded-2xl" : ""}`}
        >
          {/* Brand */}
          <header className="space-y-2">
            <h1 className="font-heading text-3xl font-bold tracking-wide">
              <span className="text-primary">CRYPTID</span> CORNER
            </h1>
            <p className="text-sm text-text-secondary">
              A community for the curious.
            </p>
          </header>

          {children}
        </div>
      </section>
    </main>
  );
};

export { AuthFormWrapper };
