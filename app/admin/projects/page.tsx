import { getAllProjects, deleteProject } from "@/lib/actions/projects.actions"
import {shortenId, shortenString} from "@/lib/utils"
import Link from "next/link"
import DeleteButton  from "@/app/components/admin/DeleteButton"

const AdminProjects =  async () => {
  const projects = await getAllProjects()

  return (
    <div className="space-y-2">
        <div className="flex items-center justify-between container">
          <div>
            <h1>Projects</h1>
          </div>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded">
              <Link href="/admin/projects/create">Create Project</Link>
            </button>
        </div>
        <table className="mx-auto">
            <thead className="w-full border-b-1 border-gray-700 text-black dark:text-gray-200">
              <tr>
                <th className="p-3 text-sm font-bold tracking-wide text-left">ID</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">TITLE</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">DESCRIPTION</th>
                <th className="p-3 text-sm font-bold tracking-wide text-left">TECHNOLOGIES</th>
                <th className="w-[100px] p-3 text-sm font-bold tracking-wide text-left">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b-1 border-gray-800">
                  <td className="p-3 text-sm text-gray-600">{shortenId(project.id)}</td>
                  <td className="p-3 text-sm text-gray-600">{project.title}</td>
                  <td className="p-3 text-sm text-gray-600">{shortenString(project.description)}</td>
                  <td className="p-3 text-sm text-gray-600">{project.technologies[0]}</td>
                  <td className="flex gap-1">
                    <button className="py-2 px-4 bg-green-200 text-green-800 rounded-sm">
                      <Link href={`/admin/projects/${project.id}`}>
                        Edit
                      </Link>
                    </button>
                    <DeleteButton
                      id={project.id}
                      deleteAction={deleteProject}
                      entityName="project"
                    />

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  )
}

export default AdminProjects
