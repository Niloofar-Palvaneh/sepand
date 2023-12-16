import Image from "next/image"
import { useState } from "react"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Rank() {
    const groupItems = [
        {
            id: 1,
            title: "زیست بوم نوآوری"
        },
        {
            id: 2,
            title: "زیست بوم کارآفربنی"
        },
    ]
    const tableItems = [
        {
            id: 1,
            scorse: 280,
            country: "ایران",
            city: "تهران",
            arow: 2
        },
        {
            id: 2,
            scorse: 210,
            country: "ایران",
            city: "شیراز",
            arow: 5
        },
        {
            id: 3,
            scorse: 150,
            country: "ایران",
            city: "اصفهان",
            arow: 8
        },
        {
            id: 4,
            scorse: 230,
            country: "ایران",
            city: "کرمان",
            arow: 7
        },
        {
            id: 5,
            scorse: 150,
            country: "ایران",
            city: "اصفهان",
            arow: 5
        },
        {
            id: 6,
            scorse: 230,
            country: "ایران",
            city: "کرمانشاه",
            arow: 2
        },
    ]
    const [toggleGroups, setToggleGroups] = useState(1)
    return (
        <>
            <div>
                <div className="flex flex-col gap-12 mt-24 items-center justify-center">
                    <div className="flex items-center  justify-center flex-col gap-6">
                        <h2 className="text-xl font-bold text-Bsepa-300 sm:text-center">100 رتبه برتر در اکوسیستم نوآوری و کارآفرینی ایران</h2>
                        <div className="flex items-center bg-white rounded-2xl w-max p-2 gap-4">
                            {
                                groupItems.map(item => (
                                    <button
                                        onClick={() => setToggleGroups(item.id)}
                                        className={`transition-all shadow ${toggleGroups == item.id && "text-white bg-Bsepa-300"} px-4 py-2 rounded-xl`} key={item.id}>
                                        {item.title}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 px-32 sm:px-0 sm:grid-cols-1 mt-24 sm:mt-12 md:px-2 xl:px-8">
                    <Image className="sm:hidden" src={"/imgs/map.png"} width={500} height={400} alt="map" />
                    <div>
                        <div className="flex items-center justify-between flex-wrap">
                            <button className="flex-auto m-1 text-Bsepa-300 rounded-xl py-2 shadow bg-white">مراکز حامی</button>
                            <button className="flex-auto m-1 text-Bsepa-300 rounded-xl py-2 shadow">استارت اپ</button>
                            <button className="flex-auto m-1 text-Bsepa-300 rounded-xl py-2 shadow">شهرستان</button>
                        </div>
                        <div className="flex items-center justify-between bg-Bsepa-200  px-4 py-2 rounded border shadow text-Bsepa-300">
                            <span >امتیاز</span>
                            <span >محل</span>
                            <span >شهر</span>
                            <span >رتبه</span>
                        </div>
                        {
                            tableItems.map(item => (
                                <div className="flex items-center justify-between bg-white  px-4 py-2 rounded border shadow  text-gray-600 mt-2">
                                    <span >{item.scorse}</span>
                                    <span >{item.country}</span>
                                    <span >{item.city}</span>
                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-col items-center text-[12px]">
                                            <MdKeyboardArrowUp className="text-green-500" />
                                            <span>2</span>
                                            <MdKeyboardArrowDown className="text-red-500" />
                                        </div>
                                        <span>{item.arow}</span>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}