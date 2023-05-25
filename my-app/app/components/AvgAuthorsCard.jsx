import React from "react";

export default function AvgAuthorsCard() {
    return (
        <div className="stats shadow self-center mt-12">
            <div className="stat">
                <div className="stat-title">Average Number of Authors per Paper.</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
            </div>
        </div>
    );
}
