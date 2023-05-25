"use client"
import React from "react";

export default function ScheduleAddForm() {
    return (
        <div className="p-8">
            <article className="prose">
                <h2 className="font-bold text-2xl text mb-5">
                    Enter your Schedule Information:
                </h2>
            </article>

            <form action="">
                <div className="flex flex-row flex-wrap gap-4 justify-between">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Title:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs input-md input-primary"
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">
                                Choose from the available dates:
                            </span>
                        </label>
                        <select className="select select-bordered select-primary">
                            <option disabled selected>
                                Pick one
                            </option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">
                                Choose from the available Locations:
                            </span>
                        </label>
                        <select className="select select-bordered select-primary">
                            <option disabled selected>
                                Pick one
                            </option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Teaser:</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs input-md input-primary"
                        />
                    </div>
                </div>
                <article className="prose mt-5">
                    <h2>Sessions:</h2>
                </article>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">
                            Enter the number of sessions:
                        </span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>
                            Pick one
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </form>
        </div>
    );
}
