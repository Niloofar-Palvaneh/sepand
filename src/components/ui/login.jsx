import Button from "@/components/ui/Button";
import { IoCloseSharp } from "react-icons/io5";

export default function Login({isOpenLoginModalHandler}) {
    return (
        <>
            <div className="w-full h-screen fixed top-0 bottom-0 z-50 absolute bg-[#0e286b71] flex items-center justify-center overflow-hidden">
                <div className="w-[500px] sm:w-full sm:h-auto h-[550px] bg-Bsepa-100 absolute rounded-xl shadow-xl p-4">
                    <div className="flex items-center justify-between font-bold text-Bsepa-300 text-xl mb-12 w-full border-b border-b-Ysepa-100 pb-4">
                        <IoCloseSharp onClick={isOpenLoginModalHandler} className="text-3xl shadow rounded-full cursor-pointer"/>
                        <h2>
                            ورود به سامانه سپند
                        </h2>
                    </div>
                    <form className="flex flex-col gap-12 mt-4 items-center">
                        <div className="flex flex-col items-end w-full gap-1">
                            <label className="text-md text-gray-600" htmlFor="name">نام و نام خانوادگی</label>
                            <input className="bg-Bsepa-200 rounded border-b w-full outline-none px-4 py-2 placeholder:text-[12px] text-end"
                             placeholder="نام و نام خانوادگی خود را بنویسید" type="text" name="name" />
                        </div>
                        <div className="flex flex-col items-end w-full gap-1">
                            <label className="text-md text-gray-600" htmlFor="name">پست الکترونیکی</label>
                            <input className="bg-Bsepa-200 rounded border-b w-full outline-none px-4 py-2 placeholder:text-[12px] text-end"
                             placeholder="ایمیل خود را به صورت کامل وارد کنید" type="text" name="name" />
                        </div>
                        <div className="flex flex-col items-end w-full gap-1">
                            <label className="text-md text-gray-600" htmlFor="name">رمز عبور</label>
                            <input className="bg-Bsepa-200 rounded border-b w-full outline-none px-4 py-2 placeholder:text-[12px] text-end"
                             placeholder="یک رمز عبور امن برای خود انتخاب کنید" type="text" name="name" />
                        </div>
                        <Button title={"ورود به سامانه"} href={"#"} />
                    </form>
                </div>
            </div>

        </>
    )
}