interface CardProps {
  image: string;
  alt?: string;
  government?: string;
  depart?: string;
  office?: string;
  styleCSS?: string;
}

function Card({ image, government, depart, office, styleCSS }: CardProps) {
  return (
    <div
      className={`naxatw-flex naxatw-h-auto naxatw-w-auto  naxatw-gap-3  ${styleCSS}`}
    >
      <div className="naxatw-flex naxatw-h-[38px] naxatw-w-[44px] naxatw-items-center naxatw-justify-center ">
        <img
          className=" naxatw-max-h-full naxatw-max-w-full naxatw-object-contain"
          src={image}
          alt=""
        />
      </div>

      <div className="naxatw-flex  naxatw-flex-col naxatw-items-start naxatw-text-dark">
        <p className=" naxatw-font-devnagari naxatw-text-xs naxatw-font-bold naxatw-leading-4 naxatw-tracking-tighter">
          {government}
        </p>
        <p className=" naxatw-font-devnagari naxatw-text-sm  naxatw-font-bold naxatw-leading-5 naxatw-tracking-tighter">
          {depart}
        </p>
        <p className=" naxatw-font-devnagari naxatw-text-base naxatw-font-[800] naxatw-leading-4 naxatw-tracking-tighter">
          {office}
        </p>
      </div>
    </div>
  );
}

export default Card;
