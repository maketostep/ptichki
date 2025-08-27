export default function ContactChildren() {
  return (
    <div className="space-y-2 text-gray-700 text-base md:text-lg">
      <p>Связаться с нами можно через:</p>
      <ul className="list-none pl-0 space-y-1">
        <li>
          <span className="font-semibold">Telegram:</span>{" "}
          <a
            href="https://t.me/ptichki_club"
            className="text-blue-600 hover:underline break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ptichki_club
          </a>
        </li>
        <li>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:ptichki.club@mail.ru"
            className="text-blue-600 hover:underline break-all"
          >
            ptichki.club@mail.ru
          </a>
        </li>
        <li>
          <span className="font-semibold">Телефон:</span>{" "}
          <span className="break-all">+7 (900) 123-45-67</span>
        </li>
      </ul>
    </div>
  );
}
