import React from "react";

export default function ConfStatsCard() {
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow self-center mt-12">
            <div className="stat">
                <div className="stat-title">Number of Conference Sessions</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-title">
                    Average Number of Presentations per Session.
                </div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
        </div>
    );
}
