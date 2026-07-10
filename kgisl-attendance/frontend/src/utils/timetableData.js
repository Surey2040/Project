export const TIME_SLOTS = {
  1: '9.10 - 10.00',
  2: '10.00 - 10.50',
  3: '11.10 - 12.00',
  4: '12.00 - 12.50',
  5: '1.40 - 2.30',
  6: '2.30 - 3.20',
  7: '3.30 - 4.20'
};

export const DAY_ORDERS = ['I', 'II', 'III', 'IV', 'V'];

// Timetable format:
// facultyEmail: { DayOrder: [ { period: [1, 2], subject: 'Subject Code', batch: 'Batch Name' } ] }
// Example: { "yemunaranekumaravel@gmail.com": { "II": [{ period: [1], subject: 'CC', batch: 'II MCA A' }] } }

export const FACULTY_TIMETABLE = {
  // Yemunarane Kumaravel (KY)
  'yemunaranekumaravel@gmail.com': {
    'I': [],
    'II': [
      { period: [1], subject: 'CC', batch: 'II MCA A' },
    ],
    'III': [
      { period: [4], subject: 'CC', batch: 'II MCA A' },
    ],
    'IV': [
      { period: [1, 2], subject: 'CC', batch: 'II MCA C' },
      { period: [4], subject: 'CC', batch: 'II MCA C' },
    ],
    'V': [
      { period: [2], subject: 'CC', batch: 'II MCA A' },
    ]
  },

  // Surendren (DS)
  'surendren@gmail.com': {
    'I': [
      { period: [1, 2], subject: 'AI,ML', batch: 'II MCA C' },
    ],
    'II': [
      { period: [1, 2], subject: 'CC', batch: 'II MCA B' },
    ],
    'III': [
      { period: [1, 2], subject: 'AI,ML LAB', batch: 'II MCA C' },
      { period: [3], subject: 'AI,ML LAB', batch: 'II MCA C' },
    ],
    'IV': [
      { period: [3], subject: 'AI,ML', batch: 'II MCA C' },
    ],
    'V': [
      { period: [1], subject: 'CC', batch: 'II MCA B' },
    ]
  },

  // Gomathi R (RG / GR)
  'gomathi@gmail.com': {
    'I': [
      { period: [1], subject: 'PHP', batch: 'II MCA A' },
      { period: [1], subject: 'NSC', batch: 'II MCA B' }, // Note: 1&2 are merged in image? Let's assume 1
      { period: [3, 4], subject: 'PHP', batch: 'II MCA C' },
    ],
    'II': [
      { period: [2], subject: 'NSC', batch: 'II MCA A' },
      { period: [1, 2], subject: 'OSC', batch: 'II MCA C' },
    ],
    'III': [
      { period: [1], subject: 'PHP', batch: 'II MCA B' },
      { period: [4], subject: 'NSC', batch: 'II MCA B' },
      { period: [4], subject: 'OSC', batch: 'II MCA C' },
    ],
    'IV': [
      { period: [2], subject: 'PHP', batch: 'II MCA A' },
      { period: [4], subject: 'NSC', batch: 'II MCA A' },
      { period: [4], subject: 'PHP', batch: 'II MCA B' },
    ],
    'V': [
      { period: [1], subject: 'NSC', batch: 'II MCA A' },
    ]
  },

  // Saranya S (SS)
  'saranya@gmail.com': {
    'I': [
      { period: [2], subject: 'OSC', batch: 'II MCA A' },
    ],
    'II': [
      { period: [3, 4], subject: 'NSC', batch: 'II MCA C' },
    ],
    'III': [
      { period: [2], subject: 'OSC', batch: 'II MCA B' },
      { period: [3], subject: 'OSC', batch: 'II MCA B' },
    ],
    'IV': [
      { period: [1], subject: 'OSC', batch: 'II MCA A' },
      { period: [3], subject: 'OSC', batch: 'II MCA A' },
    ],
    'V': [
      { period: [2], subject: 'OSC', batch: 'II MCA B' },
      { period: [4], subject: 'NSC', batch: 'II MCA C' },
    ]
  },

  // Technical Team (TECH)
  'teachnicalteam@gmail.com': {
    'I': [
      { period: [6], subject: 'TECH', batch: 'II MCA A' },
      { period: [7], subject: 'TECH', batch: 'II MCA A' },
      { period: [6], subject: 'TECH', batch: 'II MCA B' },
      { period: [7], subject: 'TECH', batch: 'II MCA B' },
      { period: [6], subject: 'TECH', batch: 'II MCA C' },
      { period: [7], subject: 'TECH', batch: 'II MCA C' },
    ],
    'II': [
      { period: [6], subject: 'TECH', batch: 'II MCA A' },
      { period: [7], subject: 'TECH', batch: 'II MCA A' },
      { period: [6], subject: 'TECH', batch: 'II MCA B' },
      { period: [7], subject: 'TECH', batch: 'II MCA B' },
      { period: [6], subject: 'TECH', batch: 'II MCA C' },
      { period: [7], subject: 'TECH', batch: 'II MCA C' },
    ],
    'III': [
      { period: [6], subject: 'TECH', batch: 'II MCA A' },
      { period: [7], subject: 'TECH', batch: 'II MCA A' },
      { period: [6], subject: 'TECH', batch: 'II MCA B' },
      { period: [7], subject: 'TECH', batch: 'II MCA B' },
      { period: [6], subject: 'TECH', batch: 'II MCA C' },
      { period: [7], subject: 'TECH', batch: 'II MCA C' },
    ],
    'IV': [
      { period: [6], subject: 'TECH', batch: 'II MCA A' },
      { period: [7], subject: 'TECH', batch: 'II MCA A' },
      { period: [6], subject: 'TECH', batch: 'II MCA B' },
      { period: [7], subject: 'TECH', batch: 'II MCA B' },
      { period: [6], subject: 'TECH', batch: 'II MCA C' },
      { period: [7], subject: 'TECH', batch: 'II MCA C' },
    ],
    'V': [
      { period: [7], subject: 'TECH', batch: 'II MCA A' },
      { period: [7], subject: 'TECH', batch: 'II MCA B' },
      { period: [7], subject: 'TECH', batch: 'II MCA C' },
    ]
  },

  // Aptitude Team (PLAC)
  'aptitudeteam@gmail.com': {
    'I': [
      { period: [5], subject: 'PLAC', batch: 'II MCA A' },
      { period: [5], subject: 'PLAC', batch: 'II MCA B' },
      { period: [5], subject: 'PLAC', batch: 'II MCA C' },
    ],
    'II': [
      { period: [5], subject: 'PLAC', batch: 'II MCA A' },
      { period: [5], subject: 'PLAC', batch: 'II MCA B' },
      { period: [5], subject: 'PLAC', batch: 'II MCA C' },
    ],
    'III': [
      { period: [5], subject: 'PLAC', batch: 'II MCA A' },
      { period: [5], subject: 'PLAC', batch: 'II MCA B' },
      { period: [5], subject: 'PLAC', batch: 'II MCA C' },
    ],
    'IV': [
      { period: [5], subject: 'PLAC', batch: 'II MCA A' },
      { period: [5], subject: 'PLAC', batch: 'II MCA B' },
      { period: [5], subject: 'PLAC', batch: 'II MCA C' },
    ],
    'V': [
      { period: [5], subject: 'PLAC', batch: 'II MCA A' },
      { period: [6], subject: 'PLAC', batch: 'II MCA A' },
      { period: [5], subject: 'PLAC', batch: 'II MCA B' },
      { period: [6], subject: 'PLAC', batch: 'II MCA B' },
      { period: [5], subject: 'PLAC', batch: 'II MCA C' },
      { period: [6], subject: 'PLAC', batch: 'II MCA C' },
    ]
  },

  // Unknown KP
  'kp@kgisliim.ac.in': {
    'I': [
      { period: [3, 4], subject: 'AI,ML', batch: 'II MCA A' },
      { period: [3, 4], subject: 'AI,ML', batch: 'II MCA B' },
    ],
    'II': [
      { period: [3, 4], subject: 'AI,ML', batch: 'II MCA A' },
      { period: [3, 4], subject: 'AI,ML', batch: 'II MCA B' },
    ],
    'III': [],
    'IV': [],
    'V': [
      { period: [3, 4], subject: 'AI,ML', batch: 'II MCA A' },
      { period: [3, 4], subject: 'AI,ML', batch: 'II MCA B' },
    ]
  },

  // Unknown MC
  'mc@kgisliim.ac.in': {
    'I': [],
    'II': [],
    'III': [
      { period: [1, 2], subject: 'OSC LAB', batch: 'II MCA A' },
      { period: [3], subject: 'OSC LAB', batch: 'II MCA A' },
    ],
    'IV': [
      { period: [1, 2], subject: 'OSC LAB', batch: 'II MCA B' },
      { period: [3], subject: 'OSC LAB', batch: 'II MCA B' },
    ],
    'V': [
      { period: [1, 2], subject: 'OSC LAB', batch: 'II MCA C' },
      { period: [3], subject: 'OSC LAB', batch: 'II MCA C' },
    ]
  }
};
