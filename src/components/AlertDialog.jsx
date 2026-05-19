"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

const DeleteAlert = ({ booking }) => {
  const { doctorName, _id } = booking;

  const router = useRouter()

  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      },
    );

    const data = await res.json();
    if(data){
        toast.success("Booking Schedule delete Succesfully ")
        router.refresh()
    }
    
  };

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button className="w-full px-4 py-4 rounded-xl fl bg-red-500 hover:bg-red-600 text-white font-semibold cursor-pointer">
          <FiTrash2 />
          Delete
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete your appointment permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                You will delete permanently , your booked appointment for{" "}
                {doctorName}
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteAlert;
