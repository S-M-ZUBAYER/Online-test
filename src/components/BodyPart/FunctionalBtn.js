import React from 'react';

const FunctionalBtn = ({ handlerForNext, handlerForDump, handlerForReview }) => {
    return (
        <div className="my-2">
            <button className="bg-sky-600 py-1 text-sm md:text-base px-1 md:px-3 rounded-md mx-1">
                CLEAR RESPONSE
            </button>
            <button onClick={handlerForReview} className="bg-sky-600 py-1 text-sm md:text-base px-1 md:px-3  rounded-md mx-1">
                REVIEW
            </button>
            <button onClick={handlerForDump} className="bg-sky-600 py-1 text-sm md:text-base px-1 md:px-3  rounded-md mx-1">
                DUMP
            </button>
            <button className="bg-sky-600 py-1 text-sm md:text-base px-1 md:px-3 rounded-md mx-1">
                PREVIOUS
            </button>
            <button onClick={handlerForNext} className="bg-sky-600 text-sm md:text-base py-1 px-1 md:px-3 rounded-md mx-1">
                NEXT
            </button>
        </div>
    );
};

export default FunctionalBtn;