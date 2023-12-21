import Slider from "@/components/ui/Slider";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { TbMessageDots } from "react-icons/tb";
import { LiaEyeSolid, LiaHeart } from "react-icons/lia";
import Title from "@/components/ui/Title";

export default function Blogs() {
    return (
        <>
            <Slider link={"مشاهده پست"} />
            <div className="flex flex-col items-center justify-center mt-24 sm:mt-8 md:mt-12">
                <div className="w-[80%] bg-Bsepa-200 shadow flex items-center justify-between p-2 rounded sm:w-full md:w-full ">
                    <select className="w-[30%] p-2 rounded shadow rtl-grid sm:w-auto">
                        <option value="0">انتخاب دسته</option>
                        <option value="one">دسته اول</option>
                        <option value="two">دسته دوم</option>
                        <option value="three">دسته سوم</option>
                    </select>
                    <div className="bg-white text-gray-700 flex items-center p-2 rounded shadow w-[30%] sm:w-auto">
                        <CiSearch className="text-2xl " />
                        <input className="bg-transparent text-end w-full outline-none" type="text" placeholder="جستجو مقاله" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[80%] sm:w-full md:w-full mt-12  xl:w-full">
                    <Title title="مقالات جدید" href="#" />
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 md:grid-cols-1">
                        <NewArticleItem />
                        <NewArticleItem />
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[80%] sm:w-full md:w-full mt-12   xl:w-full">
                    <Title title="گزارش ها" href="#" />
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 md:grid-cols-1">
                        <NewArticleItem />
                        <NewArticleItem />
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-[80%] sm:w-full md:w-full mt-12   xl:w-full">
                    <Title title="قوانین و آیین نامه" href="#" />
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 md:grid-cols-1">
                        <NewArticleItem />
                        <NewArticleItem />
                    </div>
                </div>
            </div>
        </>
    )
}

function NewArticleItem() {
    return (
        <div className="bg-white p-2 rounded overflow-hidden flex gap-4 sm:flex-col">
            <Image className="rounded sm:w-full sm:h-[350px]" src={"/imgs/newArticle.jpg"} width={160} height={100} alt="article/img" />
            <div className="text-right flex flex-col  justify-between">
                <div className="flex flex-col gap-4">
                    <h2>
                        عنوان مقاله در این قسمت
                    </h2>
                    <span className="text-gray-400">1402/10/10</span>
                    <p className="text-gray-400 xl:text-sm">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. چاپ
                    </p>
                </div>
                <div className="flex items-center justify-between sm:mt-4">
                    <div className="text-gray-400  flex items-center justify-start gap-4 sm:gap-2 xl:gap-1 ">
                        <div className="flex items-center bg-gray-100 rounded px-1 gap-2 xl:gap-1">
                            <span className="text-sm">12</span>
                            <TbMessageDots className="" />
                        </div>
                        <div className="flex items-center bg-gray-100 rounded px-1 gap-2 xl:gap-1">
                            <span className="text-sm">12</span>
                            <LiaHeart className="" />
                        </div>

                        <div className="flex items-center bg-gray-100 rounded px-1 gap-2 xl:gap-1">
                            <span className="text-sm">12</span>
                            <LiaEyeSolid className="" />
                        </div>
                    </div>
                    <button className="border border-Ysepa-100 text-Ysepa-100 bg-transparent transition-all hover:bg-Ysepa-100 hover:text-white rounded-xl px-2 py-1 sm:p-1 xl:p-1 xl:text-[12px] sm:text-sm">
                        مشاهده همه
                    </button>
                </div>
            </div>
        </div>
    )
}