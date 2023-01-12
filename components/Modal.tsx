import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment, ReactNode, useState } from "react";

type ModalProps = {
  forceOpen?: boolean;
  children: ReactNode;
  trigger: (openModal: () => void) => ReactNode;
};

export const Modal: FC<ModalProps> = ({
  children,
  forceOpen = false,
  trigger,
}) => {
  let [isOpen, setIsOpen] = useState(forceOpen);

  function openModal() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      {trigger(openModal)}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-screen-lg transform rounded-xl bg-white p-4 overflow-hidden text-left align-middle shadow-xl transition-all">
                  <div className="">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
