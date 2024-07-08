export default function PageSticker({ h2Title, children }) {
  return (
    <div id="pgSticker">
      <h2>{h2Title}</h2>
      <div className="px-4 pb-4 shadow-xl md:max-w-sm">{children}</div>
    </div>
  );
}
