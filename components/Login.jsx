import React,{useState} from "react";
import {useRouter} from 'next/router'
import StudentData from '../data/students.json'
import TeacherData from '../data/teachers.json'
import Link from "next/link";

export default function Login({value}) {
    const [email,setEmail]=useState('')
    const router=useRouter()
    const handleSubmit=()=>{
        event.preventDefault()
        if(router.pathname=='/student'){
            if(StudentData.students.student.filter(
                student=>student.email==email
            ).length > 0){
                router.push('dashboard/students')
            }else{
                alert('Login credentials invalid')
                router.push('/')
            }
        }else if(router.pathname=='/admin'){
            console.log(email)
            if(email=='admin@gmail.com'){
                router.push('/dashboard')
            }else{
                alert('Login credentials invalid')
                router.push('/')
            }
        }else if(router.pathname=='/teacher'){
            if(TeacherData.teachers.teacher.filter(
                teacher=>teacher.email==email
            ).length > 0){
                router.push('dashboard/teachers')
            }else{
                alert('Login credentials invalid')
                router.push('/')
            }
        }
    }

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <Link href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            {value} 
                        </h3>
                    </Link>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}