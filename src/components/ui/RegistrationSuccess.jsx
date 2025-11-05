export default function RegistrationSuccess({ closeModal }) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Поздравляем!
      </h3>
      <p className="text-base md:text-lg text-gray-700">
        Ты зарегистрировалась!
        <br />
        Наш администратор свяжется с тобой в WhatsApp для уточнения деталей.
      </p>
      <button
        type="button"
        onClick={closeModal}
        className="bg-green px-8 py-3 text-white text-lg font-medium rounded-full border-4 border-white hover:bg-red hover:text-white transition-all duration-300"
      >
        ОК
      </button>
    </div>
  );
}
