import React from "react";
import { FaWalking, FaTint, FaRegMoon } from "react-icons/fa";

const Wellness = () => {
    const cardData = [
        { steps: 3260, sleep_time: 8, water_consumption: 5 }
    ];

    const getPercentage = (value, max) => (value / max) * 100;

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cardData.map((card, index) => (
                    <>
                        {/* Steps Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
                            <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <FaWalking className="text-blue-500" /> Steps
                            </h4>
                            <span>{card.steps}/6000</span>
                            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                                <div
                                    className="bg-blue-500 h-3 rounded-full"
                                    style={{ width: `${getPercentage(card.steps, 6000)}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Sleep Time Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
                            <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <FaRegMoon className="text-purple-500" /> Sleep Time
                            </h4>
                            <span>{card.sleep_time} hrs / 8 hrs</span>
                            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                                <div
                                    className="bg-purple-500 h-3 rounded-full"
                                    style={{ width: `${getPercentage(card.sleep_time, 8)}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Water Consumption Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
                            <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <FaTint className="text-blue-400" /> Water Consumption
                            </h4>
                            <span>{card.water_consumption}L / 5L</span>
                            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                                <div
                                    className="bg-blue-400 h-3 rounded-full"
                                    style={{ width: `${getPercentage(card.water_consumption, 5)}%` }}
                                ></div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Wellness;
