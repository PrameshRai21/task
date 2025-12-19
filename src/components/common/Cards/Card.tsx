interface CardProps {
  image: string;
  alt?: string;
  government: string;
  depart: string;
  office?: string;
  styleCSS?: string;
}

function Card({ image, government, depart, office, styleCSS }: CardProps) {
  return (
    <div
      className={`naxatw-flex naxatw-max-w-[350px] naxatw-gap-3  ${styleCSS}`}
    >
      <div className="naxatw-flex naxatw-w-[44px]  naxatw-items-center naxatw-justify-center">
        <img className="naxatw-h-[36.85px] naxatw-w-full" src={image} alt="" />
      </div>
      <div className="naxatw-text-dark naxatw-flex naxatw-w-[85%] naxatw-flex-col naxatw-justify-center">
        <p className="naxatw-text-xs naxatw-font-black naxatw-leading-4">
          {government}
        </p>
        <p className="naxatw-text-md  naxatw-font-black naxatw-leading-5">
          {depart}
        </p>
        <p className=" naxatw-text-md naxatw-font-black naxatw-leading-5">
          {office}
        </p>
      </div>
    </div>
  );
}

export default Card;
