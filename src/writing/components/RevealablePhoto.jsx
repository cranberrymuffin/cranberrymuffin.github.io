export default function RevealablePhoto({
  src,
  alt,
  caption,
  revealed,
  onToggle,
  overlayLabel = (
    <>
      TW
      <br />
      tap to reveal
    </>
  ),
}) {
  return (
    <figure className="tw-grid-item">
      <button
        type="button"
        className={'tw-grid-photo' + (revealed ? '' : ' blurred')}
        onClick={onToggle}
        aria-pressed={revealed}
        aria-label={revealed ? `Hide photo: ${alt}` : `Reveal photo: ${alt}`}
      >
        <img src={src} alt={alt} />
        {!revealed && <span className="tw-overlay">{overlayLabel}</span>}
      </button>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
