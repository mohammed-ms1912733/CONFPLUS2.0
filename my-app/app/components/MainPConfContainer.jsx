import React from "react";
import MainPConfCard from "./MainPConfCard";

export default function MainPConfContainer() {
    return (
        <div className="pb-10">
            <h2 className="text-center font-bold text-5xl mt-10 mb-8">Upcoming Conferences</h2>
            <div className="lg md:grid grid-cols-new4 justify-items-center flex flex-wrap ml-3 mr-3 justify-center">
            <MainPConfCard></MainPConfCard>
            <MainPConfCard></MainPConfCard>
            <MainPConfCard></MainPConfCard>

            </div>
        </div>
    );
}
