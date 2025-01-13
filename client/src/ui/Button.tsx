export const Button = ({style, text, onClick, type, icon} : {style? : any, color? : string, text : string; onClick? : () => void; type? : any, icon? : any}) => {
    return (
        <button 
            className={`w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 flex ${
                icon ? 'gap-2 items-center' : 'justify-center'
            }`}
            type={type}
            style={style}
            onClick={onClick}
        >
            {icon}
            <span className="hidden sm:inline">{text}</span>
        </button>
    );
};
