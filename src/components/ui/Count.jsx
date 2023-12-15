
export default function Count() {
    const counts = [
        {
            count: 24,
            title: "پژوهش"
        },
        {
            count: 54,
            title: "کاربران"
        },
        {
            count: 10,
            title: "مراکز حامی"
        },
        {
            count: 14,
            title: "همکاران"
        },
        {
            count: 10,
            title: "کسب و کار"
        },
        {
            count: 40,
            title: "استارت اپ"
        },
    ]
    return (
        <>
            <div className="bg-Bsepa-200 flex justify-around items-center p-24 mt-24 sm:p-2 sm:grid sm:grid-cols-2 sm:gap-4  md:p-12">
                {
                    counts.map(item => (
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-Bsepa-300 text-white text-3xl font-bold py-4 px-6 sm:p4 rounded-xl">
                                {item.count}
                            </div>
                            <span className="text-Bsepa-300">
                                {item.title}
                            </span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}