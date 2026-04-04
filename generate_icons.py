from PIL import Image, ImageDraw, ImageFont
import os

def make_icon(size, path):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background rounded rect
    radius = size // 8
    bg_color = (232, 22, 26, 255)  # NHRA red

    # Draw rounded rectangle background
    draw.rounded_rectangle([0, 0, size-1, size-1], radius=radius, fill=bg_color)

    s = size
    pad = int(s * 0.12)

    # Checkered flag pattern in top-left quadrant
    cell = int(s * 0.12)
    colors = [(255,255,255,255), bg_color]
    for row in range(4):
        for col in range(4):
            x0 = pad + col * cell
            y0 = pad + row * cell
            x1 = x0 + cell
            y1 = y0 + cell
            c = colors[(row + col) % 2]
            draw.rectangle([x0, y0, x1, y1], fill=c)

    # Flag pole (left side)
    pole_w = max(3, int(s * 0.06))
    draw.rectangle([pad, pad, pad + pole_w, size - pad], fill=(255, 255, 255, 255))

    # Speed lines in bottom-right
    line_y1 = int(s * 0.72)
    line_y2 = int(s * 0.84)
    lx_start = int(s * 0.40)
    lx_end = size - pad
    line_w = max(2, int(s * 0.04))
    draw.rounded_rectangle([lx_start, line_y1, lx_end, line_y1 + line_w], radius=line_w//2, fill=(255,255,255,230))
    draw.rounded_rectangle([int(lx_start * 0.85), line_y2, lx_end, line_y2 + line_w], radius=line_w//2, fill=(255,255,255,150))

    img.save(path, 'PNG')
    print(f"  Created {path} ({size}x{size})")

os.makedirs('/home/user/workspace/nhra-app/icons', exist_ok=True)

for sz, name in [(512, 'icon-512.png'), (192, 'icon-192.png'), (180, 'icon-180.png')]:
    make_icon(sz, f'/home/user/workspace/nhra-app/icons/{name}')

print("Icons generated.")
