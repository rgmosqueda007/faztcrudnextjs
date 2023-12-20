"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";
export function Navbar() {
    const router = useRouter();
    return (
        <header className="flex justify-between items-center bg-gray-800 px-28 py-3">
            <Link href="/">
                <h1 className="font-bold text-3xl text-white">Task App</h1>
            </Link>

            <div>
                <button onClick={() => router.push("/new")}
                    className="bg-green-500 hover: bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center"
                >Add Task</button>
            </div>
        </header>
    )
}