import Image from "next/image"
import { LiaEyeSolid, LiaHeart } from "react-icons/lia";
import { TbMessageDots } from "react-icons/tb";
import Title from "./Title";

export default function NewArticles() {
    return (
        <>
            <div className="w-full flex items-center justify-center my-12">
                <div className="w-[83%] sm:w-full md:w-full xl:w-[98%]">
                    <Title title="مقالات جدید" href="#"/>
                    <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-1 md:grid-cols-1">
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
                    <p className="text-gray-400">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. چاپ
                    </p>
                </div>
                <div className="flex items-center justify-between sm:mt-4">
                    <div className="text-gray-400  flex items-center justify-start gap-4 sm:gap-2 ">
                        <div className="flex items-center bg-gray-100 rounded px-1 gap-2">
                            <span className="text-sm">12</span>
                            <TbMessageDots className="" />
                        </div>
                        <div className="flex items-center bg-gray-100 rounded px-1 gap-2">
                            <span className="text-sm">12</span>
                            <LiaHeart className="" />
                        </div>

                        <div className="flex items-center bg-gray-100 rounded px-1 gap-2">
                            <span className="text-sm">12</span>
                            <LiaEyeSolid className="" />
                        </div>
                    </div>
                    <button className="border border-Ysepa-100 text-Ysepa-100 bg-transparent transition-all hover:bg-Ysepa-100 hover:text-white rounded-xl px-2 py-1 sm:p-1 sm:text-sm">
                        مشاهده همه
                    </button>
                </div>
            </div>
        </div>
    )
}