export function RadiusToZoomValue(radius: number) {
  if (radius <= 500) {
    return 13;
  } else if (radius <= 2000) {
    return 13;
  } else {
    return 1;
  }
}
