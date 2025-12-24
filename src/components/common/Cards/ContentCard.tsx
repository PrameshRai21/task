interface ContentCardProps {
  image: string;
  alt?: string;
  text: string;
  styleCss?: string;
}

function ContentCard({ image, alt, text, styleCss }: ContentCardProps) {
  return (
    <div>
      <div className="first_content lg:naxa-flex-row naxatw-flex naxatw-h-auto naxatw-w-full naxatw-flex-col naxatw-gap-y-5  lg:naxatw-max-w-[387px]">
        <div className="icon_content naxatw-h-[60px] naxatw-w-[60px]">
          <img
            className="naxatw-h-full naxatw-w-full naxatw-object-contain"
            src={image}
            alt={alt}
          />
        </div>
        <div className="desc">
          <p
            className={`naxatw-font-primary naxatw-text-base naxatw-font-normal naxatw-leading-5 naxatw-text-grey-900 md:naxatw-text-lg md:naxatw-leading-7 ${styleCss}`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
