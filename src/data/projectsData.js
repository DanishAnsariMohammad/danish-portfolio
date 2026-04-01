const altimateDeveloperUrl =
  'https://play.google.com/store/apps/developer?id=ALTIMATE+INTEGRATED+SOLUTIONS+PRIVATE+LIMITED&hl=en_IN';
const gOrdinateurDeveloperUrl =
  'https://play.google.com/store/apps/developer?id=G-Ordinateur+PVT+LTD&hl=en_IN';

const challengeLibrary = {
  'Civic Tech': [
    'Handling unreliable network in field workflows without losing captured records.',
    'Designing verification flows that are fast for officers and clear for citizens.',
    'Maintaining consistent behavior across many Android device variants.',
  ],
  Enterprise: [
    'Mapping complex business approvals into mobile-first user journeys.',
    'Reducing manual steps while preserving role-based controls and traceability.',
    'Ensuring stable performance with large operational datasets.',
  ],
  Business: [
    'Balancing brand storytelling with practical app utility and speed.',
    'Keeping navigation simple while covering multiple service touchpoints.',
    'Improving first-use clarity for non-technical users.',
  ],
  Identity: [
    'Managing camera and liveness checks across diverse phone hardware.',
    'Reducing false negatives in onboarding while preserving security.',
    'Providing clear error states for identity verification failures.',
  ],
  Spiritual: [
    'Creating calm, distraction-free flows with a simple information hierarchy.',
    'Supporting broad user demographics with approachable UI language.',
    'Optimizing media and content loading for low-bandwidth usage.',
  ],
  Utility: [
    'Collecting structured feedback quickly in high-turnover field scenarios.',
    'Improving form completion rates with minimal user friction.',
    'Keeping report exports readable and actionable for operations teams.',
  ],
  Lifestyle: [
    'Aligning the app UX with an evolving brand and product direction.',
    'Improving retention through consistent navigation and personalized content.',
    'Reducing crash points on older Android devices.',
  ],
  Education: [
    'Presenting large question banks without overwhelming learners.',
    'Making practice flows fast enough for repeat daily sessions.',
    'Tracking progress clearly across topics and difficulty levels.',
  ],
  Fitness: [
    'Designing scheduling and booking flows that are quick in real-world gym usage.',
    'Balancing coach/member features in a single mobile experience.',
    'Preventing drop-offs during onboarding and first booking.',
  ],
};

const solutionLibrary = {
  'Civic Tech': [
    'Implemented resilient API handling and retry-friendly request patterns.',
    'Refined flow steps with clear progress indicators and concise action labels.',
    'Added defensive UI handling and QA passes across common Android form factors.',
  ],
  Enterprise: [
    'Translated process maps into modular mobile screens and reusable components.',
    'Introduced role-aware actions and audit-friendly status transitions.',
    'Optimized data rendering and pagination for smoother day-to-day operations.',
  ],
  Business: [
    'Created focused home and service discovery layouts with clear primary actions.',
    'Used reusable UI blocks to maintain visual consistency across service modules.',
    'Improved onboarding copy and cues to reduce first-session confusion.',
  ],
  Identity: [
    'Standardized camera guidance states for better capture success rates.',
    'Added robust validation and actionable error guidance for users.',
    'Instrumented critical flows for monitoring and faster issue triage.',
  ],
  Spiritual: [
    'Used minimalist UI patterns with high readability and clear content grouping.',
    'Improved loading behavior with optimized assets and request sequencing.',
    'Prioritized accessibility-minded spacing and touch targets.',
  ],
  Utility: [
    'Simplified form structure and reduced non-essential input fields.',
    'Added stronger validation cues and instant confirmation feedback.',
    'Organized output for easier downstream reporting and analysis.',
  ],
  Lifestyle: [
    'Refreshed key screens to align product utility with brand identity.',
    'Introduced consistent navigation patterns and interaction feedback.',
    'Stabilized high-traffic screens and improved startup performance.',
  ],
  Education: [
    'Segmented practice journeys by topic and exam mode for clarity.',
    'Optimized question transitions and answer interactions for speed.',
    'Built clearer progress surfaces to encourage regular usage.',
  ],
  Fitness: [
    'Redesigned booking and timetable interactions to reduce tap depth.',
    'Created role-sensitive UI cues for members and trainers.',
    'Improved onboarding progression with lightweight guidance steps.',
  ],
};

