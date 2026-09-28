import { ProjectDetail, SkillItem, CarModelItem, CarFactItem, DriverTipItem } from '../types';

import imgDashboard from '../assets/images/auto_platform_dashboard_1790569025301.jpg';
import imgComparison from '../assets/images/car_comparison_studio_1790569045756.jpg';
import imgFacts from '../assets/images/car_facts_education_1790569062621.jpg';

export const projectsData: ProjectDetail[] = [
  {
    id: 'auto-instagram-platform',
    projectNumber: '01',
    title: {
      uz: 'Avtomobil Instagram Axborot Platformasi',
      ru: 'Автомобильная Информационная Платформа для Instagram',
      en: 'Automotive Instagram Information Platform',
    },
    subtitle: {
      uz: 'Foydali va tushunarli avtomobil ma\'lumotlarini taqdim etish tizimi',
      ru: 'Система публикации понятного и практичного автоконтента',
      en: 'Content concept for publishing clear and actionable car insights',
    },
    category: {
      uz: 'Media & Kontent Tizimi',
      ru: 'Медиа & Контент-система',
      en: 'Media & Content Architecture',
    },
    technologies: ['Instagram Reels', 'Prompt Engineering', 'AI Visual Tools', 'Canva/Figma', 'Markdown'],
    description: {
      uz: 'Avtomobil dunyosiga oid yangiliklar, texnik tushuntirishlar va foydali ma\'lumotlarni sodda va vizual jozibador formatda tayyorlash va e\'lon qilish kontseptual tizimi.',
      ru: 'Концептуальная система подготовки и публикации автоновостей, технических разборов и полезных советов в визуально привлекательном и доступном формате.',
      en: 'A structured concept system for designing, fact-checking, and delivering clear automotive knowledge and technical guides to a digital audience.',
    },
    overview: {
      uz: 'Ushbu loyiha Instagram tarmog‘ida avtomobil ixlosmandlari va oddiy haydovchilar uchun murakkab avtomobil mavzularini oddiy tilda tushuntirishga qaratilgan. Unda grafik shablonlar, mavzular tasnifi va axborotni tekshirish tizimi ishlab chiqilgan.',
      ru: 'Проект нацелен на подачу сложной информации об устройстве машин, двигателях и электронике простым языком. Разработана модульная структура постов, графические сетки и алгоритм верификации фактов.',
      en: 'This project formalizes a streamlined publishing workflow on Instagram, translating intricate automotive engineering principles into digestible graphics and reels for everyday drivers.',
    },
    purpose: {
      uz: 'O‘zbekiston avtomobil ixlosmandlari uchun reklama emas, balki haqiqiy foyda beradigan, xolis va tushunarli ta\'limiy kontent muhitini yaratish.',
      ru: 'Создать надежный образовательный источник информации об автомобилях без предвзятой рекламы, с фокусом на реальную пользу для водителей.',
      en: 'To eliminate misinformation and deliver objective, highly educational automotive insights tailored for drivers and enthusiasts in Uzbekistan.',
    },
    concept: {
      uz: 'Haftalik mavzular taqvimi: Dushanba — Texnik parametrlar tahlili, Chorshanba — Ikki model taqqoslashi, Juma — Boshlovchi haydovchi maslahati, Yakshanba — Qiziqarli tarixiy yoki zamonaviy avto faktlar.',
      ru: 'Недельный контент-план: Понедельник — разбор характеристик, Среда — детальное сравнение моделей, Пятница — совет новичкам за рулем, Воскресенье — инженерный факт недели.',
      en: 'Four-pillar editorial cycle: Monday technical deep-dive, Wednesday head-to-head model comparison, Friday beginner safety tip, and Sunday engineering trivia.',
    },
    resultGoal: {
      uz: 'Har bir post yoki video ko‘rgan inson avtomobil haqida aniq, tushunarli va hayotda asqotadigan bilimga ega bo‘lishi.',
      ru: 'Каждый зритель получает четкий, применимый на практике вывод и понимание автомобильных систем.',
      en: 'Empower viewers with practical mechanical clarity and safe, informed car purchasing and ownership habits.',
    },
    image: imgDashboard,
    featured: true,
  },
  {
    id: 'car-comparison-system',
    projectNumber: '02',
    title: {
      uz: 'Avtomobillarni Taqqoslash Tizimi',
      ru: 'Система Сравнения Автомобилей',
      en: 'Car Comparison System',
    },
    subtitle: {
      uz: 'Dizayn, dvigatel, yonilg‘i sarfi va narx toifasi bo‘yicha jonli tahlil interfeysi',
      ru: 'Интерфейс сопоставления дизайна, моторов, расхода топлива и ценового сегмента',
      en: 'Modern dual-vehicle interface evaluating powertrain, efficiency, and dimensions',
    },
    category: {
      uz: 'Frontend & Tahlil Vositasi',
      ru: 'Frontend & Аналитический инструмент',
      en: 'Frontend & Analytical Web Tool',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'JSON Data Store', 'Responsive Design'],
    description: {
      uz: 'Ikkita avtomobilni yonma-yon qo‘yib, ularning quvvati, yoqilg‘i iste\'moli, o‘lchamlari, qulayliklari va O‘zbekiston bozoridagi o‘rnini xolis baholash imkonini beruvchi interaktiv tizim.',
      ru: 'Интерактивная система для наглядного сравнения двух машин по мощности, расходу топлива, габаритам, опциям комфорта и позиционированию на рынке Узбекистана.',
      en: 'An interactive dual-vehicle comparison UI allowing users to juxtapose engine specs, fuel consumption, dimensions, equipment, and market segments side-by-side.',
    },
    overview: {
      uz: 'Avtomobil xarid qilmoqchi bo‘lganlar ko‘pincha ikkita o‘xshash model o‘rtasida ikkilanadilar (masalan Onix vs Chazor yoki Tracker vs Tiggo 7). Ushbu tizim ularga barcha parametrlarni bir ekranda aniq ko‘rsatadi.',
      ru: 'Покупатели часто выбирают между двумя конкурентами (например Chevrolet Onix и BYD Chazor). Система сводит все ключевые параметры на один экран для быстрого и объективного выбора.',
      en: 'Solves the common dilemma when choosing between competitive vehicles by providing an unbiased, side-by-side parameter matrix with zero fluff.',
    },
    purpose: {
      uz: 'Odamlarga mashina tanlashda his-tuyg‘ularga emas, balki aniq texnik ko‘rsatkichlar va xarajatlar tahliliga tayanishga yordam berish.',
      ru: 'Помочь автолюбителям принимать решения на основе точных технических данных, а не рекламных лозунгов.',
      en: 'To assist car buyers in making decisions grounded in verifiable mechanical specifications and long-term ownership parameters.',
    },
    concept: {
      uz: 'Filtrlar, parametrlar matritsasi, afzalliklar va kamchiliklar xulosasi hamda sodda vizual progress-indikatorlar.',
      ru: 'Селекторы моделей, нормализованная таблица характеристик, индикаторы преимуществ и адаптивная мобильная верстка.',
      en: 'Modular vehicle selectors, normalized specifications data, comparative delta highlights, and clean tabular layout.',
    },
    resultGoal: {
      uz: 'Avtomobil ixlosmandlari uchun tez, qulay va adolatli raqamli solishtirish vositasi.',
      ru: 'Быстрый, удобный и достоверный инструмент сравнения для узбекского автомобильного сообщества.',
      en: 'A rapid, lightweight, and honest comparison utility tailored to local market models and international standards.',
    },
    image: imgComparison,
    featured: true,
  },
  {
    id: 'beginner-driver-guide',
    projectNumber: '03',
    title: {
      uz: 'Boshlovchi Haydovchilar Uchun Qo‘llanma',
      ru: 'Руководство для Начинающих Водителей',
      en: 'Beginner Driver Guide',
    },
    subtitle: {
      uz: 'Rulga yangi o‘tirganlar bilishi shart bo‘lgan raqamli ko‘rsatmalar to‘plami',
      ru: 'Цифровой справочник необходимых знаний перед первым самостоятельным выездом',
      en: 'Essential digital guide explaining what new drivers must know before driving',
    },
    category: {
      uz: 'Ta\'limiy Raqamli Qo‘llanma',
      ru: 'Образовательное руководство',
      en: 'Educational Digital Handbook',
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Interactive Checklists', 'Vector UI Icons'],
    description: {
      uz: 'Yangi haydovchilar uchun yo‘lga chiqishdan oldingi tekshiruvlar, xavfsizlik qoidalari, dvigatel moyi va bosim nazorati hamda kutilmagan vaziyatlardagi harakatlar rejasi.',
      ru: 'Пошаговый комплекс знаний: предпоездочный осмотр, контроль технических жидкостей и давления шин, правила безопасности и алгоритм действий в нештатных ситуациях.',
      en: 'A step-by-step interactive handbook covering pre-drive walkarounds, fluid and tire checks, dashboard indicator literacy, and confident defensive driving principles.',
    },
    overview: {
      uz: 'Ko‘plab yangi haydovchilar haydovchilik guvohnomasini olgach, mashinaning texnik qismi yoki kundalik parvarishi haqida yetarli tasavvurga ega bo‘lmaydilar. Ushbu qo‘llanma aynan shu bo‘shliqni to‘ldiradi.',
      ru: 'Многие начинающие водители после автошколы не знают практических тонкостей обслуживания авто. Данное руководство доступно обучает базовой технической грамотности.',
      en: 'Fills the practical gap left after driving school, giving new motorists clear, actionable guidance on routine maintenance, tire inspection, and panic-free driving.',
    },
    purpose: {
      uz: 'Yo‘llarda xavfsizlikni oshirish va yangi haydovchilarning avtomobiliga ehtiyotkorona munosabatini shakllantirish.',
      ru: 'Повысить безопасность на дорогах и привить культуру бережной эксплуатации автомобиля.',
      en: 'Enhance road safety and build vehicle mechanical empathy among new motorists from day one.',
    },
    concept: {
      uz: '4 bosqichli tizim: 1. Salon va oynalarni sozlash, 2. Kapot osti nazorati, 3. Panel ogohlantirish chiroqlari ma\'nosi, 4. Noqulay ob-havo (yomg‘ir, tuman, qor) maslahatlari.',
      ru: '4 раздела: 1. Настройка зеркал и посадки, 2. Проверка под капотом, 3. Значения индикаторов приборной панели, 4. Вождение в сложных погодных условиях.',
      en: 'Four structured modules: 1. Cockpit and mirror ergonomics, 2. Under-the-hood fundamentals, 3. Dashboard warning light decoding, 4. Adverse weather best practices.',
    },
    resultGoal: {
      uz: 'Yosh va yangi haydovchilarning o‘ziga bo‘lgan ishonchini oshirish va avtomobil nosozliklarining oldini olish.',
      ru: 'Уверенность начинающего водителя за рулем и предотвращение распространенных поломок.',
      en: 'Eliminate road anxiety and prevent avoidable mechanical damage due to negligence.',
    },
    image: imgFacts,
    featured: true,
  },
  {
    id: 'car-facts-educational-system',
    projectNumber: '04',
    title: {
      uz: 'Avtomobil Faktlari & Ta\'limiy Kontent Tizimi',
      ru: 'Автомобильные Факты & Обучающий Контент',
      en: 'Car Facts & Educational Content System',
    },
    subtitle: {
      uz: 'Avtomobil tarixi, texnologiyalari va muhandislik kashfiyotlarini o‘rganish tizimi',
      ru: 'Система изучения автоистории, технологий и инженерных решений',
      en: 'Content system exploring intriguing automotive facts and engineering wonders',
    },
    category: {
      uz: 'Muhandislik & Ma\'rifat',
      ru: 'Инженерия & Популяризация',
      en: 'Engineering & Knowledge Base',
    },
    technologies: ['Information Architecture', 'Canva Layouts', 'Prompt Engineering', 'Research Logic'],
    description: {
      uz: 'Dunyo avtomobilsozligidagi eng hayratlanarli kashfiyotlar, aerodinamika sirlari, xavfsizlik yostiqchalari tarixi va zamonaviy elektromobillar qanday ishlashi haqidagi ma\'lumotlar bazasi.',
      ru: 'Информационная база об аэродинамике, истории появления ремней и подушек безопасности, принципах работы современных гибридов и электромобилей.',
      en: 'A researched repository highlighting historical automotive milestones, aerodynamic breakthroughs, passive safety origins, and cutting-edge electric vehicle architecture.',
    },
    overview: {
      uz: 'Avtomobil shunchaki transport vositasi emas, u insoniyatning 100 yildan ortiq davom etgan muhandislik cho‘qqisidir. Ushbu loyiha texnologik qiziqish uyg‘otish uchun qiziqarli faktlarni yig‘adi va tizimlashtiradi.',
      ru: 'Автомобиль — результат вековой инженерной мысли. Проект систематизирует редкие технические факты, рассказывая о них увлекательно и научно выверено.',
      en: 'Showcases the marvel of mechanical and electronic engineering behind modern cars, making automotive physics and history genuinely exciting.',
    },
    purpose: {
      uz: 'Toshkent va butun O‘zbekiston yoshlarida texnikaga, muhandislikka va fizikaga bo‘lgan qiziqishni avtomobillar orqali oshirish.',
      ru: 'Пробуждать интерес молодежи к точным наукам, физике и инженерии через наглядные автомобильные примеры.',
      en: 'Inspire scientific and mechanical curiosity among young enthusiasts through captivating automotive case studies.',
    },
    concept: {
      uz: 'Kategoriya bo‘yicha ajratilgan faktlar: Dvigatellar, Aerodinamika, Xavfsizlik texnologiyalari, O‘zbekiston avto tarixi.',
      ru: 'Категории фактов: Двигатели и КПП, Аэродинамика, Технологии безопасности, Автомобильная история Узбекистана.',
      en: 'Categorized fact modules: Internal combustion vs electric motors, aerodynamic drag coefficient, passive/active safety, and regional automotive evolution.',
    },
    resultGoal: {
      uz: 'Avto ixlosmandlari va obunachilarning texnik dunyoqarashini kengaytirish.',
      ru: 'Расширение технического кругозора подписчиков и автолюбителей.',
      en: 'Broader technological literacy and appreciation for automotive engineering.',
    },
    image: imgFacts,
    featured: true,
  },
  {
    id: 'automotive-short-video-system',
    projectNumber: '05',
    title: {
      uz: 'Avtomobil Qisqa Video Kontenti Tizimi',
      ru: 'Система Коротких Автомобильных Видео (Reels)',
      en: 'Automotive Short Video Content System',
    },
    subtitle: {
      uz: 'Instagram Reels uchun 4 bosqichli strukturali stsenariy va vizual montaj kontseptsiyasi',
      ru: 'Концепция структурированных Reels: хук, суть, визуальный ряд и вывод',
      en: 'Structured Instagram Reels formula: hook, core value, visual beats, and takeaway',
    },
    category: {
      uz: 'Video Kontent & Ssenariy',
      ru: 'Видеоконтент & Сценарии',
      en: 'Video Production & Script Architecture',
    },
    technologies: ['CapCut', 'Storyboarding', 'Hook Design', 'Audio Synchronization', 'AI Prompting'],
    description: {
      uz: 'Instagram Reels formatida har bir soniyadan unumli foydalanish: dastlabki 3 soniyalik "hook", asosiy texnik ma\'lumot, dinamik vizual kadrlash va yakuniy xulosa orqali sifatli avto videolar yaratish konsepsiyasi.',
      ru: 'Методика создания вирусных, но содержательных видео: 3-секундный хук, емкая техническая суть, динамичный монтаж и четкий итоговый совет.',
      en: 'A high-retention video production methodology designed for Instagram Reels, balancing gripping initial hooks with authentic educational takeaways.',
    },
    overview: {
      uz: 'Ijtimoiy tarmoqlarda diqqatni jalb qilish qiyin. Ushbu tizim orqali har bir avtomobil videosi behuda so‘zlarsiz, ixcham, aniq va tomoshabinga qiziqarli tarzda rejalashtiriladi.',
      ru: 'В условиях жесткой конкуренции за внимание зрителя данная система позволяет за 30-45 секунд передать максимум полезных знаний об авто без "воды".',
      en: 'Optimizes short-form mobile video retention by pairing crisp cinematic footage with immediate, real-world utility for car drivers and buyers.',
    },
    purpose: {
      uz: 'Qisqa videolarni nafaqat ko‘ngilochar, balki odamlar saqlab oladigan (save) va ulashadigan (share) bilim manbaiga aylantirish.',
      ru: 'Превратить короткие ролики из бессмысленного развлечения в полезные видеошпаргалки, которые хочется сохранить.',
      en: 'Transform passive mobile scrolling into an informative learning experience worth saving and sharing.',
    },
    concept: {
      uz: 'Standart formula: 0-3s (Kuchli savol yoki kutilmagan fakt) -> 3-15s (Asosiy parametr va solishtirish) -> 15-30s (Ekspert maslahati yoki xulosa) -> Call-to-Action.',
      ru: 'Формула сценария: 0-3с (Интригующий хук) -> 3-15с (Техническая суть) -> 15-30с (Практический совет) -> Призыв подписаться.',
      en: 'Structured storyboard formula: 0-3s hook, 3-18s technical analysis, 18-35s practical tip, followed by an engaging closing question.',
    },
    resultGoal: {
      uz: 'Instagram sahifasida yuqori faollik, samimiy obunachilar ishonchi va avto sohasida sifatli o‘zbekcha kontent yaratish.',
      ru: 'Высокое удержание аудитории, доверие подписчиков и вклад в качественный узбекский автоблогинг.',
      en: 'Consistent viewer engagement, authentic community trust, and elevation of quality automotive content in Uzbekistan.',
    },
    image: imgDashboard,
    featured: true,
  },
];

export const skillsData: SkillItem[] = [
  // Programming
  {
    id: 'python',
    name: 'Python',
    category: 'programming',
    description: {
      uz: 'Algoritmlar, skriptlar va ma\'lumotlar bilan ishlash asoslari',
      ru: 'Основы алгоритмов, скриптов и работы с данными',
      en: 'Fundamentals of algorithms, scripting, and data handling',
    },
    iconName: 'Code',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'programming',
    description: {
      uz: 'Veb-sahifalar dinamikasi, DOM manipulatsiyasi va hodisalar bilan ishlash',
      ru: 'Динамика веб-страниц, работа с DOM и событиями',
      en: 'Web page interactivity, DOM manipulation, and modern ES6+ logic',
    },
    iconName: 'FileCode',
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'programming',
    description: {
      uz: 'Semantik teglash, qulay veb-tuzilma va zamonaviy HTML5 standartlari',
      ru: 'Семантическая разметка, структура страниц и стандарты HTML5',
      en: 'Semantic document structure, accessibility, and modern HTML5 standards',
    },
    iconName: 'Layout',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'programming',
    description: {
      uz: 'Flexbox, Grid, moslashuvchan dizayn va zamonaviy Tailwind uslublari',
      ru: 'Flexbox, Grid, адаптивная верстка и Tailwind CSS',
      en: 'Flexbox, Grid layouts, responsive styling, and modern Tailwind utility design',
    },
    iconName: 'Palette',
  },

  // Creative / AI
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    category: 'creative_ai',
    description: {
      uz: 'AI modellariga aniq buyruqlar berish, kontent rejalashtirish va tizimlashtirish',
      ru: 'Составление точных промптов для AI, структурирование задач и контента',
      en: 'Formulating structured prompts, context engineering, and systematic workflow design',
    },
    iconName: 'Sparkles',
  },
  {
    id: 'ai-tools',
    name: 'AI Tools',
    category: 'creative_ai',
    description: {
      uz: 'Katta til modellari, matn tahlili va vizual yaratish vositalaridan unumli foydalanish',
      ru: 'Практическое применение языковых моделей, анализа текста и генерации графики',
      en: 'Hands-on utilization of large language models, text research, and digital creation suites',
    },
    iconName: 'Bot',
  },
  {
    id: 'generative-ai',
    name: 'Generative AI',
    category: 'creative_ai',
    description: {
      uz: 'Matn, tasvirlar va kontseptual g‘oyalarni generatsiya qilish ko‘nikmalari',
      ru: 'Генерация текстов, концептуальных изображений и креативных идей',
      en: 'Generating conceptual visuals, drafting scripts, and creative ideation',
    },
    iconName: 'Cpu',
  },

  // Robotics
  {
    id: 'arduino',
    name: 'Arduino',
    category: 'robotics',
    description: {
      uz: 'Mikrokontrollerlar, datchiklar, motorlar va oddiy sxemalar bilan amaliy ishlash',
      ru: 'Микроконтроллеры, датчики, сервоприводы и базовые электрические схемы',
      en: 'Microcontroller prototyping, sensors, servo motors, and basic circuit building',
    },
    iconName: 'Cpu',
  },
  {
    id: 'mblock',
    name: 'mBlock',
    category: 'robotics',
    description: {
      uz: 'Robotlarni bloklar orqali boshqarish va dastur mantiqini vizual o‘rganish',
      ru: 'Блочное программирование роботов и визуальное изучение алгоритмов',
      en: 'Block-based robotics control and visual algorithm logic',
    },
    iconName: 'Wrench',
  },
  {
    id: 'robotics',
    name: 'Robotics',
    category: 'robotics',
    description: {
      uz: 'Mexanika, sensorlar signallarini o‘qish va avtomatlashtirish asoslari',
      ru: 'Основы механики, обработка сигналов датчиков и автоматизация',
      en: 'Fundamentals of mechanics, sensor signal processing, and basic automation',
    },
    iconName: 'Boxes',
  },
  {
    id: 'scratch',
    name: 'Scratch',
    category: 'robotics',
    description: {
      uz: 'Dasturlash sari ilk qadam: interaktiv hikoyalar va o‘yinlar yaratish orqali mantiqni rivojlantirish',
      ru: 'Первые шаги в IT: логика, создание интерактивных историй и мини-игр',
      en: 'Early foundation: algorithmic logic, game prototypes, and event-driven thinking',
    },
    iconName: 'Gamepad2',
  },

  // Development
  {
    id: 'frontend-development',
    name: 'Frontend Development',
    category: 'development',
    description: {
      uz: 'Zamonaviy, tez va barcha qurilmalarga mos veb-interfeyslar yaratish',
      ru: 'Создание современных, быстрых и адаптивных веб-интерфейсов',
      en: 'Crafting responsive, clean, and high-performance user interfaces',
    },
    iconName: 'Monitor',
  },
  {
    id: 'android-development',
    name: 'Android Development',
    category: 'development',
    description: {
      uz: 'Mobil qurilmalar uchun ilovalar arxitekturasi va interfeysi asoslari',
      ru: 'Основы архитектуры и интерфейсов мобильных приложений под Android',
      en: 'Foundations of mobile device application flow, UI layouts, and logic',
    },
    iconName: 'Smartphone',
  },
  {
    id: 'mit-app-inventor',
    name: 'MIT App Inventor',
    category: 'development',
    description: {
      uz: 'Android ilovalar prototiplarini bloklar yordamida tezkor ishlab chiqish',
      ru: 'Быстрое прототипирование функциональных Android-приложений на блоках',
      en: 'Rapid prototyping of functional mobile Android apps using visual component logic',
    },
    iconName: 'Layers',
  },

  // Computer Literacy & Workflow
  {
    id: 'computer-literacy',
    name: 'Computer Literacy',
    category: 'computer',
    description: {
      uz: 'Operatsion tizimlar, fayllar bilan ishlash, dasturlar o‘rnatish va tarmoq asoslari',
      ru: 'Уверенная работа с ОС, файловой системой, ПО и базовыми сетевыми протоколами',
      en: 'Operating system workflows, file system management, software setup, and network basics',
    },
    iconName: 'Laptop',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'development',
    description: {
      uz: 'Kodni versiyalash, repozitoriyalar bilan ishlash va loyihalarni saqlash',
      ru: 'Контроль версий кода, работа с ветками и хранение проектов',
      en: 'Version control, repository management, and code backup workflows',
    },
    iconName: 'GitBranch',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'development',
    description: {
      uz: 'Frontend loyihalarni internetga tez va xavfsiz deploy qilish',
      ru: 'Быстрый деплой и публикация веб-проектов в глобальной сети',
      en: 'Production deployment and live hosting of modern web applications',
    },
    iconName: 'Globe',
  },
];

