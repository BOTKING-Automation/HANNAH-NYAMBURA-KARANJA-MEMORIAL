/* English / Gĩkũyũ switch for the Hannah Nyambura Karanja memorial.
   Gĩkũyũ copy is a respectful draft; ask a fluent family speaker to review it. */
(function(){
'use strict';
const pages={
'index.html':['KŨRIRIKANA NA WENDO','Hannah Nyambura Karanja (Wa Ruth)','Mũndũ wa bata ndangĩrĩrwo; wendo wake ũtũũraga ngoro-inĩ ciitũ.','Tũkũririkana Wa Ruth na wendo mũingĩ. Aarĩ nyanya wa bata, arĩ na ngoro ya nyina, agĩigua andũ, agĩheana hinya na agĩthaitha. Familia na arata othe marĩ na mĩrigo yao ya bata, na mĩrigo yothe nĩ ya gũtũũria ũtugi wake.',[['Ũtukũ wa wendo ndũgathire','Wendo wa Hannah nĩ ũrĩa ũtũheaga ũhooti na ũtũrutaga kũiguĩrĩra andũ.'],['Mĩrĩgo ya kũririkana','Rora ũhoro wake, mahoya na mbica cia maisha make.'],['Ũhoro wake ũtũũraga','Tũrĩ hamwe kũrũgamĩrĩra ũtugi wake na kũririkana ũrĩa atwendeete.']]],
'story.html':['ŨHORA WAKE · WĨTĨKIO · MŨRAGO','Ũhoro wa Hannah Nyambura Karanja','Wa Ruth aarĩ mũndũ wa bata mũno kwĩ andũ ake.','Wa Ruth aarĩ nyanya wa bata na mũndũ wa wendo kũrĩ familia yake na andũ a rũciaro. Nĩamenyekanire nĩ ũndũ wa gũthikĩrĩria, kũheana hinya, kuoya na gũtũma andũ maigue matigĩte o ene. O mũndũ arĩ na mĩrigo yake ya Wa Ruth; mĩrigo iyo yothe nĩĩtũũria ũtugi wake.',[['Mũndũ wa bata','Wa Ruth aarĩ mũndũ wa gũtũigua na gũtũhe ũhooti.'],['Wĩtĩkio wake','Nĩatũheire ũhoro wa kũmenya Ngai, kũhooya na gũikara na mwĩhoko.'],['Mĩtugo ĩtũũraga','Tũrĩkĩrĩrie wendo wake na tũtũũrie mĩtugo njega ĩrĩa atũrutĩte.']]],
'memories.html':['MĨRĨGO ĨTŨRĨRĨTIE','Mĩrĩgo na mũrago wake','Wendo ndũthiraga; ũtũũraga mĩhĩrĩga-inĩ ĩrĩa tũrutanaga.','Mũndũ tũmũririkana ti nĩ mĩaka na mĩthenya tu, no nĩ ũndũ wa wendo wake, mahoya tũririkanaga, ciugo cia hinya, na mĩrĩgo ĩrĩa tũngĩenda tũcookere rĩngĩ. Rĩrĩa tũmũrirĩra, tũririkana atĩ twendete na tũendete.',[['Mĩthiĩre ĩrĩa atũheire','Ririkana wendo wake, ũtugi, wĩtĩkio na ũrĩa aheaga andũ hinya.'],['Heana mũrĩgo','Andika mũrĩgo ũrĩa ũtigacooka ũkũrĩra kana ũhoro ũrĩa ũtigacooka ũkũrĩra.'],['Mũrago wake','Tũgũtũũria wendo wake na ũtugi kwa gũtũma andũ angĩ meciragie na gũtũma wega.']]],
'eulogy.html':['CIUGO CIA KŨRIRIKANA','Eulogy ya Hannah Nyambura Karanja','Wa Ruth, nĩtũgũkũririkana na wendo mũingĩ.','Ũmũthĩ ngoro ciitũ nĩciĩru nĩ ũndũ wa gũtirĩ na ithuĩ kwa mwĩrĩ, no tũcookeria Ngai ngaatho nĩ ũndũ wa ũtũũro wa Hannah. Aarĩ nyanya wendwo mũno, ũrĩa aarĩ na wendo, mahoya na wĩtĩkio. Nĩatũrutĩte kũrũgamĩrĩra Ngai na gũtũũria mwĩhoko. Nĩtũmũrirĩra, na wendo wake ũtũũraga thĩinĩ wa familia na andũ othe aendete.',[['Ngoro ĩrĩa yaiguaga','Wa Ruth nĩamenyaga gũtũigua na gũtũhe ciugo cia ũhooti.'],['Wĩtĩkio ũrĩa ahandĩte','Nĩatũrutĩte kũhooya, kũĩtĩkia Ngai na gũikara na mwĩhoko.'],['Mũrago wa wendo','Tũgũtũũria mĩtugo yake, tũrĩkĩrĩrie arĩa marĩ na ruo, na tũrute wendo.'],['Ngaatho, Wa Ruth','Nĩtũgũcookeria ngaatho nĩ ũndũ wa wendo, mahoya na ũhooti waku.']]],
'service.html':['KŨRIRIKANA, MAHOYA NA WENDO','Mũthenya wa kũruta Wa Ruth','Ũhoro wa kũrũgamĩrĩra maisha ma Hannah.','Tũrĩ na wendo na ngaatho tũkĩririkana Hannah Nyambura Karanja, Wa Ruth. Ũhoro wa mũthenya wa kũruta ũgũikwo haha rĩrĩa familia yathondekete na yathibitĩtie.',[['Ũhoro wa kũruta','Ũhoro wa mũthenya, ihinda na handũ ũgũikwo haha rĩrĩa familia yathibitĩtie.'],['Kũũka kana gũtũũra online','Arĩa matĩngĩhota gũũka no marore livestream rĩrĩa familia ĩgũtũma link ĩrĩa yathibitĩtie.'],['Ngaatho','Nĩtũcookeria ngaatho arĩa othe marĩ hamwe na familia na mahoya mao.']]],
'gallery.html':['MBICA CIA MAISHAA','Maisha marĩkĩrĩtwo na mbica','Mbica nĩ itũrĩrĩria mĩrĩgo ya wendo.','Mbica ĩmwe ĩngĩtũcokereria mũthenya mũnini. Nĩtũririkana ũthiũ wa Wa Ruth, andũ aendete, na mahinda marĩa tũngĩenda tũcookere. Rora mbica na wendo; maithori nayo nĩmaheirwo handũ.',[['Rora mĩrĩgo yake','Tũrĩ hamwe kũririkana ũrĩa aarĩ na ũrĩa atwendeete.'],['Tũheane mbica','Familia no ĩongerere mbica cia bata rĩrĩa ciathibitĩtwo.']]],
'prayers.html':['WĨTĨKIO · MAHOYA · MWĨHOKO','Wĩtĩkio, Maandĩko na Mahoya','Handũ ha gũcooka kũrĩ Ngai rĩrĩa ngoro ĩrĩ na ruo.','Hannah Nyambura Karanja, Wa Ruth, nĩatũrutire kũmenya Ngai na akĩhandĩra ngoro-inĩ ciitũ mbeu cia wĩtĩkio, mwĩhoko na hinya. Mahoya maitũ nĩmaheane handũ ha maithori na kĩeha. Rĩrĩa tũremwo nĩ ciugo, Ngai no aigue o ũtugi wa ngoro.',[['Rĩrĩa ngoro ĩrĩ na ruo','Tũcooke kũrĩ Ngai na tũmwĩre ũrĩa tũrĩigua. Tũheane hinya na andũ arĩa tũtĩĩkĩte.'],['Mwĩhoko','O na rĩrĩa tũrĩ na ruo, tũrĩ na mwĩhoko atĩ Ngai arĩ hamwe na ithuĩ.'],['Hoya ya familia','Ngai, he familia hinya, thayũ na ũhooti. Thondeka ngoro ciao na ũmĩhe andũ a gũtũiguĩra. Amen.'],['Kũtũũra na wĩtĩkio','Tũririkane Wa Ruth kwa gũtũũria wendo, mahoya na mĩtugo njega.']]],
'tributes.html':['CIUGO CIA WENDO','Ciugo cia kũririkana','Handũ ha kuuga ngaatho, wendo, mahoya na mĩrĩgo ya Wa Ruth.','Ndũgathondeke ciugo cia bata mũno nĩguo uandike tribute. Andika o ũrĩa ũrĩ ngoro-inĩ: ũrĩa ũmũrirĩra, ũrutani ũrĩa akũrutĩte, kana ciugo iria ũngĩenda ũmũreere rĩngĩ. Wa Ruth nĩatũũraga ngoro-inĩ cia arĩa amendete.',[['Andika ciugo ciaku','Andika rĩĩtwa rĩaku rĩrĩa ũkwenda na mũrĩgo ũrĩa ũrĩ ngoro-inĩ yaku.'],['Mĩhiano ya gũtandika','Mũrĩgo wakwa mũnene wa Wa Ruth nĩ…; nĩandutĩte…; hoya yakwa ya familia nĩ…'],['Kũheana ciugo','Ũngĩcopy, ũdownload kana ũheane ciugo ciaku na WhatsApp. Ciugo itingĩoneka public rĩngĩ; familia nĩĩthuthurie mbere ya gũcookerwo.']]],
'family.html':['FAMILIA · NGAATHO · KŨRIRIKANA','Familia na arĩa tũcookeria ngaatho','Tũcookeria ngaatho andũ othe arĩa marĩ hamwe na familia.','Rĩrĩa mũndũ ta Wa Ruth aathiĩ, kĩeha gĩkũhĩra ngoro nyingĩ. Tũkũririkana Hannah Nyambura Karanja na wendo mũingĩ, na tũcookeria ngaatho arĩa othe marĩ hamwe na familia na mahoya, ciugo cia hinya na ũtugi wao. Nĩũtũhe hinya tũgũtwarĩrane kĩeha gĩkĩ.',[['Kũrĩ familia','Tũrĩ na wendo na inyuĩ rĩrĩa mũkũrĩra Wa Ruth. Tũheane hinya na mahoya.'],['Ngaatho nĩ ũndũ wa ũtugi','Nĩtũcookeria ngaatho arĩa othe matũmĩire ciugo cia ũhooti, mahoya kana ũtugi.'],['Mũrago hamwe','Tũrĩkĩrĩrie mũrago wake kwa gũtũma wendo, wĩtĩkio na ũtugi wake ũtũũre.']]],
'editing-guide.html':['ŨRUTI WA WEBSITE','Ũruti wa gũcookereria website','Ũrĩa familia ĩngĩongerera mbica na ũhoro ũrĩa yathibitĩtie.','Website ĩno nĩ ya kũririkana Wa Ruth. Gũcookeria ũhoro, mbica kana ciugo, thondeka atĩ ũhoro nĩ wa ma na familia yathimĩte gũcookereria.',[['Mbica','Ongerera mbica cia familia iria ciathibitĩtwo mũfolder-inĩ ya public/images/.'],['Ũhoro wa funeral','Ongerera mũthenya, ihinda, handũ na livestream link rĩrĩa familia yathibitĩtie. Ndũgacookererie ũhoro ũtarĩ wa ma.'],['Wendo na ũhoro wa familia','Thikĩria ũrĩa andũ angĩ mendaga gũtũma ũhoro wao ũonekane. Thikĩria ũhoro wa andũ na mbica.']]]
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
 const titleProtocol=isSw?'MAREHEMU · KWA KUMBUKUMBU YA UPENDO':'THE LATE · IN LOVING MEMORY';
 const dateLine=isSw?'7 Oktoba 2026 · Tunamkumbuka kwa upendo':'7 October 2026 · Tũkũririkana na wendo';
 const cta=isSw?['Soma hotuba','Andika ujumbe','Tazama picha']:['Ũrĩke eulogy','Andika ciugo','Rora mbica'];
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
  const ki={index:'Mũciĩ',story:'Ũhoro wake',memories:'Mĩrĩgo',eulogy:'Eulogy',service:'Mũthenya wa kũruta',gallery:'Mbica',prayers:'Mahoya',tributes:'Ciugo',family:'Familia','editing-guide':'Ũruti'};
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