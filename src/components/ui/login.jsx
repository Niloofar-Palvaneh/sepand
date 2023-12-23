import Button from "@/components/ui/Button";
import { IoCloseSharp } from "react-icons/io5";

export default function Login({isOpenLoginModalHandler}) {
    return (
        <>
            <div className="w-full h-screen fixed top-0 bottom-0 z-50 absolute bg-[#0e286b71] flex items-center justify-center overflow-hidden">
                <div className="w-[500px] sm:w-full sm:h-auto h-[500px] bg-Bsepa-100 absolute rounded-xl shadow-xl p-4">
                    <div className="flex items-center justify-between font-bold text-Bsepa-300 text-xl mb-12">
                        <IoCloseSharp onClick={isOpenLoginModalHandler} className="text-2xl shadow rounded-full cursor-pointer"/>
                        <h2>
                            ورود به سامانه سپند
                        </h2>
                    </div>
                    <form className="flex flex-col gap-12 mt-4 items-center">
                        <div className="flex flex-col items-center gap-1">
                            <label className="text-sm text-gray-600" htmlFor="name">نام و نام خانوادگی</label>
                            <input className="bg-transparent shadow outline-none px-4 py-1 rounded-xl" type="text" name="name" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <label className="text-sm text-gray-600" htmlFor="email">پست الکترونیکی</label>
                            <input className="bg-transparent shadow outline-none px-4 py-1 rounded-xl" type="text" name="email" />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <label className="text-sm text-gray-600" htmlFor="pass">رمز عبور</label>
                            <input className="bg-transparent shadow outline-none px-4 py-1 rounded-xl" type="text" name="pass" />
                        </div>
                        <Button title={"ورود به سامانه"} href={"#"} />
                    </form>
                </div>
            </div>

        </>
    )
}