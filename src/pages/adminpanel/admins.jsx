import Layout from "./layou";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function users() {
    const [admins, setAdmins] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.log("no");
                }
            }).then(admins => setAdmins(admins))

    }, [])
    return (
        <>
            <Layout>
                <div className="w-full">
                    <div className="flex items-center justify-between bg-Bsepa-300 text-white py-2 px-4 rounded">
                        <span>شهر</span>
                        <span>نام کاربری</span>
                        <span>نام کامل</span>
                        <span>ردیف</span>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-2 mt-6 w-full">
                        {
                            admins.length ? (
                                admins.map(admin => (
                                    <div className="flex items-center justify-between w-full cursor-pointer hover:bg-blue-100 p-2">
                                        <div>{admin.address.city}</div>
                                        <div>{admin.username}</div>
                                        <div >{admin.name}</div>
                                        <div className="w-[36px]">{admin.id}</div>
                                    </div>
                                ))
                            ) : (
                                <div class="flex w-full items-center justify-center">
                                    <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-Bsepa-300 to-Ysepa-100 animate-spin">
                                        <div class="h-9 w-9 rounded-full bg-Bsepa-100"></div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="flex items-center justify-center w-full text-center">
                            <p className="flex flex-col gap-1 text-gray-500 text-sm mt-8">
                                اطلاعات ادمین ها از سایت زیر گرفته شده و فیک میباشند
                                <Link className="underline" href={"https://jsonplaceholder.typicode.com/"}>
                                jsonplaceholder
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}