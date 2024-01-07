/**
 * 格式化文件大小
 * @param size
 * @param pointLength
 * @param units
 */
export const formatSize = (size: any, pointLength = 2, units: any = null) => {
  let unit;
  units = units || ['B', 'K', 'M', 'G'];
  unit = units.shift();
  while (unit && size > 1024) {
    size = size / 1024;
    unit = units.shift();
  }
  return (
    (unit === units[0] ? size : size.toFixed(pointLength === undefined ? 2 : pointLength)) + unit
  );
};
