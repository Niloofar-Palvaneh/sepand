import { useState } from "react";
import { IoPower } from "react-icons/io5";
import Image from "next/image";
import { RiSearch2Line } from "react-icons/ri";
import Layout from "./layou";

export default function AdminPanel() {
    let l = document.querySelector("body")
    l.classList.remove("o");
    const centers = [
        {
            id: 1,
            title: "شتاب دهنده سپند",
            rank: 1,
            city: "اصفهان"
        },
        {
            id: 2,
            title: "شتاب دهنده آرزو",
            rank: 88,
            city: "همدان"
        },
        {
            id: 3,
            title: "مرکز نوآوری سپند",
            rank: 12,
            city: "همدان"
        },
        {
            id: 4,
            title: "شتاب دهنده سپند2",
            rank: 15,
            city: "اصفهان"
        },
        {
            id: 5,
            title: "نوآوری دهنده مهدی",
            rank: 24,
            city: "تبریز"
        },
    ]
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

    const [isShowWelcome, setIsShowWelcome] = useState(true)
    const [searchInputValue, setSearchInputValue] = useState("")
    const [resultSerach, setResultSearch] = useState(centers)


    const searchHandler = (e) => {
        setSearchInputValue(e.target.value)
    }
    const serchResultHandler = () => {
        const result = centers.filter(item => item.title.includes(searchInputValue))
        setResultSearch(result)
    }
    const filterHandler = (e) => {
        console.log(e.target.value);
        if (e.target.value === "0") {
            setResultSearch(centers)
        } else if (e.target.value === "اصفهان") {
            let cennter1 = centers
            setResultSearch(cennter1.filter(item => item.city == "اصفهان"))
        } else if (e.target.value === "تبریز") {
            let cennter2 = centers
            setResultSearch(cennter2.filter(item => item.city == "تبریز"))
        } else if (e.target.value === "همدان") {
            let cennter3 = centers
            setResultSearch(cennter3.filter(item => item.city == "همدان"))
        }
    }

    return (
        <>
            <Layout>
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
                    <div className="mt-12 bg-white p-2 rounded shadow border">
                        <div className="flex items-center justify-between border-b p-2 sm:flex-col-reverse sm:gap-2 md:flex-col-reverse md:gap-2">
                            <button onClick={() => setResultSearch(centers)} className="sm:w-full md:w-full bg-Bsepa-300 text-white py-1 px-2 rounded cursor-pointer">
                                حذف تمام فیلتر ها
                            </button>
                            <select className="shadow p-1 rounded outline-none sm:w-full md:w-full" onChange={filterHandler}>
                                <option className="p-2 text-sm text-gray-700" value="0">انتخاب شهر</option>
                                <option className="p-2 text-sm text-gray-700" value="اصفهان">اصفهان</option>
                                <option className="p-2 text-sm text-gray-700" value="تبریز">تبریز</option>
                                <option className="p-2 text-sm text-gray-700" value="همدان">همدان</option>
                            </select>
                            <div className="bg-white p-2 rounded flex items-center justify-between shadow sm:w-full md:w-full">
                                <RiSearch2Line onClick={serchResultHandler} className="text-3xl text-Bsepa-300 bg-blue-100 rounded p-1 cursor-pointer" />
                                <input
                                    className="bg-transparent border-none outline-none text-end"
                                    type="text" placeholder="...جستجوی مرکز" value={searchInputValue}
                                    onChange={(e) => searchHandler(e)} />
                            </div>
                        </div>
                        {
                            resultSerach.length ? (
                                resultSerach.map(item => (
                                    <div className="w-full flex items-center p-1 justify-between border-b border-gray-500 mt-6">
                                        <div className="flex flex-col items-center">
                                            <span>{item.rank}</span>
                                            <span className="text-[15px] text-gray-600">رتبه</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <div className="flex flex-col items-center">
                                            <Image className="bg-white p-1 rounded" src={"/imgs/m-1.png"} width={30} height={0} alt="..." />
                                            <h2 className="text-[12px] text-gray-500">مرکز {item.city}</h2>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-end mt-8 gap-4">
                                    <p className="p-2 bg-red-100 w-full text-center rounded">
                                        نتیجه ای برای جستجوی {searchInputValue} یافت نشد
                                    </p>
                                    <div className="w-full flex items-end flex-col" >
                                        <span className="text-gray-700 text-end">:لطفا موارد زیر را برسی و مجدد تلاش کنید</span>
                                        <ul className="text-gray-500 mt-4 list-outside list-decimal text-right list-style mr-6 flex flex-col gap-2">
                                            <li>
                                                برسی کنید که اینترنت شما متصل باشد.
                                            </li>
                                            <li>
                                                برسی کنید واژه وارد شده غلط املایی نداشته باشد.
                                            </li>
                                            <li>
                                                برسی کنید واژه وارد شده معتبر باشد.
                                            </li>
                                            <li>
                                                اتصال دستگاه به تحریم شکن را قطع کنید.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}