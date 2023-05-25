import {React} from "react";


export default function NavBar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Stats</a>
                        </li>
                        <li>
                            <a>View Conferences</a>
                        </li>
                    </ul>
                </div>
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
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Stats</a>
                    </li>
                    <li>
                        <a>View Conferences</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
}
