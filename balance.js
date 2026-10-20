// Snapshot of src/config.ts, verified 2026-10-20. No game code is loaded by the wiki.
export const balance = {
  "units": {
    "civilian": {
      "name": "Житель",
      "cost": 0,
      "hp": 35,
      "damage": 0,
      "range": 0,
      "speed": 55,
      "train": 0,
      "upkeep": 0,
      "food": 0.055
    },
    "militia": {
      "name": "Ополченец",
      "cost": 18,
      "hp": 65,
      "damage": 9,
      "range": 17,
      "speed": 62,
      "train": 7,
      "upkeep": 0.066,
      "food": 0.07
    },
    "archer": {
      "name": "Лучник",
      "cost": 30,
      "hp": 48,
      "damage": 7,
      "range": 115,
      "speed": 58,
      "train": 9,
      "upkeep": 0.084,
      "food": 0.07
    },
    "spearman": {
      "name": "Копейщик",
      "cost": 30,
      "hp": 85,
      "damage": 11,
      "range": 24,
      "speed": 58,
      "train": 8,
      "upkeep": 0.075,
      "food": 0.07
    },
    "crossbow": {
      "name": "Арбалетчик",
      "cost": 48,
      "hp": 65,
      "damage": 12,
      "range": 130,
      "speed": 51,
      "train": 11,
      "upkeep": 0.096,
      "food": 0.07
    },
    "ballista": {
      "name": "Баллиста",
      "cost": 113,
      "hp": 125,
      "damage": 16,
      "range": 180,
      "speed": 32,
      "train": 18,
      "upkeep": 0.165,
      "food": 0.1
    },
    "swordsman": {
      "name": "Мечник",
      "cost": 30,
      "hp": 95,
      "damage": 12,
      "range": 17,
      "speed": 58,
      "train": 9,
      "upkeep": 0.072,
      "food": 0.07
    },
    "knight": {
      "name": "Рыцарь",
      "cost": 68,
      "hp": 155,
      "damage": 18,
      "range": 22,
      "speed": 85,
      "train": 14,
      "upkeep": 0.135,
      "food": 0.1
    },
    "transport": {
      "name": "Транспорт",
      "cost": 80,
      "hp": 230,
      "damage": 0,
      "range": 0,
      "speed": 90,
      "train": 14,
      "upkeep": 0.105,
      "food": 0.04,
      "naval": true
    },
    "warship": {
      "name": "Боевой корабль",
      "cost": 130,
      "hp": 360,
      "damage": 18,
      "range": 190,
      "speed": 75,
      "train": 20,
      "upkeep": 0.195,
      "food": 0.06,
      "naval": true
    },
    "sailor": {
      "name": "Моряк",
      "cost": 24,
      "hp": 85,
      "damage": 11,
      "range": 24,
      "speed": 58,
      "train": 8,
      "upkeep": 0.075,
      "food": 0.07
    },
    "harpooner": {
      "name": "Гарпунщик",
      "cost": 35,
      "hp": 95,
      "damage": 12,
      "range": 17,
      "speed": 58,
      "train": 9,
      "upkeep": 0.072,
      "food": 0.07
    },
    "coastalBallista": {
      "name": "Береговая баллиста",
      "cost": 90,
      "hp": 175,
      "damage": 16,
      "range": 230,
      "speed": 32,
      "train": 18,
      "upkeep": 0.165,
      "food": 0.1
    }
  },
  "buildings": {
    "capital": {
      "name": "Главное здание",
      "icon": "♜",
      "cost": 160,
      "hp": 1500,
      "radius": 210,
      "size": 28,
      "work": 36,
      "slots": 0,
      "description": "12 мест для жителей · рост каждые 24 с · +0,7 монеты/с · 120 еды"
    },
    "farm": {
      "name": "Ферма",
      "icon": "♧",
      "cost": 65,
      "hp": 550,
      "radius": 130,
      "size": 23,
      "work": 20,
      "slots": 5,
      "description": "5 работников · 2/2,5/3/3,5 еды/с по уровням · улучшение за 65 монет · только плодородная земля"
    },
    "lumber": {
      "name": "Лесопилка",
      "icon": "♠",
      "cost": 85,
      "hp": 550,
      "radius": 145,
      "size": 22,
      "work": 22,
      "slots": 10,
      "description": "До 10 работников · один на дерево в радиусе 160 · +0,24 монеты/с за работающее дерево · лимит по уровням: 10/15/20/без ограничения"
    },
    "fishery": {
      "name": "Рыбацкий причал",
      "icon": "⚓",
      "cost": 65,
      "hp": 500,
      "radius": 130,
      "size": 20,
      "work": 24,
      "slots": 5,
      "description": "Только берег · 5 работников · до +0,75 еды/с и +0,6 монеты/с"
    },
    "barracks": {
      "name": "Казарма",
      "icon": "⚔",
      "cost": 105,
      "hp": 850,
      "radius": 145,
      "size": 25,
      "work": 28,
      "slots": 0,
      "description": "Наём войск · очередь и автоповтор"
    },
    "lab": {
      "name": "Центр исследований",
      "icon": "⌘",
      "cost": 115,
      "hp": 650,
      "radius": 130,
      "size": 23,
      "work": 26,
      "slots": 0,
      "description": "Три ветки развития · одна технология на империю"
    },
    "house": {
      "name": "Жилой дом",
      "icon": "⌂",
      "cost": 55,
      "hp": 420,
      "radius": 105,
      "size": 18,
      "work": 16,
      "slots": 0,
      "description": "8 мест для жителей · рост каждые 34 с"
    },
    "warehouse": {
      "name": "Склад",
      "icon": "▤",
      "cost": 80,
      "hp": 650,
      "radius": 110,
      "size": 22,
      "work": 22,
      "slots": 0,
      "description": "+400 к вместимости еды · цивилизация I"
    },
    "port": {
      "name": "Порт",
      "icon": "≋",
      "cost": 100,
      "hp": 950,
      "radius": 155,
      "size": 28,
      "work": 32,
      "slots": 0,
      "description": "Транспорт и боевые корабли · цивилизация I · только берег"
    },
    "coastalBattery": {
      "name": "Береговая батарея",
      "icon": "♜",
      "cost": 160,
      "hp": 170,
      "radius": 100,
      "size": 20,
      "work": 10,
      "slots": 0,
      "description": "Только корабли и транспорты · урон 90 · интервал 1 с · DPS 90 · дальность 220 · без содержания и усилений · на границе берега"
    }
  },
  "factions": {
    "commune": {
      "name": "Всеобщая мобилизационная община",
      "short": "Община",
      "icon": "⚑",
      "description": "Жители появляются на 25% чаще, дома вмещают на 30% больше людей. На старте — 6 строителей. Пользуется дешёвыми и слабыми бойцами, восполняя качество численностью. Казарма может мобилизовать жителя в ополченца за 13 монет при входе в её радиус, сохраняя минимум 35 жителей. Подходит для массовой армии и быстрого расселения.",
      "gold": 1,
      "growth": 1.25,
      "startingBuilders": 6,
      "cap": 1.3,
      "recruit": 0.7,
      "upkeep": 1,
      "construction": 1,
      "research": "none"
    },
    "league": {
      "name": "Торговая лига",
      "short": "Лига",
      "icon": "◈",
      "description": "Все здания приносят на 15% больше монет. Экономические исследования идут на 30% быстрее. Армия дороже по сравнению с другими классами: уязвима в начале, но получает денежное преимущество с развитием производства.",
      "gold": 1.15,
      "growth": 1,
      "startingBuilders": 5,
      "cap": 1,
      "recruit": 1,
      "upkeep": 1,
      "construction": 1,
      "research": "economy"
    },
    "order": {
      "name": "Орден стали",
      "short": "Орден",
      "icon": "✦",
      "description": "Бойцы имеют высокую боевую способность и превосходят обычные войска по здоровью и урону. Денежное содержание армии ниже на 35%. Военные исследования идут на 30% быстрее. Исследования экономики и цивилизации стоят на 15% дороже и длятся на 15% дольше.",
      "gold": 1,
      "growth": 1,
      "startingBuilders": 5,
      "cap": 1,
      "recruit": 1,
      "upkeep": 0.65,
      "construction": 1,
      "research": "military"
    },
    "waterman": {
      "name": "Морская держава Водников",
      "short": "Водники",
      "icon": "⚓",
      "description": "Порт доступен с начала игры и стоит 80 монет — скидка 20%. Транспортные и боевые корабли движутся на 30% быстрее, а транспорт стоит 40 монет. Войско: моряки, гарпунщики и береговые баллисты против кораблей.",
      "gold": 1,
      "growth": 1,
      "startingBuilders": 5,
      "cap": 1,
      "recruit": 1,
      "upkeep": 1,
      "construction": 1,
      "research": "none"
    }
  },
  "tech": {
    "military": {
      "name": "Военное дело",
      "icon": "⚔",
      "levels": [
        {
          "name": "Стрелковые отряды",
          "description": "Открывает лучников или арбалетчиков · боевой урон +8% (итого)",
          "cost": 125,
          "duration": 45
        },
        {
          "name": "Военная специализация",
          "description": "Лига: баллисты · Орден: рыцари · Община: усиление ополчения и лучников · боевой урон +16% (итого)",
          "cost": 220,
          "duration": 65
        },
        {
          "name": "Закалённая армия",
          "description": "Боевой урон +24% (итого), максимальное здоровье всех наземных бойцов +15% · существующие бойцы долечиваются до нового предела",
          "cost": 320,
          "duration": 80
        }
      ]
    },
    "civilization": {
      "name": "Цивилизация",
      "icon": "⌂",
      "levels": [
        {
          "name": "Поселения и мореплавание",
          "description": "Порт и склад · улучшение домов · Макс. кол-во строителей на здание: 6 · скорость появления новых жителей в домах и главном здании +10% (итого)",
          "cost": 100,
          "duration": 35
        },
        {
          "name": "Городское устройство",
          "description": "Макс. кол-во строителей на здание: 7 · потребление еды −12% · вместимость жилья +15% · скорость появления новых жителей в домах и главном здании +10% (итого)",
          "cost": 175,
          "duration": 55
        },
        {
          "name": "Сеть поселений",
          "description": "Макс. кол-во строителей на здание: 8 · потребление еды −24% · вместимость жилья +15% · скорость появления новых жителей в домах и главном здании +20% (итого)",
          "cost": 260,
          "duration": 70
        }
      ]
    },
    "economy": {
      "name": "Экономика",
      "icon": "◈",
      "levels": [
        {
          "name": "Ремесло и промыслы",
          "description": "Улучшения ферм, лесопилок и причалов · денежный доход лесопилок и причалов +5%",
          "cost": 100,
          "duration": 35
        },
        {
          "name": "Торговые пути",
          "description": "Следующий уровень улучшений · денежный доход лесопилок и причалов +10%",
          "cost": 180,
          "duration": 55
        },
        {
          "name": "Процветание",
          "description": "Последний уровень улучшений · денежный доход лесопилок и причалов +15%",
          "cost": 280,
          "duration": 75
        }
      ]
    }
  },
  "factionStats": {
    "commune": {
      "militia": {
        "hp": 55.25,
        "damage": 7.65
      },
      "archer": {
        "hp": 40.8,
        "damage": 5.95
      }
    },
    "order": {
      "swordsman": {
        "hp": 109.25,
        "damage": 13.8
      },
      "archer": {
        "hp": 55.2,
        "damage": 8.05
      },
      "knight": {
        "hp": 178.25,
        "damage": 20.7
      }
    }
  },
  "rosters": {
    "commune": [
      "militia",
      "archer"
    ],
    "league": [
      "spearman",
      "crossbow",
      "ballista"
    ],
    "order": [
      "swordsman",
      "archer",
      "knight"
    ],
    "waterman": [
      "sailor",
      "harpooner",
      "coastalBallista"
    ]
  }
};
