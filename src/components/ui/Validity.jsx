import Image from "next/image";

export default function Validity(){
    return(
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-6 gap-4 place-items-center w-[83%] sm:w-[90%] mt-24 sm:grid-cols-2 md:grid-cols-3">
                <Image className="bg-white p-2 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100"  src={"/imgs/1.png"} width={150} height={100} alt="..."/>
                <Image className="bg-white p-2 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100"  src={"/imgs/2.jpg"} width={150} height={100} alt="..."/>
                <Image className="bg-white p-2 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100"  src={"/imgs/3.png"} width={150} height={100} alt="..."/>
                <Image className="bg-white p-2 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100"  src={"/imgs/4.jpg"} width={150} height={100} alt="..."/>
                <Image className="bg-white p-2 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100"  src={"/imgs/5.png"} width={150} height={100} alt="..."/>
                <Image  className="bg-white p-2 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100" src={"/imgs/6.jpeg"} width={150} height={100} alt="..."/>
            </div>
        </div>
    )
}