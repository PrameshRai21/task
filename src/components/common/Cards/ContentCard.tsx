interface ContentCardProps {
  image: string;
  alt?: string;
  text: string;
  styleCss?: string;
}

function ContentCard({ image, alt, text, styleCss }: ContentCardProps) {
  return (
    <div>
      <div className="first_content lg:naxa-flex-row naxatw-flex naxatw-h-[128px] naxatw-w-full naxatw-flex-col naxatw-gap-y-5 lg:naxatw-min-w-[200px] lg:naxatw-max-w-[387px]">
        <div className="icon_content">
          <img
            className="naxatw-h-[60px] naxatw-w-[60px]"
            src={image}
            alt={alt}
          />
        </div>
        <div className="desc">
          <p
            className={`naxatw-font-primary naxatw-text-lg naxatw-font-normal naxatw-text-grey-900 ${styleCss}`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
