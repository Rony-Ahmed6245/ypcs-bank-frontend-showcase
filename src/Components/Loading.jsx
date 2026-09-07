const Loading = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
                <div className="pyramid-loader mb-4">
                    <div className="wrapper">
                        <span className="side side1"></span>
                        <span className="side side2"></span>
                        <span className="side side3"></span>
                        <span className="side side4"></span>
                        <span className="shadow"></span>
                    </div>
                </div>
                <h3 className="text-xs font-bold text-slate-700 tracking-wider uppercase mt-2">
                    ডাটা প্রসেসিং হচ্ছে...
                </h3>
            </div>
        </div>
    );
};

export default Loading;