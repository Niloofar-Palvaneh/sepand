import Link from "next/link";

export default function Title({ title, href }) {
    return (
        <>
            <div className="flex items-center justify-between p-2">
                <Link href={href} className="border border-Bsepa-300 text-Bsepa-300 bg-transparent transition-all hover:bg-Bsepa-300 hover:text-white rounded-xl px-2 py-1">
                    مشاهده همه
                </Link>
                <h2 className="border-b border-b-4 border-Ysepa-100 w-max p-1 text-Bsepa-300 font-bold text-xl">
                    {title}
                </h2>
            </div>
        </>
    )
}