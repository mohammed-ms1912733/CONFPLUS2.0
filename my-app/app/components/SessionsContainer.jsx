import React from "react";
import PresenterContainer from "./PresenterContainer";
export default function SessionsContainer() {
    return (
        <div>
            <h4 className="text-secondary-content font-semibold text-lg">
                Session 1:
            </h4>
            <h4 className="text-error font-semibold text-lg ">Time: </h4>
            <div className="flex gap-8 ml-2">
                <div className="text-secondary-content font-semibold text-m ">
                    From:{" "}
                </div>
                <div className="text-secondary-content font-semibold text-m ">
                    To:{" "}
                </div>
            </div>
            <h4 className="text-error font-semibold text-lg">Presenters: </h4>
            <PresenterContainer></PresenterContainer>
        </div>
    );
}
