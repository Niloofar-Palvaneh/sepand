import { FaTelegram, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="grid grid-cols-4 gap-12 bg-Bsepa-300 py-12 px-8 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-24">
                <ul>
                    <li className="flex items-end flex-col gap-4">
                        <Image src={"/imgs/logo.png"} width={120} height={120} alt="logo" />
                        <p className="text-Bsepa-100 text-end">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                        </p>
                        <div className="flex items-center justify-end gap-4">
                            <Link href={"#"} className="bg-Bsepa-100 text-xl p-1 rounded border transition hover:text-pink-800"><FaInstagram /></Link>
                            <Link href={"#"} className="bg-Bsepa-100 text-xl p-1 rounded border transition hover:text-green-800"><FaWhatsapp /></Link>
                            <Link href={"#"} className="bg-Bsepa-100 text-xl p-1 rounded border transition hover:text-blue-800"><FaTelegram /></Link>
                        </div>
                    </li>
                </ul>
                <ul className="flex flex-col items-end gap-2">
                    <li className="text-Ysepa-100 mb-2">لینک های مفید</li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-2 text-Bsepa-100">
                            صفحه اصلی
                            <MdOutlineArrowBack className="text-sm" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-2 text-Bsepa-100">
                            نقشه زیست بوم
                            <MdOutlineArrowBack className="text-sm" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-2 text-Bsepa-100">
                            وبلاگ
                            <MdOutlineArrowBack className="text-sm" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-2 text-Bsepa-100">
                            درباره ما
                            <MdOutlineArrowBack className="text-sm" />
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col items-end gap-2">
                    <li className="text-Ysepa-100 mb-2">لینک های مفید</li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-2 text-Bsepa-100">
                            صفحه اصلی
                            <MdOutlineArrowBack className="text-sm" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-2 text-Bsepa-100">
                            نقشه زیست بوم
                            <MdOutlineArrowBack className="text-sm" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-2 text-Bsepa-100">
                            وبلاگ
                            <MdOutlineArrowBack className="text-sm" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="flex items-center gap-2 text-Bsepa-100">
                            درباره ما
                            <MdOutlineArrowBack className="text-sm" />
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col items-end gap-2">
                    <li className="text-Ysepa-100 mb-2">نماد ها</li>
                    <div className="flex items-center gap-2">
                        <Image className="bg-white rounded-xl" src={"/imgs/namad1.png"} width={120} height={120} alt="E-namad" />
                        <Image className="rounded-xl" src={"/imgs/namad2.jpg"} width={120} height={120} alt="E-namad" />
                    </div>
                </ul>
            </div>
        </>
    )
}