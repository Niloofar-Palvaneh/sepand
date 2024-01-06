import AdminPanelSidebar from "@/components/globals/AdminPanelSidebar"
import { useState } from "react";
import { IoPower } from "react-icons/io5";

export default function AdminPanel() {
    const [isShowWelcome , setIsShowWelcome] = useState(true)
    return (
        <>
            <div className="flex items-center justify-center mt-8 ">
                <div className="w-[80%] flex gap-4">
                    <div className="w-full">
                        <div className={`${isShowWelcome ? 'flex' : 'hidden'} border shadow p-2 rounded text-gray-600 flex items-center justify-between`}>
                            <IoPower onClick={()=>setIsShowWelcome(false)} className="text-xl cursor-pointer hover:text-red-600 transition" />
                            <span>
                                کاربر شماره 1308 خوش آمدید
                            </span>
                        </div>
                    </div>
                    <AdminPanelSidebar />
                </div>
            </div>
        </>
    )
}