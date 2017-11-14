const PX_UNIT = 8;

const px = (value) => {
  if (typeof value === 'number') return `${value * PX_UNIT}px`;
  if (Array.isArray(value)) return value.map((v) => px(v)).join(' ');
  if (typeof value === 'string') return value;
  return '';
};

export default px;
