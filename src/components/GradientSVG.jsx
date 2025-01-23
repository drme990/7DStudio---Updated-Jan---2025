const GradientSVG = () => {
  return (
    <svg width="0" height="0">
      <defs>
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FF7B00', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFDA00', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#FFE48B', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientSVG;
