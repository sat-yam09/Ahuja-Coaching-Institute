import { Course, FacultyMember, ResultStudent, Testimonial, GalleryItem, Branch, FAQItem } from '../types';

export const scoreboardStats = [
  { value: '27+', label: 'Years Excellence Legacy', icon: 'GraduationCap' },
  { value: '22,000+', label: 'Students Guided', icon: 'Award' },
  { value: '2', label: 'Ahmedabad Campuses (Maninagar & Vastral)', icon: 'BookOpen' },
];

export const heroStats = [
  { value: '27+ Yrs', label: 'Excellence Legacy (Est. 1998)' },
  { value: '22,000+', label: 'Students Guided' },
  { value: '2 Branches', label: 'Maninagar & Vastral' },
];

export const facultyStats = [
  { value: '27+', label: 'Years Teaching Legacy' },
  { value: '22,000+', label: 'Students Mentored' },
  { value: '1-on-1', label: 'Dedicated Doubt Support' },
  { value: '100%', label: 'Commitment to Clarity' },
];

export const aboutStats = [
  { value: '27+ Yrs', label: 'Excellence Legacy' },
  { value: '22,000+', label: 'Students Guided' },
  { value: '2 Branches', label: 'Maninagar & Vastral' },
];

export const tickerResults = [
  { name: 'Saloni Vaghela', score: '100/100', exam: '12th Science Maths' },
  { name: 'Krisha Vaghela', score: '100/100', exam: '12th Science Chemistry' },
  { name: 'Smit Parikh', score: '99.38%tile', exam: 'JEE Main' },
  { name: 'Keval Dholakiya', score: '99.28%tile', exam: 'JEE Main' },
  { name: 'Ved Pandit', score: '645/720', exam: 'NEET UG' },
  { name: 'Dhairya Sheth', score: '645/720', exam: 'NEET UG' },
  { name: 'Darshil Bhati', score: '98.62%tile', exam: '10th GSEB Board' },
  { name: 'Priyanshu Prajapati', score: '98.31%tile', exam: '10th GSEB Board' },
];

