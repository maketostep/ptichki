import ReactModal from "react-modal";
import MyForm from "./MyForm";

export default function MyModal({ modalIsOpen, setModalIsOpen, children }) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center z-5"
      className="bg-white rounded-2xl p-6 2xl:p-12 w-full max-w-lg 2xl:max-w-4xl relative border-4 border-red"
    >
      {/* Кнопка закрытия */}
      <button
        onClick={() => setModalIsOpen(false)}
        className="2xl:text-2xl absolute top-3 right-3 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>

      {/*  Данные */}
      {children}
    </ReactModal>
  );
}
