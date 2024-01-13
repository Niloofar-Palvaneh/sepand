import AdminPanelSidebar from "@/components/globals/AdminPanelSidebar"
import { useState } from "react";
import { IoPower } from "react-icons/io5";

export default function AdminPanel() {
    const [isShowWelcome, setIsShowWelcome] = useState(true)
    const notifs = [
        {
            id: 1,
            title: "تیکت های باز",
            count: 10
        },
        {
            id: 2,
            title: "کاربران",
            count: 101
        },
        {
            id: 3,
            title: "سفارش ها",
            count: 20
        },
        {
            id: 4,
            title: "امتیاز ها",
            count: 13
        },
        {
            id: 5,
            title: "درخواست ها",
            count: 8
        },
        {
            id: 6,
            title: "گزارش ها",
            count: 7
        },
    ]
    return (
        <>
            <div className="flex items-center justify-center mt-8">
                <div className="w-[80%] flex gap-4 sm:flex-col-reverse sm:w-[98%] md:w-[97%] xl:w-[98%]">
                    <div className="w-full">
                        <div className={`${isShowWelcome ? 'flex' : 'hidden'} border shadow p-2 rounded text-gray-600 flex items-center justify-between`}>
                            <IoPower onClick={() => setIsShowWelcome(false)} className="text-xl cursor-pointer hover:text-red-600 transition" />
                            <span>
                                کاربر شماره 1308 خوش آمدید
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4 md:gap-1 sm:grid-cols-2">
                            {
                                notifs.map(notif => (
                                    <div className="flex items-center justify-end bg-white p-2 gap-2 shadow border rounded md:gap-1">
                                        <p className="text-gray-700 md:text-sm">{notif.title}</p>
                                        <span className="bg-blue-100 p-2 text-Bsepa-300 font-bold rounded w-[35px] text-center">{notif.count}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <AdminPanelSidebar />
                </div>
            </div>
        </>
    )
}