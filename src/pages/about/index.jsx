import Image from "next/image"

export default function About() {
    return (
        <>
            <div className="flex items-center justify-center mt-12">
                <div className="w-[85%] sm:w-[98%] md:w-[98%]">
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
                </div>
            </div>
        </>
    )
}