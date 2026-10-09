import { useState } from 'react'
import DashboardSidebar from '../Components/Dashboard-Components/DashboardSidebar'
import DashboardMain from '../Components/Dashboard-Components/DashboardMain'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('chat')

  return (
    <div className="min-h-screen">

    
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}


      <DashboardSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

  
      <DashboardMain
        setIsSidebarOpen={setIsSidebarOpen}
        currentSection={currentSection}
      />

    </div>
  )
}

export default Dashboard















// import { useAuth } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleSignOut = async () => {
//     await logout();
//     navigate("/signin", { replace: true, state: { message: "You have signed out successfully." } });
//   };

//   return (
//     <main className="min-h-screen bg-[var(--color-background)] px-5 py-8 sm:px-6 lg:px-10">
//       <div className="mx-auto max-w-5xl rounded-2xl border border-black/10 bg-white p-6 shadow-lg sm:p-8">
//         <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
//               Dashboard
//             </p>
//             <h1 className="mt-3 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
//               Welcome to VIDE
//             </h1>
//           </div>

//           <button
//             type="button"
//             onClick={handleSignOut}
//             className="w-full rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
//           >
//             Sign Out
//           </button>
//         </div>

//         <div className="mt-8 rounded-xl border border-black/10 bg-[var(--color-background)] p-5">
//           <p className="text-sm text-[var(--color-muted)]">Signed in as</p>
//           <p className="mt-2 break-words text-lg font-medium text-black">
//             {user?.email}
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }
