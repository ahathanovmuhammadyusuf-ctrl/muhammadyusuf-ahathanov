import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    automotive: string;
    contact: string;
  };
  hero: {
    badge: string;
    name: string;
    subtitle: string;
    description: string;
    ctaInstagram: string;
    ctaTelegram: string;
    experienceBadge: string;
    ageBadge: string;
    focusBadge: string;
  };
  about: {
    title: string;
    subtitle: string;
    greeting: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    milestoneYears: string;
    milestoneYearsLabel: string;
    milestoneAge: string;
    milestoneAgeLabel: string;
    milestoneDirection: string;
    milestoneDirectionLabel: string;
    philosophyTitle: string;
    philosophyDesc: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      programming: string;
      creative_ai: string;
      robotics: string;
      development: string;
      computer: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewDetails: string;
    modalClose: string;
    overview: string;
    purpose: string;
    technologies: string;
    concept: string;
    resultGoal: string;
    liveDemo: string;
    interactivePreview: string;
  };
  automotive: {
    title: string;
    subtitle: string;
    exploreSubtitle: string;
    filterAll: string;
    filterPopularUz: string;
    filterElectric: string;
    filterSedan: string;
    filterSUV: string;
    specEngine: string;
    specPower: string;
    specFuel: string;
    specTransmission: string;
    specCategory: string;
    viewDetails: string;
    interactiveCompareTitle: string;
    interactiveCompareSubtitle: string;
    selectCarA: string;
    selectCarB: string;
    factsTitle: string;
    factsSubtitle: string;
    driverGuideTitle: string;
    driverGuideSubtitle: string;
    driverChecklistTitle: string;
  };
  instagram: {
    title: string;
    subtitle: string;
    handle: string;
    button: string;
    pill1: string;
    pill2: string;
    pill3: string;
    pill4: string;
    recentThemesTitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    directContact: string;
    directDesc: string;
    connectTelegram: string;
    telegramButton: string;
    followInstagram: string;
    instagramButton: string;
    copyUsername: string;
    copied: string;
    locationNote: string;
    statusBadge: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    focus: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      home: "Asosiy",
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalarim",
      automotive: "Avtomobil olami",
      contact: "Aloqa",
    },
    hero: {
      badge: "Yosh Dasturchi & Kontent Yaratuvchi",
      name: "Ahathanov Muhammadyusuf",
      subtitle: "Developer • AI Creator • Prompt Engineer • Automotive Content Creator",
      description: "3 yildan beri texnologiya, dasturlash, robototexnika, AI va frontend yo‘nalishlarida o‘rganib, loyihalar yaratib kelayotgan yosh developer va kontent yaratuvchiman.",
      ctaInstagram: "Instagram",
      ctaTelegram: "Telegram",
      experienceBadge: "3 yil amaliy o'rganish",
      ageBadge: "13 yosh",
      focusBadge: "Avtomobil & Texnologiya",
    },
    about: {
      title: "Men haqimda",
      subtitle: "Texnologiya, muhandislik va avtomobil olamiga bo'lgan samimiy qiziqishim haqida",
      greeting: "Salom! Men Ahathanov Muhammadyusufman.",
      paragraph1: "Men 13 yoshdaman. So'nggi 3 yil davomida axborot texnologiyalari, dasturlash va robototexnika sohasini chuqur qiziqish bilan o'rganib kelmoqdaman. Boshlanishida Scratch va mBlock kabi blokli vizual dasturlash orqali algoritmlar mantiqini o'zlashtirdim, keyinchalik esa Arduino bilan robototexnika va mikrokontrollerlar asoslarini amalda qo'lladim.",
      paragraph2: "Vaqt o'tishi bilan qiziqishlarim MIT App Inventor va Android ilovalar yaratish, Python dasturlash tili, zamonaviy frontend texnologiyalari (HTML, CSS, JavaScript) hamda zamonaviy sun'iy intellekt (Prompt Engineering, AI vositalari) yo'nalishlariga kengaydi. Kodni GitHub orqali boshqarish va loyihalarni Vercel orqali joylashtirish ko'nikmalarini amalda qo'llayman.",
      paragraph3: "Dasturlash bilan bir qatorda, mening katta ishtiyoqim — avtomobillar va avtomobil texnologiyalari. Instagram sahifamda avtomobil ixlosmandlari va haydovchilikni endi boshlayotganlar uchun sodda, foydali, tahliliy va tushunarli kontent tayyorlayman.",
      milestoneYears: "3 Yil",
      milestoneYearsLabel: "O'rganish va amaliyot tajribasi",
      milestoneAge: "13 Yosh",
      milestoneAgeLabel: "Yosh, intiluvchan va dinamik qarash",
      milestoneDirection: "2 Yo'nalish",
      milestoneDirectionLabel: "Frontend/AI dasturlash + Avtomobil media",
      philosophyTitle: "Mening maqsadim",
      philosophyDesc: "Texnologiya va tahliliy bilimlarni birlashtirib, odamlarga haqiqatan ham foydali va tushunarli raqamli loyihalar hamda sifatli kontent taqdim etish.",
    },
    skills: {
      title: "Ko'nikmalarim",
      subtitle: "3 yillik tizimli o'rganish davomida shakllangan texnik va ijodiy vositalar",
      categories: {
        all: "Barchasi",
        programming: "Dasturlash",
        creative_ai: "AI & Ijodkorlik",
        robotics: "Robototexnika",
        development: "Dasturiy ishlanmalar",
        computer: "Kompyuter savodxonligi",
      },
    },
    projects: {
      title: "Loyihalarim",
      subtitle: "Avtomobil mavzulari va texnologiyalarni birlashtirgan 5 ta asosiy kontseptual loyiha",
      viewDetails: "Ko'rish",
      modalClose: "Yopish",
      overview: "Umumiy ko'rinish",
      purpose: "Loyiha maqsadi",
      technologies: "Ishlatilgan texnologiyalar",
      concept: "Arxitektura va kontseptsiya",
      resultGoal: "Natija va kutilgan samara",
      liveDemo: "Interaktiv ko'rinish",
      interactivePreview: "Interaktiv sinov",
    },
    automotive: {
      title: "Avtomobil olami",
      subtitle: "Instagram sahifamda avtomobillar haqida foydali, qiziqarli va tushunarli ma'lumotlar ulashaman.",
      exploreSubtitle: "O'zbekistonda ommabop va jahon brendlari modellarining aniq texnik xususiyatlari",
      filterAll: "Barcha modellar",
      filterPopularUz: "O'zbekistonda ommabop",
      filterElectric: "Elektr & Gibrid",
      filterSedan: "Sedan",
      filterSUV: "Krossover & SUV",
      specEngine: "Dvigatel",
      specPower: "Ot kuchi",
      specFuel: "Yoqilg'i sarfi",
      specTransmission: "Uzatmalar qutisi",
      specCategory: "Toifa",
      viewDetails: "Batafsil",
      interactiveCompareTitle: "Avtomobillarni Jonli Taqqoslash",
      interactiveCompareSubtitle: "Ikkita avtomobilni tanlang va ularning dvigateli, sarfi, toifasi hamda xususiyatlarini real tahlil qiling",
      selectCarA: "Birinchi avtomobil",
      selectCarB: "Ikkinchi avtomobil",
      factsTitle: "Qiziqarli Avtomobil Faktlari",
      factsSubtitle: "Avtomobil sanoatining muhandislik sirlari va qiziqarli kashfiyotlari",
      driverGuideTitle: "Boshlovchi Haydovchi Qo'llanmasi",
      driverGuideSubtitle: "Rulga yangi o'tirganlar bilishi shart bo'lgan eng muhim texnik va xavfsizlik qoidalari",
      driverChecklistTitle: "Yo'lga chiqishdan oldingi nazorat ro'yxati",
    },
    instagram: {
      title: "Avtomobil kontentimni kuzating",
      subtitle: "Instagram sahifamda avtomobillar haqida foydali ma'lumotlar, taqqoslashlar, qiziqarli faktlar va qisqa videolar ulashib boraman.",
      handle: "@ahathanov_muhammadyusuf",
      button: "Instagram'da kuzatish",
      pill1: "Avtomobil taqqoslashlari",
      pill2: "Foydali texnik maslahatlar",
      pill3: "Qisqa ma'rifiy Reels",
      pill4: "O'zbekiston avto yangiliklari",
      recentThemesTitle: "Kontent formatlari va yo'nalishlar",
    },
    contact: {
      title: "Aloqa",
      subtitle: "Savollar, takliflar yoki g'oyalar bo'yicha to'g'ridan-to'g'ri bog'lanishingiz mumkin",
      directContact: "To'g'ridan-to'g'ri aloqa",
      directDesc: "Eng tezkor javob olish uchun Telegram orqali murojaat qiling.",
      connectTelegram: "Telegram orqali bog'lanish",
      telegramButton: "Telegram orqali bog‘lanish",
      followInstagram: "Instagram orqali kuzatish",
      instagramButton: "Instagram sahifam",
      copyUsername: "Nusxalash",
      copied: "Nusxalandi!",
      locationNote: "O'zbekiston, Toshkent",
      statusBadge: "Yangi loyihalar va o'rganishga ochiq",
    },
    footer: {
      rights: "© 2026 Ahathanov Muhammadyusuf. Barcha huquqlar himoyalangan.",
      builtWith: "Built with React + TypeScript",
      focus: "Dasturchi & Avtomobil Kontenti Yaratuvchisi",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      skills: "Навыки",
      projects: "Мои проекты",
      automotive: "Мир авто",
      contact: "Контакты",
    },
    hero: {
      badge: "Юный разработчик & Создатель контента",
      name: "Ahathanov Muhammadyusuf",
      subtitle: "Developer • AI Creator • Prompt Engineer • Automotive Content Creator",
      description: "Молодой разработчик и создатель контента, который уже около 3 лет изучает технологии, программирование, робототехнику, AI и frontend-разработку, создавая полезные проекты.",
      ctaInstagram: "Instagram",
      ctaTelegram: "Telegram",
      experienceBadge: "3 года практики",
      ageBadge: "13 лет",
      focusBadge: "Автомобили & Технологии",
    },
    about: {
      title: "Обо мне",
      subtitle: "О моем искреннем увлечении технологиями, инженерией и автомобильным миром",
      greeting: "Здравствуйте! Меня зовут Ахатханов Мухаммадюсуф.",
      paragraph1: "Мне 13 лет. На протяжении последних 3 лет я с увлечением изучаю сферу информационных технологий, программирование и робототехнику. Начал путь с блочного программирования на Scratch и mBlock, где освоил логику алгоритмов, а затем перешел к микроконтроллерам Arduino и основам схемотехники.",
      paragraph2: "Со временем круг моих интересов расширился: разработка мобильных приложений в MIT App Inventor и базовом Android, язык программирования Python, современные frontend-технологии (HTML, CSS, JavaScript) и современные инструменты искусственного интеллекта (Prompt Engineering, AI-сервисы). Контроль версий веду через GitHub, а веб-проекты публикую на Vercel.",
      paragraph3: "Параллельно с разработкой моя большая страсть — автомобили и современные автомобильные технологии. В своем Instagram-блоге я делюсь полезным, структурированным и понятным контентом для автолюбителей и начинающих водителей.",
      milestoneYears: "3 Года",
      milestoneYearsLabel: "Опыт изучения и создания проектов",
      milestoneAge: "13 Лет",
      milestoneAgeLabel: "Энергия, любознательность и свежий взгляд",
      milestoneDirection: "2 Направления",
      milestoneDirectionLabel: "Frontend/AI разработка + Автомобильные медиа",
      philosophyTitle: "Моя цель",
      philosophyDesc: "Объединять инженерные знания и цифровые инструменты для создания понятных, честных и по-настоящему полезных материалов для людей.",
    },
    skills: {
      title: "Мои навыки",
      subtitle: "Технологический стек и творческие инструменты, освоенные за 3 года практики",
      categories: {
        all: "Все",
        programming: "Программирование",
        creative_ai: "AI & Креатив",
        robotics: "Робототехника",
        development: "Разработка",
        computer: "Компьютерная грамотность",
      },
    },
    projects: {
      title: "Лойихаларим",
      subtitle: "5 ключевых концептуальных проектов на стыке автомобильной тематики и веб-технологий",
      viewDetails: "Посмотреть",
      modalClose: "Закрыть",
      overview: "Обзор проекта",
      purpose: "Цель разработки",
      technologies: "Используемые технологии",
      concept: "Архитектура и концепт",
      resultGoal: "Ожидаемый результат",
      liveDemo: "Интерактивный показ",
      interactivePreview: "Интерактивный тест",
    },
    automotive: {
      title: "Мир автомобилей",
      subtitle: "На своей странице в Instagram делюсь полезной, интересной и понятной информацией об автомобилях.",
      exploreSubtitle: "Точные технические характеристики популярных в Узбекистане и мировых моделей",
      filterAll: "Все модели",
      filterPopularUz: "Популярные в Узбекистане",
      filterElectric: "Электро & Гибрид",
      filterSedan: "Седан",
      filterSUV: "Кроссовер & Внедорожник",
      specEngine: "Двигатель",
      specPower: "Мощность",
      specFuel: "Расход топлива",
      specTransmission: "Трансмиссия",
      specCategory: "Категория",
      viewDetails: "Подробнее",
      interactiveCompareTitle: "Живое сравнение автомобилей",
      interactiveCompareSubtitle: "Выберите два автомобиля для сопоставления двигателя, расхода, габаритов и класса",
      selectCarA: "Первый автомобиль",
      selectCarB: "Второй автомобиль",
      factsTitle: "Интересные автофакты",
      factsSubtitle: "Инженерные открытия, аэродинамика и малоизвестные факты из мира авто",
      driverGuideTitle: "Руководство для начинающих водителей",
      driverGuideSubtitle: "Главные правила безопасности и технической грамотности перед выездом на дорогу",
      driverChecklistTitle: "Чек-лист перед поездкой",
    },
    instagram: {
      title: "Следите за моим автомобильным контентом",
      subtitle: "В своем профиле Instagram публикую полезные сведения, сравнения моделей, факты и обучающие короткие видео.",
      handle: "@ahathanov_muhammadyusuf",
      button: "Подписаться в Instagram",
      pill1: "Сравнения автомобилей",
      pill2: "Советы начинающим водителям",
      pill3: "Обучающие видео Reels",
      pill4: "Автоновости Узбекистана",
      recentThemesTitle: "Тематические форматы блога",
    },
    contact: {
      title: "Контакты",
      subtitle: "Буду рад ответить на вопросы, обсудить технологические идеи или автоконтент",
      directContact: "Прямая связь",
      directDesc: "Для оперативного общения лучше всего написать мне в Telegram.",
      connectTelegram: "Связаться через Telegram",
      telegramButton: "Связаться через Telegram",
      followInstagram: "Смотреть профиль в Instagram",
      instagramButton: "Мой Instagram",
      copyUsername: "Скопировать",
      copied: "Скопировано!",
      locationNote: "Узбекистан, Ташкент",
      statusBadge: "Открыт к новым знаниям и проектам",
    },
    footer: {
      rights: "© 2026 Ahathanov Muhammadyusuf. Все права защищены.",
      builtWith: "Built with React + TypeScript",
      focus: "Разработчик & Создатель автомобильного контента",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      automotive: "Automotive",
      contact: "Contact",
    },
    hero: {
      badge: "Young Developer & Content Creator",
      name: "Ahathanov Muhammadyusuf",
      subtitle: "Developer • AI Creator • Prompt Engineer • Automotive Content Creator",
      description: "A young developer and creator with around 3 years of hands-on learning and building in programming, robotics, AI tools, and frontend development.",
      ctaInstagram: "Instagram",
      ctaTelegram: "Telegram",
      experienceBadge: "3 Years Practical Learning",
      ageBadge: "13 Years Old",
      focusBadge: "Automotive & Technology",
    },
    about: {
      title: "About Me",
      subtitle: "My genuine journey through computer science, engineering, and automotive culture",
      greeting: "Hello! I am Ahathanov Muhammadyusuf.",
      paragraph1: "I am 13 years old. For approximately 3 years, I have been actively learning and exploring computer technology, coding, and robotics. My journey began with visual block programming in Scratch and mBlock, which built a strong foundation in algorithmic logic, followed by hands-on hardware exploration with Arduino microcontrollers.",
      paragraph2: "As my skills evolved, I expanded into mobile application concepts with MIT App Inventor, fundamental Android development, Python scripting, frontend web technologies (HTML, CSS, JavaScript), and cutting-edge generative AI tools with Prompt Engineering. I maintain my code with GitHub and deploy web experiences via Vercel.",
      paragraph3: "Alongside digital technologies, my greatest passion is automobiles and vehicle engineering. On my Instagram page, I create structured, practical, and easy-to-understand educational content for automotive enthusiasts and beginner drivers.",
      milestoneYears: "3 Years",
      milestoneYearsLabel: "Continuous exploration and practical building",
      milestoneAge: "13 Years",
      milestoneAgeLabel: "Youthful enthusiasm, curiosity and fresh mindset",
      milestoneDirection: "2 Main Paths",
      milestoneDirectionLabel: "Frontend & AI Development + Automotive Media",
      philosophyTitle: "My Objective",
      philosophyDesc: "To connect engineering curiosity and digital creation, delivering practical, reliable, and accessible insights to an engaged community.",
    },
    skills: {
      title: "My Skills",
      subtitle: "Technical competencies and creative tools honed over 3 years of structured study",
      categories: {
        all: "All",
        programming: "Programming",
        creative_ai: "AI & Creative",
        robotics: "Robotics",
        development: "Development",
        computer: "Computer Literacy",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "5 comprehensive automotive portfolio projects combining tech concepts and media design",
      viewDetails: "View Details",
      modalClose: "Close",
      overview: "Overview",
      purpose: "Project Purpose",
      technologies: "Technologies Used",
      concept: "Concept & Architecture",
      resultGoal: "Goal & Expected Impact",
      liveDemo: "Interactive Demo",
      interactivePreview: "Interactive Test",
    },
    automotive: {
      title: "Automotive World",
      subtitle: "On my Instagram page, I share practical, engaging, and clear insights about the automotive world.",
      exploreSubtitle: "Verified technical specifications of popular Uzbek and international vehicle models",
      filterAll: "All Models",
      filterPopularUz: "Popular in Uzbekistan",
      filterElectric: "Electric & Hybrid",
      filterSedan: "Sedan",
      filterSUV: "Crossover & SUV",
      specEngine: "Engine",
      specPower: "Horsepower",
      specFuel: "Fuel Economy",
      specTransmission: "Transmission",
      specCategory: "Category",
      viewDetails: "Details",
      interactiveCompareTitle: "Live Vehicle Comparison Tool",
      interactiveCompareSubtitle: "Pick two vehicles to directly evaluate displacement, consumption, dimensions, and segment",
      selectCarA: "Vehicle A",
      selectCarB: "Vehicle B",
      factsTitle: "Fascinating Automotive Facts",
      factsSubtitle: "Engineering marvels, aerodynamics, and lesser-known discoveries in automotive history",
      driverGuideTitle: "Beginner Driver Quick Guide",
      driverGuideSubtitle: "Essential mechanical knowledge and road safety fundamentals every new driver must know",
      driverChecklistTitle: "Pre-Drive Walkaround Checklist",
    },
    instagram: {
      title: "Follow My Automotive Content",
      subtitle: "On my Instagram page, I share practical insights, car comparisons, interesting facts, and short educational video Reels.",
      handle: "@ahathanov_muhammadyusuf",
      button: "Follow on Instagram",
      pill1: "Car Comparisons",
      pill2: "Beginner Driver Tips",
      pill3: "Short Educational Reels",
      pill4: "Uzbek Automotive Insights",
      recentThemesTitle: "Main Content Pillars",
    },
    contact: {
      title: "Contact",
      subtitle: "Reach out directly for questions, ideas, or automotive discussions",
      directContact: "Direct Communication",
      directDesc: "For the fastest response, feel free to send a message on Telegram.",
      connectTelegram: "Connect via Telegram",
      telegramButton: "Connect via Telegram",
      followInstagram: "Follow on Instagram",
      instagramButton: "My Instagram Profile",
      copyUsername: "Copy handle",
      copied: "Copied!",
      locationNote: "Tashkent, Uzbekistan",
      statusBadge: "Open to learning and collaborative ideas",
    },
    footer: {
      rights: "© 2026 Ahathanov Muhammadyusuf. All rights reserved.",
      builtWith: "Built with React + TypeScript",
      focus: "Developer & Automotive Content Creator",
    },
  },
};
