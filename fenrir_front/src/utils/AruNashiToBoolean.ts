export function AruNashiToBoolean(s: string) {
  if (s.includes("不可") || s.includes("なし")) {
    return false;
  } else {
    return true;
  }
}
