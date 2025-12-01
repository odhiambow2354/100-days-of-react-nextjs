"use client";

import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";  

//Defining a typescript interface for Users so we get autocomplete and type checking
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

//Sample user data that will appear in the table
const sampleUsers: User[] = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", isActive: true },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", isActive: false },
    { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", isActive: true },
] 

export default function UserTable() {
    //this state controls whether the table should be visible or not
    const [showTable, setShowTable] = useState(true);
    //this state controls the filtering logic
    const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

    //aply filter based on the selected filter option
    const filteredUsers = sampleUsers.filter((user) => {
        if (filter === "active") return user.isActive;
        if (filter === "inactive") return !user.isActive;
        return true; // for "all"
    });

    return (
        <div className="p-6" >
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md mb-4" onClick={() =>setShowTable((prev) => !prev)}>
                {showTable ? "Hide Table" : "Show Table"} 
            </button>
            <select
            className="border px-3 py-2 rounded mb-4 ml-4"
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            >
                <option value="all">All Users</option>
                <option value="active">Active Users</option>
                <option value="inactive">Inactive Users</option>
            </select>
            {/* //conditional rendering using ternary operator */}
            {showTable ? (
                <div>
                    {/* //if no data, show message */}
                    {filteredUsers.length === 0 ? (
                        <p className="text-gray-500 mt-4">No users found.</p>
                    ) : (
                        <table className="w-full mt-4 border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="border">
                                        <td className="p-2">{user.name}</td>
                                        <td className="p-2">{user.email}</td>

                                        {/* Conditional Badge Rendering */}
                                        <td className="p-2">
                                            {user.isActive ? (
                                                <span className="text-green-600 font-semibold">Active</span>
                                            ) : (
                                                <span className="text-red-600 font-semibold">Inactive</span>

                                            )}
                                        </td>
                                        </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    </div>
            ) : (
                <p className="text-gray-500 mt-4">Table is hidden.</p>
            )}
            </div>
    );
};

