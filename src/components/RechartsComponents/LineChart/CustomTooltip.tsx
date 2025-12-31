import { TooltipProps } from 'recharts';

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="naxatw-rounded-sm  naxatw-bg-white naxatw-p-3 naxatw-shadow">
      <p className="naxatw-font-semibold">{label}</p>

      {payload &&
        payload.map((item, index) => (
          <p key={index} className="naxatw-text-sm">
            <strong>{Number(item.value) / 1000000000} Billion</strong>
          </p>
        ))}
    </div>
  );
};

export default CustomTooltip;
