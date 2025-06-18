import DeleteButton from "@/app/components/admin/DeleteButton"
import { getAllSkills, deleteSkill } from "@/lib/actions/skills.actions"
import {shortenId} from "@/lib/utils"
import Link from "next/link"

const AdminSkills =  async () => {
  const skills = await getAllSkills()

  return (
    <div className="space-y-2">
        <div className="flex items-center justify-between container">
          <div>
            <h1>Skills</h1>
          </div>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded">
              <Link href="/admin/skill/create">Create Skill</Link>
            </button>
        </div>
        <table className="mx-auto">
            <thead className="w-full border-b-1 border-gray-700 text-black dark:text-gray-200">
              <tr>
                <th className="p-3 text-sm font-bold tracking-wide text-left">ID</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">TITLE</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">LEVEL</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">CATEGORY</th>
                <th className="w-[100px] p-3 text-sm font-bold tracking-wide text-left">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => (
                <tr key={skill.id} className="border-b-1 border-gray-800">
                  <td className="p-3 text-sm text-gray-600">{shortenId(skill.id)}</td>
                  <td className="p-3 text-sm text-gray-600">{skill.title}</td>
                  <td className="p-3 text-sm text-gray-600">{skill.level}</td>
                  <td className="p-3 text-sm text-gray-600">{skill.category}</td>
                    <td className="flex gap-1">
                    <button className="py-2 px-4 bg-green-200 text-green-800 rounded-sm">
                      <Link href={`/admin/skill/${skill.id}`}>
                        Edit
                      </Link>
                    </button>
                    <DeleteButton
                      id={skill.id}
                      deleteAction={deleteSkill}
                      entityName="skill"
                    />

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  )
}

export default AdminSkills
