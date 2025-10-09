import ReactModal from "react-modal";

export default function MyModal({ modalIsOpen, setModalIsOpen, children }) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      overlayClassName="fixed inset-0 bg-black/50 justify-center items-center flex z-50 overflow-y-auto"
      className="flex bg-white rounded-2xl p-6 mb-32 2xl:p-12 mt-100 max-w-lg 2xl:max-w-4xl relative border-4 border-red"
    >
      <button
        onClick={() => setModalIsOpen(false)}
        className="2xl:text-2xl absolute top-3 right-3 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>

      {/*  Данные формы */}
      {children}
    </ReactModal>
  );
}
