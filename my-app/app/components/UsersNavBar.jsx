import React from "react";
import Image from "next/image";
import organizerMaleLogo from "../images/organizerMaleLogo.png";
export default function UsersNavBar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    <svg
                        width="35"
                        height="35"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pr-1"
                    >
                        <path
                            d="M96.5001 51.9231C96.5001 76.5897 76.8013 96.5 52.6067 96.5C28.4122 96.5 8.71338 76.5897 8.71338 51.9231C8.71338 27.2565 28.4122 7.34619 52.6067 7.34619C76.8013 7.34619 96.5001 27.2565 96.5001 51.9231Z"
                            stroke="black"
                            stroke-width="7"
                        />
                        <path
                            d="M90.9171 46.875C90.9171 71.9552 70.8802 92.25 46.2085 92.25C21.5369 92.25 1.5 71.9552 1.5 46.875C1.5 21.7948 21.5369 1.5 46.2085 1.5C70.8802 1.5 90.9171 21.7948 90.9171 46.875Z"
                            stroke="black"
                            stroke-width="3"
                        />
                    </svg>
                    ConfPlus
                </a>{" "}
            </div>
            <div className="flex-none">
                <button className="btn btn-primary btn-sm hidden mr-1 lg:flex">
                    Add Schedule
                </button>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <button className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </label>
                    <div
                        tabIndex={0}
                        className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                    >
                        <div className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">
                                        Search Schedules
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="input input-bordered"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end avatar online">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <Image src={organizerMaleLogo}></Image>
                            
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >   
                        <li className="disabled font-bold lg:hidden">
                            <div>Logged in As:
                                <br />
                                Mohammed Salah
                                <br />
                                Organizer
                            </div>
                        </li>

                        <li className="lg:hidden">
                            <a>Add Schedule</a>
                        </li>

                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
                <div className="text-xs font-bold hidden lg:flex ml-2 mr-2">
                    Mohammed Salah
                    <br />
                    Organizer
                </div>
            </div>
        </div>
    );
}
