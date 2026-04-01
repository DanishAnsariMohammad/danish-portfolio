import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const outputDir = path.resolve('public');
const outputPath = path.join(outputDir, 'Mohammad_Danish_Ansari_Resume.pdf');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const doc = new PDFDocument({
  size: 'A4',
  margin: 50,
  info: {
    Title: 'Mohammad Danish Ansari Resume',
    Author: 'Mohammad Danish Ansari',
    Subject: 'React Native Developer Resume',
  },
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const palette = {
  heading: '#0F172A',
  body: '#334155',
  accent: '#2563EB',
  muted: '#64748B',
};

const profile = {
  name: 'Mohammad Danish Ansari',
  title: 'React Native Developer',
  location: 'India',
  email: 'danishouz@gmail.com',
  phone: '+91 74002 55185',
  linkedin: 'linkedin.com/in/ansari-danish-3a2b2720b',
  github: 'github.com/DanishAnsariMohammad',
  gitlab: 'gitlab.com/danishouz',
};

const summary =
  'React Native Developer with proven experience shipping production-grade Android and cross-platform applications in civic tech, enterprise, education, and consumer domains. Strong ownership across product planning, implementation, performance optimization, and release management with a focus on scalable architecture and user-centered UX.';

const skills = [
  'React Native',
  'TypeScript',
  'Expo',
  'React Navigation',
  'Redux / Zustand',
  'JavaScript (ES6+)',
  'Android Build & Release',
  'REST APIs',
  'Firebase',
  'Git / GitHub',
  'Figma / Zeplin',
];

const highlights = [
  'Delivered 12+ production mobile applications published on Google Play.',
  'Built products across civic tech, enterprise operations, HRMS, education, lifestyle, and fitness domains.',
  'Consistently improved usability and reliability in real-world, mobile-first workflows.',
  'Hands-on ownership from implementation to release coordination and iterative improvements.',
];

const experience = [
  {
    role: 'React Native Developer',
    company: 'Freelance / Product Delivery',
    period: '2022 - Present',
    points: [
      'Designed and developed production mobile apps with reusable architecture and scalable screen flows.',
      'Integrated APIs, authentication, and role-based workflows for civic and enterprise use cases.',
      'Collaborated with stakeholders to convert requirements into stable, user-friendly mobile journeys.',
      'Managed Play Store release cycles, QA fixes, and post-release iteration planning.',
    ],
  },
];

const selectedProjects = [
  {
    name: 'BMC VHD',
    points: [
      'Civic workflow app for verification and structured records.',
      'Shipped production release on Google Play.',
    ],
  },
  {
    name: 'GO-HRMS',
    points: [
      'HRMS mobile app supporting attendance and workforce visibility.',
      'Production rollout focused on operational efficiency.',
    ],
  },
  {
    name: 'Questpix JEE (Main & Advanced)',
    points: [
      'EdTech app for JEE preparation with practice-focused workflows.',
      'Published app with strong user feedback and adoption.',
    ],
  },
  {
    name: 'Biocrux',
    points: [
      'Lifestyle app positioned as a 360-degree mobile experience.',
      'Published on Play Store with 10K+ downloads.',
    ],
  },
];

function divider(y) {
  doc
    .moveTo(50, y)
    .lineTo(545, y)
    .lineWidth(1)
    .strokeColor('#E2E8F0')
    .stroke();
}

function sectionTitle(title) {
  doc
    .moveDown(0.5)
    .font('Helvetica-Bold')
    .fontSize(11)
    .fillColor(palette.accent)
    .text(title, { continued: false });
  divider(doc.y + 4);
  doc.moveDown(0.5);
}

doc.font('Helvetica-Bold').fontSize(24).fillColor(palette.heading).text(profile.name);
doc.moveDown(0.15);
doc.font('Helvetica-Bold').fontSize(13).fillColor(palette.accent).text(profile.title);
doc.moveDown(0.4);

doc
  .font('Helvetica')
  .fontSize(10)
  .fillColor(palette.body)
  .text(`${profile.location} | ${profile.phone} | ${profile.email}`)
  .text(`${profile.linkedin} | ${profile.github} | ${profile.gitlab}`);

sectionTitle('PROFESSIONAL SUMMARY');
doc.font('Helvetica').fontSize(10.5).fillColor(palette.body).text(summary, {
  align: 'left',
  lineGap: 2,
});

sectionTitle('KEY SKILLS');
doc
  .font('Helvetica')
  .fontSize(10.5)
  .fillColor(palette.body)
  .text(skills.join(' | '), { lineGap: 2 });

sectionTitle('CAREER HIGHLIGHTS');
for (const item of highlights) {
  doc
    .font('Helvetica')
    .fontSize(10.5)
    .fillColor(palette.body)
    .text(`- ${item}`, { lineGap: 2 });
}

sectionTitle('PROFESSIONAL EXPERIENCE');
for (const item of experience) {
  doc
    .font('Helvetica-Bold')
    .fontSize(10.8)
    .fillColor(palette.heading)
    .text(`${item.role} | ${item.company}`);

  doc
    .font('Helvetica-Oblique')
    .fontSize(9.8)
    .fillColor(palette.muted)
    .text(item.period);

  for (const point of item.points) {
    doc
      .font('Helvetica')
      .fontSize(10.2)
      .fillColor(palette.body)
      .text(`- ${point}`, { indent: 10, lineGap: 2 });
  }

  doc.moveDown(0.3);
}

sectionTitle('SELECTED PROJECTS');
for (const project of selectedProjects) {
  doc
    .font('Helvetica-Bold')
    .fontSize(10.8)
    .fillColor(palette.heading)
    .text(project.name);

  for (const point of project.points) {
    doc
      .font('Helvetica')
      .fontSize(10.3)
      .fillColor(palette.body)
      .text(`- ${point}`, { indent: 10, lineGap: 2 });
  }

  doc.moveDown(0.3);
}

sectionTitle('ADDITIONAL INFORMATION');
doc
  .font('Helvetica')
  .fontSize(10.2)
  .fillColor(palette.muted)
  .text('Status: Available for work')
  .text('Specialization: Cross-platform React Native apps')
  .text('Portfolio showcases published products across multiple industries.');

doc.end();

stream.on('finish', () => {
  // eslint-disable-next-line no-console
  console.log(`Resume PDF created: ${outputPath}`);
});
