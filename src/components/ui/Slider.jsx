import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Button from "./Button"

export default function Slider({link}) {
    const [sliderRef] = useKeenSlider({
        loop: true,
    })

    return (
        <div className="flex items-center justify-center">
            <div className="w-[80%] sm:w-full md:w-full">
                <div ref={sliderRef} className="keen-slider relative">
                    <div className="keen-slider__slide number-slide1 bg-[url('/imgs/slider-img.jpg')] bg-center bg-cover h-[500px] overflow-hidden rounded-2xl ">
                        <div className="absolute w-full h-full bg-Bsepa-300 opacity-40 z-[-1]"></div>
                        <div className="z-10 p-24 text-center sm:p-12 md:p-12 xl:p-12">
                            <h2 className="text-2xl font-bold text-Ysepa-100 mt-24 sm:mt-12">
                                عنوان اسلایدر اول در این قسمت
                            </h2>
                            <p className="text-Bsepa-100 my-12 leading-10">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                            </p>
                            <Button title={link} href={"#"} />
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1 bg-[url('/imgs/slider-img.jpg')] bg-center bg-cover h-[500px] overflow-hidden rounded-2xl ">
                        <div className="absolute w-full h-full bg-Bsepa-300 opacity-40 z-[-1]"></div>
                        <div className="z-10 p-24 text-center sm:p-12 md:p-12 xl:p-12">
                            <h2 className="text-2xl font-bold text-Ysepa-100 mt-24 sm:mt-12">
                                عنوان اسلایدر دوم در این قسمت
                            </h2>
                            <p className="text-Bsepa-100 my-12 leading-10">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                            </p>
                            <Button title={"دریافت گذارش"} href={"#"} />
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1 bg-[url('/imgs/slider-img.jpg')] bg-center bg-cover h-[500px] overflow-hidden rounded-2xl ">
                        <div className="absolute w-full h-full bg-Bsepa-300 opacity-40 z-[-1]"></div>
                        <div className="z-10 p-24 text-center sm:p-12 md:p-12 xl:p-12">
                            <h2 className="text-2xl font-bold text-Ysepa-100 mt-24 sm:mt-12">
                                عنوان اسلایدر سوم در این قسمت
                            </h2>
                            <p className="text-Bsepa-100 my-12 leading-10">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                            </p>
                            <Button title={"دریافت گذارش"} href={"#"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
