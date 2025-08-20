export default function Footer() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full p-5 bg-amber-300 rounded-t-3xl"
      style={{ boxShadow: "0 -4px 12px 0 rgba(0,0,0,0.20)" }}
    >
      <p>© 2025 Птички. Все права защищены.</p>
      <p>
        by{" "}
        <u>
          <a href="https://wavewebstudio.com">Wave Web Studio</a>
        </u>
      </p>
    </div>
  );
}
