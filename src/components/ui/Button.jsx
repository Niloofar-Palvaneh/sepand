import Link from "next/link"

export default function Button ({title , href}) {
    return (
        <Link className="bg-Ysepa-100 text-white rounded-3xl px-4 py-2" href={href}>
            {title}
        </Link>
    )
}