export const coursesData: Course[] = [
  {
    id: 'science-11-12',
    title: '11th & 12th Science',
    tag: 'English & Gujarati Medium',
    category: 'Science Board',
    targetExam: 'GSEB / CBSE Boards + JEE / NEET',
    shortDesc: 'Comprehensive theory coverage, extensive numerical solving, Daily Practice Problems (DPPs), and chapter-wise tests.',
    badge: '01/04',
    stats: {
      stat1: '100/100 Perfect Scores in Maths & Chem',
      stat2: 'Offline, Online & Recorded Modes',
      stat3: 'Daily Practice Problems (DPPs)',
    },
    facultyHead: 'Dedicated Science & Entrance Experts',
    timings: 'Afternoon/Evening: 3:00 PM - 9:00 PM',
    testingFrequency: 'Chapter-wise & Weekly Assessment Tests',
    syllabus: [
      {
        subject: 'Physics',
        topics: ['Mechanics & Kinematics', 'Thermodynamics & Heat', 'Electromagnetism & Circuits', 'Optics & Wave Motion', 'Modern Physics & Semiconductors'],
      },
      {
        subject: 'Chemistry',
        topics: ['Organic Reaction Mechanisms', 'Inorganic Periodic Properties', 'Physical Chemistry Numerical Drills', 'Biomolecules & Coordination Chemistry'],
      },
      {
        subject: 'Mathematics',
        topics: ['Calculus & Differential Equations', 'Coordinate Geometry & Vectors', 'Algebra & Matrices', 'Trigonometry & Probability'],
      },
      {
        subject: 'Biology',
        topics: ['Human Physiology & Health', 'Genetics & Molecular Biology', 'Plant Physiology & Photosynthesis', 'Ecology & Environment'],
      },
    ],
    features: [
      'Comprehensive board and entrance theory coverage',
      'Extensive numerical solving with step-by-step guidance',
      'Daily Practice Problems (DPPs) with continuous evaluation',
      'Chapter-wise tests and regular performance tracking',
      'Available in Offline, Online & Recorded lecture formats',
    ],
  },
  {
    id: 'commerce-11-12',
    title: '11th & 12th Commerce',
    tag: 'English & Gujarati Medium',
    category: 'Commerce Board',
    targetExam: 'GSEB / CBSE Boards (Offline Batches Only)',
    shortDesc: 'Practical numerical solving, case studies, and board-pattern practice tests across Accountancy, Economics, Statistics & B.A.',
    badge: '02/04',
    stats: {
      stat1: 'GSEB / CBSE Board Specialization',
      stat2: 'Practical Numerical Problem Solving',
      stat3: 'Board-Pattern Practice Tests',
    },
    facultyHead: 'Senior Commerce & Accountancy Faculty',
    timings: 'Afternoon/Evening: 3:00 PM - 9:00 PM',
    testingFrequency: 'Fortnightly & Full Syllabus Mock Tests',
    syllabus: [
      {
        subject: 'Accountancy',
        topics: ['Financial Accounting Principles', 'Partnership Accounts & Goodwill', 'Company Accounts & Share Capital', 'Financial Statement Analysis'],
      },
      {
        subject: 'Economics',
        topics: ['Micro & Macro Economics', 'Indian Economic Development', 'Money & Banking', 'National Income & Inflation Dynamics'],
      },
      {
        subject: 'Statistics',
        topics: ['Index Numbers & Linear Correlation', 'Probability & Random Variables', 'Sampling Techniques & Normal Distribution'],
      },
      {
        subject: 'Business Administration (B.A.) & English',
        topics: ['Management Principles & Planning', 'Marketing & Financial Management', 'Business Communication & Formal English Writing'],
      },
    ],
    features: [
      'Dedicated coverage of Accountancy, Economics, Statistics, B.A. & English',
      'Hands-on practical numerical problem solving and balance sheet mastery',
      'Case study workshops for concept application in real business scenarios',
      'Rigorous board-pattern practice test series for 100/100 scoring',
      'Exclusive high-focus Offline classroom batch structure',
    ],
  },
  {
    id: 'competitive-jee-neet',
    title: 'JEE / NEET Competitive Prep',
    tag: 'JEE Main/Adv & NEET UG',
    category: 'JEE/NEET',
    targetExam: 'JEE Main, JEE Advanced & NEET UG (Offline + Online & Recorded)',
    shortDesc: 'Topic-wise test series, past paper analysis, speed & accuracy strategies, and special 1-on-1 doubt clearing.',
    badge: '03/04',
    stats: {
      stat1: '99.38%tile Top JEE Scorer',
      stat2: '645/720 Top NEET UG Rankers',
      stat3: 'Special 1-on-1 Doubt Clearing',
    },
    facultyHead: 'Senior JEE & NEET Mentor Panel',
    timings: 'Afternoon/Evening: 3:00 PM - 9:00 PM',
    testingFrequency: 'Topic-wise & All-India Pattern Test Series',
    syllabus: [
      {
        subject: 'JEE Physics & Maths Track',
        topics: ['Advanced Mechanics & Electrodynamics', 'Calculus, Vectors & 3D Geometry', 'Speed-Accuracy Timed Drills', 'Previous 10 Years Question Bank Analysis'],
      },
      {
        subject: 'NEET Physics, Chemistry & Biology Track',
        topics: ['NCERT Line-by-Line Mastery', 'High-Yield Organic & Physical Chemistry Numerical Drills', 'Botanical & Zoological Conceptual Diagrams', 'Assertion-Reason Exam Drills'],
      },
    ],
    features: [
      'Comprehensive topic-wise test series simulating real NTA exam conditions',
      'In-depth past paper analysis and negative marking elimination strategies',
      'Speed and accuracy drills for high question-per-minute efficiency',
      'Special 1-on-1 doubt clearing desks with senior mentors',
      'Available in Offline, Online, and Recorded lecture modes',
    ],
  },
  {
    id: 'foundation-6-10',
    title: '6th to 10th Secondary Foundation',
    tag: 'English Medium',
    category: 'Junior Foundation',
    targetExam: 'Strong Academic Base & School Board Success (Offline Batches)',
    shortDesc: 'Fundamental clarity in Science & Maths, regular homework monitoring, and interactive learning.',
    badge: '04/04',
    stats: {
      stat1: '98.62%tile 10th GSEB Board Top Rank',
      stat2: '99.25% 8th Std Foundation Star',
      stat3: 'Daily Homework & Progress Monitoring',
    },
    facultyHead: 'Secondary Foundation Specialist Educators',
    timings: 'Afternoon/Evening: 3:00 PM - 8:30 PM',
    testingFrequency: 'Regular Unit & Cumulative Term Tests',
    syllabus: [
      {
        subject: 'Mathematics & Mental Ability',
        topics: ['Number Systems & Algebra Fundamentals', 'Geometry & Mensuration', 'Logical Reasoning & Analytical Puzzles', 'Speed Calculation Techniques'],
      },
      {
        subject: 'Science (Physics, Chemistry, Biology)',
        topics: ['Fundamental Physics Concepts & Motion', 'Basic Chemistry & Matter Elements', 'Living Organisms & Cellular Structure', 'Interactive Practical Demonstrations'],
      },
    ],
    features: [
      'Deep fundamental concept clarity in Science and Mathematics',
      'Regular homework monitoring and daily practice habit cultivation',
      'Interactive, engaging learning that sparks curiosity and confidence',
      'Small batch size for dedicated personal attention',
      'Focused Offline batch model for disciplined classroom learning',
    ],
  },
];

