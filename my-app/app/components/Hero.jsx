import React from "react";
import Image from "next/image";
import mainImage from "../images/public-talk-animate.svg";

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image src={mainImage} width={600}></Image>
                <div>
                    <h1 className="text-5xl font-bold">Welcome to ConfPlus!</h1>
                    <p className="py-6">
                        Elevate your academic conferences with ConfPlus, the
                        ultimate event management platform! Revolutionize
                        planning, management, and creation for unforgettable
                        academic events. Discover the power of ConfPlus and take
                        your conferences to the next level of success! hi wsl2
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}
