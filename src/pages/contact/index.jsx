import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import Login from "@/components/ui/login";

export default function Contact() {
    return (
        <>
            <div className="flex items-center justify-center mt-12 p-2">
                <div className="w-[80%] sm:w-[98%] md:w-[95%]">
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-1">
                        <div className="bg-Bsepa-200 text-Bsepa-300 rounded-xl flex items-center justify-between p-4">
                            <span className="flex items-center gap-6">
                                <FaTelegramPlane className="text-3xl" />
                                <FaInstagram className="text-3xl" />
                            </span>
                            <span>:شبکه های اجتماعی</span>
                        </div>
                        <div className="bg-Bsepa-300 text-white rounded-xl flex items-center justify-between p-4">
                            <span>09999999999</span>
                            <span>:شماره تماس</span>
                        </div>
                        <div className="bg-Ysepa-100 text-white rounded-xl flex items-center justify-between p-4">
                            <span>sepand@gmail.com</span>
                            <span>:ایمیل</span>
                        </div>
                        <div className="bg-Bsepa-200 text-Bsepa-300 rounded-xl flex items-center justify-between p-4">
                            <span className="flex items-center gap-6">
                                اصفهان - خیابان ... کوچه ...
                            </span>
                            <span>:آدرس</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-center bg-white rounded mt-8 p-12 shadow-xl">
                        <Image src={"/imgs/contact.avif"} width={200} height={200} alt="..." />
                        <p className="w-1/2 text-gray-600 text-center sm:w-full">
                            جهت دریافت خدمات مشاوره و پاسخگویی سریع لطفا ابتدا عضو وبسایت شده و از طریق تیکت با دپارتمان های مختلف ارتباط بگیرید
                        </p>
                        <div className="bg-Bsepa-300 text-white rounded-xl flex items-center justify-between px-6 py-2 cursor-pointer">
                            <span>عضویت</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}