export const facultyMembers: FacultyMember[] = [
  {
    id: 'director-faculty',
    name: 'Academic Leadership & Mentors',
    role: 'Experienced Subject-Matter Experts',
    category: 'Leadership',
    experience: '27+ years',
    education: 'Senior Subject Masters',
    bio: 'Guided by the founding philosophy of Late R.A. Ahuja Sir since 1998, our teaching educators provide continuous mentorship, structured doubt resolution, and step-by-step concept building.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    specialization: ['Continuous Mentorship', 'Structured Doubt Resolution', 'Step-by-Step Concept Building'],
    achievements: ['27+ Years Excellence Legacy', 'Guided over 22,000+ students across Gujarat'],
  },
  {
    id: 'science-lead',
    name: 'Senior Science & Engineering Mentors',
    role: '11th & 12th Science and JEE/NEET Faculty',
    category: 'JEE/NEET',
    experience: '15+ years',
    education: 'M.Sc / M.Tech / Subject Specialists',
    bio: 'Specializing in deep numerical problem solving, Daily Practice Problems (DPPs), and exam-oriented speed and accuracy drills.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    specialization: ['Physics Mechanics & Optics', 'Chemistry Mechanisms', 'Advanced Mathematics'],
    achievements: ['Produced 100/100 Board Scorers', '99.38%tile JEE Main Mentorship'],
  },
  {
    id: 'commerce-lead',
    name: 'Senior Commerce & Accountancy Mentors',
    role: '11th & 12th Commerce Faculty',
    category: 'Science Board',
    experience: '15+ years',
    education: 'M.Com, Chartered Educators',
    bio: 'Specialists in Accountancy, Economics, Statistics, and Business Administration. Famed for practical problem solving and board-pattern masterclasses.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    specialization: ['Accountancy & Balance Sheets', 'Economics Analysis', 'Statistical Correlations'],
    achievements: ['Outstanding Board Distinction Record', 'Top Commerce Achievers in Ahmedabad'],
  },
  {
    id: 'foundation-lead',
    name: 'Secondary Foundation Mentors',
    role: '6th to 10th Foundation Educators',
    category: 'Junior Division',
    experience: '12+ years',
    education: 'B.Ed, M.Sc (Science & Maths)',
    bio: 'Dedicated to building strong academic fundamentals, logical reasoning, and regular study habits for school board success.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    specialization: ['Maths Fundamental Clarity', 'Science Experiments', 'Daily Homework Supervision'],
    achievements: ['Mentored 98.62%tile 10th GSEB Topper', 'Strong Foundation Building'],
  },
];

