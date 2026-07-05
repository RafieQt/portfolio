// ---------------- CONTENT & CONFIG ----------------
// Edit this file to update text, links, skills, and project info.
// No need to touch the components for content changes.

export const EMAIL = "tajuddinrafi76@gmail.com";
export const PHONE = "+8801602076400";
export const WHATSAPP = "8801602076400";
export const GITHUB_URL = "https://github.com/RafieQt";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/taj-uddin-ahmed-rafi-b4258634a/";

// TODO(Rafi): replace with your unlisted YouTube video ID once ready
// (the part after "v=" in a YouTube URL)
export const YOUTUBE_ID = "";

// TODO(Rafi): replace with the hosted path/link to your resume PDF once ready
export const RESUME_URL = "#";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

// Each skill can have an icon `slug` (from simple-icons, https://simpleicons.org)
// and a brand `color` hex (no #). If the slug doesn't resolve to a real icon,
// SkillIcon automatically falls back to a placeholder you can swap out later.
export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "Python", slug: "python", color: "3776AB" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "000000" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "React Router", slug: "reactrouter", color: "CA4245" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Express.js", slug: "express", color: "4E220F" },
    ],
  },
  {
    category: "Databases & ORMs",
    items: [
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "Prisma", slug: "prisma", color: "2D3748" },
    ],
  },
  {
    category: "Auth & Payments",
    items: [
      { name: "JWT", slug: "jsonwebtokens", color: "F30158" },
      { name: "Firebase Auth", slug: "firebase", color: "FFCA28" },
      { name: "Stripe", slug: "stripe", color: "635BFF" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", slug: "git", color: "F05032" },
      {
        name: "VS Code",
        icon: "https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000",
      },
      {
        name: "Antigravity",
        icon: "https://cdn.jsdelivr.net/gh/selfhst/icons/png/google-antigravity.png",
      },
      { name: "Cursor", slug: "cursor", color: "" },
    ],
  },
];

// TODO(Rafi): drop a real image URL into any project's `image` field
// (a screenshot hosted on imgbb/Cloudinary, or a raw GitHub link) and it
// will replace the placeholder automatically. Leave it as '' to keep it.
export const PROJECTS = [
  {
    id: "citysync",
    name: "CitySync",
    tagline:
      "Civic issue-reporting platform for citizens and local authorities",
    image: "",
    description:
      "CitySync lets citizens report local infrastructure problems -- potholes, broken streetlights, waste issues -- and track their resolution in real time. It features role-based dashboards for citizens, municipal staff, and admins, JWT-based authentication, and Stripe payments for priority processing.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
    ],
    live: "https://citysync-client.web.app/",
    github: "https://github.com/RafieQt/citySync-client",
    challenges:
      "Tracking down a production bug where Stripe payment records were inserted twice, causing customers to be double-charged, and fixing it at the source. Coordinating a decoupled deployment -- Firebase for the frontend, Vercel for the backend -- also meant scripting a manual pre-deploy build step, since Firebase doesn't auto-build the way Vercel does.",
    improvements:
      "Push notifications for report status changes, an admin analytics dashboard for city-wide issue trends, and migrating image uploads from imgbb to a more robust store like Cloudinary.",
  },
  {
    id: "zapper",
    name: "Zapper",
    tagline: "Parcel delivery platform with live service-area mapping",
    image: "",
    description:
      "Zapper connects users, riders, and admins through role-based workflows for parcel delivery. It uses Leaflet for interactive real-time service-area maps, Firebase Authentication for onboarding, and Stripe for payments across the delivery lifecycle.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase Auth",
      "Stripe",
      "Leaflet",
    ],
    live: "https://zapper-15e50.web.app/",
    github: "https://github.com/RafieQt/zap-client",
    challenges:
      "Managing map state across multiple user roles for the real-time coverage view, and designing the rider approval workflow -- from application to active assignment -- so status transitions stayed consistent without race conditions.",
    improvements:
      "Live GPS tracking for active deliveries, in-app chat between riders and customers, and a post-delivery ratings system.",
  },
  {
    id: "toytopia",
    name: "Toytopia",
    tagline: "Responsive storefront UI with Firebase authentication",
    image: "",
    description:
      "Toytopia is a toy storefront front-end featuring Firebase authentication (including Google Sign-In), protected routes, and a fully responsive UI with carousels and marquee sections.",
    stack: [
      "React",
      "Firebase",
      "React Router DOM",
      "Tailwind CSS",
      "Date-fns",
    ],
    live: "https://toytopia-f6d65.web.app/",
    github: "https://github.com/RafieQt/ToyTopia",
    challenges:
      "Handling Firebase's async auth listener cleanly so protected routes didn't flicker between authenticated and unauthenticated states while the session was still resolving on page load.",
    improvements:
      "A persistent shopping cart, a checkout flow with a real payment gateway, and an admin panel for managing product listings.",
  },
];

export const EDUCATION = [
  {
    school: "American International University, Bangladesh",
    degree: "BSc in Computer Science and Engineering",
    time: "Sep 2022 -- Present",
  },
  {
    school: "Dhaka Imperial College",
    degree: "Higher Secondary Certificate (HSC)",
    time: "2019 -- 2021",
  },
];

export const CERTIFICATIONS = [
  "IELTS -- Band 7.5",
  "Programming Hero -- Web Development Level 1",
  "Scrimba -- Learn TypeScript",
];
