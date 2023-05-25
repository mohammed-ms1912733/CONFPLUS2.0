import React from "react";
import PapersStatsCard from "./PapersStatsCard";
import AvgAuthorsCard from "./AvgAuthorsCard";
import ConfStatsCard from "./ConfStatsCard";

export default function Stats() {
    return (
        <div className="bg-primary text-center pb-20">
            <h2 className="pt-32 pb-2 text-4xl font-extrabold md:text-5xl">
                Conference Statistics Report
            </h2>
            <h3 className="mb-5 text-2xl font-bold">
                Unveiling the Numbers Behind the Scenes
            </h3>
            <p class="mx-auto mb-5 w-full max-w-lg">
                Insights on Paper Submissions, Acceptances, Rejections,
                Authorship, and Session Presentations for All Attendees
            </p>

            <div className=" flex flex-col" >
                <PapersStatsCard></PapersStatsCard>
                <ConfStatsCard></ConfStatsCard>
                <AvgAuthorsCard></AvgAuthorsCard>
            </div>
        </div>
    );
}