export const resultStudents: ResultStudent[] = [
  // 12th Science Subject Toppers
  {
    id: 'maths-1',
    name: 'Saloni Vaghela',
    score: '100/100',
    exam: '12th Science (Mathematics)',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: 'Scored perfect 100/100 in 12th Science Mathematics with Ahuja Institute’s concept-first drills!',
  },
  {
    id: 'chem-1',
    name: 'Krisha Vaghela',
    score: '100/100',
    exam: '12th Science (Chemistry)',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Vastral Branch',
    quote: 'Achieved a flawless 100/100 in Chemistry through regular DPPs and chapter-wise test series.',
  },
  {
    id: 'maths-2',
    name: 'Rishabh Rajput',
    score: '100/100',
    exam: '12th Science (Mathematics)',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: 'Scored 100/100 in Maths & 96/100 in Chemistry! Dedicated tutor support resolved all doubts.',
  },
  {
    id: 'maths-3',
    name: 'Mann Prajapati',
    score: '100/100',
    exam: '12th Science (Mathematics)',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Vastral Branch',
    quote: 'Perfect 100/100 in Mathematics! The structured mini-tests built great exam temperament.',
  },
  {
    id: 'maths-4',
    name: 'Mann Desai',
    score: '100/100',
    exam: '12th Science (Mathematics)',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: '100/100 in Maths and 96/100 in Chemistry. Step-by-step concept building made all the difference.',
  },
  {
    id: 'bio-1',
    name: 'Chandravati Gupta',
    score: '98/100',
    exam: '12th Science (Biology)',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: 'Top score of 98/100 in Biology. NCERT line-by-line coverage and diagrams were top tier.',
  },
  {
    id: 'phy-1',
    name: 'Smit Parikh',
    score: '97/100',
    exam: '12th Science (Physics)',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: 'Scored 97/100 in Physics and 99.38%tile in JEE Main!',
  },

  // JEE Main & NEET Top Ranks
  {
    id: 'jee-1',
    name: 'Smit Parikh',
    score: '99.38%tile',
    exam: 'JEE Main High Scorer',
    category: 'JEE',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: '99.38%tile in JEE Main! Topic-wise test series and past paper analysis were game changers.',
  },
  {
    id: 'jee-2',
    name: 'Keval Dholakiya',
    score: '99.28%tile',
    exam: 'JEE Main High Scorer',
    category: 'JEE',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Vastral Branch',
    quote: 'Achieved 99.28%tile in JEE Main through continuous personalized mentorship.',
  },
  {
    id: 'jee-3',
    name: 'Shivam Bhatt',
    score: '98.85%tile',
    exam: 'JEE Main (95/100 Physics)',
    category: 'JEE',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: '98.85%tile in JEE Main and 95/100 in Board Physics!',
  },
  {
    id: 'neet-1',
    name: 'Ved Pandit',
    score: '645/720',
    exam: 'NEET UG High Scorer',
    category: 'NEET',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: 'Scored 645/720 in NEET UG! The continuous evaluation and daily MCQs helped immensely.',
  },
  {
    id: 'neet-2',
    name: 'Dhairya Sheth',
    score: '645/720',
    exam: 'NEET UG High Scorer',
    category: 'NEET',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Vastral Branch',
    quote: 'Scored 645/720 in NEET UG! 1-on-1 doubt clearing gave me total confidence.',
  },
  {
    id: 'neet-3',
    name: 'Nakshatra Shah',
    score: '575/720',
    exam: 'NEET UG High Scorer',
    category: 'NEET',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: '575/720 in NEET UG! Step-by-step guidance made complex medical concepts simple.',
  },

  // 10th Board (2024-25) & Foundation High Achievers
  {
    id: 'gseb-1',
    name: 'Darshil Bhati',
    score: '98.62%tile',
    exam: '10th GSEB Board Topper',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: '98.62%tile in 10th GSEB Board! Foundation classes at Ahuja gave me a huge head start.',
  },
  {
    id: 'gseb-2',
    name: 'Priyanshu Prajapati',
    score: '98.31%tile',
    exam: '10th GSEB Board Topper',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Vastral Branch',
    quote: '98.31%tile in 10th GSEB! Regular homework monitoring and mini-tests kept me consistent.',
  },
  {
    id: 'gseb-3',
    name: 'Preaksha Patel',
    score: '97.27%tile',
    exam: '10th GSEB Board Topper',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: '97.27%tile in 10th GSEB! Individual progress tracking boosted my weaker subjects.',
  },
  {
    id: 'found-1',
    name: 'Navya Patel',
    score: '99.25%',
    exam: '8th Std Foundation Star',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: '99.25% in 8th Grade Foundation! Maths and Science fundamentals became crystal clear.',
  },
  {
    id: 'found-2',
    name: 'Yashvi Patel',
    score: '96.75%',
    exam: '9th Std Foundation Star',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Vastral Branch',
    quote: '96.75% in 9th Grade! Interactive learning made science fun and intuitive.',
  },
  {
    id: 'found-3',
    name: 'Jeel Patel',
    score: '92.75%',
    exam: '7th Std Foundation Star',
    category: 'Board',
    year: '2024-25',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    instituteBranch: 'Maninagar Head Office',
    quote: '92.75% in 7th Grade! Daily study habits and discipline formed early.',
  },
];

