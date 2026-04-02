export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function wixImage(
  filename: string,
  width: number,
  height: number,
  quality = 90
): string {
  return `https://static.wixstatic.com/media/${filename}/v1/fill/w_${width},h_${height},al_c,q_${quality},enc_avif,quality_auto/${filename}`;
}