export const carModelsData: CarModelItem[] = [
  {
    id: 'chevrolet-onix',
    name: 'Chevrolet Onix',
    brand: 'Chevrolet',
    category: {
      uz: 'B-Segment Sedan',
      ru: 'B-Класс Седан',
      en: 'B-Segment Sedan',
    },
    engine: '1.2L Turbo (3 silindr)',
    power: '132 ot kuchi (hp)',
    transmission: '6-bosqichli avtomat (AT)',
    fuelConsumption: '5.8 - 6.5 L / 100 km',
    priceCategory: {
      uz: 'Ommabop hamyonbop',
      ru: 'Массовый доступный',
      en: 'Popular Affordable',
    },
    description: {
      uz: 'O‘zbekistonda eng ommabop zamonaviy tejamkor sedanlardan biri. Turbo motor, zamonaviy multimediya va shahar ichida qulay boshqaruv bilan ajralib turadi.',
      ru: 'Один из популярнейших современных седанов в Узбекистане. Турбомотор, мультимедиа с CarPlay и экономичный расход топлива.',
      en: 'One of the most popular modern sedans in Uzbekistan, balancing a peppy turbo engine, smartphone connectivity, and low city fuel consumption.',
    },
    targetAudience: {
      uz: 'Shahar haydovchilari, yosh oilalar va tejamkorlikni qadrlaydiganlar',
      ru: 'Городские автомобилисты, молодые семьи и ценители экономичности',
      en: 'City commuters, young families, and efficiency-focused drivers',
    },
    highlights: {
      uz: ['1.2 Turbo motor', 'Kruiz-nazorat', 'Simsiz zaryadlash', 'Kam yoqilg‘i sarfi'],
      ru: ['1.2 Турбомотор', 'Круиз-контроль', 'Беспроводная зарядка', 'Экономичность'],
      en: ['1.2L Turbo Engine', 'Cruise Control', 'Wireless Phone Charger', 'Low Fuel Consumption'],
    },
  },
  {
    id: 'chevrolet-tracker',
    name: 'Chevrolet Tracker',
    brand: 'Chevrolet',
    category: {
      uz: 'Ixcham Krossover (B-SUV)',
      ru: 'Компактный кроссовер (B-SUV)',
      en: 'Compact Crossover (B-SUV)',
    },
    engine: '1.2L Turbo Ecotec',
    power: '132 ot kuchi (hp)',
    transmission: '6-bosqichli avtomat',
    fuelConsumption: '6.5 - 7.2 L / 100 km',
    priceCategory: {
      uz: 'O‘rta ommabop krossover',
      ru: 'Средний массовый кроссовер',
      en: 'Mid-tier Popular Crossover',
    },
    description: {
      uz: 'Baland klirens, zamonaviy agressiv dizayn va qulay salon. Shahar sharoitida ham, yengil notekis yo‘llarda ham ishonchli harakatlanadi.',
      ru: 'Высокий дорожный просвет, выразительный дизайн и просторный салон. Уверенно чувствует себя в городе и на проселочных дорогах.',
      en: 'Higher ground clearance, athletic proportions, and roomy cabin making it versatile for both paved urban streets and uneven terrain.',
    },
    targetAudience: {
      uz: 'Krossover ixlosmandlari, sayohatni sevuvchilar va faol haydovchilar',
      ru: 'Любители кроссоверов, загородных поездок и активного образа жизни',
      en: 'Crossover lovers, weekend road-trippers, and active lifestyle drivers',
    },
    highlights: {
      uz: ['Panoramali tom lyuki', 'Keng yukxona', 'Xavfsizlik yostiqchalari', 'LED optika'],
      ru: ['Панорамный люк', 'Вместительный багажник', 'Системы безопасности', 'LED оптика'],
      en: ['Panoramic Sunroof', 'Spacious Cargo Area', 'Multi-Airbag Safety', 'LED Headlights'],
    },
  },
  {
    id: 'byd-chazor',
    name: 'BYD Chazor (Destroyer 05)',
    brand: 'BYD',
    category: {
      uz: 'Plug-in Gibrid Sedan (DM-i)',
      ru: 'Плагин-гибридный седан (DM-i)',
      en: 'Plug-in Hybrid Sedan (DM-i)',
    },
    engine: '1.5L Xiaoyun + Elektr motor (DM-i)',
    power: '180 - 197 ot kuchi (hp umumiy)',
    transmission: 'E-CVT (Elektr reduktor)',
    fuelConsumption: '3.8 - 4.5 L / 100 km (Gibrid rejim)',
    priceCategory: {
      uz: 'Zamonaviy texnologik sedan',
      ru: 'Технологичный седан нового поколения',
      en: 'Modern High-Tech Hybrid',
    },
    description: {
      uz: 'Yangi avlod plagin-gibridi. Sof elektr quvvatida 55-120 km masofa bosib o‘tadi, umumiy zaxirasi esa 1000+ km ga yetadi. Yumshoq va sokin harakatlanadi.',
      ru: 'Подзаряжаемый гибрид нового поколения. Запас хода на чистом электричестве до 120 км, а суммарный запас хода превышает 1000 км.',
      en: 'Next-gen plug-in hybrid capable of 55-120 km on pure electric battery, and over 1,000 km in combined hybrid range with ultra-quiet operation.',
    },
    targetAudience: {
      uz: 'Texnologiyaga qiziquvchilar, maksimal tejamkorlik va sokinlikni xohlovchilar',
      ru: 'Любители современных гаджетов, тишины в салоне и рекордной экономии',
      en: 'Tech enthusiasts and drivers seeking near-silent electric driving with hybrid range security',
    },
    highlights: {
      uz: ['DM-i super gibrid tizim', '1000+ km umumiy yurish', 'Aylanuvchi planshet ekran', 'Tezkor zaryadlash'],
      ru: ['Супергибрид DM-i', '1000+ км на одном баке', 'Поворотный экран 12.8"', 'Быстрый разгон'],
      en: ['Super DM-i Powertrain', '1,000+ km Combined Range', 'Rotating Center Screen', 'Instant Electric Torque'],
    },
  },
  {
    id: 'byd-song-plus',
    name: 'BYD Song Plus DM-i',
    brand: 'BYD',
    category: {
      uz: 'O‘rta o‘lchamli Gibrid Krossover',
      ru: 'Среднеразмерный гибридный кроссовер',
      en: 'Midsize Plug-in Hybrid Crossover',
    },
    engine: '1.5L DM-i Super Hybrid',
    power: '218 ot kuchi (hp)',
    transmission: 'E-CVT',
    fuelConsumption: '4.4 - 5.1 L / 100 km',
    priceCategory: {
      uz: 'Premium-klassga yaqin gibrid',
      ru: 'Околопремиальный кроссовер',
      en: 'Near-Premium Hybrid Crossover',
    },
    description: {
      uz: 'O‘zbekistonda eng xaridorgir yangi avlod krossoverlaridan biri. Keng va premium interyer, yuqori darajadagi shovqinsizlik va yumshoq osma tizim.',
      ru: 'Один из самых востребованных кроссоверов нового поколения в Узбекистане. Просторный премиальный салон, отличная шумоизоляция и мягкий ход.',
      en: 'A flagship favorite on Uzbek roads, combining an executive-grade interior, superb acoustic insulation, and outstanding energy economy.',
    },
    targetAudience: {
      uz: 'Premium qulaylik va ekologik tejamkorlikni birgalikda istovchi oilalar',
      ru: 'Семьи, ценящие комфорт бизнес-класса и высокую топливную эффективность',
      en: 'Families wanting luxury ergonomics with minimal operational fuel expenses',
    },
    highlights: {
      uz: ['Blade Battery xavfsizligi', 'Yuqori darajadagi shovqinsizlik', 'Keng orqa qator', 'Smart haydovchi yordamchilari'],
      ru: ['Безопасная батарея Blade', 'Акустический комфорт', 'Простор на 2-м ряду', 'Ассистенты водителя ADAS'],
      en: ['Ultra-Safe Blade Battery', 'Acoustic Glass Insulation', 'Generous Rear Legroom', 'Smart ADAS Driver Assist'],
    },
  },
  {
    id: 'chery-tiggo-7-pro',
    name: 'Chery Tiggo 7 Pro',
    brand: 'Chery',
    category: {
      uz: 'Krossover (C-SUV)',
      ru: 'Кроссовер (C-SUV)',
      en: 'Compact SUV (C-SUV)',
    },
    engine: '1.5L Turbo Acteco',
    power: '147 ot kuchi (hp)',
    transmission: 'CVT9 (9 ta virtual pog‘ona)',
    fuelConsumption: '6.8 - 7.6 L / 100 km',
    priceCategory: {
      uz: 'O‘rta toifali boy komplektatsiya',
      ru: 'Средний класс с богатым оснащением',
      en: 'Mid-Tier Value Crossover',
    },
    description: {
      uz: 'Boy komplektatsiya, 360 kamera tizimi, chiroyli dizayn va keng salon. O‘z narx toifasida ko‘plab qulaylik funksiyalarini taklif etadi.',
      ru: 'Богатое оснащение: круговой обзор 360, панорамная крыша, современный интерьер и вместительный салон.',
      en: 'Remarkable equipment density offering 360-degree cameras, panoramic roof, and ergonomic controls at a competitive price tier.',
    },
    targetAudience: {
      uz: 'Zamonaviy texnologik opsiyalarni hamyonbop narxda xohlovchilar',
      ru: 'Покупатели, желающие максимум опций за разумный бюджет',
      en: 'Value-minded buyers wanting executive technology options at an accessible price',
    },
    highlights: {
      uz: ['360 darajali kameralar', 'Katta sensorli ekran', 'Ikki zonali iqlim nazorati', 'Yumshoq podveska'],
      ru: ['Камеры 360 градусов', 'Большой сенсорный экран', 'Двухзонный климат-контроль', 'Эргономичные сиденья'],
      en: ['360-Degree Surround Vision', 'Dual-Zone Climate Control', 'Large Touch Display', 'Supple Suspension'],
    },
  },
  {
    id: 'chevrolet-malibu-2',
    name: 'Chevrolet Malibu 2',
    brand: 'Chevrolet',
    category: {
      uz: 'D-Segment Biznes Sedan',
      ru: 'Бизнес-класс Седан (D-сегмент)',
      en: 'D-Segment Executive Sedan',
    },
    engine: '2.0L Turbo',
    power: '253 ot kuchi (hp)',
    transmission: '9-bosqichli avtomat',
    fuelConsumption: '8.5 - 10.2 L / 100 km',
    priceCategory: {
      uz: 'Biznes-klass',
      ru: 'Бизнес-класс',
      en: 'Executive Class',
    },
    description: {
      uz: 'O‘zbekistonda biznes toifasining eng taniqli vakillaridan biri. Yuqori dinamika (253 ot kuchi), qat\'iy dizayn va magistralda mukammal barqarorlik.',
      ru: 'Один из самых статусных седанов в регионе. Мощная тяга 2.0 Turbo (253 л.с.), строгий силуэт и прекрасная устойчивость на трассе.',
      en: 'A staple of executive motoring in Uzbekistan, celebrated for its 253-hp turbo acceleration, commanding road presence, and highway composure.',
    },
    targetAudience: {
      uz: 'Tezkor dinamika va nufuzli ko‘rinishni istaydigan haydovchilar',
      ru: 'Водители, ценящие динамичный разгон и статусный внешний вид',
      en: 'Drivers prioritizing brisk passing acceleration and commanding road presence',
    },
    highlights: {
      uz: ['253 ot kuchli turbo motor', '9-bosqichli tezkor AT', 'Keng qulay biznes salon', 'Faol shovqin so‘ndirish'],
      ru: ['253 л.с. мощный разгон', '9-ступенчатая гидромеханика', 'Просторный бизнес-салон', 'Активное шумоподавление'],
      en: ['253-HP 2.0L Turbo Engine', '9-Speed Hydra-Matic AT', 'Bose Audio & Active Noise Cancel', 'Highway Cruising Stability'],
    },
  },
];