export const teachingApproach = [
  {
    id: '1',
    title: 'Experienced Faculty',
    description: 'Learn from dedicated subject-matter experts with decades of teaching excellence.',
    icon: 'BookOpenCheck',
  },
  {
    id: '2',
    title: 'Mini Test System & Daily MCQs',
    description: 'Daily exam-oriented practice to master speed, accuracy, and paper-solving techniques.',
    icon: 'LineChart',
  },
  {
    id: '3',
    title: 'Dedicated Tutor Support',
    description: 'Experienced tutor faculty available continuously to resolve doubts on the spot.',
    icon: 'FileText',
  },
  {
    id: '4',
    title: 'Personalized Attention',
    description: 'Individual progress tracking to strengthen weak areas and build student confidence.',
    icon: 'RotateCcw',
  },
];

export const institutionalPillars = [
  {
    title: 'Experienced Faculty',
    desc: 'Learn from dedicated subject-matter experts with decades of teaching excellence.',
    icon: 'Presentation',
  },
  {
    title: 'Mini Test System & Daily MCQs',
    desc: 'Daily exam-oriented practice to master speed, accuracy, and paper-solving techniques.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Dedicated Tutor Support',
    desc: 'Experienced tutor faculty available continuously to resolve doubts on the spot.',
    icon: 'MessageSquare',
  },
  {
    title: 'Personalized Attention',
    desc: 'Individual progress tracking to strengthen weak areas and build student confidence.',
    icon: 'TrendingUp',
  },
  {
    title: 'Conceptual Mastery',
    desc: 'Focusing on deep understanding of fundamentals rather than rote memorization.',
    icon: 'Sparkles',
  },
  {
    title: 'Discipline & Consistency',
    desc: 'Cultivating daily study habits, regular testing, and continuous evaluation.',
    icon: 'Users',
  },
];

export const journeyTimeline = [
  {
    year: '1998',
    title: 'Humble Beginnings in Ghodasar',
    desc: 'Founded by Late R.A. Ahuja Sir with a humble home setup in Ghodasar, driven by an unwavering passion for quality education.',
  },
  {
    year: '2005',
    title: 'Expansion to Jawaharchowk',
    desc: 'Expanded into Jawaharchowk, introducing structured batch systems and specialized board & competitive preparation tracks.',
  },
  {
    year: '2014',
    title: 'Vastral Flagship Campus',
    desc: 'Established the prominent Vastral branch on Nirant Cross Road with dedicated lecture halls and tutor support desks.',
  },
  {
    year: '2020',
    title: 'Maninagar Head Office & Digital Prep',
    desc: 'Opened modern Head Office at Takshshila Square, Krishnabaug Cross Road, integrating smart classrooms and hybrid learning.',
  },
  {
    year: '2025',
    title: '27+ Years of Excellence Legacy',
    desc: 'Over 22,000+ students guided with hundreds of 100/100 perfect scores and top JEE/NEET percentiles across Gujarat.',
  },
];

