"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCalendarCheck } from "react-icons/fa6";

const BookingModal = () => {
  //   const [appointDate, setAppointDate] = useState(null);
  //   console.log(new Date(appointDate));
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  //  console.log(user);

  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const bookingData = {
      userId: user?.id,
      patientName: formData.get("patientName"),
      gender: formData.get("gender"),
      phone: formData.get("phone"),
      appointmentDate: new Date(formData.get("appointmentDate")),
      appointmentTime: formData.get("appointmentTime"),
      doctorName: formData.get("doctorName"),
      email: user?.email,
    };

    // console.log(bookingData);
    const {data:tokenData} = await authClient.token()
    // console.log(tokenData);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData),
      },
    );
    const data = await res.json();

    // console.log(data);

    if (data?.insertedId) {
      toast.success("Appointment booked successfully ");
      form.reset();
    } else {
      toast.error(data?.message || "Booking failed ");
    }
  };

  return (
    <div>
     <Modal>
  {/* Trigger Button */}
  <Modal.Trigger>
    <button className="w-full border border-emerald-600 px-4 py-3 rounded-xl flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-800 text-white transition-all duration-300 font-semibold">
      <FaCalendarCheck className="text-lg" />
      Book Appointment
    </button>
  </Modal.Trigger>

  <Modal.Backdrop>
    <Modal.Container>
      <Modal.Dialog className="w-full max-w-2xl bg-white dark:bg-gray-900 text-black dark:text-white">
        <Modal.CloseTrigger />

        {/* Header */}
        <Modal.Header>
          <Modal.Heading>Book Appointment</Modal.Heading>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Fill out the form to book your appointment in Medisolt system
          </p>
        </Modal.Header>

        {/* Body */}
        <Modal.Body className="p-3 max-h-[80vh] overflow-y-auto">
          <Surface
            variant="default"
            className="bg-white dark:bg-gray-900"
          >
            <form
              onSubmit={handleBooking}
              className="space-y-6 border border-emerald-200 dark:border-gray-700 rounded-2xl p-4 sm:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Patient Name */}
                <div className="md:col-span-2">
                  <TextField name="patientName" isRequired>
                    <Label className="dark:text-white">
                      Patient Name
                    </Label>

                    <Input
                      placeholder="Nawab Khan"
                      className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl"
                    />
                  </TextField>
                </div>

                {/* Gender */}
                <div className="w-full">
                  <Label className="mb-2 block dark:text-white">
                    Gender
                  </Label>

                  <select
                    name="gender"
                    required
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-3 text-sm outline-none focus:border-emerald-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Phone */}
                <TextField name="phone" isRequired>
                  <Label className="dark:text-white">
                    Phone
                  </Label>

                  <Input
                    placeholder="017XXXXXXXX"
                    className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl"
                  />
                </TextField>

                {/* Appointment Date */}
                <TextField name="appointmentDate" isRequired>
                  <Label className="dark:text-white">
                    Appointment Date
                  </Label>

                  <Input
                    type="date"
                    className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl"
                  />
                </TextField>

                {/* Appointment Time */}
                <TextField name="appointmentTime" isRequired>
                  <Label className="dark:text-white">
                    Appointment Time
                  </Label>

                  <Input
                    type="time"
                    className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl"
                  />
                </TextField>

                {/* Doctor Name */}
                <div className="md:col-span-2">
                  <TextField name="doctorName" isRequired>
                    <Label className="dark:text-white">
                      Doctor Name
                    </Label>

                    <Input
                      placeholder="Dr. Abdur Rahman"
                      className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl"
                    />
                  </TextField>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  type="reset"
                  className="w-full sm:w-1/2 bg-red-500 text-white hover:bg-red-600"
                >
                  Reset
                </Button>

                <Button
                  type="submit"
                  slot="close"
                  className="w-full sm:w-1/2 bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Confirm Appointment
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

export default BookingModal;
