import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import realEstate from "../assets/projects/realestate.jpg";

const projects = [
    { id: 1, url: WorkImg },
    { id: 2, url: realEstate },
    { id: 3, url: WorkImg },
    { id: 4, url: realEstate },
    { id: 5, url: WorkImg },
    { id: 6, url: realEstate },
];
const Work = () => {
    return (
        <div name="work" className="w-full md:min-h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="inline text-4xl font-bold border-b-4 text-gray-400 border-pink-600">Work</p>
                    <p className="py-6">// Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map((project) => {
                        const { id, url } = project;
                        return (
                            <div
                                key={id}
                                style={{ backgroundImage: `url(${url})` }}
                                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                            >
                                {/*Hover Effects  */}
                                <div className="opacity-0 group-hover:opacity-100">
                                    <span className="text-2xl font-bold text-white tracking-wider">
                                        React JS Application
                                    </span>
                                    <div className="pt-8 text-center">
                                        <a href="/">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                                Demo
                                            </button>
                                        </a>
                                        <a href="/">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Work;
