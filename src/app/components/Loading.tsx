export default function Loading() {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-full bg-[var(--main-color)] z-20 flex items-center justify-center">
        <div
          className="animate-spin inline-block w-36 h-36 border-[3px] border-current border-t-transparent text-[var(--primary-color)] rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}
