import { Guest, Translation, Language } from './types';

/**
 * ============================================================================
 * ADMIN SECTION - GUEST LIST
 * ============================================================================
 *
 * HOW TO ADD GUESTS:
 * 1. Copy a line below
 * 2. Change the name, code, group, and gender
 * 3. Share link: https://your-site.com/?guest=CODE
 *
 * GROUPS:
 * - Group "A" = Ceremony + Reception (12:30 - 18:00)
 *   Schedule: Ceremony → Catering → First Dance → Party
 *
 * - Group "B" = Reception Only (15:00 - 18:00)
 *   Schedule: First Dance → Party → Snack → Crazy Hour
 *
 * GENDER (for proper Spanish/French grammar):
 * - "f" = Female (Querida / Chère)
 * - "m" = Male (Querido / Cher)
 * - "p" = Plural/Couple (Queridos / Chers)
 *
 * CODE RULES:
 * - Use lowercase letters only
 * - Use hyphens instead of spaces (e.g., "john-sarah")
 * - Make it unique for each guest
 * - Keep it simple and memorable
 *
 * EXAMPLES:
 * { name: "María García", code: "maria", group: "A", gender: "f" },
 * { name: "Pedro López", code: "pedro", group: "B", gender: "m" },
 * { name: "Ana & Carlos", code: "ana-carlos", group: "A", gender: "p" },
 *
 * See QUICK_START.md for detailed instructions
 * ============================================================================
 */

