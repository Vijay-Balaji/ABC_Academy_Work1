const KEY='abcAcademyCMS_v5', LEGACY_KEY='abcAcademyCMS_v4';
const SITE_CMS=(window.getABCCMS?window.getABCCMS():{});
const defaultData={
business:{name:'ABC FASHION AND BEAUTY ACADEMY',short:'ABC',tagline:'FASHION & BEAUTY ACADEMY',location:'Pollachi, Tamil Nadu',phone:'9385920297',instagram:'https://www.instagram.com/abc_fashion_and_beauty_academy/',followers:'3,311+',posts:'379+',about:'ABC Fashion and Beauty Academy brings together makeup artistry, beauty care, costume designing, tailoring and Aari embroidery with a creative, personal approach.',contact:'Tell us what you need — bridal makeup, beauty services, costume designing, tailoring or Aari embroidery.',logo:'assets/logo.png'},
hero:{eyebrow:'ABC FASHION AND BEAUTY ACADEMY · POLLACHI',title:'Beauty, fashion &<br><em>creative artistry.</em>',copy:'Professional makeup artistry, beauty services, costume designing, tailoring and Aari embroidery — all under one roof in Pollachi.',image:'https://aaprofessional.in/uploads/bridal/bridal_1768232011_ff736e919321e34dff98.jpg',cardTitle:'Signature Bridal Makeup',cardMeta:'Makeup artistry · Styling',badge1:'Makeup Artist',badge2:'Costume Design'},
carousel:[
{title:'Bridal Makeup',meta:'Bridal · Reception · Engagement',copy:'Elegant, camera-ready makeup tailored to your features.',img:'https://lakmeacademy-delhi.in/assets/images/Short-term.jpg'},
{title:'Beauty Styling',meta:'Beauty · Hair · Grooming',copy:'Salon-style hair and beauty presentation for events and occasions.',img:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=90'},
{title:'Tailoring & Garment Making',meta:'Tailoring · Custom Fit',copy:'Custom garment construction, measurements and finishing.',img:'https://fivethirtysomewhere.com/cdn/shop/files/IMG_2489_eb92d6ec-125b-47bf-804b-d99c7de98418.jpg?v=1710913409&width=3200'},
{title:'Kids Fancy Dress',meta:'Events · Styling',copy:'Colourful costume styling for children and school events.',img:'https://sisjammu.in/images/Interhouse%20Fancy%20Dress%20Competition%20%2811%29.jpeg'}
],
services:[
{title:'Bridal Makeup',desc:'Bridal, engagement and reception looks tailored to your style.',detail:'Personalised bridal makeup, hair styling and event-ready finishing for your special day.',img:'https://lakmeacademy-delhi.in/assets/images/Short-term.jpg'},
{title:'Beautician Services',desc:'Beauty care, hair styling and grooming for a polished look.',detail:'Beauty care, grooming, hair styling and client-ready salon presentation.',img:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=90'},
{title:'Professional MUA',desc:'Professional makeup artistry for events, shoots and special days.',detail:'Professional makeup techniques, product use, blending, base work and client-ready looks.',img:'https://images.pexels.com/photos/34025154/pexels-photo-34025154.jpeg?auto=compress&cs=tinysrgb&w=2400'},
{title:'YouTube & Creator Looks',desc:'Camera-ready makeup and styling for content creators and videos.',detail:'Create looks that work under studio lights, phone cameras, reels and YouTube setups.',img:'https://cdn.shopify.com/s/files/1/0626/0251/0592/articles/Blog-Cover_21bfed64-1cde-4b03-a939-11d6813324ea.png?v=1678705992'},
{title:'Costume Designing',desc:'Custom costume ideas, fashion concepts and styled looks.',detail:'Creative costume concepts, fashion references, fabric selection and design planning.',img:'https://fashionmerch.net/images/textile_design_process.png'},
{title:'Tailoring',desc:'Custom garment making with measurement, stitching and finishing.',detail:'Practical tailoring, measurements, stitching, machine handling and neat garment finishing.',img:'https://fivethirtysomewhere.com/cdn/shop/files/IMG_2489_eb92d6ec-125b-47bf-804b-d99c7de98418.jpg?v=1710913409&width=3200'},
{title:'Aari Embroidery',desc:'Detailed handcrafted embroidery for blouses, outfits and custom pieces.',detail:'Aari hoop work, motifs, chain stitch, bead and stone work and finishing.',img:'https://nichiembroidery.in/assets/images/pictures/aari4.jpg'},
{title:'Kids Fancy Dress Events',desc:'Creative costume styling for school programs, cultural days and themed events.',detail:'Colourful, age-appropriate costume coordination and stage-ready styling for children.',img:'https://sisjammu.in/images/Interhouse%20Fancy%20Dress%20Competition%20%2811%29.jpeg'}
],
gallery:[
{title:'Bridal Makeup',img:'https://lakmeacademy-delhi.in/assets/images/Short-term.jpg'},
{title:'Beauty Hair Styling',img:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=90'},
{title:'Fashion Design Studio',img:'https://fashionmerch.net/images/textile_design_process.png'},
{title:'Tailoring Workshop',img:'https://fivethirtysomewhere.com/cdn/shop/files/IMG_2489_eb92d6ec-125b-47bf-804b-d99c7de98418.jpg?v=1710913409&width=3200'},
{title:'Aari Embroidery Class',img:'https://nichiembroidery.in/assets/images/pictures/aari4.jpg'},
{title:'Hand Embroidery',img:'https://photogallery.indiatimes.com/fashion/designers/women-in-the-village-of-rajasthan-revive-traditional-embroidery-techniques/photo/83945112/Women-in-the-village-of-Rajasthan-revive-traditional-embroidery-techniques.jpg'},
{title:'Indian Boutique Styling',img:'https://cdn.shopify.com/s/files/1/0626/0251/0592/articles/Blog-Cover_21bfed64-1cde-4b03-a939-11d6813324ea.png?v=1678705992'},
{title:'Saree Styling',img:'https://kruthikastudio.com/cdn/shop/files/C2F3CA24-96BF-4E0F-98BC-4D580E16FB81.jpg?v=1776961540&width=1445'},
{title:'Kids Fancy Dress',img:'https://sisjammu.in/images/Interhouse%20Fancy%20Dress%20Competition%20%2811%29.jpeg'},
{title:'Kids Stage Costumes',img:'https://www.stjosephbharariwal.com/assets/img/fancydress.jpg'}
],about:{image:'https://fashionmerch.net/images/textile_design_process.png',video:'https://www.youtube.com/embed/qw4BBqU9BPU?autoplay=1&mute=1&loop=1&playlist=qw4BBqU9BPU&rel=0&modestbranding=1',roles:['💄 Makeup Artist','💅 Beautician','🎥 YouTuber','👗 Costume Designer','🧵 Tailoring','✨ Aari Embroidery']},
inquiry:{title:'Ready to start your<br><em>creative journey?</em>',text:'Tell us which service or course you are interested in. We can share batch details, timings, fees and availability on WhatsApp.',points:['Course & service details','Batch timings & availability','Fees & personalised guidance'],image:'https://uroparis.com/wp-content/uploads/2024/11/09.png'},
map:'https://www.google.com/maps?q=Pollachi%2C%20Tamil%20Nadu&output=embed',
testimonials:[
{name:'Shreya R.',role:'Bridal Makeup Client',quote:'The makeup was elegant and exactly what I wanted. The overall styling made my special day feel even more beautiful.',img:'https://uroparis.com/wp-content/uploads/2024/11/09.png'},
{name:'Divya P.',role:'Costume & Aari Client',quote:'Loved the attention to detail in the costume and Aari work. Everything looked neat, stylish and beautifully finished.',img:'https://mtnccms.org/files_list/mtnc/fm/Gallery/1/_DSC9316.jpg'},
{name:'Akshaya K.',role:'Creator / YouTube Client',quote:'Very friendly and professional. The makeup looked great on camera and stayed comfortable throughout the shoot.',img:'https://uroparis.com/wp-content/uploads/2024/11/09.png'}],
reviews:[
{name:'Priya K.',meta:'Recent client',text:'Beautiful makeup and a very comfortable experience. Would definitely recommend ABC Academy.'},
{name:'Meena S.',meta:'Local client · Pollachi',text:'The Aari embroidery work was detailed and the finishing was excellent. Loved the final outfit.'},
{name:'Kavya R.',meta:'Beauty client',text:'Professional service, friendly approach and great attention to detail.'}],
rating:'4.9',reviewCount:'Based on client & student reviews'};

function clone(x){return JSON.parse(JSON.stringify(x))}
function getData(){try{const saved=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem(LEGACY_KEY));const data=saved||clone(defaultData);if(data.about&&(!data.about.video||data.about.video.includes('JS9OrBG1Boc'))){data.about.video='https://www.youtube.com/embed/qw4BBqU9BPU?autoplay=1&mute=1&loop=1&playlist=qw4BBqU9BPU&rel=0&modestbranding=1';}return data}catch(e){return clone(defaultData)}}
function wa(d,text){return 'https://wa.me/91'+d.business.phone.replace(/\D/g,'')+'?text='+encodeURIComponent(text)}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
let d=getData(),heroIndex=0,galleryIndex=0;

function render(){
 d=getData();
 const sp=SITE_CMS.servicesPage||{};
 const mapText={spServicesEyebrowText:sp.servicesEyebrow,spServicesTitleText:sp.servicesTitle,spServicesDescText:sp.servicesDesc,spGalleryEyebrowText:sp.galleryEyebrow,spGalleryTitleText:sp.galleryTitle,spGalleryDescText:sp.galleryDesc,spAboutEyebrowText:sp.aboutEyebrow,spAboutTitleText:sp.aboutTitle,spTestimonialsEyebrowText:sp.testimonialsEyebrow,spTestimonialsTitleText:sp.testimonialsTitle,spTestimonialsDescText:sp.testimonialsDesc,spReviewsEyebrowText:sp.reviewsEyebrow,spReviewsTitleText:sp.reviewsTitle,spReviewsDescText:sp.reviewsDesc,spInquiryEyebrowText:sp.inquiryEyebrow,spContactTitle:sp.contactTitle,spMapEyebrowText:sp.mapEyebrow,spMapTitleText:sp.mapTitle,spMapDescText:sp.mapDesc,spFormTitleText:sp.formTitle,spFormTextText:sp.formText};Object.entries(mapText).forEach(([id,v])=>{const el=document.getElementById(id);if(el&&v!==undefined){if(v.includes&&v.includes('<'))el.innerHTML=v;else el.textContent=v;}});
 const logo=d.business.logo||'assets/logo.png';
 document.title=d.business.name+' | '+(d.business.location.split(',')[0]||'Pollachi');
 ['brandLogo','aboutLogo','contactLogo','footerLogo'].forEach(id=>document.getElementById(id).src=logo);
 document.getElementById('brandName').textContent=d.business.short;document.getElementById('brandTag').textContent=d.business.tagline;
 document.getElementById('heroEyebrow').textContent=d.hero.eyebrow;document.getElementById('heroTitle').innerHTML=d.hero.title;document.getElementById('heroCopy').textContent=d.hero.copy;
 document.getElementById('badge1').textContent=d.hero.badge1;document.getElementById('badge2').textContent=d.hero.badge2;
 document.getElementById('stat1').textContent=d.business.followers;document.getElementById('stat2').textContent=d.business.posts;document.getElementById('stat3').textContent=d.business.location.split(',')[0];
 document.getElementById('aboutText').textContent=d.business.about;document.getElementById('aboutLocation').textContent=d.business.location.split(',')[0];document.getElementById('aboutImage').src=d.about.image;
 const videoId=((d.about.video||'').match(/(?:embed\/|v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/)||[])[1]||'ztGJhlEFFjs';const videoLink=document.getElementById('academyVideoLink');if(videoLink)videoLink.href='https://www.youtube.com/watch?v='+videoId;document.getElementById('roles').innerHTML=d.about.roles.map(x=>'<span>'+esc(x)+'</span>').join('');
 document.getElementById('inquiryImage').src=d.inquiry.image;document.getElementById('inquiryTitle').innerHTML=d.inquiry.title;document.getElementById('inquiryText').textContent=d.inquiry.text;document.getElementById('inquiryPoints').innerHTML=d.inquiry.points.map(x=>'<span>✓ '+esc(x)+'</span>').join('');
 document.getElementById('mapFrame').src=d.map;
 document.getElementById('contactText').textContent=d.business.contact;document.getElementById('contactLocation').textContent='📍 '+d.business.location;document.getElementById('contactPhone').textContent='📞 '+d.business.phone;
 const ig=(d.business.instagram.match(/instagram\.com\/([^/?]+)/)||[])[1]||'abc_fashion_and_beauty_academy';document.getElementById('contactInstagram').textContent='📸 @'+ig;
 document.getElementById('contactName').textContent=d.business.name;document.getElementById('contactTagline').textContent=d.business.location.split(',')[0]+' · Makeup · Beauty · Fashion';document.getElementById('contactCall').href='tel:+91'+d.business.phone.replace(/\D/g,'');document.getElementById('contactCall').textContent='Call '+d.business.phone;
 const link=wa(d,'Hi '+d.business.name+', I would like to enquire about your services/courses.');document.getElementById('navWhatsapp').href=link;document.getElementById('contactWhatsapp').href=wa(d,'Hi '+d.business.name+', I would like to book/enquire about a service or course.');document.getElementById('inquiryWhatsapp').href=wa(d,'Hi '+d.business.name+', I would like to enquire about a service/course. Please share details, timings and fees.');
 document.getElementById('footerInstagram').href=d.business.instagram;document.getElementById('footerName').textContent=d.business.name;document.getElementById('footerLocation').textContent=d.business.location;
 renderHero();renderServices();renderGallery();renderTestimonials();renderReviews();setupReveal();
}
function renderHero(){
 const items=d.carousel||[];
 document.getElementById('heroTrack').innerHTML=items.map((x,i)=>'<div class="hero-slide '+(i===heroIndex?'active':'')+'"><img src="'+esc(x.img)+'" alt="'+esc(x.title)+'"><div class="slide-shade"></div><div class="slide-label"><b>'+esc(x.title)+'</b><small>'+esc(x.meta)+'</small></div></div>').join('');
 document.getElementById('heroDots').innerHTML=items.map((x,i)=>'<button class="'+(i===heroIndex?'active':'')+'" data-hi="'+i+'"></button>').join('');
 const x=items[heroIndex]||d.carousel[0];if(x){document.getElementById('heroCardTitle').textContent=x.title;document.getElementById('heroCardMeta').textContent=x.meta;document.getElementById('heroNumber').textContent=String(heroIndex+1).padStart(2,'0')}
 document.querySelectorAll('[data-hi]').forEach(b=>b.onclick=()=>{heroIndex=Number(b.dataset.hi);renderHero()});
}
function renderServices(){
 document.getElementById('serviceGrid').innerHTML=d.services.map((x,i)=>`<article class="service-card glass popup-card" data-popup-title="${esc(x.title)}" data-popup-description="${esc(x.detail||x.desc)}" data-popup-image="${esc(x.img)}" data-popup-action="Enquire about this" data-popup-href="${esc(wa(d,'Hi, I need more details regarding this '+x.title+'.'))}"><div class="card-image"><img src="${esc(x.img)}" alt="${esc(x.title)}" loading="lazy"></div><div class="service-body"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p><a href="${wa(d,'Hi, I need more details regarding this '+x.title+'.')}" target="_blank">Enquire about this ↗</a></div></article>`).join('');
}
function renderGallery(){
 const items=d.gallery||[];const visible=Math.min(4,Math.max(1,items.length));const total=Math.max(1,items.length-visible+1);galleryIndex=((galleryIndex%total)+total)%total;
 const track=document.getElementById('galleryTrack');track.innerHTML=items.map(x=>`<figure class="gallery-item"><img src="${esc(x.img)}" alt="${esc(x.title)}" loading="lazy"><figcaption>${esc(x.title)}</figcaption></figure>`).join('');
 track.style.transform='translateX(-'+(galleryIndex*(100/visible))+'%)';
 document.getElementById('galleryDots').innerHTML=Array.from({length:total},(_,i)=>'<button class="'+(i===galleryIndex?'active':'')+'" data-gi="'+i+'"></button>').join('');
 document.querySelectorAll('[data-gi]').forEach(b=>b.onclick=()=>{galleryIndex=Number(b.dataset.gi);renderGallery()});
}
function renderTestimonials(){
 document.getElementById('testimonialGrid').innerHTML=d.testimonials.map(x=>`<article class="quote glass"><div class="stars">★★★★★</div><p>“${esc(x.quote)}”</p><div class="person">${x.img?'<img src="'+esc(x.img)+'" alt="'+esc(x.name)+'">':'<span>'+esc((x.name||'A').split(' ').map(v=>v[0]).join('').slice(0,2))+'</span>'}<div><b>${esc(x.name)}</b><small>${esc(x.role)}</small></div></div></article>`).join('');
}
function renderReviews(){
 document.getElementById('reviewGrid').innerHTML=d.reviews.map(x=>`<article class="review glass"><div><b>★★★★★</b><span>${esc(x.meta)}</span></div><p>“${esc(x.text)}”</p></article>`).join('');
 document.getElementById('ratingValue').textContent=d.rating;document.getElementById('reviewCount').textContent=d.reviewCount;
}
document.getElementById('heroPrev').onclick=()=>{heroIndex=(heroIndex-1+d.carousel.length)%d.carousel.length;renderHero()};
document.getElementById('heroNext').onclick=()=>{heroIndex=(heroIndex+1)%d.carousel.length;renderHero()};
document.getElementById('galleryPrev').onclick=()=>{galleryIndex=Math.max(0,galleryIndex-1);renderGallery()};
document.getElementById('galleryNext').onclick=()=>{const total=Math.max(1,d.gallery.length-Math.min(4,d.gallery.length)+1);galleryIndex=Math.min(total-1,galleryIndex+1);renderGallery()};
setInterval(()=>{heroIndex=(heroIndex+1)%d.carousel.length;renderHero()},5000);
setInterval(()=>{const count=d.gallery.length,visible=Math.min(4,Math.max(1,count)),total=Math.max(1,count-visible+1);galleryIndex=(galleryIndex+1)%total;renderGallery()},4200);

function setTheme(theme){document.documentElement.dataset.theme=theme;localStorage.setItem('abcTheme',theme);document.getElementById('themeToggle').textContent=theme==='dark'?'☀':'☾'}
setTheme(localStorage.getItem('abcTheme')||'light');render();
document.getElementById('themeToggle').addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
document.getElementById('menu').addEventListener('click',()=>document.querySelector('.nav nav').classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav nav').classList.remove('open')));
window.addEventListener('storage',e=>{if(e.key===KEY)render()});
function setupReveal(){const els=document.querySelectorAll('.reveal');const cards=document.querySelectorAll('.scroll-card');const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});els.forEach(e=>io.observe(e));const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('scroll-visible');cio.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -30px 0px'});cards.forEach(e=>cio.observe(e))}
