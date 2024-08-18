export function Title({
  title, subtitle, children,
}: { title: string, subtitle: string, children?: React.ReactNode }) {
  return (
    <div className="mt-20 mb-40 flex flex-col items-center">
      <h1 className="text-6xl text-primary-title font-extrabold text-center uppercase max-w-5xl">
        {title}
      </h1>
      <p className="text-xl text-center mt-5 w-full max-w-xl">
        {subtitle}
        {children}
      </p>
    </div>
  );
}
