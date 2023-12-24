import Button from "@/components/ui/Button";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form"

export default function Login({ isOpenLoginModalHandler }) {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            pass: "",
        }
    })

    const formSubmitting = (data) => {
        localStorage.setItem("name", data.fullName)
        isOpenLoginModalHandler()
    }

    return (
        <>
            <div className="w-full h-screen fixed top-0 bottom-0 z-50 absolute bg-[#0e286b71] flex items-center justify-center overflow-hidden">
                <div className="w-[500px] sm:w-full sm:h-auto h-[580px] bg-Bsepa-100 absolute rounded-xl shadow-xl p-4">
                    <div className="flex items-center justify-between font-bold text-Bsepa-300 text-xl mb-12 w-full border-b border-b-Ysepa-100 pb-4">
                        <IoCloseSharp onClick={isOpenLoginModalHandler} className="text-3xl shadow rounded-full cursor-pointer" />
                        <h2>
                            ورود به سامانه سپند
                        </h2>
                    </div>
                    <form className="flex flex-col gap-12 mt-4 items-center" onSubmit={handleSubmit(formSubmitting)}>
                        <div className="flex flex-col items-end w-full gap-1">
                            <label className="text-md text-gray-600" >نام و نام خانوادگی</label>
                            <input
                                {...register('fullName', {
                                    required: "وارد کردن نام احباری است",
                                    minLength: {
                                        value: 2,
                                        message: "حداقل تعداد کاراکتر این فیلد 2 است"
                                    },
                                })}
                                className="bg-Bsepa-200 rounded border-b w-full outline-none px-4 py-2 placeholder:text-[12px] text-end"
                                placeholder="نام و نام خانوادگی خود را بنویسید" type="text" />
                            <p className="text-[12px] pr-2 text-red-500 ">
                                {errors.fullName && errors.fullName.message}
                            </p>
                        </div>
                        <div className="flex flex-col items-end w-full gap-1">
                            <label className="text-md text-gray-600" >پست الکترونیکی</label>
                            <input
                                {...register('email', {
                                    required: "وارد کردن ایمیل اجباری است",
                                    pattern: {
                                        value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                                        message: "ایمیل وارد شده نامعتبر است"
                                    }
                                })}
                                className="bg-Bsepa-200 rounded border-b w-full outline-none px-4 py-2 placeholder:text-[12px] text-end"
                                placeholder="ایمیل خود را به صورت کامل وارد کنید" type="text" />
                            <p className="text-[12px] pr-2 text-red-500 ">
                                {errors.email && errors.email.message}
                            </p>
                        </div>
                        <div className="flex flex-col items-end w-full gap-1">
                            <label className="text-md text-gray-600" >رمز عبور</label>
                            <input
                                {...register('pass', {
                                    required: "وارد کردن رمز عبور اجباری است",
                                    minLength: {
                                        value: 5,
                                        message: "رمز عبور حداقل باید 5 حرف باشد"
                                    }
                                })}
                                className="bg-Bsepa-200 rounded border-b w-full outline-none px-4 py-2 placeholder:text-[12px] text-end"
                                placeholder="یک رمز عبور امن برای خود انتخاب کنید" type="text" />
                            <p className="text-[12px] pr-2 text-red-500 ">
                                {errors.pass && errors.pass.message}
                            </p>
                        </div>
                        <Button title={"ورود به سامانه"} />
                    </form>
                </div>
            </div>

        </>
    )
}