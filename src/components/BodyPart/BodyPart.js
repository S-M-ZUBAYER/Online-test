import React, { useRef, useState } from 'react';
import img from "../../Image/Zubayer_pic.jpg"
import FunctionalBtn from './FunctionalBtn';
import ResultBar from './ResultBar';
import SidebarBtn from './SidebarBtn';
import img2 from "../../Image/math.png"

const BodyPart = () => {
    const [next, setNext] = useState(0);
    const [dump, setDump] = useState(0);
    const [review, setReview] = useState(0);
    const [count, setCount] = useState(0);

    const refOne = useRef(null)

    const handlerForNext = () => {

        refOne.current.childNodes[count].classList.remove('bg-white');
        refOne.current.childNodes[count].classList.add('bg-green-600');
        setNext(next + 1);
        setCount(count + 1)
    }
    const handlerForReview = () => {
        refOne.current.childNodes[count].classList.remove('bg-white');
        refOne.current.childNodes[count].classList.add("bg-yellow-400");
        setReview(review + 1);
        setCount(count + 1)
    }
    const handlerForDump = () => {
        refOne.current.childNodes[count].classList.remove('bg-white');
        refOne.current.childNodes[count].classList.add('bg-gray-200');
        setDump(dump + 1)
        setCount(count + 1);

    }

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-4 lg:col-span-3 text-left  mx-1 text-white">
                <div className="my-2">
                    <button className="bg-sky-600 py-1 text-sm md:text-base px-1 md:px-3  rounded-md mx-1">
                        All Sections
                    </button>
                    <button className="bg-sky-600 py-1 text-sm md:text-base px-1 md:px-3  rounded-md mx-1">
                        PHYSICS
                    </button>
                    <button className="bg-sky-600 py-1 text-sm md:text-base px-1 md:px-3  rounded-md mx-1">
                        CHEMISTRY
                    </button>
                    <button className="bg-sky-600 py-1 text-sm md:text-base px-1 md:px-3  rounded-md ">
                        MATHS
                    </button>
                </div>
                <hr className="border-2" />
                <div className="my-2 mx-2 rounded border-4">
                    <div className="flex justify-between px-1 font-semibold bg-sky-600 rounded-t">
                        <div className="my-1 mx-2">
                            Q No:1
                        </div>
                        <div className="flex items-center">
                            <div className="mr-1">
                                View in:
                            </div>
                            <div className="form-control">
                                <div className="input-group">
                                    <select name='category' type="boolean" placeholder='Sold Status' className="select select-bordered w-full px-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                                        <option disabled selected>Select</option>
                                        <option>English</option>
                                        <option>Hindi</option>
                                        <option>Bangle</option>
                                        <option>Germany</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-flow-dense grid-cols-2 text-black">
                        <div>
                            <div className="col-span-2 md:col-span-1 border-b-2 pl-2 text-blue-900 font-bold border-r-2">
                                QUESTION INSTRUCTION
                            </div>
                            <div className=" px-2">
                                Passage You want to hit a small box on the floor with a marble fired from a spring-loaded gun that is mounted on a table. The target box is a distanced, but the center of the box. How far should you compress the spring to score a direct hit(neglect friction)?
                            </div>
                        </div>
                        <div>
                            <div className="col-span-2 text-blue-900 font-bold pl-2 md:col-span-1 border-b-2">
                                QUESTION
                            </div>
                            <div className='px-2 border-l-2'>
                                <div>
                                    A block of mass m is projected with velocity V<small>o</small> as shown in the fig. The distance between free ends is l<small>o</small>. Maximum displacement of the block during the motion.
                                </div>
                                <img className="" src={img2} alt="" />

                            </div>
                        </div>

                    </div>

                </div>

                <FunctionalBtn
                    handlerForNext={handlerForNext}
                    handlerForDump={handlerForDump}
                    handlerForReview={handlerForReview}
                ></FunctionalBtn>


            </div>

            <div className="col-span-4 lg:col-span-1">


                <div className=" flex bg-cyan-200 rounded pb-5">
                    <img className="w-20 h-20 mx-1 my-1" src={img} alt="" />
                    <div className="text-left font-semibold">
                        <h2>
                            Time: 2:39:29
                        </h2>
                        <h2>
                            Left:
                        </h2>
                        <h2>
                            S M ZUBAYER
                        </h2>


                    </div>

                </div>
                <SidebarBtn
                    refOne={refOne}
                ></SidebarBtn>
                <ResultBar
                    next={next}
                    dump={dump}
                    review={review}
                ></ResultBar>
            </div>
        </div>
    );
};

export default BodyPart;