import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { GPT_SUGGESTION } from "./constants";

export default function AlertDialog({}) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  useEffect(() => {
    setTimeout(() => {
      open();
    }, 5000);
  }, []);

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
          __demoMode>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]">
                <DialogPanel className="w-full max-w-3xl bg-white/70 rounded-xl p-6 backdrop-blur-3xl">
                  {/* The event name and date can be dynamically passed according to the latest event that the user has set. 
                  The entire suggestion will be dynamically coming from OpenAI api.
                  Eg: If user want to be alerted before 3 days of the event - Alert can be triggered if the current date matches 3 days 
                  prior to the event date. Date and time can be taken to calculate number of days/hours remaining for the event.
                  */}

                  <p className="flex flex-col mt-2 text-black gap-3">
                    <span className="font-semibold">
                      {GPT_SUGGESTION[0]?.event} - {GPT_SUGGESTION[0]?.date}{" "}
                    </span>
                    <span>{GPT_SUGGESTION[0]?.alert}</span>
                    <span className="font-semibold">Here’s a quick tip: </span> <span>{GPT_SUGGESTION[0]?.tip}</span>
                  </p>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}>
                      Close
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
