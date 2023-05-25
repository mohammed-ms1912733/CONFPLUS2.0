import React from "react";
import Image from "next/image";
import LocationLogo from "../images/location-pin.png";
import CalendarLogo from "../images/calendar.png";
import SessionsContainer from "./SessionsContainer";

export default function MainPConfCard() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center h-fit">
            
            <div className="card-body">
                <h2 className="card-title text-2xl text-c text-neutral">
                    The Future of AI in Healthcare
                </h2>
                <h3 className="text-neutral">
                    Join us for a deep dive into the exciting field of quantum
                    computing and its potential impact on the future of AI.
                </h3>
                <h3 className="font-bold text-info text-lg">
                    Location & Time
                </h3>
                <div className="flex justify-center text-neutral mt-1">
                    <Image
                        src={CalendarLogo}
                        width={20}
                        className="mr-1"
                    ></Image>
                    November 10-12, 2023
                </div>
                <div className="flex justify-center text-neutral mt-1">
                    <Image
                        src={LocationLogo}
                        width={20}
                        className="mr-1"
                    ></Image>{" "}
                    San Francisco, California
                </div>
                <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-3"
                >
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-lg font-bold text-info ">
                        Sessions
                    </div>
                    <div className="collapse-content text-left">
                            <SessionsContainer></SessionsContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
