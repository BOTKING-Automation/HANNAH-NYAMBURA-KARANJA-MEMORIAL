/* English, Gĩkũyũ and Kiswahili language switch for the Hannah Nyambura Karanja memorial. */
(function(){
'use strict';
const pages={
'index.html':['KŨRIRIKANA WA RUTH NA WENDO','Hannah Nyambura Karanja (Wa Ruth)','Wendo wake ndũthiraga; ũtũũraga ngoro-inĩ ciitũ.','Tũkũririkana Wa Ruth na wendo. Warĩ nyanya witu mũndũ wa bata, ũrĩa watũthikĩrĩria, akatũhoera na akatũhe hinya na mwĩhoko. O mũndũ arĩ na maũndũ ake ma kũririkana, na tũgĩka hamwe nĩtũtũũria wendo ũrĩa atũheire.',[['Wendo wake ũtũũraga','Wendo wa Hannah nĩũtũheaga ũhooti, na nĩatũrutire gũtũma andũ angĩ maiguĩre wendo.'],['Maũndũ tũririkanaga','Tũkũririkana ũtũũro wake, ciugo ciake, mahoya make na ihinda rĩa kũikarana nake.'],['Mĩtugo yake nĩĩtũũraga','Tũhota gũtũũria ũtugi wake tũkĩgweterera arĩa angĩ na kũmĩrĩra hamwe.']]],
'story.html':['ŨTŨŨRO WAKE · WĨTĨKIO · MĨTUGO YAKE','Ũhoro wa ũtũũro wa Hannah Nyambura Karanja','Wa Ruth aarĩ wa bata mũno kũrĩ nyũmba yake na andũ arĩa mamũmenyaga.','Wa Ruth aarĩ nyanya witu na mũndũ wa wendo. Andũ nĩmamũririkanaga nĩ ũndũ wa kũmathikĩrĩria, kũmahe hinya, kũmahoera na kũmahe mwĩhoko. O mũndũ arĩ na kĩririkanio gĩake kĩa Wa Ruth; ciothe hamwe nĩigũtũũria ũtugi wake.',[['Mũndũ wa bata','Wa Ruth nĩathikĩrĩriaga andũ na akĩmahe ruo rũrĩa rwa kũigua meiguĩtwo.'],['Wĩtĩkio wake','Nĩatũrutire kũhooya, kũmwĩtĩkia Ngai na gũikara na mwĩhoko.'],['Mĩtugo ĩtũũraga','Tũgũtũũria wendo wake tũkĩteithagia andũ na tũkĩrũgamĩrĩra arĩa marĩ na ruo.']]],
'memories.html':['MAŨNDO TŨRIRIKANAGA','Maũndũ tũririkanaga na mĩtugo ya Wa Ruth','Wendo ndũthiraga; ũtũũraga thĩinĩ wa ngoro ciitũ.','Tũmũririkana ti nĩ mĩthenya na mĩaka tu, no nĩ ũndũ wa wendo wake, ciugo cia hinya, mahoya na ihinda iria twatũũraga hamwe nake. Rĩrĩa tũrĩ na ruo, no tũcookere Ngai ngaatho nĩ ũndũ wa wendo ũrĩa twamũrĩte.',[['Maũndũ atũrutĩte','Ririkana wendo wake, ũtugi, wĩtĩkio na ũrĩa aheaga andũ hinya.'],['Heana kĩririkanio gĩaku','Andika rĩrĩa ũmũririkanaga mũno kana ũrutani ũrĩa akũheire.'],['Mĩtugo yake','Tũtũũrie wendo wake tũkĩigua arĩa angĩ na tũkĩmahe ũteithio.']]],
'eulogy.html':['CIUGO CIA KŨRIRIKANA WA RUTH','Ciugo cia kũririkana Hannah Nyambura Karanja','Wa Ruth, tũkũririkana na wendo mũingĩ.','Ũmũthĩ ngoro ciitũ nĩciĩru nĩ ũndũ wa gũtirĩ hamwe na ithuĩ, no nĩtũcookeria Ngai ngaatho nĩ ũndũ wa ũtũũro wa Hannah. Warĩ nyanya wendwo mũno, ũrĩa watũheire wendo, mahoya na hinya. Wĩtĩkio wake watũheire mwĩhoko. Nĩtũmũigua, no wendo wake ũgũtũũra thĩinĩ wa nyũmba ciitũ na thĩinĩ wa arĩa othe aamendete.',[['Ngoro ĩrĩa yaiguaga','Wa Ruth nĩathikĩrĩriaga andũ na akĩmahe ciugo cia kũmahoota.'],['Wĩtĩkio wake','Nĩatũrutire kũhooya, kũmwĩtĩkia Ngai na gũikara na mwĩhoko.'],['Mĩtugo ya wendo','Tũhote gũtũũria mĩtugo yake tũkĩteithagia arĩa marĩ na ruo na tũkĩruta wega.'],['Nĩ wega, Wa Ruth','Nĩtũcookeria ngaatho nĩ ũndũ wa wendo, mahoya na ũhooti waku. Tũgũkũririkana na heshima.']]],
'service.html':['IBADA YA KŨRIRIKANA WA RUTH','Ibada ya kũririkana Wa Ruth','Ũhoro wa ibada ya kũririkana ũtũũro wa Hannah.','Tũkũririkana Hannah Nyambura Karanja, Wa Ruth, na wendo na ngaatho. Ũhoro wa mũthenya, ihinda na handũ ha ibada ũgũikwo haha familia ĩrĩa yathondekete na yathibitĩtie.',[['Ũhoro wa ibada','Mũthenya, ihinda na handũ nĩigũcookwo haha rĩrĩa familia yathibitĩtie.'],['Kũũka kana gũtũũra hamwe online','Arĩa matingĩhota gũũka nĩmatihota kũrora livestream rĩrĩa familia yathondekete na gũheana link ya ma.'],['Ngaatho','Nĩtũcookeria ngaatho arĩa othe marĩ hamwe na familia na mahoya mao.']]],
'gallery.html':['MBICA NA KĨRIRIKANIO','Mbica cia ũtũũro wa Wa Ruth','Mbica nĩitũcookeragia maũndũ marĩa tũtũũraga ngoro-inĩ.','Mbica ĩmwe no ĩcookerie ihinda rĩnini rĩa ũtũũro. Tũkũririkana ũthiũ wa Wa Ruth, andũ aamendete na mahinda marĩa twendaga gũcooka kũona. Rora mbica na wendo; maithori nayo nĩmaheirwo handũ.',[['Rora mbica','Tũkũririkana ũrĩa aarĩ na wendo ũrĩa atũheire.'],['Ongerera mbica','Familia no ĩongerere mbica iria ciathimĩtwo na yathibitĩtie.']]],
'prayers.html':['WĨTĨKIO · MAHOYA · MWĨHOKO','Wĩtĩkio, Maandĩko na Mahoya','Handũ ha kũcookera kũrĩ Ngai rĩrĩa ngoro ĩrĩ na ruo.','Hannah Nyambura Karanja, Wa Ruth, nĩatũrutire kũmenya Ngai na akĩhanda mbeu cia wĩtĩkio, mwĩhoko na hinya ngoro-inĩ ciitũ. Mahoya maitũ no maheane handũ ha kuuga maithori na kĩeha maitũ mbere ya Ngai. Rĩrĩa tũremwo nĩ ciugo, Ngai nĩamenyaga ũrĩa ngoro ĩrĩ.',[['Rĩrĩa ngoro ĩrĩ na ruo','Cookera kũrĩ Ngai na umwĩre ũrĩa wĩiguaga. Nĩwega gũcaria mũndũ ũrĩa wĩhokete akũthikĩrĩrie.'],['Mwĩhoko','O na rĩrĩa tũrĩ na ruo, tũhota gũikara na mwĩhoko tũkĩmenya atĩ Ngai arĩ hamwe na ithuĩ.'],['Hoya ya familia','Ngai, he familia hinya, thayũ na ũhooti. Hoonia ngoro ciao na ũmahe andũ a kũmaigua. Amen.'],['Gũtũũra na wĩtĩkio','Tũririkane Wa Ruth tũkĩtũũria wendo, mahoya na mĩtugo njega.']]],
'tributes.html':['CIUGO CIA WENDO','Ciugo cia kũririkana Wa Ruth','Handũ ha kuuga ngaatho, wendo, mahoya na maũndũ tũririkanaga.','Ndũringĩhota gũcaria ciugo njega mũno nĩguo uandike kĩririkanio. Andika o ũrĩa ũrĩ ngoro-inĩ: ũrĩa ũmũririkanaga, ũrutani ũrĩa akũheire, kana ciugo iria wendaga gũmũreera rĩngĩ. Wa Ruth nĩatũũraga ngoro-inĩ cia arĩa aamendete.',[['Andika ciugo ciaku','Andika rĩĩtwa rĩaku rĩrĩa wendaga na kĩririkanio gĩaku.'],['Njĩra ya gũthoma','Kĩririkanio gĩakwa mũno nĩ…; Wa Ruth nĩandutĩte…; hoya yakwa nĩ…'],['Heana ciugo ciaku','Ũhota kũcopy, kũdownload kana gũheana ciugo ciaku na WhatsApp. Ciugo itigũoneka public o wega; familia nĩĩrora mbere ya gũcookwo.']]],
'family.html':['NYŨMBA · NGAATHO · KŨRIRIKANA','Nyũmba na arĩa tũcookeria ngaatho','Tũcookeria ngaatho arĩa othe marĩ hamwe na nyũmba ya Wa Ruth.','Rĩrĩa mũndũ ta Wa Ruth aathiĩ, kĩeha gĩkinyaga ngoro nyingĩ. Tũkũririkana Hannah Nyambura Karanja na wendo, na tũcookeria ngaatho arĩa othe marĩ hamwe na nyũmba yake na mahoya, ciugo cia hinya na ũtugi wao. Nĩtũteithiane gũtwarana kĩeha gĩkĩ.',[['Kũrĩ nyũmba','Tũrĩ hamwe na inyuĩ rĩrĩa mũkũririkana Wa Ruth. Tũheane hinya na mahoya.'],['Ngaatho nĩ ũndũ wa ũtugi','Nĩtũcookeria ngaatho arĩa othe matũmĩire ciugo cia ũhooti, mahoya na ũtugi.'],['Mĩtugo yake nĩ ya ithuĩ othe','Tũtũũrie wendo, wĩtĩkio na ũtugi wake tũkĩteithagia arĩa angĩ.']]],
'editing-guide.html':['ŨRUTI WA WEBSITE','Ũrĩa wa gũcookereria website','Ũrĩa nyũmba ĩngĩongerera mbica na ũhoro ũrĩa wa ma.','Website ĩno nĩ ya kũririkana Wa Ruth. Mbere ya gũcookereria ũhoro, mbica kana ciugo, o na rora atĩ ũhoro nĩ wa ma na familia yathimĩte. Hitha ũhoro wa andũ; ndũgacookererie ũhoro ũtarĩ wa ma.',[['Mbica','Ongerera mbica iria familia yathimĩte mũfolder-inĩ ya public/images/.'],['Ũhoro wa ibada','Ongerera mũthenya, ihinda, handũ na link ya livestream rĩrĩa familia yathibitĩtie. Ndũgacookererie ũhoro ũtarĩ wa ma.'],['Wendo na ũhoro wa nyũmba','Thikĩria arĩa angĩ rĩrĩa mekũria ũhoro wao kana mbica ciabo. Ndũgakome mbica cia mũndũ ũtarĩ wamũũria.']]]
};
const swPages={
  "index.html": [
    "KUMBUKUMBU YA UPENDO · IMANI INAYODUMU",
    "Hannah Nyambura Karanja (Wa Ruth)",
    "Mtu wa thamani hasahauliki; upendo wake hubaki mioyoni mwetu.",
    "Tunamkumbuka Wa Ruth kwa upendo mwingi. Alikuwa nyanya mpendwa mwenye moyo wa kimama, aliyesikiliza, kutia moyo, kusali na kuwasaidia watu kupata tumaini. Familia na marafiki wana kumbukumbu zao za kipekee, na kila kumbukumbu ni sehemu ya urithi wake.",
    [
      [
        "Upendo unaoendelea",
        "Upendo wa Hannah bado unatupa faraja na hutufundisha kuwajali wengine."
      ],
      [
        "Kumbukumbu tunazohifadhi",
        "Tazama hadithi yake, sala, picha na nyakati tulizothamini pamoja naye."
      ],
      [
        "Urithi wake unaishi",
        "Tunaweza kuendeleza wema wake kwa kusimama pamoja, kusali na kutendeana kwa upendo."
      ]
    ]
  ],
  "story.html": [
    "MAISHA YAKE · IMANI · URITHI",
    "Hadithi ya Hannah Nyambura Karanja",
    "Wa Ruth alikuwa mtu wa thamani sana kwa familia yake na kwa waliomfahamu.",
    "Wa Ruth alikuwa nyanya mpendwa na mtu mwenye moyo wa upendo kwa familia na jamii. Anakumbukwa kwa kusikiliza kwa makini, kutia moyo, kusali na kuwasaidia watu wasijisikie peke yao. Kila mmoja ana kumbukumbu yake ya Wa Ruth; kwa pamoja, kumbukumbu hizi huhifadhi urithi wake.",
    [
      [
        "Mtu wa thamani",
        "Wa Ruth aliwapa watu nafasi ya kusikilizwa na kujisikia kueleweka."
      ],
      [
        "Imani yake",
        "Alishiriki sala na imani, na kuwasaidia watu kutazama mbele kwa tumaini."
      ],
      [
        "Mambo yanayoendelea kuishi",
        "Tunaweza kuhifadhi wema wake kwa kusaidiana na kuendeleza upendo aliotufundisha."
      ]
    ]
  ],
  "memories.html": [
    "KUMBUKUMBU NA URITHI",
    "Kumbukumbu na urithi wake",
    "Upendo haupotei; unaendelea kuishi katika mambo tunayowafundisha wengine.",
    "Hatumkumbuki mtu kwa siku na miaka pekee, bali pia kwa upendo wake, sala tunazokumbuka, maneno ya kututia moyo na nyakati tunazotamani kuzipitia tena. Tunapohuzunika, tunaweza pia kushukuru kwa upendo tuliopokea na kuubeba mbele.",
    [
      [
        "Mambo aliyotuachia",
        "Kumbuka upendo wake, wema, imani na namna alivyowatia wengine moyo."
      ],
      [
        "Shiriki kumbukumbu",
        "Hifadhi simulizi, somo au wakati maalumu unaotaka familia iendelee kuukumbuka."
      ],
      [
        "Urithi wake",
        "Tunaweza kuendeleza urithi wake kwa kuwa wenye huruma, kusaidia na kuwatia moyo wengine."
      ]
    ]
  ],
  "eulogy.html": [
    "MANENO YA KUMBUKUMBU",
    "Hotuba ya kumbukumbu ya Hannah Nyambura Karanja",
    "Wa Ruth, tunakukumbuka kwa upendo mwingi.",
    "Leo mioyo yetu imejaa huzuni kwa sababu Hannah hayupo tena nasi, lakini tunamshukuru Mungu kwa zawadi ya maisha yake. Alikuwa nyanya mpendwa aliyetoa upendo, sala na kutia moyo. Imani yake iliwasaidia wengi kupata tumaini. Tunamkosa, na upendo wake unaendelea kuishi ndani ya familia na wote aliowagusa.",
    [
      [
        "Moyo uliosikiliza",
        "Wa Ruth alijali watu, aliwasikiliza na kuwapa maneno ya faraja."
      ],
      [
        "Imani aliyoshiriki",
        "Alitukumbusha kusali, kumtegemea Mungu na kuendelea kuwa na tumaini."
      ],
      [
        "Urithi wa upendo",
        "Tunaweza kuendeleza mfano wake kwa kuwajali walio katika huzuni na kutenda mema."
      ],
      [
        "Asante, Wa Ruth",
        "Tunashukuru kwa upendo, sala na faraja uliyotupa. Tutakukumbuka kwa heshima."
      ]
    ]
  ],
  "service.html": [
    "KUMBUKUMBU · SALA · UPENDO",
    "Siku ya kumuaga Wa Ruth",
    "Taarifa za kumuaga Hannah kwa heshima na upendo.",
    "Tunamkumbuka Hannah Nyambura Karanja, Wa Ruth, kwa upendo na shukrani. Taarifa kuhusu tarehe, muda na mahali pa ibada ya kumuaga zitawekwa hapa baada ya familia kuzithibitisha.",
    [
      [
        "Taarifa za kumuaga",
        "Tarehe, muda na mahali vitawekwa hapa baada ya kuthibitishwa na familia."
      ],
      [
        "Kushiriki ana kwa ana au mtandaoni",
        "Ikiwa kutakuwa na matangazo ya moja kwa moja, kiungo rasmi kitawekwa hapa baada ya familia kukithibitisha."
      ],
      [
        "Shukrani",
        "Tunawashukuru wote wanaoisimamia familia kwa sala, faraja na msaada wao."
      ]
    ]
  ],
  "gallery.html": [
    "MATUNZI YA PICHA",
    "Maisha yaliyohifadhiwa kwenye picha",
    "Picha huturudishia vipande vya kumbukumbu na upendo.",
    "Picha moja inaweza kuturudishia muda mfupi wa maisha. Tunakumbuka uso wa Wa Ruth, watu aliowapenda na nyakati tunazotamani kuzipitia tena. Tazama picha kwa upole; machozi pia yana nafasi yake.",
    [
      [
        "Tazama kumbukumbu",
        "Tukumbuke pamoja jinsi alivyokuwa na upendo aliotushirikisha."
      ],
      [
        "Ongeza picha",
        "Familia inaweza kuongeza picha zilizoidhinishwa na kuhakikisha kila picha inafaa kushirikiwa."
      ]
    ]
  ],
  "prayers.html": [
    "IMANI · SALA · TUMAINI",
    "Imani, maandiko na sala",
    "Mahali pa kumgeukia Mungu wakati moyo una huzuni.",
    "Hannah Nyambura Karanja, Wa Ruth, alitusaidia kukua katika imani na kupanda mbegu za tumaini na ujasiri mioyoni mwetu. Sala zinaweza kutupa nafasi ya kuleta machozi na huzuni zetu mbele za Mungu. Tunapokosa maneno, Mungu bado anauelewa moyo.",
    [
      [
        "Moyo unapoumia",
        "Mgeukie Mungu na umweleze kwa uaminifu unavyohisi. Tafuta pia mtu unayemwamini akusikilize."
      ],
      [
        "Tumaini",
        "Hata tunapohuzunika, tunaweza kushikilia tumaini kwamba Mungu yuko karibu nasi."
      ],
      [
        "Sala kwa familia",
        "Mungu, ipe familia nguvu, amani na faraja. Ijalie mioyo yao na uwape watu wa kuwasaidia. Amina."
      ],
      [
        "Kuendelea katika imani",
        "Tunaweza kumkumbuka Wa Ruth kwa kuendeleza upendo, sala na matendo mema."
      ]
    ]
  ],
  "tributes.html": [
    "UJUMBE WA UPENDO",
    "Ujumbe wa kumbukumbu",
    "Mahali pa kueleza shukrani, upendo, sala na kumbukumbu za Wa Ruth.",
    "Huhitaji kutumia maneno makamilifu kuandika ujumbe wa kumbukumbu. Andika kwa ukweli kuhusu jinsi unavyomkosa, somo alilokufundisha au maneno ambayo ungependa kumwambia tena. Wa Ruth anaendelea kuwa sehemu ya mioyo ya waliompenda.",
    [
      [
        "Andika ujumbe wako",
        "Andika jina unalotaka kutumia na kumbukumbu iliyo moyoni mwako."
      ],
      [
        "Mawazo ya kuanzia",
        "Kumbukumbu ninayoipenda zaidi ni…; Wa Ruth alinifundisha…; sala yangu kwa familia ni…"
      ],
      [
        "Shiriki ujumbe",
        "Unaweza kunakili, kupakua au kushiriki ujumbe kupitia WhatsApp. Ujumbe hautachapishwa moja kwa moja kwenye tovuti."
      ]
    ]
  ],
  "family.html": [
    "FAMILIA · SHUKRANI · KUMBUKUMBU",
    "Familia na shukrani",
    "Tunatoa shukrani kwa wote wanaoisimamia familia kwa upendo.",
    "Mtu mpendwa kama Wa Ruth anapoondoka, huzuni hugusa mioyo mingi. Tunamkumbuka Hannah Nyambura Karanja kwa upendo, na tunawashukuru wote wanaoisimamia familia kwa sala, maneno ya kutia moyo na matendo ya wema. Tusaidiane kubeba huzuni hii kwa upendo na subira.",
    [
      [
        "Kwa familia",
        "Tuko pamoja nanyi katika kumkosa Wa Ruth. Tuendelee kupeana nguvu na kusali pamoja."
      ],
      [
        "Shukrani kwa wema",
        "Asante kwa wote waliotuma maneno ya faraja, sala, ziara na msaada."
      ],
      [
        "Urithi wa pamoja",
        "Tuendeleze urithi wake kwa kuonyesha upendo, imani, huruma na wema."
      ]
    ]
  ],
  "editing-guide.html": [
    "MWONGOZO WA TOVUTI",
    "Jinsi ya kusasisha tovuti",
    "Jinsi familia inavyoweza kuongeza picha na taarifa zilizothibitishwa.",
    "Tovuti hii imeundwa kumkumbuka Wa Ruth. Kabla ya kusasisha taarifa, picha au ujumbe, hakikisha ni sahihi na umeidhinishwa na familia. Hifadhi faragha ya watu na usichapishe taarifa ambazo hazijathibitishwa.",
    [
      [
        "Picha",
        "Ongeza picha zilizoidhinishwa na familia kwenye folda ya public/images/."
      ],
      [
        "Taarifa za mazishi",
        "Ongeza tarehe, muda, mahali na kiungo cha matangazo ya moja kwa moja baada ya familia kuthibitisha."
      ],
      [
        "Upendo na faragha ya familia",
        "Heshimu matakwa ya wengine kuhusu taarifa na picha zao kabla ya kuzichapisha."
      ]
    ]
  ]
};
function key(){const p=location.pathname.split('/').pop()||'index.html';return pages[p]?p:'index.html'}
function addUI(){const h=document.querySelector('header');if(!h||document.getElementById('languageSwitch'))return;const box=document.createElement('div');box.className='memorial-language-switch';box.id='languageSwitch';box.innerHTML='<span>LUGHA / RŨRĨMĨ</span><button type="button" data-lang="en" aria-pressed="true">English</button><button type="button" data-lang="ki" aria-pressed="false">Gĩkũyũ</button><button type="button" data-lang="sw" aria-pressed="false">Kiswahili</button>';const nav=h.querySelector('nav');(nav||h).insertAdjacentElement('beforebegin',box);const panel=document.createElement('section');panel.id='kikuyuPage';panel.className='kikuyu-page';panel.lang='ki';document.body.insertBefore(panel,h.nextSibling);box.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)))}
function render(lang){
 const isSw=lang==='sw';
 const d=(isSw?swPages:pages)[key()]||(isSw?swPages:pages)['index.html'];
 const titleProtocol=isSw?'MAREHEMU · KWA KUMBUKUMBU YA UPENDO':lang==='ki'?'TŨKŨRIRIKANA NA WENDO':'IN LOVING MEMORY';
 const dateLine=isSw?'7 Oktoba 2026 · Tunamkumbuka kwa upendo':lang==='ki'?'7 Oktoba 2026 · Tũkũririkana na wendo':'7 October 2026 · In loving memory';
 const cta=isSw?['Soma hotuba','Andika ujumbe','Tazama picha']:lang==='ki'?['Thoma ciugo cia kũririkana','Andika ciugo','Rora mbica']:['Read the eulogy','Write a tribute','View photos'];
 const panel=document.getElementById('kikuyuPage');
 panel.lang=lang;
 panel.innerHTML='<section class="page-hero kikuyu-hero"><p class="late-protocol">'+titleProtocol+'</p><p class="eyebrow">'+d[0]+'</p><div class="cross" aria-hidden="true">✝</div><h1 class="kikuyu-title-honour">'+d[1]+'</h1><p>'+d[2]+'</p><small>'+dateLine+'</small></section><main class="page-content kikuyu-content"><p class="lead">'+d[3]+'</p>'+d[4].map(s=>'<section class="kikuyu-section"><h2>'+s[0]+'</h2><p>'+s[1]+'</p></section>').join('')+'<div class="page-cta"><a class="button primary" href="eulogy.html">'+cta[0]+' →</a><a class="button outline" href="tributes.html">'+cta[1]+' →</a><a class="button outline" href="gallery.html">'+cta[2]+' →</a></div></main>';
}
function setLang(lang){
 const selected=['en','ki','sw'].includes(lang)?lang:'en';
 document.body.dataset.language=selected;
 document.documentElement.lang=selected;
 document.querySelectorAll('#languageSwitch button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===selected)));
 render(selected);
 document.querySelectorAll('header nav a').forEach(a=>{
  const k=(a.getAttribute('href')||'').replace('.html','').replace('/','');
  const ki={index:'Mũciĩ',story:'Ũhoro wake',memories:'Maũndũ tũririkanaga',eulogy:'Ciugo cia kũririkana',service:'Ibada',gallery:'Mbica',prayers:'Mahoya',tributes:'Ciugo cia wendo',family:'Nyũmba','editing-guide':'Ũruti wa website'};
  const en={index:'Home',story:'Her Story',memories:'Memories',eulogy:'Eulogy',service:'Farewell',gallery:'Gallery',prayers:'Faith & Prayer',tributes:'Tributes',family:'Family','editing-guide':'Editing Guide'};
  const swNav={index:'Mwanzo',story:'Hadithi yake',memories:'Kumbukumbu',eulogy:'Hotuba',service:'Kuaga',gallery:'Picha',prayers:'Imani na sala',tributes:'Ujumbe',family:'Familia','editing-guide':'Mwongozo'};
  const dict=selected==='ki'?ki:selected==='sw'?swNav:en;
  if(dict[k])a.textContent=dict[k];
 });
 const brand=document.querySelector('.brand span:last-child');
 if(brand)brand.textContent=selected==='ki'?'KŨRIRIKANA NA WENDO':selected==='sw'?'KWA KUMBUKUMBU YA UPENDO':'IN LOVING MEMORY';
 try{localStorage.setItem('hannah-memorial-language',selected)}catch(_){}
}
function init(){addUI();render();let l='en';try{l=localStorage.getItem('hannah-memorial-language')||'en'}catch(_){}setLang(l)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();