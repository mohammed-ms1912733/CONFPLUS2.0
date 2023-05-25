import React from "react";

export default function PresenterContainer() {
    return (
        <div className="ml-2 text-center">
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                </div>
            </div>
            <div className="text-secondary-content font-semibold text-sm ">
                Mohammed Salah
            </div>
            <div className="text-secondary-content font-semibold text-sm ">
                Maker of the website
            </div>
        </div>
    );
}
