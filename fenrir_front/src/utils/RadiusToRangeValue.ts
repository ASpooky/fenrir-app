export function RadiusToRangeValue(radius: number) {
  if (radius <= 300) {
    return "1";
  } else if (radius <= 500) {
    return "2";
  } else if (radius <= 1000) {
    return "3";
  } else if (radius <= 2000) {
    return "4";
  } else {
    return "5";
  }
}
