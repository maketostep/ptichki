import { useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function MyModal({
  modalIsOpen,
  setModalIsOpen,
  children,
  title,
}) {
  useEffect(() => {
    if (!modalIsOpen) {
      return undefined;
    }

    const { body } = document;
    const originalStyles = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    const scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      0;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = originalStyles.position;
      body.style.top = originalStyles.top;
      body.style.width = originalStyles.width;
      body.style.overflow = originalStyles.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [modalIsOpen]);

  const closeModal = () => setModalIsOpen(false);

  return (
    <Dialog open={modalIsOpen} onClose={closeModal} className="relative z-1000">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4 sm:items-center">
          <DialogPanel className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border-4 border-red bg-white p-6 shadow-xl max-h-[calc(100vh-2rem)] supports-[height:100dvh]:max-h-[calc(100dvh-2rem)] 2xl:max-w-4xl 2xl:p-12">
            {title ? (
              <DialogTitle className="sr-only">{title}</DialogTitle>
            ) : null}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Закрыть модальное окно"
              className="absolute right-3 top-3 text-gray-500 transition hover:text-gray-800 2xl:text-2xl"
            >
              ×
            </button>
            <div className="mt-4 flex-1 overflow-y-auto pr-2">{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