export const carFactsData: CarFactItem[] = [
  {
    id: 'fact-1',
    category: {
      uz: 'Muhandislik',
      ru: 'Инженерия',
      en: 'Engineering',
    },
    title: {
      uz: 'Avtomobilda o‘rtacha 30 000 ta detal bor',
      ru: 'В автомобиле около 30 000 деталей',
      en: 'An average car contains about 30,000 parts',
    },
    fact: {
      uz: 'Har bir zamonaviy avtomobil barcha mayda murvatlar, simlar, sensorlar va mikrosxemalarni hisobga olganda qariyb 30 000 ta qismdan iborat.',
      ru: 'Современный серийный автомобиль насчитывает около 30 000 деталей, включая мельчайшие крепежные элементы, датчики и разъемы проводки.',
      en: 'Counting every single bolt, screw, sensor, wiring pin, and mechanical assembly, an average modern vehicle incorporates roughly 30,000 individual components.',
    },
    techContext: {
      uz: 'Bu qismlarning uyg‘un ishlashi uchun yuzlab muhandislar yillab sinovlar o‘tkazadilar.',
      ru: 'Для их безотказной совместной работы требуются тысячи часов компьютерного моделирования и испытаний.',
      en: 'Achieving harmonious reliability across so many parts requires years of endurance simulation and rigorous quality audits.',
    },
  },
  {
    id: 'fact-2',
    category: {
      uz: 'Xavfsizlik',
      ru: 'Безопасность',
      en: 'Safety',
    },
    title: {
      uz: '3 nuqtali xavfsizlik kamarini Volvo patentlamagan',
      ru: 'Volvo сделала патент на трехточечный ремень открытым',
      en: 'Volvo gave the 3-point seatbelt patent away for free',
    },
    fact: {
      uz: '1959-yilda Volvo muhandisi Nils Bolin 3 nuqtali kamarni ixtiro qildi. Kompaniya butun dunyoda millionlab insonlar hayotini saqlab qolish maqsadida patentni boshqa barcha avtomobil ishlab chiqaruvchilar uchun bepul qilib ochib qo‘ydi.',
      ru: 'В 1959 году инженер Нильс Болин разработал привычный нам 3-точечный ремень. Volvo сделала патент открытым для всех производителей ради спасения жизней.',
      en: 'In 1959, Volvo engineer Nils Bohlin invented the 3-point seatbelt. Volvo generously opened the patent to all automakers worldwide in the interest of saving lives.',
    },
    techContext: {
      uz: 'Bugungi kunda xavfsizlik kamari avtohalokatlarda o‘lim xavfini 45-50% ga kamaytiradi.',
      ru: 'По статистике ВОЗ, применение ремня снижает риск гибели водителя и пассажиров на 45–50%.',
      en: 'Statistical studies show modern three-point belts reduce the fatal injury risk by 45-50%.',
    },
  },
  {
    id: 'fact-3',
    category: {
      uz: 'Aerodinamika',
      ru: 'Аэродинамика',
      en: 'Aerodynamics',
    },
    title: {
      uz: 'Tezlik oshganda havo qarshiligi kvadratik o‘sadi',
      ru: 'Сопротивление воздуха растет пропорционально квадрату скорости',
      en: 'Air resistance increases with the square of velocity',
    },
    fact: {
      uz: 'Mashina tezligi 60 km/soatdan 120 km/soatga chiqqanda (2 baravar oshganda), havo qarshiligi 4 baravar ko‘payadi. Shu sababli avtomobil dizaynida aerodinamik koeffitsient (Cd) katta ahamiyatga ega.',
      ru: 'При удвоении скорости с 60 до 120 км/ч аэродинамическое сопротивление возрастает в 4 раза, резко повышая расход топлива или энергии.',
      en: 'Doubling road speed from 60 km/h to 120 km/h quadruples aerodynamic drag forces, which is why streamlined drag coefficient (Cd) is vital for fuel and EV range.',
    },
    techContext: {
      uz: 'Cd koeffitsientining 0.01 ga kamayishi magistralda yoqilg‘i sarfini sezilarli darajada tejaydi.',
      ru: 'Снижение коэффициента Cx всего на 0.01 экономит до 2-3% топлива на загородных скоростях.',
      en: 'Trimming just 0.01 off the aerodynamic drag coefficient can improve highway efficiency by 2-3%.',
    },
  },
  {
    id: 'fact-4',
    category: {
      uz: 'Elektromobillar',
      ru: 'Электромобили',
      en: 'EV Technology',
    },
    title: {
      uz: 'Elektr motorlarining FIK (foydali ish koeffitsienti) 90% dan yuqori',
      ru: 'КПД электромоторов превышает 90%',
      en: 'Electric motor efficiency exceeds 90%',
    },
    fact: {
      uz: 'Oddiy benzinli ichki yonuv dvigatellari yoqilg‘i energiyasining atigi 25-35% ini harakatga aylantiradi (qolgani issiqlik bo‘lib yo‘qoladi). Elektr motorlarida esa bu ko‘rsatkich 90-95% gacha yetadi.',
      ru: 'Бензиновый мотор отдает в движение лишь 25–35% энергии топлива, остальное уходит в тепло. Электродвигатели преобразуют в движение до 90–95% энергии.',
      en: 'While conventional gasoline engines convert only 25-35% of fuel energy into forward motion, electric drive units routinely achieve 90-95% energy conversion efficiency.',
    },
    techContext: {
      uz: 'Shu sababli elektr avtomobillar har qanday harakat boshlanishida darhol maksimal aylanma momentni beradi.',
      ru: 'Именно поэтому электромобили мгновенно откликаются на педаль акселератора без задержек.',
      en: 'This explains why modern EVs deliver instant maximum torque from zero RPM without gear hesitation.',
    },
  },
];

