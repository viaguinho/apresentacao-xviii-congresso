#!/usr/bin/env python3
"""Redimensiona e recomprime uma imagem preservando canal alfa.

Uso: resize-image.py <entrada> <saida.webp|png|jpg> <largura-maxima> <qualidade>

Existe porque o ffmpeg do Homebrew normalmente vem sem libwebp; o Pillow, que
já acompanha o Python do sistema em máquinas com ferramental de imagem, cobre
o caso e ainda dá um resultado melhor no downscale com alfa.
"""
import sys

from PIL import Image


def main() -> int:
    src, dst, max_width, quality = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])

    image = Image.open(src)
    has_alpha = image.mode in ("RGBA", "LA") or "transparency" in image.info
    image = image.convert("RGBA" if has_alpha else "RGB")

    if image.width > max_width:
        height = round(image.height * max_width / image.width)
        image = image.resize((max_width, height), Image.LANCZOS)

    if dst.endswith(".webp"):
        # method=6 é o encode mais lento e mais eficiente; o build roda uma vez.
        image.save(dst, "WEBP", quality=quality, method=6)
    elif dst.endswith((".jpg", ".jpeg")):
        image.convert("RGB").save(dst, "JPEG", quality=quality, optimize=True, progressive=True)
    else:
        image.save(dst, "PNG", optimize=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