export const GUESTS: Guest[] = [
  // ========== GROUP A - Ceremony + Reception ==========
  { name: "Viviana Jaramillo & Gonzalo Meza", code: "viviana-gonzalo-meza", group: "A", gender: "p" },
  { name: "Gonzalo Meza Jaramillo", code: "gonzalo-meza-jaramillo", group: "A", gender: "m" },
  { name: "Mateo Meza", code: "mateo-meza", group: "A", gender: "m" },
  { name: "Elisa Jarrin", code: "elisa-jarrin", group: "A", gender: "f" },
  { name: "Jenny Paredes & Gonzalo Meza", code: "jenny-gonzalo-meza", group: "A", gender: "p" },
  { name: "Andrea Meza & Jorge Luis Parra", code: "andrea-jorge-parra", group: "A", gender: "p" },
  { name: "Lucia Ochoa & Eduardo Oviedo", code: "lucia-eduardo", group: "A", gender: "p" },
  { name: "Daniel Jaramillo & Sol Rubio", code: "daniel-sol", group: "A", gender: "p" },
  { name: "Daniela Jaramillo", code: "daniela-jaramillo", group: "A", gender: "f" },
  { name: "Essia Bougdar & Anouar El Abed", code: "essia-anouar", group: "A", gender: "p" },
  { name: "Nesrine El Abed & Ilyes Negra", code: "nesrine-ilyes", group: "A", gender: "p" },
  { name: "Cecilia Utreras", code: "cecilia-utreras", group: "A", gender: "f" },
  { name: "Yolanda Hernandez", code: "yolanda-hernandez", group: "A", gender: "f" },
  { name: "Daniela Olmedo", code: "daniela-olmedo", group: "A", gender: "f" },
  { name: "Natalia Paredes", code: "natalia-paredes", group: "A", gender: "f" },
  { name: "Anton Dünnerbier", code: "anton-dunnerbier", group: "A", gender: "m" },
  { name: "Christian Parra", code: "christian-parra", group: "A", gender: "m" },
  { name: "Franchesca Parra", code: "franchesca-parra", group: "A", gender: "f" },
  { name: "María Laura Ochoa", code: "maria-laura-ochoa", group: "A", gender: "f" },
  { name: "Paula Martínez", code: "paula-martinez", group: "A", gender: "f" },

  // ========== GROUP B - Reception Only ==========
  { name: "María Laura Cueva", code: "maria-laura-cueva", group: "B", gender: "f" },
  { name: "Sofía Manosalvas", code: "sofia-manosalvas", group: "B", gender: "f" },
  { name: "María Beatriz Cueva & Jorge Cueva", code: "maria-beatriz-jorge-cueva", group: "B", gender: "p" },
  { name: "Nicolás Abumohor & María José Vinueza", code: "nicolas-maria-jose", group: "B", gender: "p" },
  { name: "Estefanía Abumohor & Julio Álvarez", code: "estefania-julio", group: "B", gender: "p" },
  { name: "Beatriz Ochoa & Cristian Abumohor", code: "beatriz-cristian-abumohor", group: "B", gender: "p" },
  { name: "Valentina Contreras & Matías Estrada", code: "valentina-matias", group: "B", gender: "p" },
  { name: "Francisca Bravo", code: "francisca-bravo", group: "B", gender: "f" },
  { name: "Andrea Thiel & Fernando Bravo", code: "andrea-fernando-bravo", group: "B", gender: "p" },
  { name: "Merce Cardenas, Carlos Olmedo & Rafa Guillén", code: "merce-carlos-rafa", group: "B", gender: "p" },
  { name: "Ariana Salazar", code: "ariana-salazar", group: "B", gender: "f" },
  { name: "Alexa Celi", code: "alexa-celi", group: "B", gender: "f" },
  { name: "Jesús López & Mayra", code: "jesus-mayra", group: "B", gender: "p" },
  { name: "Marco Quilumba & Señora", code: "marco-quilumba", group: "B", gender: "p" },
  { name: "Cristina Vela", code: "cristina-vela", group: "B", gender: "f" },
  { name: "Sebastián Díaz", code: "sebastian-diaz", group: "B", gender: "m" },
  { name: "Hugo Tamayo & Ana López", code: "hugo-ana-lopez", group: "B", gender: "p" },
  { name: "María Agusta Olmedo & Christian Gavilanes", code: "maria-agusta-christian", group: "B", gender: "p" },
  { name: "Jonathan Reyes & Daniela Fontana", code: "jonathan-daniela", group: "B", gender: "p" },
  { name: "Emilia Carrión", code: "emilia-carrion", group: "B", gender: "f" },
  { name: "Alegría Aguirre", code: "alegria-aguirre", group: "B", gender: "f" },
  { name: "Kevin Montero & Veronica Caraguay", code: "kevin-veronica", group: "B", gender: "p" },
  { name: "Jenny Baca & esposo", code: "jenny-baca", group: "B", gender: "p" },
  { name: "Gabriela Valarezo & Andrés Guerrero", code: "gabriela-andres", group: "B", gender: "p" },
  { name: "Daniela Gonzalez & Martin Salerni", code: "daniela-martin", group: "B", gender: "p" },
  { name: "Cynthia Ordóñez", code: "cynthia-ordonez", group: "B", gender: "f" },
  { name: "Cristian Gudiño & Gabriela", code: "cristian-gabriela-gudino", group: "B", gender: "p" },
  { name: "Jaime González & Nena Loayza", code: "jaime-nena", group: "B", gender: "p" },
  { name: "Ivan Aguirre & Micaela Montalvo", code: "ivan-micaela", group: "B", gender: "p" },
  { name: "Camila Chávez", code: "camila-chavez", group: "B", gender: "f" },
  { name: "Alma Löfgren", code: "alma-lofgren", group: "B", gender: "f" },
  { name: "Yoandra García & Duniel Camejo", code: "yoandra-duniel", group: "B", gender: "p" },
  { name: "Andrea López & Juan Ignacio Gallego", code: "andrea-juan-ignacio", group: "B", gender: "p" },
  { name: "Juliana Naranjo", code: "juliana-naranjo", group: "B", gender: "f" },
  { name: "Cristian Cruz", code: "cristian-cruz", group: "B", gender: "m" },
  { name: "Carlos Tello & Daniela Yokens", code: "carlos-daniela-yokens", group: "B", gender: "p" },
  { name: "Claudia Lasso", code: "claudia-lasso", group: "B", gender: "f" },
  { name: "Cristian Lasprilla & Faby García", code: "cristian-faby", group: "B", gender: "p" },
  { name: "Alejandra Romero & Esposo", code: "alejandra-romero", group: "B", gender: "p" },
  { name: "Ariel Lasprilla", code: "ariel-lasprilla", group: "B", gender: "f" },
  { name: "Carlos Mosquera & Esposa", code: "carlos-mosquera", group: "B", gender: "p" },
  { name: "Christian Ruales & Malena Malo", code: "christian-malena", group: "B", gender: "p" },
  { name: "Pedro Klaic", code: "pedro-klaic", group: "B", gender: "m" },
  { name: "Fernando Romero & Gabriela Herrera", code: "fernando-gabriela-herrera", group: "B", gender: "p" },
  { name: "Edwin Yepez & Karen Sandoval", code: "edwin-karen", group: "B", gender: "p" },
  { name: "Sonia Meza", code: "sonia-meza", group: "B", gender: "f" },
  { name: "Ruth Meza", code: "ruth-meza", group: "B", gender: "f" },
  { name: "Sandra Meza & Rodrigo Serna", code: "sandra-rodrigo", group: "B", gender: "p" },
  { name: "René Meza & Señora", code: "rene-meza", group: "B", gender: "p" },
  { name: "Manolo Meza & María Elena", code: "manolo-maria-elena", group: "B", gender: "p" },
  { name: "Ralf Jaramillo & María Paz Bravo", code: "ralf-maria-paz", group: "B", gender: "p" },
  { name: "Marcelo & Paola Hidalgo", code: "marcelo-paola", group: "B", gender: "p" },
  { name: "Alex Zabala & Lenin Martínez", code: "alex-lenin", group: "B", gender: "p" },
  { name: "Ana Rosa Dávalos & Freddy López", code: "ana-rosa-freddy", group: "B", gender: "p" },
  { name: "Daniela López", code: "daniela-lopez", group: "B", gender: "f" },
  { name: "Ana María López", code: "ana-maria-lopez", group: "B", gender: "f" },
  { name: "Fernanda Carvajal & esposo", code: "fernanda-carvajal", group: "B", gender: "p" },
  { name: "Javier Dávila & Claudia González", code: "javier-claudia", group: "B", gender: "p" },
  { name: "Alexander Chala", code: "alexander-chala", group: "B", gender: "m" },
  { name: "Diego Bedon & Señora", code: "diego-bedon", group: "B", gender: "p" },
  { name: "Karina Harbst", code: "karina-harbst", group: "B", gender: "f" },
  { name: "Juan Oviedo", code: "juan-oviedo", group: "B", gender: "m" },
  { name: "Mary Fürer", code: "mary-furer", group: "B", gender: "f" },
  { name: "Hassan Zeroual & his wife", code: "hassan-zeroual", group: "B", gender: "p" },
  { name: "Patrick Wagner", code: "patrick-wagner", group: "B", gender: "m" },
  { name: "Margulan Otanuly", code: "margulan-otanuly", group: "B", gender: "m" },
  { name: "Mohamed & Amina", code: "mohamed-amina", group: "B", gender: "p" },
  { name: "Michelle Oviedo", code: "michelle-oviedo", group: "B", gender: "f" },
  { name: "Misheel", code: "misheel", group: "B", gender: "f" },
  { name: "Gustavo Egüez & Gabriela Carrión", code: "gustavo-gabriela-carrion", group: "B", gender: "p" },
  { name: "Lía Galarza", code: "lia-galarza", group: "B", gender: "f" },
  { name: "Gabriela Bedoya", code: "gabriela-bedoya", group: "B", gender: "f" },
  { name: "Julio Palacios", code: "julio-palacios", group: "B", gender: "m" },
  { name: "François Abumohor", code: "francois-abumohor", group: "B", gender: "m" },
  { name: "Sisa Cueva", code: "sisa-cueva", group: "B", gender: "f" },
  { name: "Sara Cueva", code: "sara-cueva", group: "B", gender: "f" },
  { name: "Marianela Chávez", code: "marianela", group: "B", gender: "f" },
  { name: "Pao Guillén & Antonio Cobos", code: "pao-antonio", group: "B", gender: "p" },
  { name: "David Cobos", code: "david-cobos", group: "B", gender: "m" },
  { name: "Andrea Lasso & Julio Díaz", code: "andrea-julio", group: "B", gender: "p" },
  { name: "Martín Burbano", code: "martin-burbano", group: "B", gender: "m" },
  { name: "Diana Harrington & Francisco Salazar", code: "diana-francisco", group: "B", gender: "p" },
  { name: "Pau Abumohor", code: "pau-abumohor", group: "B", gender: "f" },
];

