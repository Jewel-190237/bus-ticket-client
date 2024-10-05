/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaBus, FaUserAstronaut, FaUsers } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";

const AdminHome = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [mastersCount, setMastersCount] = useState(0);
    const [normalUsersCount, setNormalUsersCount] = useState(0);
    const [busCount, setBusCount] = useState(0); // Placeholder for bus count
    const [error, setError] = useState(null); // Track errors

    // Fetch total users and filter based on role when the component mounts
    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage or other storage

        // Fetch users with authorization header
        fetch('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the request
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch users, possibly unauthorized.');
                }
                return response.json();
            })
            .then((data) => {
                const allUsers = data.length;
                const masters = data.filter((user) => user.role === 'master').length;
                const normalUsers = data.filter((user) => user.role === 'member').length;

                setTotalUsers(allUsers);
                setMastersCount(masters);
                setNormalUsersCount(normalUsers);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
                setError(error.message); // Set error message to state
            });

        // Fetch bus count (assuming your backend provides bus data similarly)
        // fetch('http://localhost:5000/buses', {
        //     headers: {
        //         Authorization: `Bearer ${token}`, // Include the token for buses
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((data) => setBusCount(data.length))
        //     .catch((error) => console.error("Error fetching buses:", error));
    }, []);

    const dashboardItems = [
        {
            icon: FaUsers,
            count: totalUsers,
            text: 'Total Number of All Users',
        },
        {
            icon: GiPoliceOfficerHead,
            count: mastersCount,
            text: 'Number of Counter Masters',
        },
        {
            icon: FaUserAstronaut,
            count: normalUsersCount,
            text: 'Total Number of Normal Users',
        },
        {
            icon: FaBus,
            count: busCount, // Use bus count here
            text: 'Total Number of Buses',
        },
    ];

    if (error) {
        return (
            <div className="mx-10 my-12">
                <h1 className="text-red-600 text-2xl">Error: {error}</h1>
            </div>
        );
    }

    return (
        <div className="mx-10 my-12">
            {/* Dashboard content */}
            <div className="flex flex-wrap gap-6">
                {dashboardItems.map((item, index) => (
                    <div key={index} className="max-w-64 max-h-48 bg-purple-100 shadow-lg hover:scale-105 group rounded-lg ">
                        {/* Render icon component */}
                        <item.icon className="mx-auto mt-6 text-4xl text-[#2b2b38] group-hover:text-primary " />
                        <h1 className="text-[#2b2b38] group-hover:text-primary font-bold p-6 py-2 text-2xl text-center">
                            {item.text}: {item.count}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminHome;
