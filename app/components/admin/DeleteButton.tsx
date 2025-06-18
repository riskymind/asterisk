'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type DeleteFunction = (id: string) => Promise<{ success: boolean; message: string }>;

interface DeleteButtonProps {
  id: string;
  entityName?: string; // e.g. "project", "skill"
  deleteAction: DeleteFunction;
}

const DeleteButton = ({ id, entityName = "item", deleteAction }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm(`Are you sure you want to delete this ${entityName}?`);

    if (!confirmed) return;

    const res = await deleteAction(id);

    if (res.success) {
      toast.success(res.message || `${entityName} deleted successfully.`);
      router.refresh();
    } else {
      toast.error(res.message || `Failed to delete ${entityName}.`);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="py-2 px-4 bg-red-200 text-red-800 rounded-sm"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
