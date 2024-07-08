import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                {/* <nav className="flex flex-col w-full h-full bg-gray-800 text-white">
                    <div className="flex items-center justify-center h-16 bg-gray-900">
                        <p className="text-2xl font-bold">Acme</p>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <a href="/dashboard" className="p-2 hover:bg-gray-700">Dashboard</a>
                        <a href="/settings" className="p-2 hover:bg-gray-700">Settings</a>
                    </div>
                </nav> */}
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    )
}