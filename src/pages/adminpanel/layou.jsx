import AdminPanelSidebar from "@/components/globals/AdminPanelSidebar"

export default function Layout({ children }) {
    return (
        <>
            <div className="flex items-center justify-center mt-8">
                <div className="w-[80%] flex gap-4 sm:flex-col-reverse sm:w-[98%] md:w-[97%] xl:w-[98%]">
                    {children}
                    <AdminPanelSidebar />
                </div>
            </div>
        </>
    )
}