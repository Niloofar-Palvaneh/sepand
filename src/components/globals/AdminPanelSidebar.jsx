import Image from "next/image"
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

export default function AdminPanelSidebar() {
    const menus = [
        {
            id: 1,
            title: "داشبورد",
            icon: <MdDashboard />
        },
        {
            id: 2,
            title: "کاربران",
            icon: <FaUsers />
        },
        {
            id: 4,
            title: "ادمین ها",
            icon: <FaUserSecret />
        },
        {
            id: 5,
            title: "مقالات",
            icon: <MdArticle />,
        }
    ]
    return (
        <>
            <div className="shadow border h-full w-1/2 flex flex-col gap-8 items-center justify-center bg-white p-4 rounded ">
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image src={"/imgs/admin.png"} width={30} height={30} alt="logo" />
                    <span className="bg-Bsepa-200 text-gray-500 text-sm rounded shadow px-2">
                        کاربر شماره 1551
                    </span>
                </div>
                <div className="w-full">
                    <ul className="flex justify-end items-end gap-4 flex-col" >
                        {
                            menus.map(item => (
                                <li key={item.id} className="flex items-center justify-end gap-2 text-gray-700 cursor-pointer transition hover:bg-gray-100 w-full rounded p-2">
                                    {item.title}
                                    {item.icon}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}