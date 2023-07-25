const Subtitle = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="border-l-[32px] border-l-cyan-400 dark:border-l-slate-100/80 w-full py-2 px-10 bg-gradient-to-r from-slate-500/30 via-slate-800/20 to-transparent">
      <h4 className="px-4 uppercase tracking-widest">{children}</h4>
    </div>
  );
};

export default Subtitle;
