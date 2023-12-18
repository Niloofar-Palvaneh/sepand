import Link from "next/link"
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function Gallery() {
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div className="w-[83%] sm:w-full md:w-full xl:w-full grid grid-cols-5 grid-rows-2 sm:grid-cols-2 sm:grid-rows-6  md:grid-cols-2 md:grid-rows-6 h-[500px] ">
                    <div className="bg-[url('/imgs/gallery.jpg')] bg-cover bg-center row-span-3 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 relative group rounded-xl overflow-hidden m-2">
                        <div className="absolute w-full h-full bg-Bsepa-300 opacity-30"></div>
                        <span className="absolute top-2 right-2 text-white font-bold text-2xl">جدیدترین اخبار</span>
                        <Link className="absolute left-2 bottom-2 rounded-xl bg-gray-200 flex items-center gap-2 py-1 px-2  transition-all group-hover:bg-gray-100" href={"#"}>
                            <IoArrowBackCircleOutline className="text-xl transition-all group-hover:scale-110" />
                            <span>
                                مطالعه بیشتر
                            </span>
                        </Link>
                    </div>
                    <div className="bg-[url('/imgs/gallery.jpg')] bg-cover bg-top col-span-1 sm:row-span-2 md:row-span-2 relative group  rounded-xl overflow-hidden m-2">
                        <div className="absolute w-full h-full bg-Bsepa-300 opacity-30"></div>
                        <span className="absolute top-2 right-2 text-white font-bold text-2xl">جدیدترین اخبار</span>
                        <Link className="absolute left-2 bottom-2 rounded-xl bg-gray-200 flex items-center gap-2 py-1 px-2  transition-all group-hover:bg-gray-100" href={"#"}>
                            <IoArrowBackCircleOutline className="text-xl transition-all group-hover:scale-110" />
                            <span>
                                مطالعه بیشتر
                            </span>
                        </Link>
                    </div>
                    <div className="bg-[url('/imgs/gallery.jpg')] bg-cover bg-top col-span-1 sm:row-span-2 md:row-span-2 relative group   rounded-xl overflow-hidden m-2">
                        <div className="absolute w-full h-full bg-Bsepa-300 opacity-30"></div>
                        <span className="absolute top-2 right-2 text-white font-bold text-2xl">جدیدترین اخبار</span>
                        <Link className="absolute left-2 bottom-2 rounded-xl bg-gray-200 flex items-center gap-2 py-1 px-2  transition-all group-hover:bg-gray-100" href={"#"}>
                            <IoArrowBackCircleOutline className="text-xl transition-all group-hover:scale-110" />
                            <span>
                                مطالعه بیشتر
                            </span>
                        </Link>
                    </div>
                    <div className="bg-[url('/imgs/gallery.jpg')] bg-cover bg-center  col-span-2 relative group  rounded-xl overflow-hidden m-2">
                        <div className="absolute w-full h-full bg-Bsepa-300 opacity-30"></div>
                        <span className="absolute top-2 right-2 text-white font-bold text-2xl">جدیدترین اخبار</span>
                        <Link className="absolute left-2 bottom-2 rounded-xl bg-gray-200 flex items-center gap-2 py-1 px-2  transition-all group-hover:bg-gray-100" href={"#"}>
                            <IoArrowBackCircleOutline className="text-xl transition-all group-hover:scale-110" />
                            <span>
                                مطالعه بیشتر
                            </span>
                        </Link>
                    </div>
                    <div className="bg-[url('/imgs/gallery.jpg')] bg-cover bg-bottom col-span-2  relative group  rounded-xl overflow-hidden m-2">
                        <div className="absolute w-full h-full bg-Bsepa-300 opacity-30"></div>
                        <span className="absolute top-2 right-2 text-white font-bold text-2xl">جدیدترین اخبار</span>
                        <Link className="absolute left-2 bottom-2 rounded-xl bg-gray-200 flex items-center gap-2 py-1 px-2  transition-all group-hover:bg-gray-100" href={"#"}>
                            <IoArrowBackCircleOutline className="text-xl transition-all group-hover:scale-110" />
                            <span>
                                مطالعه بیشتر
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}