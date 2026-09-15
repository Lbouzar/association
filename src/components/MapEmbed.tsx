type MapEmbedProps = {
  src: string;
  title?: string;
};

export default function MapEmbed({ src, title = "Localisation" }: MapEmbedProps) {
  return (
    <div className="overflow-hidden border border-line grayscale invert-[0.92] contrast-[0.9]">
      <iframe
        src={src}
        title={title}
        width="100%"
        height="360"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[360px] w-full"
      />
    </div>
  );
}

