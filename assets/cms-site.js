(function(){
  const KEY='abcAcademyCMS_v5', LEGACY_KEY='abcAcademyCMS_v4';
  const defaults={
    index:{
      heroEyebrow:'ABC FASHION & BEAUTY ACADEMY · POLLACHI',
      heroTitle:'What would you like<br>to <em>explore?</em>',
      heroText:'Choose one simple path. Learn fashion and beauty skills, or explore professional services from ABC Academy.',
      educationTitle:'Education & Courses',educationDesc:'Explore practical courses in makeup, beauty, fashion, tailoring, Aari embroidery and creator styling.',
      servicesTitle:'Fashion & Beauty Services',servicesDesc:'Explore bridal makeup, beauty care, costume, tailoring, Aari and creator styling services.',
      enquiryEyebrow:'03 · QUICK ENQUIRY',enquiryTitle:'Not sure where<br><em>to start?</em>',enquiryText:'Tell ABC what you are looking for. We can guide you to the right course or service.'
    },
    servicesPage:{
      servicesEyebrow:'WHAT WE DO',servicesTitle:'Services made for your<br><em>beauty & style.</em>',servicesDesc:'Explore a service, open the smooth detail card and send a WhatsApp enquiry for that exact service.',
      galleryEyebrow:'PORTFOLIO CAROUSEL',galleryTitle:'A glimpse of our<br><em>creative work.</em>',galleryDesc:'The portfolio moves automatically in a smooth loop. Replace images anytime from the management page.',
      aboutEyebrow:'ABOUT ABC ACADEMY',aboutTitle:'Where beauty meets<br><em>fashion & creativity.</em>',
      testimonialsEyebrow:'TESTIMONIALS',testimonialsTitle:'Kind words from<br><em>happy clients.</em>',testimonialsDesc:'Edit names, photos and messages from the management dashboard.',
      reviewsEyebrow:'REVIEWS',reviewsTitle:'Trusted for beauty<br><em>in Pollachi.</em>',reviewsDesc:'Update the rating and customer reviews from the management dashboard.',
      inquiryEyebrow:'INQUIRY',contactTitle:'Come meet us in<br><em>Pollachi.</em>',
      mapEyebrow:'LOCATION',mapTitle:'Find ABC Academy<br><em>in Pollachi.</em>',mapDesc:'A compact map keeps the location easy to understand without taking over the page.',
      formTitle:'Tell us what<br><em>you need.</em>',formText:'Share your service requirement and ABC can guide you with details, timings and availability.'
    },
    education:{
      heroEyebrow:'01 · EDUCATION',heroTitle:'Learn the craft.<br><em>Build your future.</em>',heroText:'Practical fashion and beauty education for aspiring makeup artists, beauticians, costume designers, tailors and creative entrepreneurs.',
      courseEyebrow:'COURSE PATHWAYS',courseTitle:'Choose your<br><em>creative direction.</em>',courseDesc:'Explore a course and use the enquiry button to ask about batches, fees, duration and availability.',
      whyEyebrow:'WHY ABC ACADEMY',whyTitle:'From first lesson to<br><em>creative confidence.</em>',whyText:'Our education experience is designed around practice, guidance and portfolio-ready skills rather than only theory.',
      whyImage:'https://fashionmerch.net/images/textile_design_process.png',
      benefits:[['01','Practical learning','Work with real products, tools and creative briefs.'],['02','Personal guidance','Get support while you build technique and confidence.'],['03','Portfolio mindset','Create work that can support freelance and professional opportunities.'],['04','Flexible enquiry','Ask about batches, fees, duration and availability before joining.']],
      processEyebrow:'HOW IT WORKS',processTitle:'A simple path from<br><em>interest to enrolment.</em>',processDesc:'Designed to make the first conversation easy for students and working professionals.',
      process:[['01','Choose a course','Pick the skill or pathway you want to explore.'],['02','Send an enquiry','Share your details and the course you are interested in.'],['03','Get guidance','ABC can share dummy batch, timing, fee and availability details.'],['04','Start learning','Confirm your preferred pathway and begin your creative journey.']],
      videoEyebrow:'VIDEO SAMPLE',videoTitle:'See the academy<br><em>in action.</em>',videoDesc:'Watch a YouTube sample without leaving the website.',video:'https://www.youtube.com/embed/qw4BBqU9BPU?autoplay=1&mute=1&loop=1&playlist=qw4BBqU9BPU&rel=0&modestbranding=1',
      alumniEyebrow:'ALUMNI',alumniTitle:'From learning to<br><em>creative careers.</em>',alumniDesc:'Dummy alumni stories for the preview. Replace names, photos and roles with real student achievements.',
      enquiryEyebrow:'07 · ENQUIRY',enquiryTitle:"Let's build your<br><em>creative future.</em>",enquiryText:'Have a course, training or fashion/beauty requirement in mind? Tell ABC what you are looking for.',
      courses:[
{title:'Professional Makeup Artistry',tag:'MAKEUP · CAREER',desc:'Build a strong foundation in professional makeup and event-ready styling.',detail:'Learn skin prep, base work, colour correction, eye makeup, bridal looks, product knowledge and client-ready finishing.',img:'https://lakmeacademy-delhi.in/assets/images/Short-term.jpg'},
{title:'Beautician & Beauty Care',tag:'BEAUTY · SKILLS',desc:'Learn practical beauty care, grooming and salon-ready techniques.',detail:'Learn cleansing, facial care, grooming, hygiene, consultation and everyday beauty service techniques.',img:'https://cdn.shopify.com/s/files/1/0626/0251/0592/articles/Blog-Cover_21bfed64-1cde-4b03-a939-11d6813324ea.png?v=1678705992'},
{title:'Costume Designing',tag:'FASHION · DESIGN',desc:'Turn creative ideas into wearable costume concepts and styled looks.',detail:'Explore design references, colour stories, costume planning, fabric selection, styling concepts and finishing.',img:'https://fashionmerch.net/images/textile_design_process.png'},
{title:'Tailoring & Garment Making',tag:'TAILORING · PRACTICAL',desc:'Develop measurement, stitching and finishing skills for garments.',detail:'Practice measurements, patterns, machine handling, stitching, garment construction and neat finishing.',img:'https://fivethirtysomewhere.com/cdn/shop/files/IMG_2489_eb92d6ec-125b-47bf-804b-d99c7de98418.jpg?v=1710913409&width=3200'},
{title:'Aari Embroidery',tag:'CRAFT · CREATIVE',desc:'Learn detailed Aari work for blouses, outfits and custom pieces.',detail:'Practice hoop setup, tracing, basic stitches, motifs, bead and stone work, pattern placement and finishing.',img:'https://nichiembroidery.in/assets/images/pictures/aari4.jpg'},
{title:'YouTube & Creator Styling',tag:'CONTENT · CREATOR',desc:'Learn camera-ready makeup and styling for reels, shoots and videos.',detail:'Explore camera-friendly base, lighting, quick-change looks, hair and styling basics and creator workflow.',img:'https://cdn.shopify.com/s/files/1/0626/0251/0592/articles/Blog-Cover_21bfed64-1cde-4b03-a939-11d6813324ea.png?v=1678705992'},
{title:'Kids Fancy Dress & Event Styling',tag:'EVENT · CREATIVE',desc:'Creative costume styling for kids events, school programs and themed celebrations.',detail:'Plan colourful, age-appropriate looks with costume coordination, simple makeup, hair styling and event-ready finishing.',img:'https://sisjammu.in/images/Interhouse%20Fancy%20Dress%20Competition%20%2811%29.jpeg'}
],
      alumni:[{name:'Ananya S.',role:'Freelance Makeup Artist',quote:'Built confidence through practical bridal and party makeup practice.',img:'https://cdn.shopify.com/s/files/1/0626/0251/0592/articles/Blog-Cover_21bfed64-1cde-4b03-a939-11d6813324ea.png?v=1678705992'},{name:'Keerthana R.',role:'Boutique & Tailoring',quote:'Started taking custom blouse and tailoring enquiries after training.',img:'https://fivethirtysomewhere.com/cdn/shop/files/IMG_2489_eb92d6ec-125b-47bf-804b-d99c7de98418.jpg?v=1710913409&width=3200'},{name:'Pavithra M.',role:'Beauty Professional',quote:'Turned beauty skills into a small local client base.',img:'https://cdn.shopify.com/s/files/1/0626/0251/0592/articles/Blog-Cover_21bfed64-1cde-4b03-a939-11d6813324ea.png?v=1678705992'},{name:'Harini K.',role:'Fashion Creator',quote:'Uses styling and makeup skills for reels and fashion content.',img:'https://fivethirtysomewhere.com/cdn/shop/files/IMG_2489_eb92d6ec-125b-47bf-804b-d99c7de98418.jpg?v=1710913409&width=3200'},{name:'Nivetha P.',role:'Embroidery Creator',quote:'Developed a home-based creative craft service with consistent practice.',img:'https://nichiembroidery.in/assets/images/pictures/aari4.jpg'}]
    }
  };
  window.ABC_CMS_KEY=KEY;window.ABC_SITE_DEFAULTS=defaults;
  window.getABCCMS=function(){try{const raw=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem(LEGACY_KEY))||{};const saved=raw.site||raw;return {index:Object.assign({},defaults.index,saved.index||{}),servicesPage:Object.assign({},defaults.servicesPage,saved.servicesPage||{}),education:Object.assign({},defaults.education,saved.education||{})};}catch(e){return JSON.parse(JSON.stringify(defaults));}};
})();
