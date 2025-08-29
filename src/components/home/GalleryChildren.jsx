export default function GalleryChildren() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full">
      <img
        src="/assets/img/bird_illust.webp"
        alt=""
        className="rounded shadow w-full h-24 object-cover"
      />
      <img
        src="/assets/img/ptica.webp"
        alt=""
        className="rounded shadow w-full h-24 object-cover"
      />
      <img
        src="/assets/img/ptica2.webp"
        alt=""
        className="rounded shadow w-full h-24 object-cover"
      />
      <img
        src="/assets/img/logo.webp"
        alt=""
        className="rounded shadow w-full h-24 object-cover"
      />
    </div>
  );
}
