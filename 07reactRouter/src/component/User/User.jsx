import React from "react";
import { useParams } from "react-router-dom";
export default function User() {
    const { userId } = useParams();
    return (
        <div className="bg-gray-500 p-4 rounded-lg shadow text-white flex items-center justify-center ">
            User:{userId}
        </div>
    );
}
