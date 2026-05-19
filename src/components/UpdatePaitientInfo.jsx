"use client";

import { Button, Input, Label, Modal, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";

const UpdatePaitientInfo = ({ bookings }) => {
  const router = useRouter();



  const {
    phone,
    patientName,
    doctorName,
    appointmentTime,
    appointmentDate,
    _id,
  } = bookings;


 const handleInfoUpdate = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const userData = Object.fromEntries(formData.entries());

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await res.json();

    if (data?.modifiedCount > 0) {
      toast.success("Appointment Updated Successfully");
      e.target.reset();
      router.refresh();

    } else {
      toast.error("Nothing updated");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
  return (
    <div>
      <Modal>
        <Modal.Trigger>
          <Button className="w-full border border-emerald-600 px-4 py-3 rounded-xl flex justify-center items-center gap-2 cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
            <FiEdit />
            Update Appointment
          </Button>
        </Modal.Trigger>

        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="w-full max-w-lg rounded-2xl">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading className="text-2xl font-bold text-emerald-700">
                  Update Appointment
                </Modal.Heading>

                <p className="text-sm text-gray-500 mt-1">
                  Update patient appointment information
                </p>
              </Modal.Header>

              <Modal.Body className="p-4">
                <Surface>
                  <form
                    onSubmit={handleInfoUpdate}
                    className="space-y-5 border border-emerald-100 rounded-2xl p-5 bg-white"
                  >
                    {/* Doctor Name */}
                    <div>
                      <Label>Doctor Name</Label>
                      <Input
                        defaultValue={doctorName}
                        readOnly
                        className="w-full bg-gray-100 cursor-not-allowed"
                      />
                    </div>

                    {/* Patient Name */}
                    <div>
                      <Label>Patient Name</Label>
                      <Input
                        name="patientName"
                        defaultValue={patientName}
                        className="w-full"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label>Mobile Number</Label>
                      <Input
                        name="phone"
                        defaultValue={phone}
                        className="w-full"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <Label>Appointment Date</Label>
                      <Input
                        type="date"
                        name="appointmentDate"
                        defaultValue={
                          appointmentDate
                            ? new Date(appointmentDate)
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        className="w-full"
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <Label>Appointment Time</Label>
                      <Input
                        type="time"
                        name="appointmentTime"
                        defaultValue={appointmentTime}
                        className="w-full"
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-3">
                      <Button
                        type="reset"
                        className="w-full sm:w-1/2 bg-gray-200 text-gray-800"
                      >
                        Reset
                      </Button>

                      <Button
                        type="submit"
                        slot='close'
                        className="w-full sm:w-1/2 bg-emerald-600 text-white"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdatePaitientInfo;