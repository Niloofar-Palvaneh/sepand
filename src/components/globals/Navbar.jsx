
import Image from "next/image"
import Link from "next/link"
import Button from "../ui/Button"
import { HiMenuAlt3, HiOutlineUser } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import Login from "../ui/login";

export default function Navbar() {
    const [username, setUsername] = useState(null)
    const getNameFromLocal = () => {
        let name = localStorage.getItem("name")
        setUsername(name)
    }
    useEffect(() => {
        getNameFromLocal()
        console.log("run");
    }, [username])

    const navbarLinks = [
        {
            "id": 1,
            "title": "صفحه اصلی",
            "href": "/"
        },
        {
            "id": 2,
            "title": "نقشه زیست بوم",
            "href": "/map"
        },
        {
            "id": 3,
            "title": "درباره ما",
            "href": "/about"
        },
        {
            "id": 4,
            "title": "وبلاگ",
            "href": "/blogs"
        },
        {
            "id": 5,
            "title": "تماس با ما",
            "href": "/contact"
        }
    ]
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false)
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
    const isOpenLoginModalHandler = async () => {
        await setIsOpenLoginModal(!isOpenLoginModal)
        if (isOpenLoginModal == false) {
            window.scroll(0, 0)
            document.body.style.overflowY = 'hidden';
        }
        else {
            document.body.style.overflowY = 'auto';
        }
    }
    return (
        <>

            <div className="flex items-center justify-around sticky top-0 z-50 py-6 backdrop-blur-[8px] bg-transparent sm:hidden md:hidden xl:py-2">
                <div onClick={isOpenLoginModalHandler}>
                    {/* <button className="bg-Ysepa-100 text-white rounded-3xl px-4 py-2">
                        {username ? username : "ورود / ثبت نام"}
                    </button> */}
                    <Button title={username ? username : "ورود / ثبت نام"} />
                </div>
                <ul className="flex items-center gap-12 xl:gap-8">
                    {
                        navbarLinks.reverse().map(link => (
                            <li key={link.id}>
                                <Link href={link.href}>
                                    {link.title}
                                </Link>
                            </li>
                        ))
                    }
                    <Image src={"/imgs/logo.png"} width={120} height={120} alt="logo" />
                </ul>
            </div>
            <div className="sticky top-0 backdrop-blur-[8px] bg-transparent hidden sm:block md:block z-50">
                <div className="flex items-center justify-between p-2">
                    <div onClick={isOpenLoginModalHandler}>
                        <Button title={username ? username : "ورود / ثبت نام"} />
                    </div>
                    <Image src={"/imgs/logo.png"} width={120} height={120} alt="logo" />
                    <div className="rounded-xl bg-Bsepa-300 text-white p-2" onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}>
                        <HiMenuAlt3 className="text-xl " />
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden ">
                <div className={`w-3/4 h-screen bg-white fixed top-0  transition-all z-50 duration-1000 ${isShowMobileMenu ? "right-0" : "right-[5900px]"}`}>
                    <div className="flex items-center justify-between p-2 border-b mb-8 pb-2">
                        <IoMdClose onClick={() => setIsShowMobileMenu(!isShowMobileMenu)} className="text-3xl text-gray-700" />
                        <Image src={"/imgs/logo.png"} width={120} height={120} alt="logo" />
                    </div>
                    <ul className="flex flex-col gap-10 xl:gap-8">
                        {
                            navbarLinks.reverse().map(link => (
                                <li key={link.id} className="px-8 py-2 border-b w-full text-end">
                                    <Link href={link.href}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={`z-40 w-full h-screen bg-Bsepa-300 opacity-70 fixed top-0 transition-all duration-1000 ${isShowMobileMenu ? "left-0" : "left-[5900px]"}`}></div>
            </div>
            {
                isOpenLoginModal && <Login isOpenLoginModalHandler={isOpenLoginModalHandler} />
            }
        </>
    )
}