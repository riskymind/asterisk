import { getAllEducation } from "@/lib/actions/education.actions"
import {shortenId, shortenString} from "@/lib/utils"
import Link from "next/link"

const AdminEducations =  async () => {
  const educations = await getAllEducation()

  return (
    <div className="space-y-2">
        <div className="flex items-center justify-between container">
          <div>
            <h1>Education</h1>
          </div>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded">
              <Link href="/admin/education/create">Create Education</Link>
            </button>
        </div>
        <table className="mx-auto">
            <thead className="w-full border-b-1 border-gray-700 text-black dark:text-gray-200">
              <tr>
                <th className="p-3 text-sm font-bold tracking-wide text-left">ID</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">DEGREE</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">SCHOOL</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">YEAR</th>
                <th className="w-[100px] p-3 text-sm font-bold tracking-wide text-left">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {educations.map((education) => (
                <tr key={education.id} className="border-b-1 border-gray-800">
                  <td className="p-3 text-sm text-gray-600">{shortenId(education.id)}</td>
                  <td className="p-3 text-sm text-gray-600">{education.degree}</td>
                  <td className="p-3 text-sm text-gray-600">{education.school}</td>
                  <td className="p-3 text-sm text-gray-600">{education.year.toString()}</td>
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

export default AdminEducations
