import React from "react";
import Link from "next/link";

export default function Sidebar({user}) {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    href="/dashboard/classes"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Classes</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    href="/dashboard/students"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Students</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    href="/dashboard/teachers"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Teachers</span>
                                </Link>
                            </li>
                            {user=='admin' && 
                            <li className="rounded-sm">
                                <Link
                                    href="/dashboard/edit"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Edit</span>
                                </Link>
                            </li>
                            }
                            <li className="rounded-sm">
                                <Link
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
    );
}