// Helper function to get gendered greeting
export const getGreeting = (lang: Language, gender: 'f' | 'm' | 'p' | undefined): string => {
  if (lang === 'ml') {
    return 'പ്രിയ'; // Malayalam "Dear" doesn't change by gender
  }
  return 'Dear'; // English doesn't change
};

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    letter: {
      dear: "Dear",
      message: "With great joy in our hearts and the blessings of our families, we invite you to be part of our special celebration as we begin our journey together as one.",
      open: "Open Invitation"
    },
    hero: {
      countdown: "Counting down to our big day",
      date: "September 13, 2026 • Nilambur, Kerala",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      readMore: "Read more"
    },
    story: {
      title: "Our Story",
      content: "Arunima and Nithin's love story is a beautiful testament to the bonds that bring two hearts together. Woven with warmth, understanding, and unwavering support, their relationship has blossomed into a lifelong commitment.\n\nWith the blessings of both their families and the love of those around them, they now take this joyous step into a beautiful new chapter of their lives together.\n\nWe are delighted to invite you to be part of this special celebration as Arunima and Nithin begin their journey as bride and groom on September 13, 2026, in Nilambur, Kerala."
    },
    program: {
      title: "Wedding Programme",
      ceremony: "Muhurtham",
      catering: "Sadya",
      firstDance: "Reception",
      party: "Dinner & Celebrations",
      snack: "Snacks",
      crazyHour: "Grand Finale",
      receptionNote: "Reception: September 14 at KS Convention Centre, Nilambur"
    },
    place: {
      title: "Venues",
      address: "Eden Convention Center, Adyanpara Road, Akampadam, Nilambur, Kerala 679329",
      viewMap: "View on Map",
      title2: "Reception Venue",
      address2: "KS Convention Centre, Pulikkalody, Mampad–Wandoor Road, Nilambur, Kerala 679329",
      viewMap2: "View on Map"
    },
    dressCode: {
      title: "Dress Code",
      description: "Traditional or Formal Attire. Ladies are warmly encouraged to wear sarees, churidar, or elegant formal wear. Gentlemen are welcome in traditional mundu-shirt or a formal suit.",
      note: "White is reserved for the bride. Please avoid wearing white."
    },
    gift: {
      title: "Contact Us",
      message: "For RSVP and enquiries, feel free to reach out to us.",
      copy: "Copy",
      copied: "Copied!"
    },
    rsvp: {
      title: "We appreciate your confirmation",
      name: "Your Name",
      attendance: "Will you attend?",
      attending: "Yes, I'll be there",
      notAttending: "Regretfully, I won't be able to attend",
      guests: "Number of Guests",
      dietary: "Dietary Restrictions",
      dietaryPlaceholder: "If you have any allergies or dietary restrictions, please let us know here",
      submit: "Send Response",
      thankYou: "Thank you for your response!",
      thankYouPlural: "Thank you for your response!",
      thankYouPersonal: "Thank you, {name}!",
      addToCalendar: "Add to Calendar"
    },
    faq: {
      title: "Details & FAQ",
      questions: [
        { q: "Are children invited?", a: "Yes, children are warmly welcome to join us in the celebration. We kindly request that they be supervised by their parents throughout the event." },
        { q: "Can I bring someone else?", a: "Due to venue capacity, we can only accommodate guests formally named on your invitation. Please contact us if you have any questions." },
        { q: "What is the dress code?", a: "Traditional or formal Indian attire is preferred. Ladies may wear sarees, churidar, or elegant formal wear. Gentlemen are welcome in traditional mundu-shirt or a formal suit." },
        { q: "Is there parking?", a: "Yes, parking is available at both venues. Please allow extra time as the venues may be busy during the celebrations." }
      ]
    }
  },
  ml: {
    letter: {
      dear: "പ്രിയ",
      message: "ഞങ്ങളുടെ ജീവിതയാത്ര ഒന്നിച്ച് ആരംഭിക്കുന്ന ഈ പ്രത്യേക ആഘോഷത്തിൽ പങ്കാളികളാകാൻ കുടുംബത്തിന്റെ അനുഗ്രഹത്തോടും ഹൃദയത്തിലെ സന്തോഷത്തോടും ഒപ്പം നിങ്ങളെ ക്ഷണിക്കുന്നു.",
      open: "ക്ഷണം തുറക്കുക"
    },
    hero: {
      countdown: "ഞങ്ങളുടെ മഹത്തായ ദിനത്തിലേക്കുള്ള കണക്കെടുപ്പ്",
      date: "സെപ്റ്റംബർ 13, 2026 • നിലമ്പൂർ, കേരളം",
      days: "ദിവസങ്ങൾ",
      hours: "മണിക്കൂർ",
      minutes: "മിനിറ്റ്",
      seconds: "സെക്കൻഡ്",
      readMore: "കൂടുതൽ വായിക്കുക"
    },
    story: {
      title: "ഞങ്ങളുടെ കഥ",
      content: "അരുണിമയുടെയും നിതിന്റെയും പ്രണയകഥ രണ്ടു ഹൃദയങ്ങളെ ഒന്നിപ്പിക്കുന്ന ഒരു മനോഹരമായ ബന്ധത്തിന്റെ സാക്ഷ്യമാണ്. ഊഷ്മളതയും മനസ്സിലാക്കലും അചഞ്ചലമായ പിന്തുണയും കൊണ്ട് നെയ്‌ത, അവരുടെ ബന്ധം ജീവിതകാല പ്രതിബദ്ധതയായി പരിണമിച്ചു.\n\nകുടുംബങ്ങളുടെ അനുഗ്രഹത്തോടെയും പ്രിയപ്പെട്ടവരുടെ സ്നേഹത്തോടെയും, അവർ ഇപ്പോൾ ജീവിതത്തിന്റെ ഒരു പുതിയ, മനോഹരമായ അദ്ധ്യായത്തിലേക്ക് ആഹ്ലാദകരമായ ഈ ചുവടുവെക്കുന്നു.\n\n2026 സെപ്റ്റംബർ 13-ന്, കേരളത്തിലെ നിലമ്പൂരിൽ, വധുവും വരനും ആയി ഒരുമിച്ചുള്ള അവരുടെ യാത്ര ആരംഭിക്കുമ്പോൾ ആ ആഘോഷത്തിന്റെ ഭാഗമാകാൻ നിങ്ങളെ ക്ഷണിക്കുന്നു."
    },
    program: {
      title: "വിവാഹ പരിപാടി",
      ceremony: "മുഹൂർത്തം",
      catering: "സദ്യ",
      firstDance: "റിസെപ്ഷൻ",
      party: "അത്താഴവും ആഘോഷവും",
      snack: "ലഘുഭക്ഷണം",
      crazyHour: "സമാപനം",
      receptionNote: "റിസെപ്ഷൻ: സെപ്റ്റംബർ 14, KS Convention Centre, നിലമ്പൂർ"
    },
    place: {
      title: "വേദികൾ",
      address: "Eden Convention Center, അഡ്യൻപാറ റോഡ്, അക്കൻപടം, നിലമ്പൂർ, കേരളം 679329",
      viewMap: "ഭൂപടത്തിൽ കാണുക",
      title2: "റിസെപ്ഷൻ വേദി",
      address2: "KS Convention Centre, പുലിക്കൽകോടി, Mampad–Wandoor Rd, നിലമ്പൂർ, കേരളം 679329",
      viewMap2: "ഭൂപടത്തിൽ കാണുക"
    },
    dressCode: {
      title: "വസ്ത്ര നിർദേശം",
      description: "പരമ്പരാഗത അല്ലെങ്കിൽ ഔദ്യോഗിക വേഷം. സ്ത്രീകൾ സാരി, ചുരിദാർ അല്ലെങ്കിൽ മനോഹരമായ ഔദ്യോഗിക വേഷം ധരിക്കാൻ ഞങ്ങൾ ആഗ്രഹിക്കുന്നു. പുരുഷന്മാർ പരമ്പരാഗത മുണ്ട്-ഷർട്ട് അല്ലെങ്കിൽ ഫോർമൽ സ്യൂട്ട് ധരിക്കാം.",
      note: "വെള്ള നിറം വധുവിനായി സംവരണം ചെയ്തിരിക്കുന്നു. ദയവായി വെള്ള ഒഴിവാക്കുക."
    },
    gift: {
      title: "ബന്ധപ്പെടുക",
      message: "RSVP-യ്ക്കും അന്വേഷണങ്ങൾക്കും ദയവായി ഞങ്ങളെ ബന്ധപ്പെടുക.",
      copy: "പകർത്തുക",
      copied: "പകർത്തി!"
    },
    rsvp: {
      title: "നിങ്ങളുടെ സ്ഥിരീകരണം ഞങ്ങൾ വിലമതിക്കുന്നു",
      name: "നിങ്ങളുടെ പേര്",
      attendance: "നിങ്ങൾ പങ്കെടുക്കുമോ?",
      attending: "അതെ, ഞാൻ അവിടെ ഉണ്ടാകും",
      notAttending: "ഖേദകരമെന്നു പറയട്ടെ, എനിക്ക് പങ്കെടുക്കാൻ കഴിയില്ല",
      guests: "അതിഥികളുടെ എണ്ണം",
      dietary: "ഭക്ഷണ നിയന്ത്രണങ്ങൾ",
      dietaryPlaceholder: "നിങ്ങൾക്ക് എന്തെങ്കിലും അലർജി അല്ലെങ്കിൽ ഭക്ഷണ നിയന്ത്രണങ്ങൾ ഉണ്ടെങ്കിൽ, ദയവായി ഇവിടെ അറിയിക്കുക",
      submit: "പ്രതികരണം അയക്കുക",
      thankYou: "നിങ്ങളുടെ പ്രതികരണത്തിന് നന്ദി!",
      thankYouPlural: "നിങ്ങളുടെ പ്രതികരണത്തിന് നന്ദി!",
      thankYouPersonal: "നന്ദി, {name}!",
      addToCalendar: "കലണ്ടറിൽ ചേർക്കുക"
    },
    faq: {
      title: "വിവരങ്ങളും പതിവ് ചോദ്യങ്ങളും",
      questions: [
        { q: "കുട്ടികൾ ക്ഷണിക്കപ്പെട്ടിട്ടുണ്ടോ?", a: "അതെ, കുട്ടികളെ ആഘോഷത്തിൽ സ്വാഗതം ചെയ്യുന്നു. ചടങ്ങ് മുഴുവൻ അവരെ ശ്രദ്ധിക്കണമെന്ന് ദയാപൂർവം അഭ്യർഥിക്കുന്നു." },
        { q: "ഞാൻ മറ്റൊരാളെ കൊണ്ടുവരാമോ?", a: "വേദിയുടെ ശേഷി പരിമിതി കാരണം, ക്ഷണക്കത്തിൽ ഔദ്യോഗികമായി പേര് ചേർത്ത അതിഥികൾക്ക് മാത്രമേ ഞങ്ങൾക്ക് സ്ഥലം നൽകാൻ കഴിയൂ." },
        { q: "വസ്ത്ര നിർദേശം എന്താണ്?", a: "പരമ്പരാഗത അല്ലെങ്കിൽ ഔദ്യോഗിക ഇന്ത്യൻ വേഷം അഭിലഷണീയം. സ്ത്രീകൾ സാരി, ചുരിദാർ ധരിക്കാം. പുരുഷന്മാർ മുണ്ട്-ഷർട്ട് അല്ലെങ്കിൽ ഫോർമൽ സ്യൂട്ട് ധരിക്കാം." },
        { q: "പാർക്കിംഗ് സൗകര്യം ഉണ്ടോ?", a: "അതെ, രണ്ടു വേദികളിലും പാർക്കിംഗ് സൗകര്യം ലഭ്യമാണ്. ആഘോഷ വേളകളിൽ തിരക്ക് പ്രതീക്ഷിക്കുന്നതിനാൽ അൽപ്പം നേരത്തെ എത്തുക." }
      ]
    }
  }
};
