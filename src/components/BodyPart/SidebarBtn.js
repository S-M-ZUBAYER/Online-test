import React from 'react';

const SidebarBtn = ({ refOne }) => {
    return (
        <div className="rounded border-2 mt-3 h-44 bg-cyan-200">
            <div className="bg-sky-800 text-start pl-2 text-white py-1 rounded-t">
                Question pallete
            </div>
            <div ref={refOne} id="mainDiv" className="grid grid-cols-5 gap-1 my-1">
                <button className="bg-white">
                    1
                </button>
                <button className="bg-white">
                    2
                </button>
                <button className="bg-white">
                    3
                </button>
                <button className="bg-white">
                    4
                </button>
                <button className="bg-white">
                    5
                </button>
                <button className="bg-white">
                    6
                </button>
                <button className="bg-white">
                    7
                </button>
                <button className="bg-white">
                    8
                </button>
                <button className="bg-white">
                    9
                </button>
                <button className="bg-white">
                    10
                </button>
            </div>

        </div>
    );
};

export default SidebarBtn;