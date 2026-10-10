/* English, Gĩkũyũ and Kiswahili language switch for the Hannah Nyambura Karanja memorial. */
(function(){
'use strict';
const pages={
'index.html':['KŨRIRIKANA CUCU WITŨ NA WENDO','Hannah Nyambura Karanja (Wa Ruth)','Wendo wake ndũthiraga; ũtũũraga ngoro-inĩ ciitũ.','Tũririkana Cucu witũ Wa Ruth na wendo mũingĩ. Aarĩ mũndũ wa bata kũrĩ nyũmba yake na arĩa othe aamendete. Nĩatũthikĩrĩriaga, atũhoeraga na atũheaga hinya na mwĩhoko. O mũndũ arĩ na kĩririkanio gĩake, na tũkĩheana maũndũ macio tũtũũria mĩtugo yake.',[['Wendo wake ũtũũraga','Wendo wa Cucu witũ ũtũheaga ũhooti na ũtũrutaga kũigua arĩa angĩ.'],['Maũndũ tũririkanaga','Tũririkane ciugo ciake, mahoya make na ihinda iria tũtũũraga hamwe nake.'],['Mĩtugo yake','Tũhota gũtũũria wendo wake tũkĩteithagia arĩa angĩ na tũkĩmahe hinya.']]],
'story.html':['ŨTŨŨRO WAKE · WĨTĨKIO · MĨTUGO YAKE','Ũhoro wa ũtũũro wa Cucu witũ','Cucu witũ Wa Ruth aarĩ mũndũ wa wendo na wa bata mũno.','Cucu witũ Wa Ruth aarĩ wa bata kũrĩ nyũmba yake na arĩa othe aamendete. Aathikĩrĩriaga andũ, akĩmahooya na akĩmahe hinya na mwĩhoko. O mũndũ arĩ na kĩririkanio gĩake; tũkĩheana maũndũ macio tũtũũria mĩtugo yake.',[['Mũndũ wa bata','Cucu witũ nĩatũthikĩrĩriaga na akĩmahe ũhooti.'],['Wĩtĩkio wake','Nĩatũrutire kũhooya, kwĩtĩkia Ngai na gũikara na mwĩhoko.'],['Mĩtugo ĩtũũraga','Tũhota gũtũũria wendo wake tũkĩteithagia arĩa marĩ na ruo.']]],
'memories.html':['MAŨNDO TŨRIRIKANAGA','Maũndũ tũririkanaga na mĩtugo ya Cucu witũ','Wendo ndũthiraga; ũtũũraga thĩinĩ wa ngoro ciitũ.','Tũririkana Cucu witũ ti nĩ mĩthenya na mĩaka tu, no nĩ wendo wake, mahoya make, ciugo cia hinya na ihinda iria tũtũũraga hamwe nake. Rĩrĩa tũrĩ na kĩeha, no tũcookerie Ngai ngaatho nĩ ũndũ wa wendo ũrĩa twamũheire na ũrĩa atũheire.',[['Maũndũ atũrutĩte','Ririkana wendo wake, wĩtĩkio na ũrĩa aheaga andũ hinya.'],['Heana kĩririkanio gĩaku','Andika kĩririkanio gĩaku kĩa Cucu witũ kana ũrutani ũrĩa akũheire.'],['Mĩtugo yake','Tũtũũrie wendo wake tũkĩigua arĩa angĩ na tũkĩmahe ũteithio.']]],
'eulogy.html':['CIUGO CIA KŨRIRIKANA CUCŨ WITŨ','Ciugo cia kũririkana Hannah Nyambura Karanja','Cucu witũ Wa Ruth, tũkũririkana na wendo mũingĩ.','Ũmũthĩ tũrĩ na kĩeha nĩ ũndũ wa gũtirĩ na Cucu witũ hamwe na ithuĩ. No nĩtũcookeria Ngai ngaatho nĩ ũndũ wa ũtũũro wa Hannah. Cucu witũ aarĩ mũndũ wendwo mũno, na nĩatũheire wendo, mahoya na hinya. Wĩtĩkio wake watũheire mwĩhoko. Tũmũririkana mũno, na wendo wake ũgũtũũra ngoro-inĩ ciitũ na thĩinĩ wa arĩa othe aamendete.',[['Ngoro ĩrĩa yaiguaga','Cucu witũ nĩathikĩrĩriaga andũ na akĩmahe ciugo cia ũhooti.'],['Wĩtĩkio wake','Nĩatũrutire kũhooya, kwĩtĩkia Ngai na gũikara na mwĩhoko.'],['Mĩtugo ya wendo','Tũhota gũtũũria mĩtugo yake tũkĩteithagia arĩa marĩ na kĩeha na tũkĩruta wega.'],['Nĩ wega, Cucu witũ','Nĩtũcookeria Ngai ngaatho nĩ ũndũ wa wendo, mahoya na ũhooti waku. Tũgũkũririkana na wendo.']]],
'service.html':['MŨTHENYA WA KŨRIRIKANA CUCŨ WITŨ','Ũhoro wa mũthenya wa kũririkana Wa Ruth','Ũhoro wa kũririkana ũtũũro wa Cucu witũ Hannah.','Tũkũririkana Cucu witũ Hannah Nyambura Karanja na wendo na ngaatho. Ũhoro wa mũthenya, ihinda na handũ ha kũririkana ũgũikwo haha rĩrĩa nyũmba yathibitĩtie.',[['Ũhoro wa mũthenya','Mũthenya, ihinda na handũ nĩigũcookwo haha rĩrĩa nyũmba yathibitĩtie.'],['Kũũka kana kũrora na intaneti','Arĩa matĩngĩũka nĩmaroraga ibada na intaneti rĩrĩa nyũmba ĩheanĩte link yathibitĩtie.'],['Ngaatho','Nĩtũcookeria ngaatho arĩa othe marĩ hamwe na nyũmba na mahoya mao.']]],
'gallery.html':['MBICA NA KĨRIRIKANIO','Mbica cia ũtũũro wa Cucu witũ','Mbica itũririkania ũthiũ wa Cucu witũ, andũ aamendete na ihinda iria tũtũũraga hamwe nake.','Mbica ĩmwe no ĩcookerie ihinda rĩnini rĩa ũtũũro wake. Tũririkane ũthiũ wake, arĩa aamendete na mahinda marĩa twatũũraga hamwe. Rora mbica na wendo; nĩ wega kũririkana hamwe.',[['Rora mbica','Tũririkane ũrĩa aarĩ na wendo ũrĩa atũheire.'],['Ongerera mbica','Nyũmba no ĩongerere mbica iria ciathimĩtwo na yathibitĩtie.']]],
'prayers.html':['WĨTĨKIO · MAHOYA · MWĨHOKO','Wĩtĩkio, Maandĩko na Mahoya','Handũ ha kũcookera kũrĩ Ngai rĩrĩa ngoro ĩrĩ na kĩeha.','Cucu witũ Wa Ruth nĩatũrutire gũtũũra na wĩtĩkio, mwĩhoko na hinya. Mahoya maitũ no maheane handũ ha kũheana kĩeha na maithori mbere ya Ngai. Rĩrĩa tũremwo nĩ ciugo, Ngai nĩamenya ũrĩa ngoro ciitũ ciigue.',[['Rĩrĩa ngoro ĩrĩ na kĩeha','Cookera kũrĩ Ngai na umwĩre ũrĩa ũiguaga. Caria mũndũ ũrĩa wĩhokete akũthikĩrĩrie.'],['Mwĩhoko','O na rĩrĩa tũrĩ na kĩeha, tũhota gũikara na mwĩhoko tũkĩmenya atĩ Ngai arĩ hamwe na ithuĩ.'],['Hoya ya nyũmba','Ngai, he nyũmba hinya, thayũ na ũhooti. Hoonia ngoro ciao na ũmahe andũ a kũmaigua. Amen.'],['Gũtũũra na wĩtĩkio','Tũririkane Cucu witũ tũkĩtũũria wendo, mahoya na mĩtugo njega.']]],
'tributes.html':['CIUGO CIA WENDO','Ciugo cia kũririkana Cucu witũ','Handũ ha kuuga ngaatho, wendo, mahoya na maũndũ tũririkanaga.','Ndũbatariĩ gũthondeka ciugo njega mũno nĩguo uandike kĩririkanio. Andika o ũrĩa ũrĩ ngoro-inĩ yaku: ũrĩa ũririkanaga, ũrutani ũrĩa Cucu akũheire, kana ciugo iria wendaga gũmũreera rĩngĩ. Tũtũũrie rĩĩtwa rĩake na wendo.',[['Andika ciugo ciaku','Andika rĩĩtwa rĩaku rĩrĩa wendaga na kĩririkanio gĩaku.'],['Njĩra ya gũthoma','Kĩririkanio gĩakwa mũno nĩ…; Cucu witũ nĩandutĩte…; hoya yakwa nĩ…'],['Heana ciugo ciaku','Ũhota kũcopy, kũdownload kana gũheana ciugo ciaku na WhatsApp. Nyũmba nĩĩrora mbere ya gũcookereria ciugo public.']]],
'family.html':['NYŨMBA · NGAATHO · KŨRIRIKANA','Nyũmba na arĩa tũcookeria ngaatho','Tũcookeria ngaatho arĩa othe marĩ hamwe na nyũmba ya Cucu witũ.','Rĩrĩa Cucu witũ aathiĩ, kĩeha gĩkinyaga ngoro cia andũ aingĩ. Tũkũririkana Hannah Nyambura Karanja na wendo, na tũcookeria ngaatho arĩa othe marĩ hamwe na nyũmba yake nĩ mahoya, ciugo cia hinya na ũtugi wao. Tũteithane na tũheane ũhooti hĩndĩ ya kĩeha.',[['Kũrĩ nyũmba','Tũrĩ hamwe na inyuĩ rĩrĩa mũkũririkana Cucu witũ. Tũheane hinya na mahoya.'],['Ngaatho nĩ ũndũ wa ũtugi','Nĩtũcookeria ngaatho arĩa othe matũmĩire ciugo cia ũhooti, mahoya kana ũtugi.'],['Mĩtugo yake nĩ ya ithuĩ othe','Tũtũũrie wendo, wĩtĩkio na ũtugi wake tũkĩteithagia arĩa angĩ.']]],
'editing-guide.html':['ŨRUTI WA WEBSITE','Ũrĩa wa gũcookereria website','Ũrĩa nyũmba ĩngĩongerera mbica na ũhoro wa ma.','Website ĩno nĩ ya kũririkana Cucu witũ Wa Ruth. Mbere ya gũcookereria ũhoro, mbica kana ciugo, rora atĩ ũhoro ũcio nĩ wa ma na wathimĩtwo nĩ nyũmba. Hitha ũhoro wa andũ; ndũkacooke ũhoro ũtarĩ wa ma.',[['Mbica','Ongerera mbica iria nyũmba yathimĩte mũfolder-inĩ ya public/images/.'],['Ũhoro wa kũririkana','Ongerera mũthenya, ihinda, handũ na link rĩrĩa nyũmba yathibitĩtie. Ndũgacookererie ũhoro ũtarĩ wa ma.'],['Wendo na ũhoro wa nyũmba','Thikĩria arĩa angĩ rĩrĩa mekũria ũhoro wao kana mbica ciabo. Ndũgakome mbica cia mũndũ ũtarĩ wamũũria.']]]
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
 const verseLanguage=['en','ki','sw'].includes(lang)?lang:'en';
 const scripture={
  en:[
   ['The LORD is close to the brokenhearted and saves those who are crushed in spirit.','PSALM 34:18 · NIV','https://www.bible.com/bible/111/PSA.34.18.NIV'],
   ['Blessed are those who mourn, for they will be comforted.','MATTHEW 5:4 · NIV','https://www.bible.com/bible/111/MAT.5.4.NIV'],
   ['I can do all this through him who gives me strength.','PHILIPPIANS 4:13 · NIV','https://www.bible.com/bible/111/PHP.4.13.NIV'],
   ['The LORD is near to all who call on him, to all who call on him in truth.','PSALM 145:18 · NIV','https://www.bible.com/bible/111/PSA.145.18.NIV']
  ],
  ki:[
   ['MWATHANI akoragwo hakuhĩ na arĩa makuĩte ngoro, na nĩahonokagia arĩa mwĩhoko wao ũthirĩĩte.','THABURI 34:18 · GKN','https://www.bible.com/bible/1201/PSA.34.18.GKN'],
   ['Kũraathimwo-rĩ, nĩ arĩa maracakaya; nĩ ũndũ nĩmakoomĩrĩrio!','MATHAYO 5:4 · GKN','https://www.bible.com/bible/1201/MAT.5.4.GKN'],
   ['Nĩhotaga gwĩka maũndũ moothe na ũndũ wake ũrĩa ũheaga hinya.','AFILIPI 4:13 · GKN','https://www.bible.com/bible/1201/PHP.4.13.GKN'],
   ['MWATHANI akoragwo hakuhĩ na arĩa oothe mamũkayagĩra; o arĩa mamũkayagĩra na ngoro yothe.','THABURI 145:18 · GKN','https://www.bible.com/bible/1201/PSA.145.18.GKN']
  ],
  sw:[
   ['Mwenyezi-Mungu yu karibu na waliokufa moyo; huwaokoa wote waliokata tamaa kabisa.','ZABURI 34:18 · BHN','https://www.bible.com/bible/74/PSA.34.18.BHN'],
   ['Heri walio na huzuni, maana watafarijiwa.','MATHAYO 5:4 · BHN','https://www.bible.com/bible/74/MAT.5.4.BHN'],
   ['Naweza kuikabili kila hali kwani Kristo hunipa nguvu.','WAFILIPI 4:13 · BHN','https://www.bible.com/bible/74/PHP.4.13.BHN'],
   ['Mwenyezi-Mungu yuko karibu na wote wanaomwomba, wote wanaomwomba kwa moyo mnyofu.','ZABURI 145:18 · BHN','https://www.bible.com/bible/74/PSA.145.18.BHN']
  ]
 };
 const pKey=key();
 const rows=pKey==='prayers.html'?scripture[verseLanguage]:(['eulogy.html','index.html'].includes(pKey)?[scripture[verseLanguage][0]]:[]);
 const scriptureHeading=verseLanguage==='ki'?'MAANDĨKO MATHERU':verseLanguage==='sw'?'MISTARI YA BIBLIA':'BIBLE VERSES';
 const scriptureHtml=rows.length?'<section class="kikuyu-section bible-verses"><h2>'+scriptureHeading+'</h2>'+rows.map(v=>'<blockquote lang="'+verseLanguage+'">“'+v[0]+'”</blockquote><p><small><a href="'+v[2]+'" target="_blank" rel="noopener noreferrer">'+v[1]+' ↗</a></small></p>').join('')+'</section>':'';
 const panel=document.getElementById('kikuyuPage');
 panel.lang=lang;
 panel.innerHTML='<section class="page-hero kikuyu-hero"><p class="late-protocol">'+titleProtocol+'</p><p class="eyebrow">'+d[0]+'</p><div class="cross" aria-hidden="true">✝</div><h1 class="kikuyu-title-honour">'+d[1]+'</h1><p>'+d[2]+'</p><small>'+dateLine+'</small></section><main class="page-content kikuyu-content"><p class="lead">'+d[3]+'</p>'+scriptureHtml+d[4].map(s=>'<section class="kikuyu-section"><h2>'+s[0]+'</h2><p>'+s[1]+'</p></section>').join('')+'<div class="page-cta"><a class="button primary" href="eulogy.html">'+cta[0]+' →</a><a class="button outline" href="tributes.html">'+cta[1]+' →</a><a class="button outline" href="gallery.html">'+cta[2]+' →</a></div></main>';
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