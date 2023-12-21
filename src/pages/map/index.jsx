import Bests from "@/components/ui/Bests";
import Validity from "@/components/ui/Validity";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import OurServises from "@/components/ui/OurServises";

export default function Map() {
    return (
        <>
            <div className="flex items-center justify-center mt-8 ">
                <div className="sm:w-full md:w-full p-2 w-[85%] xl:w-[95%] flex flex-col items-center gap-24 ">
                    <div className="grid grid-cols-4 gap-12  sm:grid-cols-2 md:grid-cols-3 w-full">
                        <TestBox />
                        <TestBox />
                        <TestBox />
                        <TestBox />
                        <TestBox />
                        <TestBox />
                        <TestBox />
                        <TestBox />
                    </div>
                    <div className=" px-4 flex gap-12 bg-Bsepa-200 rounded-xl w-full sm:flex-col md:flex-col xl:items-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103583.05416115272!2d51.367116800000005!3d35.7761024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e03c6f0000001%3A0xf71ac9f4f900d01c!2sQasr%20Garden%20Museum!5e0!3m2!1sen!2s!4v1703184853887!5m2!1sen!2s"
                            className="border-4 overflow-hidden border-white rounded -mt-6 -mb-6 sm:m-0 sm:w-full" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="w-1/2 sm:w-full md:w-full">
                            <div className="flex items-end justify-between">
                                <div className="bg-white flex items-center gap-2 text-gray-600 p-1 rounded-xl shadow">
                                    <CiSearch className="text-2xl" />
                                    <input className="bg-transparent text-end outline-none" type="text" placeholder="جستجو مرکز" />
                                </div>
                                <h2 className="border-b border-b-4 border-Ysepa-100 w-max p-1 text-Bsepa-300 font-bold text-xl">
                                    فیلتر زیست بوم
                                </h2>
                            </div>
                            <div className="mt-8 h-[320px] overflow-auto">
                                <FilterTable/>
                                <FilterTable/>
                                <FilterTable/>
                                <FilterTable/>
                                <FilterTable/>
                                <FilterTable/>
                                <FilterTable/>
                                <FilterTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurServises/>
            <Bests />
            <Validity />
        </>
    )
}

export function TestBox() {
    return (
        <>
            <div className="bg-white shadow rounded-xl border-r border-r-4 border-Bsepa-300 p-4 text-right ">
                <h5>
                    عنوان تست در این قسمت
                </h5>
            </div>
        </>
    )
}
export function FilterTable() {
    return (
        <div className="w-full flex items-center p-1 justify-between border-b border-gray-500">
            <div className="flex flex-col items-center">
                <span>120</span>
                <span className="text-[15px] text-gray-600">رتبه</span>
            </div>
            <h3>شتاب دهنده سپند</h3>
            <div className="flex flex-col items-center">
                <Image className="bg-white p-1 rounded" src={"/imgs/m-1.png"} width={30} height={0} alt="..." />
                <h2 className="text-[12px] text-gray-500">مرکز اصفهان</h2>
            </div>
        </div>
    )
}