const resultLibrary = {
  'Civic Tech': [
    'Improved field efficiency and faster day-to-day verification cycles.',
    'Better clarity for frontline teams using the app in production.',
    'Reliable published mobile experience used in operational contexts.',
  ],
  Enterprise: [
    'Smoother internal coordination for distributed teams.',
    'Higher process visibility with clearer lifecycle states.',
    'Reduced operational friction in repeat workflows.',
  ],
  Business: [
    'Stronger service discoverability and app usability.',
    'More coherent product presentation across modules.',
    'Production-ready release quality for business stakeholders.',
  ],
  Identity: [
    'More dependable onboarding journeys in identity-sensitive flows.',
    'Higher confidence in verification UX and reliability.',
    'Reduced support overhead from clearer failure handling.',
  ],
  Spiritual: [
    'Accessible and focused experience for community usage.',
    'Improved content reach across varying network conditions.',
    'Stable production release for recurring spiritual engagement.',
  ],
  Utility: [
    'Faster feedback collection in service environments.',
    'Cleaner reports for teams acting on user feedback.',
    'Higher completion consistency in short-form workflows.',
  ],
  Lifestyle: [
    'Improved user engagement in consumer-facing journeys.',
    'Clearer value proposition through polished app flows.',
    'Stronger production stability after performance refinements.',
  ],
  Education: [
    'Better learner continuity through guided practice paths.',
    'Faster study interactions for repeat exam preparation.',
    'Positive user adoption signals in published release cycles.',
  ],
  Fitness: [
    'Quicker bookings and smoother class participation flows.',
    'More intuitive trainer-member coordination in-app.',
    'Improved first-session completion for new users.',
  ],
};

const defaultChallenges = [
  'Converting product requirements into dependable mobile workflows.',
  'Balancing performance, usability, and delivery timelines.',
  'Ensuring consistent quality across a range of devices.',
];

const defaultSolutions = [
  'Used modular React Native components with iterative QA feedback loops.',
  'Applied production-minded UX decisions to reduce friction points.',
  'Shipped incremental improvements based on real usage patterns.',
];

const defaultResults = [
  'Delivered a stable release with practical user value.',
  'Improved workflow efficiency for the target audience.',
  'Established a maintainable base for future iterations.',
];

