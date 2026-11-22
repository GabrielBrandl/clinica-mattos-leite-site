from PIL import Image
from pathlib import Path
import shutil

assets = Path(
    r"C:\Users\Gabriel\.cursor\projects\c-Users-Gabriel-Desktop-Project-15-Days-Cl-nica-Mundi\assets"
)
public = Path(r"c:\Users\Gabriel\Desktop\Project 15 Days\Clínica Mundi\public")
images = public / "images"
images.mkdir(parents=True, exist_ok=True)

src = assets / "WhatsApp_Image_2026-11-21_at_18.11.39-88ca0e2f-75de-4ba9-8558-1ceeb71e9217.jpg"
img = Image.open(src).convert("RGBA")
w, h = img.size
print("logo sheet", w, h)

# Top = principal, bottom = secondary
principal = img.crop((int(w * 0.04), int(h * 0.06), int(w * 0.96), int(h * 0.48)))
secondary = img.crop((int(w * 0.04), int(h * 0.54), int(w * 0.96), int(h * 0.94)))
principal.save(public / "logo-principal.png")
secondary.save(public / "logo-secundaria.png")
img.save(public / "brand-sheet.png")
print("principal", principal.size, "secondary", secondary.size)

pw, ph = principal.size
icon = principal.crop((0, int(ph * 0.12), int(pw * 0.30), int(ph * 0.98)))
icon.save(public / "logo-icon.png")
icon.resize((180, 180), Image.Resampling.LANCZOS).save(public / "favicon-mattos.png")

# Preferred photos
shutil.copy2(
    assets / "WhatsApp_Image_2026-11-21_at_18.11.39__1_-47135ac5-547c-4ced-800f-a85e6959b847.jpg",
    images / "dra-fabia.jpg",
)
shutil.copy2(
    assets / "WhatsApp_Image_2026-11-21_at_18.11.39__2_-285b41dd-8513-4f4a-aafb-fe341b9a2954.jpg",
    images / "equipe-mattos-leite.jpg",
)

# Make light-header friendly logo: replace near-navy with transparency
def navy_to_transparent(im: Image.Image) -> Image.Image:
    px = im.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, a = px[x, y]
            # navy #002B45-ish and dark blues
            if b > r + 20 and b > g + 10 and r < 60 and g < 80 and b < 120:
                px[x, y] = (r, g, b, 0)
            elif r < 25 and g < 45 and b < 70:
                px[x, y] = (r, g, b, 0)
    return im

navy_to_transparent(principal.copy()).save(public / "logo-principal-clear.png")
navy_to_transparent(secondary.copy()).save(public / "logo-secundaria-clear.png")
print("done")
