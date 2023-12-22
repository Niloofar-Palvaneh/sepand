import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
import Link from "next/link";

export default function OurServises() {
    const servises = [
        {
            id: 1,
            title: "مراکز حامی",
            body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            icon: <MdOutlineMapsHomeWork />
        },
        {
            id: 2,
            title: "سرمایه های انسانی",
            body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            icon: <PiUsersThreeBold />
        },
        {
            id: 3,
            title: "کسب و کارها",
            body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            icon: <GrWorkshop />
        },
        {
            id: 4,
            title: "ایده ها و طرح های جدید",
            body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            icon: <HiOutlineLightBulb />
        },

    ]
    return (
        <>
            <div className="flex items-center justify-center mt-32">
                <div className="grid grid-cols-4 gap-8 w-[80%] sm:grid-cols-1 sm:gap-12 md:grid-cols-2 md:gap-y-24 xl:grid-cols-3 xl:gap-y-12">
                    {
                        servises.map(item => (
                            <div key={item.id} className="text-center border pb-8 px-4 shadow-xl rounded-xl ">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-max border-Bsepa-300 shadow bg-Bsepa-200 text-4xl text-Bsepa-300 p-2 rounded -mt-8 sm:-mt-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-Bsepa-300 text-xl">{item.title}</h3>
                                    <p className="text-gray-600">{item.body}</p>
                                </div>
                                <Link className="text-Ysepa-100 flex items-center justify-center gap-2 mt-4" href={"#"}>
                                    مشاهده بیشتر
                                    <IoMdArrowForward/>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}