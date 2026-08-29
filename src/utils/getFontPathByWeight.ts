import type { FontData } from "astro:assets";

export function getFontPathByWeight(
  fonts: FontData[],
  weight: number,
  options?: {
    style?: "normal" | "italic";
    format?: string;
  }
): string | undefined {
  const style = options?.style ?? "normal";
  // satori cannot parse woff2, only ttf/otf/woff. The local font provider
  // registers .woff files, so match that format explicitly.
  const format = options?.format ?? "woff";

  for (const font of fonts) {
    if (font.weight === String(weight) && font.style === style) {
      const src = font.src.find(file => file.format === format) ?? font.src[0];
      if (src) return src.url;
    }
  }

  return undefined;
}