export const learningSpaces: GalleryItem[] = [
  {
    id: 'ls-1',
    title: 'Maninagar Head Office Campus',
    category: 'Smart Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800',
    description: '4th Floor Takshshila Square, Krishnabaug Cross Road, equipped with modern interactive learning setups and dedicated doubt desks.',
  },
  {
    id: 'ls-2',
    title: 'Vastral Branch Classrooms',
    category: 'Smart Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    description: '502 Avadh Pride, Nirant Cross Road, offering spacious lecture halls, daily mini-test sessions, and personal mentoring rooms.',
  },
  {
    id: 'ls-3',
    title: 'Dedicated Tutor Doubt Desks',
    category: 'Student Life',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    description: 'Experienced tutor faculty available continuously to resolve student queries on the spot one-on-one.',
  },
  {
    id: 'ls-4',
    title: 'Daily MCQ & Mini Test Drills',
    category: 'Labs',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    description: 'Exam-oriented daily testing environment to master speed, accuracy, and negative marking elimination.',
  },
  {
    id: 'ls-5',
    title: 'High Achievers & Toppers Felicitation',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
    description: 'Celebrating 100/100 board scorers, JEE Main 99+ percentilers, and NEET high rankers alongside proud parents.',
  },
  {
    id: 'ls-6',
    title: 'Concept Study Library',
    category: 'Student Life',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive study materials, Daily Practice Problems (DPPs), past 10-year paper archives, and formula maps.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Parent of Saloni Vaghela',
    role: 'Parent',
    quote: 'Ahuja Career Institute gave my daughter the perfect environment to score 100/100 in 12th Science Mathematics. The mini-test system is unmatched.',
    examOrChildExam: '12th Science Maths 100/100',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 't-2',
    name: 'Parent of Smit Parikh',
    role: 'Parent',
    quote: 'From 12th Board Physics (97/100) to JEE Main (99.38%tile), the faculty’s dedicated tutor support was available whenever he had a doubt.',
    examOrChildExam: 'JEE Main 99.38%tile',
    avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 't-3',
    name: 'Ved Pandit',
    role: 'Student',
    quote: 'Scoring 645/720 in NEET UG was possible because of daily MCQs and personal attention on my weak areas. Forever grateful to Ahuja Sir’s legacy.',
    examOrChildExam: 'NEET UG 645/720',
    avatarUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=200',
  },
];

export const branches: Branch[] = [
  {
    id: 'maninagar',
    name: 'Maninagar Head Office',
    address: '4th Floor, Takshshila Square, Opp. Sankalp Restaurant, Krishnabaug Cross Road, Maninagar, Ahmedabad.',
    phone: '74053 28676 / 97243 28989 / (079) 48909397',
    email: 'info@ahujacareerinstitute.com',
    timing: '3:00 PM - 9:00 PM (Mon - Sat)',
    isMainBranch: true,
    whatsappLink: 'https://wa.me/917405328676?text=Hello%20Ahuja%20Career%20Institute%20Maninagar%20Head%20Office',
    mapsUrl: 'https://maps.google.com/?q=Takshshila+Square+Krishnabaug+Cross+Road+Maninagar+Ahmedabad',
  },
  {
    id: 'vastral',
    name: 'Vastral Branch',
    address: '502, 5th Floor, Avadh Pride, Opp. Metro Pillar No. 140, Nirant Cross Road, Vastral, Ahmedabad.',
    phone: '97243 19900 / 98792 28189 / (079) 48909398',
    email: 'vastral@ahujacareerinstitute.com',
    timing: '3:00 PM - 9:00 PM (Mon - Sat)',
    whatsappLink: 'https://wa.me/919724319900?text=Hello%20Ahuja%20Career%20Institute%20Vastral%20Branch',
    mapsUrl: 'https://maps.google.com/?q=Avadh+Pride+Nirant+Cross+Road+Vastral+Ahmedabad',
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'Are offline and online batches separate?',
    answer: 'Online mode consists of recorded lectures of the live offline classroom sessions, ensuring online students receive the exact same quality, pacing, and curriculum coverage as offline students.',
  },
  {
    question: 'Do you provide demo classes?',
    answer: 'No, we do not offer demo classes.',
  },
  {
    question: 'How are doubt sessions conducted?',
    answer: 'Doubt sessions are conducted one-on-one with faculty members or during dedicated weekend sessions.',
  },
  {
    question: 'What are the batch timings?',
    answer: 'Most batches run in the afternoon/evening between 3:00 PM and 9:00 PM.',
  },
];