const baseProjects = [
  {
    id: 1,
    title: 'BMC VHD',
    category: 'Civic Tech',
    publisher: 'Altimate Integrated Solutions',
    description:
      'A field-ready civic workflow app built for fast verification, structured record capture, and smoother public-service operations on mobile.',
    tags: ['React Native', 'Mobile Forms', 'Verification', 'Production'],
    highlights: ['Google Play release', 'Operational workflow', 'Fast verification'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.vhdbmc&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/bmc-vhd.png',
    accent: 'linear-gradient(135deg, #0f766e 0%, #38bdf8 100%)',
    monogram: 'BV',
  },
  {
    id: 2,
    title: 'My UMC',
    category: 'Civic Tech',
    publisher: 'Altimate Integrated Solutions',
    description:
      'A citizen and utility-oriented app experience centered around identity-driven flows, streamlined access, and mobile-first public service interactions.',
    tags: ['React Native', 'Authentication', 'Service Access', 'Production'],
    highlights: ['Published app', 'Identity-first UX', 'Cross-platform delivery'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.biometricface&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/my-umc.png',
    accent: 'linear-gradient(135deg, #1d4ed8 0%, #8b5cf6 100%)',
    monogram: 'MU',
  },
  {
    id: 3,
    title: 'UMC Contractual App',
    category: 'Enterprise',
    publisher: 'Altimate Integrated Solutions',
    description:
      'An internal operations app for contractual teams with structured task handling, workforce visibility, and mobile-first coordination.',
    tags: ['React Native', 'Enterprise', 'Team Workflow', 'Production'],
    highlights: ['Operational efficiency', 'Internal workflow', 'Published release'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.umc.contractapp&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/umc-contractual.png',
    accent: 'linear-gradient(135deg, #0f172a 0%, #2563eb 100%)',
    monogram: 'UC',
  },
  {
    id: 4,
    title: 'Visitor Management',
    category: 'Enterprise',
    publisher: 'Altimate Integrated Solutions',
    description:
      'A secure visitor handling app that supports check-in flows, approvals, and mobile record management for organizations.',
    tags: ['React Native', 'Security', 'Approvals', 'Production'],
    highlights: ['Visitor logs', 'Approval flow', 'Business utility'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.techaltimate.visitormanagement&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/visitor-management.png',
    accent: 'linear-gradient(135deg, #334155 0%, #06b6d4 100%)',
    monogram: 'VM',
  },
  {
    id: 5,
    title: 'Tech Altimate',
    category: 'Business',
    publisher: 'Altimate Integrated Solutions',
    description:
      'A business-facing mobile product that consolidates services, access points, and company touchpoints into one polished app experience.',
    tags: ['React Native', 'Business App', 'Services', 'Production'],
    highlights: ['Brand experience', 'Service discovery', 'Published release'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.techaltimate.app&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/tech-altimate.png',
    accent: 'linear-gradient(135deg, #111827 0%, #ec4899 100%)',
    monogram: 'TA',
  },
  {
    id: 6,
    title: 'Liveness',
    category: 'Identity',
    publisher: 'Altimate Integrated Solutions',
    description:
      'A mobile identity verification experience focused on liveness and trust flows, built for reliable onboarding and validation journeys.',
    tags: ['React Native', 'Face Verification', 'Identity', 'Production'],
    highlights: ['Trust workflow', 'Identity validation', 'Published app'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.livepraman&hl=en_IN',
    developerUrl: altimateDeveloperUrl,
    image: '/project-icons/liveness.png',
    accent: 'linear-gradient(135deg, #7c3aed 0%, #f43f5e 100%)',
    monogram: 'LI',
  },
  {
    id: 7,
    title: 'GO-HRMS',
    category: 'Enterprise',
    publisher: 'G-Ordinateur PVT LTD',
    description:
      'A human resource management mobile app for attendance, team visibility, and day-to-day workforce processes.',
    tags: ['React Native', 'HRMS', 'Attendance', 'Production'],
    highlights: ['HR workflow', 'Workforce visibility', 'Published release'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.gopl&hl=en_IN',
    developerUrl: gOrdinateurDeveloperUrl,
    image: '/project-icons/go-hrms.png',
    accent: 'linear-gradient(135deg, #1e293b 0%, #14b8a6 100%)',
    monogram: 'GH',
  },
  {
    id: 8,
    title: 'Prayers for All',
    category: 'Spiritual',
    publisher: 'G-Ordinateur PVT LTD',
    description:
      'A devotional mobile experience for prayer-focused engagement, spiritual access, and simple user journeys across devices.',
    tags: ['React Native', 'Temple App', 'Community', 'Production'],
    highlights: ['Temple use case', 'Simple UX', 'Published on Play Store'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.tampleprayer&hl=en_IN',
    developerUrl: gOrdinateurDeveloperUrl,
    image: '/project-icons/prayers-for-all.png',
    accent: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    monogram: 'PA',
  },
  {
    id: 9,
    title: 'Feedback',
    category: 'Utility',
    publisher: 'G-Ordinateur PVT LTD',
    description:
      'A lightweight feedback collection app designed for service-quality capture, faster reporting, and mobile-first responses in the field.',
    tags: ['React Native', 'Forms', 'Reporting', 'Production'],
    highlights: ['Fast feedback capture', 'Reporting flow', 'Public-service utility'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.railwayfeedback&hl=en_IN',
    developerUrl: gOrdinateurDeveloperUrl,
    image: '/project-icons/feedback.png',
    accent: 'linear-gradient(135deg, #0f172a 0%, #f97316 100%)',
    monogram: 'FB',
  },
  {
    id: 10,
    title: 'Biocrux',
    category: 'Lifestyle',
    publisher: 'Biocrux',
    description:
      'A lifestyle product for the Biocrux ecosystem, positioned as a 360-degree digital experience for people connected to nature-focused services.',
    tags: ['React Native', 'Lifestyle', 'Consumer App', 'Production'],
    highlights: ['10K+ downloads', 'Published on Google Play', 'Consumer-facing product'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=biocrux.co&hl=en_IN',
    developerUrl: 'https://play.google.com/store/apps/details?id=biocrux.co&hl=en_IN',
    image: '/project-icons/biocrux.png',
    accent: 'linear-gradient(135deg, #166534 0%, #84cc16 100%)',
    monogram: 'BX',
  },
  {
    id: 11,
    title: 'Questpix JEE (Main & Advanced)',
    category: 'Education',
    publisher: 'Questpix',
    description:
      'An exam-prep mobile app built to help JEE students access questions, practice material, and fast answer workflows in a focused learning experience.',
    tags: ['React Native', 'EdTech', 'Exam Prep', 'Production'],
    highlights: ['5K+ downloads', '4.8 rating', 'Published on Google Play'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.questpix.app&hl=en_IN',
    developerUrl: 'https://play.google.com/store/apps/details?id=com.questpix.app&hl=en_IN',
    image: '/project-icons/questpix.png',
    accent: 'linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)',
    monogram: 'QP',
  },
  {
    id: 12,
    title: 'Groupfit',
    category: 'Fitness',
    publisher: 'GroupFit Technologies Inc.',
    description:
      'A fitness and member-engagement app focused on schedules, class participation, and an energetic mobile experience for active communities.',
    tags: ['React Native', 'Fitness', 'In-Person Training', 'Production'],
    highlights: ['Published on Google Play', '30+ activities', 'Book certified trainers'],
    status: 'Published',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.newcustomer&hl=en_IN',
    developerUrl: 'https://play.google.com/store/apps/dev?id=5050495648852538480',
    image: '/project-icons/groupfit.png',
    accent: 'linear-gradient(135deg, #111827 0%, #22c55e 100%)',
    monogram: 'GF',
  },
];

function toSlug(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const projects = baseProjects.map((project) => {
  const issuesFaced = challengeLibrary[project.category] ?? defaultChallenges;
  const solutions = solutionLibrary[project.category] ?? defaultSolutions;
  const results = resultLibrary[project.category] ?? defaultResults;

  return {
    ...project,
    slug: toSlug(project.title),
    issuesFaced,
    solutions,
    results,
  };
});

export const categories = ['All', ...new Set(projects.map((project) => project.category))];
