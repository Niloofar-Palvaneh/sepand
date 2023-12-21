import Bests from "@/components/ui/Bests";
import Validity from "@/components/ui/Validity";

export default function Map() {
    return (
        <>
            <div className="flex items-center justify-center mt-8 ">
                <div className="grid grid-cols-4 gap-6 w-[80%] sm:w-full md:w-full p-2  sm:grid-cols-2 md:grid-cols-3">
                    <TestBox />
                    <TestBox />
                    <TestBox />
                    <TestBox />
                    <TestBox />
                    <TestBox />
                    <TestBox />
                    <TestBox />
                </div>
            </div>
            <Bests />
            <Validity />
        </>
    )
}
export function TestBox() {
    return (
        <>
            <div className="bg-white shadow rounded-xl border-r border-r-4 border-Bsepa-300 p-4 text-right ">
                <h5>
                    عنوان تست در این قسمت
                </h5>
            </div>
        </>
    )
}