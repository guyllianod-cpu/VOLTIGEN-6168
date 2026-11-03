from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
SRC=Path('/home/user/Attachments')
OUT=Path('/home/user/varta-ingenery/packages/web/public/images')
logo=Image.open(SRC/'d071ba6b-d794-4c93-8510-a894abe074e7_Hjm89o.jpeg').convert('RGB')
banner=Image.open(SRC/'3a7fd26c-b1d9-4741-be52-c55f6d75647a_8SFukE.jpeg').convert('RGB')
logo.save(OUT/'voltigen-logo-original.jpeg',quality=95)
banner.save(OUT/'voltigen-banner.jpeg',quality=94)
def transparent_white(image):
    src=image.convert('RGBA')
    data=[]
    for r,g,b,a in src.getdata():
        alpha=max(0,min(255,round((220-min(r,g,b))*255/45)))
        data.append((r,g,b,alpha))
    src.putdata(data)
    return src
symbol=transparent_white(logo.crop((70,158,580,775)))
wordmark=transparent_white(logo.crop((630,360,1510,674)))
# Native supplied mark and letterforms kept intact; only reflowed at header size.
art=Image.new('RGBA',(1010,292),(0,0,0,0))
symbol.thumbnail((244,292),Image.Resampling.LANCZOS)
wordmark.thumbnail((735,264),Image.Resampling.LANCZOS)
art.alpha_composite(symbol,(0,(292-symbol.height)//2))
art.alpha_composite(wordmark,(270,(292-wordmark.height)//2))
box=art.getbbox(); art=art.crop((max(0,box[0]-4),max(0,box[1]-4),min(1010,box[2]+4),min(292,box[3]+4)))
art.save(OUT/'voltigen-logo-web.png',optimize=True)
# Favicon uses the supplied blue/yellow emblem, not the interim V monogram.
icon=Image.new('RGBA',(256,256),'white')
symbol=transparent_white(logo.crop((70,158,580,775)))
symbol.thumbnail((206,220),Image.Resampling.LANCZOS)
icon.alpha_composite(symbol,((256-symbol.width)//2,(256-symbol.height)//2))
icon.convert('RGB').save(OUT/'voltigen-favicon.png',optimize=True)
icon.convert('RGB').save(OUT.parent/'voltigen-favicon.ico',sizes=[(16,16),(32,32),(48,48),(64,64)])
# Share preview preserves the complete supplied banner rather than cutting its copy.
preview=Image.new('RGB',(1200,630),(4,35,75))
wide=banner.resize((1200,480),Image.Resampling.LANCZOS)
preview.paste(wide,(0,0))
d=ImageDraw.Draw(preview)
font=ImageFont.truetype(str(OUT.parent/'fonts/ibm-plex-mono-700.ttf'),28)
d.text((45,527),'VOLTIGEN ENERGY GROUPE',font=font,fill=(255,255,255))
font=ImageFont.truetype(str(OUT.parent/'fonts/poppins-500.ttf'),18)
d.text((45,575),'Batteries · Énergie · Innovation',font=font,fill=(255,217,47))
preview.save(OUT/'voltigen-social-supplied.png',optimize=True)
print('web logo',art.size)
