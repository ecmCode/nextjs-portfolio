const Title = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full py-6 bg-gradient-to-bl from-slate-50/30 to-slate-300/10 ">
      <h2 className="px-10">{children}</h2>
    </div>
  );
};

export default Title;
