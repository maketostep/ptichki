import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  isValidElement,
  cloneElement,
} from "react";
import MyModal from "../components/ui/MyModal";

const ModalContext = createContext(undefined);

const createInitialState = () => ({
  isOpen: false,
  content: null,
  title: undefined,
  props: undefined,
  onClose: undefined,
});

function ModalRoot({ state, closeModal }) {
  if (!state.isOpen || !state.content) {
    return null;
  }

  const { content, props, title } = state;

  const handleSetModalIsOpen = (next) => {
    if (!next) {
      closeModal();
    }
  };

  const resolvedProps = props ?? {};

  let modalContent = null;
  if (typeof content === "function") {
    const Component = content;
    modalContent = (
      <Component
        {...resolvedProps}
        closeModal={resolvedProps.closeModal ?? closeModal}
      />
    );
  } else if (isValidElement(content)) {
    const extraProps = {
      ...resolvedProps,
    };
    if (extraProps.closeModal === undefined) {
      extraProps.closeModal = closeModal;
    }
    modalContent = cloneElement(content, extraProps);
  } else {
    modalContent = content;
  }

  return (
    <MyModal
      modalIsOpen={state.isOpen}
      setModalIsOpen={handleSetModalIsOpen}
      title={title}
    >
      {modalContent}
    </MyModal>
  );
}

export function ModalProvider({ children }) {
  const [modalState, setModalState] = useState(() => createInitialState());

  const closeModal = useCallback(() => {
    setModalState((previous) => {
      if (previous.onClose) {
        previous.onClose();
      }
      return createInitialState();
    });
  }, []);

  const openModal = useCallback((content, options = {}) => {
    setModalState((previous) => {
      if (previous.isOpen && previous.onClose) {
        previous.onClose();
      }

      const { title, props, onClose } = options;

      return {
        isOpen: true,
        content,
        title,
        props,
        onClose,
      };
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      openModal,
      closeModal,
      isOpen: modalState.isOpen,
    }),
    [openModal, closeModal, modalState.isOpen],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <ModalRoot state={modalState} closeModal={closeModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
