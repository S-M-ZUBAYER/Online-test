import React from 'react';

const ResultBar = ({ next, dump, review }) => {
    return (
        <div className="my-2 border-2 rounded bg-cyan-200">
            <div className="bg-sky-800 text-start pl-2 text-white py-1 rounded-t">
                Legend (Click to View)
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-1 my-1 mx-1 ">
                <button className="bg-green-600 text-start pl-2">
                    {next} Answer
                </button>
                <button className="bg-red-600 text-start pl-2">
                    n No Answer
                </button>
                <button className="bg-indigo-700 text-start pl-2">
                    n Review-Ans
                </button>
                <button className="bg-yellow-200 text-start pl-2">
                    {review} Review-Ans
                </button>
                <button className="bg-slate-400 text-start pl-2">
                    {dump} Dump
                </button>
                <button className="bg-white text-start pl-2">
                    {10 - (next + review + dump)} No Visit
                </button>
            </div>
            <div className="bg-sky-800 text-start pl-2 text-white py-1 mb-3">
                10 All Questions
            </div>
            <hr className="border-2" />
            <div className="grid grid-rows-2 grid-flow-col gap-2 my-2 mx-1">
                <button className="bg-sky-800 rounded text-white">
                    Profile
                </button>
                <button className="bg-sky-800 rounded text-white">
                    Inslr
                </button>
                <button className="bg-sky-800 rounded text-white">
                    Questions
                </button>
                <button className="bg-sky-800 rounded text-white">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ResultBar;