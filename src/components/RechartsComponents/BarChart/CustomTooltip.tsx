function getIntroOfPage(label: string): string {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  if (label === 'Page G') {
    return 'Page G is about Gaming Accessories';
  }
  return '';
}

function CustomTooltip({ payload, active, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          border: '1px solid #d88488',
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '1px 1px 2px #d88488',
        }}
      >
        <p
          className="label"
          style={{ margin: '0', fontWeight: '700' }}
        >{`${label} : ${payload[0].value}`}</p>
        <p className="intro" style={{ margin: '0' }}>
          {getIntroOfPage(label)}
        </p>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
