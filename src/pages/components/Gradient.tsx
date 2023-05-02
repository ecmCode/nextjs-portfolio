const Gradient = () => {
    return ( 
        <div>
            <div className="w-60 h-60 rounded-full bg-gradient-radial from-rose-500/30 via-rose-300/20 to-rose-200/10 absolute top-1/5 right-1/4 opacity-30">
            </div> 
            <div className="w-96 h-96 rounded-full bg-gradient-radial from-cyan-500/30 via-cyan-300/20 to-slate-700/10 absolute top-1/3 right-1/2 opacity-40">
            </div> 
            <div className="w-60 h-60 rounded-full bg-gradient-radial from-cyan-500/30 via-cyan-300/20 to-cyan-200/10 absolute bottom-10 right-10 opacity-40">
            </div> 
        </div>
    );
}
 
export default Gradient;