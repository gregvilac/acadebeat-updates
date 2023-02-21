import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  prisma.language.deleteMany();
  //Create Languages
  await prisma.language.createMany({
    data: [
      {
        name: "日本語",
        code: "ja",
        neural: true,
        targetQuote: "日本語プログラムへようこそ。よろしくお願いします。",
        nativeQuote: "私はすでに完璧に日本語を話します！",
        rtl: false,
      },
      {
        name: "한국어",
        code: "ko",
        neural: true,
        targetQuote:
          "한국어 프로그램에 오신 것을 환영합니다. 우리는 당신을 기쁘게 생각합니다.",
        nativeQuote: "나는 이미 한국어를 완벽하게 구사합니다!",
        rtl: false,
      },
      {
        name: "español",
        code: "es",
        neural: true,
        targetQuote:
          "Bienvenido a nuestro programa de español. Estamos felices de tenerte.",
        nativeQuote: "Ya hablo español perfectamente.",
        rtl: false,
        targetQuoteMarks: `{"time":137,"type":"word","start":0,"end":10,"value":"Bienvenido"}
        {"time":750,"type":"word","start":11,"end":12,"value":"a"}
        {"time":812,"type":"word","start":13,"end":20,"value":"nuestro"}
        {"time":1125,"type":"word","start":21,"end":29,"value":"programa"}
        {"time":1562,"type":"word","start":30,"end":32,"value":"de"}
        {"time":1637,"type":"word","start":33,"end":41,"value":"español"}
        {"time":2742,"type":"word","start":43,"end":50,"value":"Estamos"}
        {"time":3167,"type":"word","start":51,"end":58,"value":"felices"}
        {"time":3605,"type":"word","start":59,"end":61,"value":"de"}
        {"time":3730,"type":"word","start":62,"end":69,"value":"tenerte"}`,
      },
      {
        name: "italiano",
        code: "it",
        neural: true,
        targetQuote:
          "Benvenuti nel nostro programma italiano. Siamo felici di averti.",
        nativeQuote: "Parlo già perfettamente l'italiano!",
        rtl: false,
        targetQuoteMarks: `{"time":25,"type":"word","start":0,"end":9,"value":"Benvenuti"}
        {"time":575,"type":"word","start":10,"end":13,"value":"nel"}
        {"time":725,"type":"word","start":14,"end":20,"value":"nostro"}
        {"time":1025,"type":"word","start":21,"end":30,"value":"programma"}
        {"time":1437,"type":"word","start":31,"end":39,"value":"italiano"}
        {"time":2442,"type":"word","start":41,"end":46,"value":"Siamo"}
        {"time":2730,"type":"word","start":47,"end":53,"value":"felici"}
        {"time":3105,"type":"word","start":54,"end":56,"value":"di"}
        {"time":3180,"type":"word","start":57,"end":63,"value":"averti"}`,
      },
      {
        name: "Русский",
        code: "ru",
        neural: false,
        targetQuote: "Добро пожаловать в нашу русскоязычную программу.",
        nativeQuote: "Я уже говорю по-русски в совершенстве.",
        rtl: false,
      },
      {
        name: "Français",
        code: "fr",
        neural: true,
        targetQuote:
          "Bienvenue dans notre programme de français. Nous sommes heureux de vous avoir.",
        nativeQuote: "Je parle déjà parfaitement le français.",
        rtl: false,
        targetQuoteMarks: `{"time":137,"type":"word","start":0,"end":9,"value":"Bienvenue"}
        {"time":687,"type":"word","start":10,"end":14,"value":"dans"}
        {"time":750,"type":"word","start":15,"end":20,"value":"notre"}
        {"time":1062,"type":"word","start":21,"end":30,"value":"programme"}
        {"time":1462,"type":"word","start":31,"end":33,"value":"de"}
        {"time":1562,"type":"word","start":34,"end":43,"value":"français"}
        {"time":2617,"type":"word","start":45,"end":49,"value":"Nous"}
        {"time":2792,"type":"word","start":50,"end":56,"value":"sommes"}
        {"time":2980,"type":"word","start":57,"end":64,"value":"heureux"}
        {"time":3230,"type":"word","start":65,"end":67,"value":"de"}
        {"time":3417,"type":"word","start":68,"end":72,"value":"vous"}
        {"time":3517,"type":"word","start":73,"end":78,"value":"avoir"}`,
      },
      {
        name: "Polsku",
        code: "pl",
        neural: true,
        targetQuote:
          "Witamy w naszym polskim programie. Cieszymy się, że cię mamy.",
        nativeQuote: "Mówię już doskonale po polsku.",
        rtl: false,
        targetQuoteMarks: `{"time":187,"type":"word","start":0,"end":6,"value":"Witamy"}
        {"time":562,"type":"word","start":7,"end":8,"value":"w"}
        {"time":625,"type":"word","start":9,"end":15,"value":"naszym"}
        {"time":1000,"type":"word","start":16,"end":23,"value":"polskim"}
        {"time":1462,"type":"word","start":24,"end":33,"value":"programie"}
        {"time":2680,"type":"word","start":35,"end":43,"value":"Cieszymy"}
        {"time":3142,"type":"word","start":44,"end":48,"value":"się"}
        {"time":3480,"type":"word","start":50,"end":53,"value":"że"}
        {"time":3605,"type":"word","start":54,"end":58,"value":"cię"}
        {"time":3792,"type":"word","start":59,"end":63,"value":"mamy"}`,
      },
      {
        name: "English",
        code: "en",
        neural: true,
        targetQuote:
          "Welcome to our English program. We are happy to have you.",
        nativeQuote: "My English is perfect already!",
        rtl: false,
        targetQuoteMarks: `{"time":25,"type":"word","start":0,"end":7,"value":"Welcome"}
        {"time":350,"type":"word","start":8,"end":10,"value":"to"}
        {"time":450,"type":"word","start":11,"end":14,"value":"our"}
        {"time":650,"type":"word","start":15,"end":22,"value":"English"}
        {"time":912,"type":"word","start":23,"end":30,"value":"program"}
        {"time":1942,"type":"word","start":32,"end":34,"value":"We"}
        {"time":2067,"type":"word","start":35,"end":38,"value":"are"}
        {"time":2130,"type":"word","start":39,"end":44,"value":"happy"}
        {"time":2367,"type":"word","start":45,"end":47,"value":"to"}
        {"time":2442,"type":"word","start":48,"end":52,"value":"have"}
        {"time":2667,"type":"word","start":53,"end":56,"value":"you"}`,
      },
      {
        name: "中文",
        code: "zh",
        neural: true,
        targetQuote: "欢迎来到我们的中文节目。我们很高兴在这里见到你。",
        nativeQuote: "我已经能说一口流利的中文了。",
        rtl: false,
      },
      {
        name: "हिंदी",
        code: "hi",
        neural: true,
        targetQuote: "क्या आप हिंदी सीखना चाहते हैं? यहाँ शामिल होएं!",
        nativeQuote: "मेरी हिंदी पहले से ही परिपूर्ण है!",
        rtl: false,
      },
      {
        name: "اللغة العربية",
        code: "ar",
        neural: false,
        targetQuote: "انضم لبرنامجنا العربي. حقق أهدافك التعليمية.",
        nativeQuote: "لغتي العربية رائعة! يمكنني مساعدة الآخرين على التعلم.",
        rtl: true,
      },
      {
        name: "Deutsch",
        code: "de",
        neural: true,
        targetQuote:
          "Willkommen zu unserem Deutschprogramm. Wir freuen uns, Sie zu haben.",
        nativeQuote: "Ich spreche bereits perfekt Deutsch.",
        rtl: false,
        targetQuoteMarks: `{"time":37,"type":"word","start":0,"end":10,"value":"Willkommen"}
        {"time":625,"type":"word","start":11,"end":13,"value":"zu"}
        {"time":812,"type":"word","start":14,"end":21,"value":"unserem"}
        {"time":1137,"type":"word","start":22,"end":37,"value":"Deutschprogramm"}
        {"time":2405,"type":"word","start":39,"end":42,"value":"Wir"}
        {"time":2617,"type":"word","start":43,"end":49,"value":"freuen"}
        {"time":2992,"type":"word","start":50,"end":53,"value":"uns"}
        {"time":3367,"type":"word","start":55,"end":58,"value":"Sie"}
        {"time":3567,"type":"word","start":59,"end":61,"value":"zu"}
        {"time":3742,"type":"word","start":62,"end":67,"value":"haben"}`,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
