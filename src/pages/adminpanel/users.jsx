import AdminPanelSidebar from "@/components/globals/AdminPanelSidebar";
import { useEffect, useState } from "react";
import Layout from "./layou";

export default function users() {
    const users = [
        {
            id: 1,
            name: "نیلوفر",
            city: "کرمانشاه"
        },
        {
            id: 2,
            name: "زهرا",
            city: "تهران"
        },
        {
            id: 3,
            name: "سارا",
            city: "کرمان"
        },
        {
            id: 4,
            name: "لیلا",
            city: "اهواز"
        },
        {
            id: 5,
            name: "فرشته",
            city: "تهران"
        },
        {
            id: 6,
            name: "دنیا",
            city: "مشهد"
        },
        {
            id: 7,
            name: "درسا",
            city: "قزوین"
        },
        {
            id: 8,
            name: "سمیرا",
            city: "رشت"
        },
        {
            id: 9,
            name: "غزل",
            city: "مشهد"
        },
        {
            id: 10,
            name: "درسا",
            city: "قزوین"
        },
    ]
    const [paginatedUsers, setPaginatedUsets] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    let pageSize = 4
    let pagesNumber
    const pageCount = Math.ceil(users.length / pageSize)
    pagesNumber = Array.from(Array(pageCount).keys())
    useEffect(() => {
        let endIndex = pageSize * currentPage
        let startIndex = endIndex - pageSize
        let shownUsers = users.slice(startIndex, endIndex)
        setPaginatedUsets(shownUsers)
    }, [currentPage])

    const changePageHandler = (newPage) => {
        setCurrentPage(newPage)
        let endIndex = pageSize * currentPage
        let startIndex = endIndex - pageSize
        let shownUsers = users.slice(startIndex, endIndex)
        setPaginatedUsets(shownUsers)
    }
    return (
        <>
            <Layout>
                <div className="w-full flex flex-col gap-2">
                    <div className="flex items-center justify-around bg-blue-100 p-2 rounded font-bold">
                        <span className="text-end w-[60px]">شهر</span>
                        <span className="text-end w-[60px]">نام</span>
                        <span className="text-end w-[60px]">ردیف</span>
                    </div>
                    {
                        paginatedUsers.map(user => (
                            <div className="flex items-center justify-around bg-white p-1 rounded 
                                shadow border text-gray-500 hover:text-gray-900 hover:bg-Bsepa-100">
                                <span className="text-end w-[60px]">{user.city}</span>
                                <span className="text-end w-[60px]">{user.name}</span>
                                <span className="text-end w-[60px]">{user.id}</span>
                            </div>
                        ))
                    }
                    <div className="flex flex-row-reverse items-center justify-center gap-4">
                        {
                            pagesNumber.map(item => (
                                <button
                                    className={`
                                        px-4 py-2 rounded shadow ${currentPage === item + 1 && "bg-Bsepa-300 text-white"}`}
                                    onClick={() => changePageHandler(item + 1)}
                                >{item + 1}</button>
                            ))
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}