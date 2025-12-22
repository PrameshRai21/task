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
    <div className={`naxatw-flex  naxatw-gap-3  ${styleCSS}`}>
      <div className="naxatw-flex naxatw-h-auto ">
        <div className="naxatw-flex naxatw-h-[36.85px] naxatw-w-[44px]   naxatw-items-center naxatw-justify-center  ">
          <img className=" naxatw-object-contain" src={image} alt="" />
        </div>
      </div>
      <div className="naxatw-flex  naxatw-flex-col naxatw-text-dark">
        <p className=" naxatw-font-devnagari naxatw-text-base naxatw-font-bold naxatw-leading-4">
          {government}
        </p>
        <p className="naxatw-font-devnagari naxatw-text-base naxatw-font-bold  naxatw-leading-5">
          {depart}
        </p>
        <p className=" naxatw-font-devnagari naxatw-text-xl naxatw-font-black naxatw-leading-5">
          {office}
        </p>
      </div>
    </div>
  );
}

export default Card;
