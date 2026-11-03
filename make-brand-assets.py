from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageEnhance
P=Path('/home/user/varta-ingenery/packages/web/public')
photo=Image.open(P/'images/voltigen-energy.jpg').convert('RGB')
mono=P/'fonts/ibm-plex-mono-700.ttf'
poppins=P/'fonts/poppins-600.ttf'
DARK=(11,44,35); MINT=(207,242,222); YELLOW=(255,218,47); WHITE=(244,251,244)
def crop_fill(im,w,h):
    scale=max(w/im.width,h/im.height)
    im=im.resize((round(im.width*scale),round(im.height*scale)), Image.Resampling.LANCZOS)
    return im.crop(((im.width-w)//2,(im.height-h)//2,(im.width+w)//2,(im.height+h)//2))
def text(draw,xy,s,size,color=WHITE,font=mono):
    draw.text(xy,s,font=ImageFont.truetype(str(font),size),fill=color,stroke_width=0)
def logo(draw,x,y,big=False):
    sz=83 if big else 52
    draw.rounded_rectangle((x,y,x+sz,y+sz),radius=9,fill=YELLOW)
    f=ImageFont.truetype(str(mono),int(sz*.78))
    box=draw.textbbox((0,0),'V',font=f)
    draw.text((x+(sz-(box[2]-box[0]))/2-box[0],y+(sz-(box[3]-box[1]))/2-box[1]-3),'V',font=f,fill=DARK)
    text(draw,(x+sz+20,y-8 if big else y-3),'VOLTIGEN',49 if big else 32)
    text(draw,(x+sz+23,y+51 if big else y+32),'ENERGY GROUPE',19 if big else 13,YELLOW)
# Panorama for portfolio: distinctly marked conceptual identity, no legacy company marks.
w,h=2055,765
pan=Image.new('RGB',(w,h),DARK)
pan.paste(crop_fill(photo,1090,h),(965,0))
overlay=Image.new('RGBA',(w,h),(0,0,0,0)); od=ImageDraw.Draw(overlay)
od.rectangle((0,0,1035,h), fill=(11,44,35,246))
for i in range(280):
    a=int(246*(1-i/280))
    od.line((1035+i,0,1035+i,h), fill=(11,44,35,a))
pan=Image.alpha_composite(pan.convert('RGBA'),overlay)
d=ImageDraw.Draw(pan)
logo(d,88,90,True)
d.line((88,225,710,225),fill=(112,160,132),width=2)
text(d,(88,278),'L’ÉNERGIE DE DEMAIN',46)
text(d,(88,343),'COMMENCE ICI.',46,YELLOW)
text(d,(88,500),'BATTERIES  ·  INNOVATION  ·  STOCKAGE',22,MINT,font=poppins)
d.rectangle((88,635,208,645),fill=YELLOW)
text(d,(88,675),'VISUEL D’ILLUSTRATION',16,MINT)
pan.convert('RGB').save(P/'images/voltigen-panorama.jpg',quality=91,optimize=True)
# OG: 1200×630 native, deliberately not the old brand artwork.
w,h=1200,630
og=Image.new('RGB',(w,h),DARK)
og.paste(crop_fill(photo,620,h),(580,0))
overlay=Image.new('RGBA',(w,h),(0,0,0,0));od=ImageDraw.Draw(overlay)
od.rectangle((0,0,620,h),fill=(11,44,35,250))
for i in range(220):
    od.line((620+i,0,620+i,h),fill=(11,44,35,int(250*(1-i/220))))
og=Image.alpha_composite(og.convert('RGBA'),overlay);d=ImageDraw.Draw(og)
logo(d,50,46)
d.line((50,168,535,168),fill=(112,160,132),width=2)
text(d,(50,224),'L’ÉNERGIE DE',39)
text(d,(50,276),'DEMAIN.',39)
text(d,(50,352),'FABRIQUÉE',39,YELLOW)
text(d,(50,405),'AUJOURD’HUI.',39,YELLOW)
text(d,(50,541),'BATTERIES · ÉNERGIE · INNOVATION',16,MINT)
og.convert('RGB').save(P/'images/voltigen-social-preview.png',optimize=True)
# Favicon: matching V monogram for 16px through 256px.
icon=Image.new('RGB',(256,256),DARK);d=ImageDraw.Draw(icon)
d.rounded_rectangle((19,19,237,237),radius=39,fill=YELLOW)
f=ImageFont.truetype(str(mono),194)
box=d.textbbox((0,0),'V',font=f)
d.text(((256-(box[2]-box[0]))/2-box[0],(256-(box[3]-box[1]))/2-box[1]-8),'V',font=f,fill=DARK)
icon.save(P/'images/voltigen-favicon.png',optimize=True)
icon.save(P/'voltigen-favicon.ico',sizes=[(16,16),(32,32),(48,48),(64,64)])
