"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";

const UpdateProfileModal = ({ user }) => {
  const { image, name, id } = user;
  const router = useRouter();

  const handleEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    // console.log(userData);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );

      const data = await res.json();

      await authClient.updateUser({
         name: userData?.name,
        image: userData?.image,
      });
      //  console.log(data);
      toast.success("Profile Updated Successfully ");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong ");
    }
  };

  return (
    <Modal>
      <Modal.Trigger>
        <button className="w-full border border-emerald-600 px-4 py-3 rounded-xl flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
          <FiEdit />
          Update Profile
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="w-full max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Update Profile</Modal.Heading>
              <p className="text-sm text-gray-500 mt-1">
                Update your name and profile picture
              </p>
            </Modal.Header>

            <Modal.Body className="p-3">
              <Surface>
                <form
                  onSubmit={handleEdit}
                  className="space-y-5 border border-emerald-200 rounded-2xl p-5"
                >
                  {/* Name */}
                  <div className="w-full">
                    <Label>Full Name</Label>
                    <Input
                      name="name"
                      defaultValue={name}
                      placeholder="Enter your name"
                      className="w-full dark:bg-gray-800 dark:text-white"
                    />
                  </div>

                  {/* Image */}
                  <div className="w-full">
                    <Label>Photo URL</Label>
                    <Input
                      name="image"
                      defaultValue={image}
                      placeholder="https://example.com/image.jpg"
                      className="w-full dark:bg-gray-800 dark:text-white"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <div className="w-full sm:w-1/2">
                      <Button
                        type="reset"
                        className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300"
                      >
                        Reset
                      </Button>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <Button
                        type="submit"
                        slot="close"
                        className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfileModal;
