import React from "react";

export default function Sidebar({user}) {
    return (
        <div classNameName="flex">
            <div classNameName="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div classNameName="space-y-3">
                    <div classNameName="flex items-center">
                        <h2 classNameName="text-xl font-bold">Dashboard</h2>
                    </div>
                    <div classNameName="flex-1">
                        <ul classNameName="pt-2 pb-4 space-y-1 text-sm">
                            <li classNameName="rounded-sm">
                                <a
                                    href="/dashboard/classNamees"
                                    classNameName="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>classNamees</span>
                                </a>
                            </li>
                            <li classNameName="rounded-sm">
                                <a
                                    href="/dashboard/students"
                                    classNameName="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Students</span>
                                </a>
                            </li>
                            <li classNameName="rounded-sm">
                                <a
                                    href="/dashboard/teachers"
                                    classNameName="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Teachers</span>
                                </a>
                            </li>
                            {user=='admin' && 
                            <li classNameName="rounded-sm">
                                <a
                                    href="/dashboard/edit"
                                    classNameName="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Edit</span>
                                </a>
                            </li>
                            }
                            <li classNameName="rounded-sm">
                                <a
                                    href="/"
                                    classNameName="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
    );
}