import { Language, Translation } from './types';

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    greeting_morning: 'Good morning', greeting_afternoon: 'Good afternoon', greeting_evening: 'Good evening',
    progress: 'Treatment progress', week_label: 'Week', of: 'of', fractions: 'fractions done',
    thisweek: 'This week', today_appt: "Today's appointments",
    lg_rt: 'Radiation', lg_ch: 'Chemo', lg_both: 'Both', lg_rest: 'Rest',
    appt_rt: 'Radiation therapy', appt_ch: 'Weekly chemotherapy',
    appt_rt_sub: 'Bring water · Wear loose cotton clothing · No metal accessories',
    appt_ch_sub: 'Drink 2–3 glasses of water before arriving · IV access will be placed · Expect 3–4 hrs',
    alert_title: 'Important reminder',
    alert_sub: 'If you have fever, discharge, or foul smell — call your doctor today.',
    howfeel: 'How are you feeling today?',
    sx: ['Mouth sores', 'Tiredness', 'Nausea', 'Skin reaction', 'Swallowing', 'Appetite loss'],
    gradeinfo: '0 = None · 1 = Mild · 2 = Moderate, affects daily life · 3+ = Severe — call your doctor today',
    motiv: '"Every session brings you one step closer to healing. You are stronger than you think."',
    motivby: "— Your Saathi, today's encouragement",
    tips_lbl: "Today's care tips",
    tips: [
      { t: 'Choose soft, moist foods — idli, soft kanji, banana, curd rice. Avoid spicy and very hot foods that can irritate your mouth.', g: 'Easy to swallow' },
      { t: 'Aim for 9–13 cups (2–3 litres) of fluids daily — water, tender coconut water, buttermilk, or soups. Hydration reduces nausea and fatigue.', g: 'Hydration' },
      { t: 'Include protein at every meal — dal, eggs, paneer, or curd. Protein helps your body repair tissue between sessions.', g: 'Tissue repair' },
      { t: 'Use a soft toothbrush. Rinse with salt + baking soda solution after every meal. Wash treated skin gently with plain water.', g: 'Mouth & skin care' },
      { t: 'A short gentle walk each day helps manage fatigue and improve appetite. Rest when you need to — listen to your body.', g: 'Activity' }
    ],
    library: 'Care library',
    le: ["Do's & Don'ts", "Why nutrition matters", "Hydration guide", "Taste changes", "Supplements", "Food safety"],
    silverline: "Content prepared by SilverLine Hospital\nAlways consult your care team for personal advice",
    setup_title: 'My treatment setup', setup_sub: 'Enter your details once — Saathi will personalise your schedule.',
    lbl_name: 'Your name', lbl_totalfx: 'Total radiation fractions (e.g. 30)', lbl_donefx: 'Fractions completed so far',
    lbl_site: 'Treatment site', lbl_chemoday: 'Weekly chemo day', lbl_hospital: 'Hospital name',
    lbl_rttime: 'Radiation appointment time', lbl_chtime: 'Chemo appointment time',
    btn_save: 'Save & continue', privacy: 'Your information stays only on your phone. Nothing is sent to any server.',
    day_names: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    nav: ['Schedule', 'Symptoms', 'Daily tips', 'Learn', 'My info'],
    no_chemo: 'No chemo',
    week_days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  },
  ta: {
    greeting_morning: 'காலை வணக்கம்', greeting_afternoon: 'மதிய வணக்கம்', greeting_evening: 'மாலை வணக்கம்',
    progress: 'சிகிச்சை முன்னேற்றம்', week_label: 'வாரம்', of: 'இல்', fractions: 'பகுதிகள் முடிந்தன',
    thisweek: 'இந்த வாரம்', today_appt: 'இன்றைய சந்திப்புகள்',
    lg_rt: 'கதிர்வீச்சு', lg_ch: 'கீமோ', lg_both: 'இரண்டும்', lg_rest: 'ஓய்வு',
    appt_rt: 'கதிர்வீச்சு சிகிச்சை', appt_ch: 'வாராந்திர கீமோதெரபி',
    appt_rt_sub: 'தண்ணீர் கொண்டு வாருங்கள் · தளர்வான பருத்தி ஆடை அணியுங்கள் · உலோக நகைகள் வேண்டாம்',
    appt_ch_sub: 'வருவதற்கு முன் 2–3 கிளாஸ் தண்ணீர் குடிக்கவும் · 3–4 மணி நேரம் எதிர்பாருங்கள்',
    alert_title: 'முக்கியமான நினைவூட்டல்',
    alert_sub: 'காய்ச்சல், வழக்கத்திற்கு மாறான சுரப்பு அல்லது துர்நாற்றம் இருந்தால் — இன்றே மருத்துவரை அழையுங்கள்.',
    howfeel: 'இன்று நீங்கள் எப்படி உணர்கிறீர்கள்?',
    sx: ['வாய் புண்கள்', 'களைப்பு', 'குமட்டல்', 'தோல் எரிச்சல்', 'விழுங்குவதில் சிரமம்', 'பசியின்மை'],
    gradeinfo: '0 = இல்லை · 1 = மிதமான · 2 = நடுத்தரம், அன்றாட வாழ்க்கையை பாதிக்கிறது · 3+ = கடுமையான — இன்றே மருத்துவரை அழையுங்கள்',
    motiv: '"ஒவ்வொரு சிகிச்சையும் குணமடைவதற்கான ஒரு அடி. நீங்கள் நினைப்பதை விட வலிமையானவர்."',
    motivby: "— உங்கள் சாத்தி, இன்றைய ஊக்கம்",
    tips_lbl: 'இன்றைய பராமரிப்பு குறிப்புகள்',
    tips: [
      { t: 'மென்மையான உணவுகளை தேர்வு செய்யுங்கள் — இட்லி, கஞ்சி, வாழைப்பழம். காரமான உணவுகளை தவிர்க்கவும்.', g: 'விழுங்க எளிதானது' },
      { t: 'தினமும் 2–3 லிட்டர் தண்ணீர், இளநீர் அல்லது மோர் குடிக்கவும். நீரேற்றம் குமட்டல் மற்றும் களைப்பை குறைக்கும்.', g: 'நீரேற்றம்' },
      { t: 'ஒவ்வொரு உணவிலும் பருப்பு, முட்டை அல்லது பனீர் சேர்க்கவும். புரதம் திசுக்களை சரிசெய்ய உதவும்.', g: 'திசு சரிசெய்தல்' },
      { t: 'மென்மையான பல் தூரிகை பயன்படுத்தவும். உப்பு + பேக்கிங் சோடா கொப்பளிக்கவும்.', g: 'வாய் மற்றும் தோல் பராமரிப்பு' },
      { t: 'தினமும் கொஞ்சம் நடைப்பயிற்சி செய்யுங்கள். உடல் சொல்வதை கேளுங்கள் — ஓய்வு தேவைப்படும்போது எடுங்கள்.', g: 'உடல் இயக்கம்' }
    ],
    library: 'கவலை நூலகம்',
    le: ['செய்யவேண்டியவை & செய்யக்கூடாதவை', 'ஊட்டச்சத்து ஏன் முக்கியம்', 'நீரேற்ற வழிகாட்டி', 'சுவை மாற்றங்கள்', 'சத்து மாத்திரைகள்', 'உணவு பாதுகாப்பு'],
    silverline: "உள்ளடக்கம் SilverLine மருத்துவமனையால் தயாரிக்கப்பட்டது\nதனிப்பட்ட ஆலோசனைக்கு உங்கள் மருத்துவரை அணுகவும்",
    setup_title: 'என் சிகிச்சை அமைப்பு', setup_sub: 'ஒருமுறை உங்கள் விவரங்களை உள்ளிடுங்கள் — சாத்தி உங்கள் அட்டவணையை தனிப்பயனாக்கும்.',
    lbl_name: 'உங்கள் பெயர்', lbl_totalfx: 'மொத்த கதிர்வீச்சு பகுதிகள் (எ.கா. 30)', lbl_donefx: 'இதுவரை முடிந்த பகுதிகள்',
    lbl_site: 'சிகிச்சை இடம்', lbl_chemoday: 'வாராந்திர கீமோ நாள்', lbl_hospital: 'மருத்துவமனை பெயர்',
    lbl_rttime: 'கதிர்வீச்சு சந்திப்பு நேரம்', lbl_chtime: 'கீமோ சந்திப்பு நேரம்',
    btn_save: 'சேமி மற்றும் தொடர்', privacy: 'உங்கள் தகவல் உங்கள் தொலைபேசியில் மட்டுமே இருக்கும். எந்த சேவையகத்திற்கும் அனுப்பப்படவில்லை.',
    day_names: ['திங்', 'செவ்', 'புத', 'வியா', 'வெள்', 'சனி', 'ஞாயி'],
    nav: ['அட்டவணை', 'அறிகுறிகள்', 'தினசரி குறிப்புகள்', 'கற்றுக்கொள்', 'என் தகவல்'],
    no_chemo: 'கீமோ இல்லை',
    week_days: ['திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி']
  },
  hi: {
    greeting_morning: 'सुप्रभात', greeting_afternoon: 'नमस्कार', greeting_evening: 'शुभ संध्या',
    progress: 'उपचार प्रगति', week_label: 'सप्ताह', of: 'में से', fractions: 'अंश पूर्ण',
    thisweek: 'इस सप्ताह', today_appt: 'आज की अपॉइंटमेंट',
    lg_rt: 'विकिरण', lg_ch: 'कीमो', lg_both: 'दोनों', lg_rest: 'आराम',
    appt_rt: 'विकिरण चिकित्सा', appt_ch: 'साप्ताहिक कीमोथेरेपी',
    appt_rt_sub: 'पानी लाएं · ढीले सूती कपड़े पहनें · धातु आभूषण न पहनें',
    appt_ch_sub: 'आने से पहले 2–3 गिलास पानी पिएं · 3–4 घंटे का समय रखें',
    alert_title: 'महत्वपूर्ण याद दिलाना',
    alert_sub: 'यदि बुखार, असामान्य स्राव, या दुर्गंध हो — आज ही डॉक्टर को बुलाएं।',
    howfeel: 'आज आप कैसा महसूस कर रहे हैं?',
    sx: ['मुंह के छाले', 'थकान', 'जी मचलाना', 'त्वचा जलन', 'निगलने में कठिनाई', 'भूख न लगना'],
    gradeinfo: '0 = कोई नहीं · 1 = हल्का · 2 = मध्यम, दैनिक जीवन प्रभावित · 3+ = गंभीर — आज ही डॉक्टर को बुलाएं',
    motiv: '"हर सत्र ठीक होने की दिशा में एक कदम है। आप जितना सोचते हैं उससे कहीं अधिक मजबूत हैं। श्रेष्ठता के पथ पर आपका साथी।"',
    motivby: "— आपका साथी, आज की प्रेरणा",
    tips_lbl: 'आज की देखभाल सुझाव',
    tips: [
      { t: 'मुलायम खाना चुनें — इडली, खिचड़ी, केला, दही चावल। तीखे और बहुत गर्म खाने से बचें।', g: 'निगलने में आसान' },
      { t: 'रोज 2–3 लीटर पानी, नारियल पानी, छाछ या सूप पिएं। हाइड्रेशन से जी मचलाना और थकान कम होती है।', g: 'जलयोजन' },
      { t: 'हर भोजन में प्रोटीन लें — दाल, अंडे, पनीर या दही। प्रोटीन ऊतकों की मरम्मत में मदद करता है।', g: 'ऊतक मरम्मत' },
      { t: 'मुलायम टूथब्रश इस्तेमाल करें। नमक + बेकिंग सोडा से कुल्ला करें। इलाज की गई त्वचा को सादे पानी से धीरे धोएं।', g: 'मुंह और त्वचा की देखभाल' },
      { t: 'हर दिन हल्की सैर करें। जब थकान हो तो आराम करें — शरीर की सुनें।', g: 'गतिविधि' }
    ],
    library: 'देखभाल पुस्तकालय',
    le: ['क्या करें और क्या न करें', 'पोषण क्यों जरूरी है', 'हाइड्रेशन गाइड', 'स्वाद में बदलाव', 'सप्लीमेंट्स', 'भोजन सुरक्षा'],
    silverline: "सामग्री SilverLine अस्पताल द्वारा तैयार की गई\nव्यक्तिगत सलाह के लिए अपनी देखभाल टीम से बात करें",
    setup_title: 'मेरी उपचार जानकारी', setup_sub: 'एक बार अपनी जानकारी दर्ज करें — साथी आपका शेड्यूल व्यक्तिगत बनाएगा।',
    lbl_name: 'आपका नाम', lbl_totalfx: 'कुल विकिरण अंश (जैसे 30)', lbl_donefx: 'अब तक पूर्ण अंश',
    lbl_site: 'उपचार स्थल', lbl_chemoday: 'साप्ताहिक कीमो का दिन', lbl_hospital: 'अस्पताल का नाम',
    lbl_rttime: 'विकिरण अपॉइंटमेंट समय', lbl_chtime: 'कीमो अपॉइंटमेंट समय',
    btn_save: 'सहेजें और जारी रखें', privacy: 'आपकी जानकारी केवल आपके फोन पर रहती है। किसी सर्वर पर नहीं भेजी जाती।',
    day_names: ['सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि', 'रवि'],
    nav: ['अनुसूची', 'लक्षण', 'दैनिक सुझाव', 'सीखें', 'मेरी जानकारी'],
    no_chemo: 'कोई कीमो नहीं',
    week_days: ['सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार']
  }
};

