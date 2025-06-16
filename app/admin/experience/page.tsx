import { getAllExperience } from "@/lib/actions/exp.actions"
import {shortenId, shortenString} from "@/lib/utils"
import Link from "next/link"

const AdminExperience =  async () => {
  const exps = await getAllExperience()

  return (
    <div className="space-y-2">
        <div className="flex items-center justify-between container">
          <div>
            <h1>Experience</h1>
          </div>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded">
              <Link href="/admin/experience/create">Create Project</Link>
            </button>
        </div>
        <table className="mx-auto">
            <thead className="w-full border-b-1 border-gray-700 text-black dark:text-gray-200">
              <tr>
                <th className="p-3 text-sm font-bold tracking-wide text-left">ID</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">ROLE</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">COMPANY</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">LOCATION</th>
                <th className="w-[100px] p-3 text-sm font-bold tracking-wide text-left">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {exps.map((exp) => (
                <tr key={exp.id} className="border-b-1 border-gray-800">
                  <td className="p-3 text-sm text-gray-600">{shortenId(exp.id)}</td>
                  <td className="p-3 text-sm text-gray-600">{exp.role}</td>
                  <td className="p-3 text-sm text-gray-600">{exp.company}</td>
                  <td className="p-3 text-sm text-gray-600">{exp.location}</td>
                  <td className="flex gap-1">
                    <button className="py-2 px-4 bg-green-200 text-green-800 rounded-sm">Edit</button>
                    <button className="py-2 px-4 bg-red-200 text-red-800 rounded-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  )
}

export default AdminExperience
