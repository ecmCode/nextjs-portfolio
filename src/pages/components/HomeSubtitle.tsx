const HomeSubtitle = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full py-2 px-10 bg-gradient-to-b from-slate-700/20 to-slate-800/20">
      <h4 className="px-10 uppercase tracking-widest">{children}</h4>
    </div>
  );
};

export default HomeSubtitle;
