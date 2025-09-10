import ReactModal from "react-modal";
import MyForm from "./MyForm";

export default function MyModal({ modalIsOpen, setModalIsOpen }) {
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center z-5"
      className="bg-white rounded-2xl p-6 w-full max-w-lg relative"
    >
      {/* Кнопка закрытия */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>

      {/* Твоя форма */}
      <MyForm closeModal={closeModal} />
    </ReactModal>
  );
}
