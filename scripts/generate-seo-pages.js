
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://nativekilimanjaro.com";
const DIST_DIR = path.resolve("dist");

const pages = [
  // Tour category pages
  {
    path: "/tours",
    title: "Tanzania Safaris & Kilimanjaro Tours",
    description:
      "Explore Tanzania safari packages, Kilimanjaro climbing adventures, beach holidays, and unforgettable journeys with Native Kilimanjaro.",
  },
  {
    path: "/tours/guided",
    title: "Guided Tanzania Safaris",
    description:
      "Discover guided Tanzania safaris with local expertise, wildlife adventures, and personalized travel experiences from Native Kilimanjaro.",
  },
  {
    path: "/tours/mountain",
    title: "Mount Kilimanjaro Trekking Tours",
    description:
      "Explore Mount Kilimanjaro trekking routes and plan your climb with Native Kilimanjaro.",
  },
  {
    path: "/tours/beach",
    title: "Tanzania & Zanzibar Beach Holidays",
    description:
      "Plan a Tanzania beach escape with Zanzibar's beautiful beaches, island experiences, and travel adventures from Native Kilimanjaro.",
  },

  // Individual tours
  {
    path: "/tours/tanzania-safari-zanzibar",
    title: "Tanzania Safari & Zanzibar Holiday",
    description:
      "Combine Tanzania wildlife safaris with a relaxing Zanzibar beach holiday. Explore your next East African adventure with Native Kilimanjaro.",
  },
  {
    path: "/tours/great-migration-serengeti",
    title: "Great Migration Safari in the Serengeti",
    description:
      "Discover the Serengeti Great Migration, spectacular wildlife, and Tanzania safari experiences with Native Kilimanjaro.",
  },
  {
    path: "/tours/big-five-cultural-safari",
    title: "Big Five & Cultural Safari",
    description:
      "Experience Tanzania's iconic wildlife and local cultural encounters on a Big Five safari with Native Kilimanjaro.",
  },
  {
    path: "/tours/zanzibar-beach-holiday",
    title: "Zanzibar Beach Holiday",
    description:
      "Discover Zanzibar's tropical beaches, island atmosphere, and unforgettable coastal experiences with Native Kilimanjaro.",
  },
  {
    path: "/tours/kilimanjaro-marangu-route",
    title: "Kilimanjaro Marangu Route",
    description:
      "Explore the Marangu Route on Mount Kilimanjaro, including trek planning, route details, and climbing information.",
  },
  {
    path: "/tours/kilimanjaro-machame-route",
    title: "Kilimanjaro Machame Route",
    description:
      "Discover the Machame Route on Mount Kilimanjaro with Native Kilimanjaro. Explore trek details, itinerary, and planning information.",
  },
  {
    path: "/tours/kilimanjaro-lemosho-route",
    title: "Kilimanjaro Lemosho Route",
    description:
      "Learn about the Lemosho Route on Mount Kilimanjaro and plan your trekking adventure with Native Kilimanjaro.",
  },
  {
    path: "/tours/meru-route",
    title: "Mount Meru Trekking Adventure",
    description:
      "Explore Mount Meru trekking, mountain scenery, and hiking opportunities in Tanzania with Native Kilimanjaro.",
  },
  {
    path: "/tours/kilimanjaro-rongai-route",
    title: "Kilimanjaro Rongai Route",
    description:
      "Discover the Rongai Route on Mount Kilimanjaro and explore your climbing options with Native Kilimanjaro.",
  },
  {
    path: "/tours/kilimanjaro-umbwe-route",
    title: "Kilimanjaro Umbwe Route",
    description:
      "Explore the Umbwe Route on Mount Kilimanjaro and learn about this challenging trekking option with Native Kilimanjaro.",
  },
  {
    path: "/tours/kilimanjaro-northern-circuit-route",
    title: "Kilimanjaro Northern Circuit Route",
    description:
      "Discover the Northern Circuit Route on Mount Kilimanjaro and plan your mountain adventure with Native Kilimanjaro.",
  },

  // Destination pages
  {
    path: "/destinations",
    title: "Explore East African Destinations",
    description:
      "Discover Tanzania, Kenya, Rwanda, and Zanzibar. Find travel inspiration and plan your next East African adventure with Native Kilimanjaro.",
  },
  {
    path: "/destinations/tanzania",
    title: "Tanzania Safari Travel Guide",
    description:
      "Explore Tanzania's Serengeti, Ngorongoro Crater, wildlife safaris, and Mount Kilimanjaro with Native Kilimanjaro.",
  },
  {
    path: "/destinations/kenya",
    title: "Kenya Travel Guide",
    description:
      "Explore Kenya's wildlife, landscapes, and travel experiences with Native Kilimanjaro.",
  },
  {
    path: "/destinations/rwanda",
    title: "Rwanda Travel Guide",
    description:
      "Discover Rwanda's natural beauty, wildlife experiences, and travel highlights with Native Kilimanjaro.",
  },
  {
    path: "/destinations/zanzibar",
    title: "Zanzibar Travel Guide",
    description:
      "Explore Zanzibar's beaches, historic Stone Town, island culture, and travel experiences with Native Kilimanjaro.",
  },

  // Blog listing and articles
  {
    path: "/blog",
    title: "Tanzania Travel Blog",
    description:
      "Read Tanzania safari guides, Kilimanjaro trekking tips, wildlife stories, and travel advice from Native Kilimanjaro.",
  },
  {
    path: "/blog/great-wildebeest-migration-guide",
    title: "Great Wildebeest Migration Guide",
    description:
      "Learn about the Great Wildebeest Migration, wildlife viewing, and planning a Serengeti safari in Tanzania.",
  },
  {
    path: "/blog/best-time-visit-tanzania",
    title: "Best Time to Visit Tanzania",
    description:
      "Learn when to visit Tanzania for wildlife safaris, the Great Migration, and unforgettable adventures.",
  },
  {
    path: "/blog/kilimanjaro-route-comparison",
    title: "Kilimanjaro Routes Compared",
    description:
      "Compare Mount Kilimanjaro trekking routes and understand their differences when planning your climb.",
  },
  {
    path: "/blog/what-to-pack-safari",
    title: "What to Pack for a Tanzania Safari",
    description:
      "Prepare for your Tanzania safari with a practical packing guide covering clothing, essentials, and useful travel items.",
  },
  {
    path: "/blog/maasai-culture-traditions",
    title: "Maasai Culture & Traditions",
    description:
      "Learn about Maasai cultural traditions and explore respectful ways to experience cultural tourism in Tanzania.",
  },
  {
    path: "/blog/ngorongoro-crater-guide",
    title: "Ngorongoro Crater Travel Guide",
    description:
      "Discover Ngorongoro Crater, its wildlife, and practical tips for planning a Tanzania safari.",
  },
  {
    path: "/blog/night-safari-tips",
    title: "Night Safari Tips",
    description:
      "Discover what to expect on a night safari and learn practical tips for preparing for a wildlife adventure.",
  },

  // Main information pages
  {
    path: "/about",
    title: "About Native Kilimanjaro",
    description:
      "Get to know Native Kilimanjaro and discover our approach to Tanzania travel, trekking, and safari adventures.",
  },
  {
    path: "/contact",
    title: "Contact Native Kilimanjaro",
    description:
      "Contact Native Kilimanjaro to discuss Tanzania safaris, Kilimanjaro trekking, holiday ideas, and travel arrangements.",
  },
  {
    path: "/faq",
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about Tanzania safaris, Kilimanjaro trekking, travel planning, and Native Kilimanjaro.",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function setTag(html, selector, replacement) {
  if (selector.test(html)) {
    return html.replace(selector, replacement);
  }

  if (!html.includes("</head>")) {
    throw new Error("Cannot insert metadata: closing </head> not found.");
  }

  return html.replace("</head>", `  ${replacement}\n</head>`);
}

const template = await readFile(
  path.join(DIST_DIR, "index.html"),
  "utf8",
);

const seenPaths = new Set();

for (const page of pages) {
  if (!page.path.startsWith("/") || page.path === "/") {
    throw new Error(`Invalid page path: ${page.path}`);
  }

  if (!page.title?.trim() || !page.description?.trim()) {
    throw new Error(`Missing title or description: ${page.path}`);
  }

  if (seenPaths.has(page.path)) {
    throw new Error(`Duplicate page path: ${page.path}`);
  }

  seenPaths.add(page.path);

  const canonical = `${SITE_URL}${page.path}`;
  const title = `${page.title} | Native Kilimanjaro`;

  let html = template.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(title)}</title>`,
  );

  const metadata = [
    [
      /<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/i,
      `<meta name="description" content="${escapeHtml(page.description)}">`,
    ],
    [
      /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i,
      `<link rel="canonical" href="${escapeHtml(canonical)}">`,
    ],
    [
      /<meta\b(?=[^>]*\bproperty=["']og:title["'])[^>]*>/i,
      `<meta property="og:title" content="${escapeHtml(title)}">`,
    ],
    [
      /<meta\b(?=[^>]*\bproperty=["']og:description["'])[^>]*>/i,
      `<meta property="og:description" content="${escapeHtml(page.description)}">`,
    ],
    [
      /<meta\b(?=[^>]*\bproperty=["']og:url["'])[^>]*>/i,
      `<meta property="og:url" content="${escapeHtml(canonical)}">`,
    ],
    [
      /<meta\b(?=[^>]*\bname=["']twitter:title["'])[^>]*>/i,
      `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    ],
    [
      /<meta\b(?=[^>]*\bname=["']twitter:description["'])[^>]*>/i,
      `<meta name="twitter:description" content="${escapeHtml(page.description)}">`,
    ],
  ];

  for (const [selector, replacement] of metadata) {
    html = setTag(html, selector, replacement);
  }

  const relativePath = page.path.replace(/^\/+|\/+$/g, "");
  const outputDir = path.resolve(DIST_DIR, relativePath);

  if (!outputDir.startsWith(`${DIST_DIR}${path.sep}`)) {
    throw new Error(`Output path escapes dist directory: ${page.path}`);
  }

  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), html);

  console.log(`Generated: ${page.path}`);
}

console.log(`\nSEO generation complete: ${pages.length} routes.`);