export const DETAILS: Record<string, string> = {
  dodont: `
    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-teal-50 p-4 rounded-xl border border-teal-100">
          <h4 class="font-bold text-teal-900 mb-2">✓ Do</h4>
          <ul class="text-xs text-teal-800 space-y-2">
            <li>• Use a soft toothbrush</li>
            <li>• Salt + baking soda mouth rinse</li>
            <li>• Wash treated area gently with plain water or mild soap</li>
            <li>• Light walking daily</li>
            <li>• Water, coconut water, buttermilk</li>
          </ul>
        </div>
        <div class="bg-red-50 p-4 rounded-xl border border-red-100">
          <h4 class="font-bold text-red-900 mb-2">✗ Don't</h4>
          <ul class="text-xs text-red-800 space-y-2">
            <li>• Smoking</li>
            <li>• Alcohol</li>
            <li>• Heating pads on treated area</li>
            <li>• Ignore fever, discharge, or foul smell</li>
            <li>• Force spicy, fried, or acidic foods</li>
          </ul>
        </div>
      </div>
    </div>`,
  nutrition: `
    <div class="space-y-4">
      <div class="bg-blue-50 p-4 rounded-xl">
        <h4 class="font-bold text-blue-900 mb-2">Eating well helps your body:</h4>
        <ul class="text-xs text-blue-800 space-y-2">
          <li>• Heal faster between sessions</li>
          <li>• Maintain energy and strength</li>
          <li>• Prevent unwanted weight loss</li>
          <li>• Reduce treatment side effects</li>
          <li>• Support your immune system</li>
        </ul>
      </div>
      <div class="bg-blue-50 p-4 rounded-xl">
        <h4 class="font-bold text-blue-900 mb-2">Practical eating advice:</h4>
        <ul class="text-xs text-blue-800 space-y-2">
          <li>• Eat 5–6 small meals per day</li>
          <li>• Choose calorie-dense foods when possible</li>
          <li>• Keep snacks with you at all times</li>
          <li>• Eating every few hours helps maintain energy</li>
        </ul>
      </div>
      <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-800">
        Foods you usually enjoy may not taste the same during treatment. This is normal and usually improves after treatment ends.
      </div>
    </div>`,
  hydration: `
    <div class="space-y-4">
      <div class="bg-teal-50 p-4 rounded-xl border border-teal-200 text-teal-900 font-bold text-center">
        🎯 Aim for 9–13 cups (2–3 litres) of fluids every day
      </div>
      <div class="bg-blue-50 p-4 rounded-xl">
        <h4 class="font-bold text-blue-900 mb-2">Good hydration helps with:</h4>
        <ul class="text-xs text-blue-800 space-y-2">
          <li>• Less nausea and fatigue</li>
          <li>• Fewer bowel problems</li>
          <li>• Reduced dry mouth</li>
          <li>• Better overall comfort during treatment</li>
        </ul>
      </div>
      <div class="bg-blue-50 p-4 rounded-xl">
        <h4 class="font-bold text-blue-900 mb-2">Best fluids to drink:</h4>
        <ul class="text-xs text-blue-800 space-y-2">
          <li>• Plain water — always keep a bottle with you</li>
          <li>• Tender coconut water — excellent hydration</li>
          <li>• Buttermilk / chaas / moru</li>
          <li>• Clear soups and broths</li>
          <li>• Fresh fruit juices (not citrus if mouth sores)</li>
        </ul>
      </div>
    </div>`,
    taste: `
    <div class="space-y-4">
      <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-800 italic">
        Food may taste bland, metallic, or different — this is very common and you are not alone.
      </div>
      <div class="bg-blue-50 p-4 rounded-xl">
        <h4 class="font-bold text-blue-900 mb-2">What helps with taste changes:</h4>
        <ul class="text-xs text-blue-800 space-y-2">
          <li>• Try citrus fruits, lemon drops, or mints to freshen taste</li>
          <li>• Rinse mouth with baking soda solution before meals</li>
          <li>• Cold or frozen foods may taste better than hot foods</li>
          <li>• Brush teeth regularly to keep mouth fresh</li>
          <li>• Use plastic utensils if metal taste is a problem</li>
        </ul>
      </div>
    </div>`,
    supplements: `
    <div class="space-y-4">
      <div class="bg-red-50 p-4 rounded-xl border border-red-200 text-sm text-red-900 font-bold">
        ⚠️ Only take supplements if specifically approved by your doctor.
      </div>
      <div class="bg-blue-50 p-4 rounded-xl">
        <h4 class="font-bold text-blue-900 mb-2">May be recommended by your doctor:</h4>
        <ul class="text-xs text-blue-800 space-y-2">
          <li>• Probiotics — help gut health during treatment</li>
          <li>• Vitamin D3 — if deficient</li>
          <li>• Multivitamins — as directed</li>
          <li>• Protein supplements — if oral intake is low</li>
        </ul>
      </div>
    </div>`,
    foodsafety: `
    <div class="space-y-4">
      <div class="bg-blue-50 p-4 rounded-xl">
        <h4 class="font-bold text-blue-900 mb-2">Always do this:</h4>
        <ul class="text-xs text-blue-800 space-y-2">
          <li>• Wash hands thoroughly before eating</li>
          <li>• Avoid damaged, bruised, or spoiled fruits</li>
          <li>• Cook all foods completely — no raw meat or eggs</li>
          <li>• Avoid street food or food kept out for long periods</li>
          <li>• Keep cooked food refrigerated and eat fresh</li>
        </ul>
      </div>
    </div>`
};
