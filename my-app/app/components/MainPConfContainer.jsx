import React from "react";
import MainPConfCard from "./MainPConfCard";

export default function MainPConfContainer() {
    return (
        <div>
            <h2 className="text-center font-bold text-5xl mt-10">Upcoming Conferences</h2>
            <div className="grid grid-cols-new4 m-20 justify-items-center">
            <MainPConfCard></MainPConfCard>
            <MainPConfCard></MainPConfCard>
            <MainPConfCard></MainPConfCard>

            </div>
        </div>
    );
}
