export default function Haj() {
  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 z-30 hidden lg:block"
      aria-hidden="true"
    >
      <img
        src="/images/haj.svg"
        alt=""
        className="h-auto w-40 xl:w-52 select-none"
        draggable={false}
      />
    </div>
  );
}
