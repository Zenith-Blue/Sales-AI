#!/usr/bin/env python3
"""images/type01-08.png から左側キャラのみの縦長切り出し(images/solo/)を再生成する。
本番画像に差し替えたあと、このスクリプトを実行すればヒーロー用画像も更新される。
実行: kasegikata-shindan ディレクトリで python3 tools/make_solo.py
"""
import os
from PIL import Image

BASE = os.path.join(os.path.dirname(__file__), '..', 'images')
OUT = os.path.join(BASE, 'solo')
os.makedirs(OUT, exist_ok=True)

# デフォルト切り出し範囲(比率) + 画像ごとの個別調整
DEFAULT = dict(x0=0.04, x1=0.53, y0=0.08, y1=0.86)
OVERRIDES = {
    1: dict(y0=0.115),   # 上のTYPEバッジ除去
    2: dict(y0=0.115),   # 上のTYPEバッジ除去
    3: dict(x1=0.50),    # 右端の2人目の袖を除去
}

for i in range(1, 9):
    p = {**DEFAULT, **OVERRIDES.get(i, {})}
    src = os.path.join(BASE, f'type0{i}.png')
    im = Image.open(src).convert('RGB')
    W, H = im.size
    crop = im.crop((int(W*p['x0']), int(H*p['y0']), int(W*p['x1']), int(H*p['y1'])))
    dst = os.path.join(OUT, f'type0{i}.png')
    crop.save(dst, optimize=True)
    print(f'type0{i}: {im.size} -> {crop.size}')
print('done')
