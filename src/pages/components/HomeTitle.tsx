const HomeTitle = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full py-6 bg-gradient-to-tl dark:bg-gradient-to-br from-slate-50/10 to-slate-300/30 ">
      <h2 className="px-10">{children}</h2>
    </div>
  );
};

export default HomeTitle;