export const driverTipsData: DriverTipItem[] = [
  {
    id: 'tip-1',
    title: {
      uz: 'Kuzov va shina bosimini tekshirish',
      ru: 'Контроль давления в шинах и осмотр кузова',
      en: 'Tire Pressure & Walkaround Inspection',
    },
    tip: {
      uz: 'Haftada kamida bir marta barcha 4 ta shinaning bosimini manometr orqali tekshiring. Noto‘g‘ri bosim yoqilg‘i sarfini oshiradi va tormoz masofasini uzaytiradi.',
      ru: 'Минимум раз в неделю проверяйте давление в шинах манометром. Недокачанные колеса ухудшают управляемость и увеличивают расход бензина.',
      en: 'Check tire pressures weekly with a reliable gauge. Underinflated tires degrade cornering precision and increase stopping distances.',
    },
    priority: 'essential',
    icon: 'Disc',
  },
  {
    id: 'tip-2',
    title: {
      uz: 'Kuzatuv oynalarini (ko‘zgularni) to‘g‘ri sozlash',
      ru: 'Правильная настройка боковых зеркал',
      en: 'Proper Side & Rear Mirror Alignment',
    },
    tip: {
      uz: 'Yon oynalarda o‘z avtomobilingizning orqa qanoti ko‘zgurning atigi 5-10% qismini egallashi kerak. Qolgan 90% maydon orqadan kelayotgan yo‘lni ko‘rsatishi shart — bu "ko‘r nuqtalar"ni minimal darajaga tushiradi.',
      ru: 'В боковых зеркалах крыло вашего авто должно занимать не более 5-10% площади. Все остальное пространство — дорожная обстановка в слепых зонах.',
      en: 'Your vehicle flank should occupy barely 5-10% of the inner edge of each side mirror. The remaining 90% must cover your adjacent lane blind spots.',
    },
    priority: 'safety',
    icon: 'Eye',
  },
  {
    id: 'tip-3',
    title: {
      uz: 'Dvigatel qizishi va moy sathi',
      ru: 'Прогрев двигателя и контроль уровня масла',
      en: 'Engine Warm-Up & Oil Dipstick Check',
    },
    tip: {
      uz: 'Zamonaviy injektorli avtomobillarni uzoq vaqt joyida qizdirish shart emas: 1-2 daqiqadan so‘ng past aylanishlarda (2000 ayl/daqiqadan oshirmasdan) sekin harakatlanish yetarli.',
      ru: 'Современным машинам не нужен долгий прогрев на холостых: достаточно 1-2 минут, после чего можно плавно ехать на оборотах до 2000-2500 об/мин.',
      en: 'Modern fuel-injected cars do not need prolonged stationary idling: 1-2 minutes is plenty, followed by gentle driving under 2,500 RPM until nominal operating temperature.',
    },
    priority: 'maintenance',
    icon: 'Gauge',
  },
  {
    id: 'tip-4',
    title: {
      uz: 'Masofa va xavfsiz oraliq qoidasi (3 soniya)',
      ru: 'Правило дистанции «3 секунды»',
      en: 'The 3-Second Defensive Following Rule',
    },
    tip: {
      uz: 'Oldindagi avtomobil biron bir ustun yoki belgidan o‘tganda, siz ushbu nuqtaga kamida 3 soniyadan keyin yetib borishingiz kerak. Yomg‘ir yoki qorda bu oraliqni 5-6 soniyagacha oshiring.',
      ru: 'Когда идущая впереди машина проезжает ориентир (столб, знак), вы должны достигнуть его не ранее чем через 3 секунды. В дождь увеличьте до 5-6 секунд.',
      en: 'Pick a stationary roadside marker passed by the lead vehicle; your front bumper must not cross that marker before counting three full seconds.',
    },
    priority: 'practical',
    icon: 'ShieldCheck',
  },
];
