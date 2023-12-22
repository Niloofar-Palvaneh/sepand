import Image from "next/image"
import { GrHomeRounded } from "react-icons/gr";

export default function About() {
    return (
        <>
            <div className="flex items-center justify-center mt-12">
                <div className="w-[87%] sm:w-[98%] md:w-[98%]">
                    <div className="grid grid-cols-2 place-items-center gap-12 sm:flex sm:flex-col md:flex md:flex-col xl:flex xl:flex-col">
                        <div className="relative">
                            <div className="w-[150px] h-[170px] rounded-xl bg-Bsepa-200 absolute -top-4 -right-2 -z-[1]"></div>
                            <video autoPlay loop controls className="border border-8 border-white rounded-xl overflow-hidden" src={"/imgs/about.mp4"} width={580} height={500} alt="mp4 file"></video>
                            <div className="w-[150px] h-[170px] rounded-xl bg-Bsepa-200 absolute -bottom-4 -left-2 -z-[1]"></div>
                        </div>
                        <div className="flex flex-col items-end text-end gap-4 bg-Bsepa-200 p-2 rounded-xl shadow">
                            <Image src={"/imgs/logo.png"} width={100} height={100} alt="logo" />
                            <h1 className="text-xl text-Bsepa-300">
                                سپند (سامانه پایگاه های نوآوری و دانش بنیان ایران)
                            </h1>
                            <p className="text-gray-700 leading-8">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col mt-24 items-center justify-center gap-4">
                        <h2 className="border-b border-b-4 border-Ysepa-100 w-max p-1 text-Bsepa-300 font-bold text-xl ">
                            هدف ما
                        </h2>
                        <p>
                            هدف ما توسعه زیرساخت های خلاقیت و نوآوری در سراسر ایران عزیزمان می باشد
                        </p>
                        <div className="grid grid-cols-5 gap-6 mt-2 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
                            <Target title="با ایجاد پایگاه های خلاقیت نوآوری" icon={<GrHomeRounded />} />
                            <Target title="آموزش مهارتی دانش آموزان" icon={<GrHomeRounded />} />
                            <Target title="آموزش های نخبه پروری" icon={<GrHomeRounded />} />
                            <Target title="شناسایی استعدادهای برتر" icon={<GrHomeRounded />} />
                            <Target title="توسعه شبکه های مشاوره و منتورینگ" icon={<GrHomeRounded />} />
                        </div>
                    </div>
                    <div className="w-full flex flex-col mt-24 items-center justify-center gap-4">
                        <h2 className="border-b border-b-4 border-Ysepa-100 w-max p-1 text-Bsepa-300 font-bold text-xl ">
                            همکاران
                        </h2>
                        <div className="grid grid-cols-6 gap-6 mt-2 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
                            <TeamItem title=" مراکز نوآوری و شتابدهنده ها" />
                            <TeamItem title="پارک های علم وفناوری" />
                            <TeamItem title=" صندوق های مالی" />
                            <TeamItem title=" سازمان های دولتی" />
                            <TeamItem title=" سازمان های خصوصی" />
                            <TeamItem title=" مراکز آموزشی" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function TeamItem({ title }) {
    return (
        <div className="text-center bg-white border-x border-x-4 border-x-Ysepa-100 px-2 py-4 rounded-br-xl rounded-tl-xl text-[15px]">
            <h4>
                {title}
            </h4>
        </div>
    )
}

export function Target({ icon, title }) {
    return (
        <div className="bg-white rounded-xl p-4 flex items-center justify-center flex-col gap-4 shadow">
            <div className="text-2xl p-4 text-gray-700 rounded-full bg-Bsepa-200 flex items-center justify-center ">
                {icon}
            </div>
            <p className="text-center">
                {title}
            </p>
        </div>
    )
}