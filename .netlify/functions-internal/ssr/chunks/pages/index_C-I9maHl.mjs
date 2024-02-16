import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_DCRxBfp6.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                          */

const basics = {
	name: "Francisco Victorico Aguirre Jiménez",
	label: "Apasionado Diseñador UI/UX y Programador Front-end.",
	image: "/GG.webp",
	email: "francisco109623@gmail.com",
	phone: "+52 9513915906",
	url: "https://vicwithgg-portfolio.netlify.app/",
	summary: "+3 años de experiencia como Diseñador UI/UX. Actualmente me encuentro diseñando mi propio Kit de Diseño UI en Figma. He trabajado en diferentes entornos: desde diseñar sistemas web, sitios web, hasta el diseño y desarrollo de interfaces para empresas nacionales.",
	location: {
		address: "",
		postalCode: "71300",
		city: "Oaxaca de Juárez",
		countryCode: "MX",
		region: "México"
	},
	profiles: [
		{
			network: "Figma",
			username: "vicwithgg",
			url: "https://www.figma.com/@vicwithgg"
		},
		{
			network: "LinkedIn",
			username: "vicwith-gg",
			url: "https://www.linkedin.com/in/vicwith-gg/"
		},
		{
			network: "X",
			username: "VicWithGG1",
			url: "https://twitter.com/VicWithGG1"
		},
		{
			network: "GitHub",
			username: "Francisco-0510",
			url: "https://github.com/Francisco-0510"
		}
	]
};
const work = [
	{
		name: "Grupo Empresarial NIREJ",
		position: "Diseñador UI/UX - Programador Web",
		url: "https://hospitalangeldelmar.com.mx/",
		startDate: "2023-10-01",
		endDate: "2024-01-30",
		summary: "Encargado del área de Diseño UI/UX. Diseño de proyectos en los cuales implemente diversas metodologías de Diseño y a la par colaboré con el equipo de Marketing y Sistemas. Identificación de necesidades de los clientes y requisitos empresariales para generar soluciones de diseño. Diseño de prototipado de experiencia de usuarios funcionales y modernas.",
		highlights: [
			"Started the company"
		]
	},
	{
		name: "Diseñador Freelance",
		position: "Diseñador UI/UX ",
		url: "",
		startDate: "2022-02-01",
		endDate: null,
		summary: "Diseño de mi propio Kit de Diseño UX/UI en Figma VG Design UI Kit. Implementación de variables, estilos, Atomic Design y diseño responsivo para el diseño de componentes, asegurando que la librería sea escalable.",
		highlights: [
			""
		]
	},
	{
		name: "Desarrollador Freelance",
		position: "Desarrollador Web ",
		url: "",
		startDate: "2022-02-01",
		endDate: null,
		summary: "Desarrollador Web Independiente. Con enfoque en Front-end.",
		highlights: [
			""
		]
	},
	{
		name: "Cafetería El Zapotal",
		position: "Diseñador UI/UX ",
		url: "",
		startDate: "2023-05-01",
		endDate: "2023-06-01",
		summary: "Diseñe interfaces para diversos sistemas requeridos por la empresa, implementado la metodología Atomic Design",
		highlights: [
			""
		]
	},
	{
		name: "Universidad Tecnológica de los Valles Centrales de Oaxaca UTVCO",
		position: "Diseñador UI/UX - Desarrollador Web",
		url: "",
		startDate: "2019-02-01",
		endDate: "2022-12-01",
		summary: "Diseñador UI/UX y Desarrollador Web en varios proyectos a lo largo de mi carrera. Lídere una convergencia técnica entre varios proyectos para encontrar soluciones óptimas. Implemente buenas prácticas y mejoras en mis procesos y resultados de diseño, adémas de entregas en tiempo y forma",
		highlights: [
			""
		]
	},
	{
		name: "Foro Mujer Es Mezcal",
		position: "Diseñador Web",
		url: "",
		startDate: "2022-02-01",
		endDate: "2022-12-01",
		summary: "Diseñe las interfaces para la página web del Primer Foro Mujer Es Mezcal",
		highlights: [
			""
		]
	},
	{
		name: "Congreso BIT.MX 2023",
		position: "Diseñador UI/UX - Desarrollador Web",
		url: "",
		startDate: "2022-09-01",
		endDate: "2022-12-01",
		summary: "Diseñe Interfaces y Experiencia de Usuarios, implementando metodologías SCRUM, Canvan y Design Thinking. Diseñe y prototipe en baja, media y alta fidelidad usando Figma. Desarrolle el Front-end en Angular y GitHub para el control de versiones.",
		highlights: [
			""
		]
	},
	{
		name: "Estación de Autobuses La Solteca",
		position: "Diseñador Web",
		url: "",
		startDate: "2021-01-01",
		endDate: "2021-04-01",
		summary: "Diseñe y desarrolle las interfaces para el Sistema de Venta de Boletos para Empresa de Viajes La Solteca. Implemente metodologías como Kan-Ban y MDR. Realice los prototipados de baja, media y alta fidelidad en Adobe XD. ",
		highlights: [
			""
		]
	}
];
const education = [
	{
		institution: "Universidad Tecnológica de los Valles Centrales de Oaxaca (UTVCO)",
		url: "",
		area: "Ingeniería en Desarrollo y Gestión de Sotware Multiplataforma",
		studyType: "",
		startDate: "2021-02-01",
		endDate: "2022-01-01",
		score: "",
		courses: [
			""
		]
	},
	{
		institution: "Universidad Tecnológica de los Valles Centrales de Oaxaca (UTVCO)",
		url: "",
		area: "Técnico Superior Universitario (T.S.U) en Tecnológias de la Información",
		studyType: "",
		startDate: "2019-02-01",
		endDate: "2021-02-01",
		score: "",
		courses: [
			""
		]
	},
	{
		institution: "Instituto de Estudios de Bachillerato del Estado de Oaxaca (IEBO)",
		url: "https://www.uoc.edu/portal/es/index.html",
		area: "Bachillerato General",
		studyType: "Titulado",
		startDate: "2016-01-01",
		endDate: "2019-01-01",
		score: "",
		courses: [
			""
		]
	}
];
const certificates = [
	{
		name: "Introducción a la ciberseguridad (CYBERSEC2021)",
		date: "2021-02-01",
		issuer: "CISCO",
		url: "Introduction to Cybersecurity "
	},
	{
		name: "Introduction to IoT (Learnathon2020_UTVCO)",
		date: "2020-02-01",
		issuer: "CISCO",
		url: "Learnathon2020_UTVCO_EsliPaolaHernandezBlas_1182303 "
	},
	{
		name: "CCNA R&S: Routing and Switching Essentials (CCNA2-UTVCO)",
		date: "2020-02-01",
		issuer: "CISCO",
		url: "Introduction to Cybersecurity "
	},
	{
		name: "Manejo de Procesador de Textos Digitales",
		date: "2019-12-01",
		issuer: "CONOCER",
		url: " ECE175-14"
	},
	{
		name: "IT ESSENTIALS (ITES2019)",
		date: "2019-12-01",
		issuer: "IT Essentials",
		url: "IT Essentials: PC Hardware and Software"
	},
	{
		name: "Certificado de Acreditación Introducción a las Habilidades Digitales",
		date: "2019-12-01",
		issuer: "SANTANDER / ANUIES",
		url: " "
	},
	{
		name: "Certificado de Participación de Programa de Clases Espejo Estructura de Datos",
		date: "2019-12-01",
		issuer: "SANTANDER / ANUIES",
		url: " "
	},
	{
		name: "Certificado de Acreditación Habilidades y competencias clave para el mundo Profesional",
		date: "2019-12-01",
		issuer: "SANTANDER / ANUIES",
		url: " "
	}
];
const tools = [
	{
		name: "Figma",
		level: "Avanzado"
	},
	{
		name: "Adobe XD",
		level: "Avanzado"
	},
	{
		name: "Webflow",
		level: "Intermedio"
	},
	{
		name: "VS Code",
		level: "Intermedio"
	},
	{
		name: "Github",
		level: "Intermedio"
	},
	{
		name: "Git",
		level: "Intermedio"
	},
	{
		name: "Microsoft Office",
		level: "Intermedio - Avanzado"
	},
	{
		name: "Wireframmes",
		level: "Intermedio - Avanzado"
	}
];
const skills = [
	{
		name: "HTML 5",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend"
		]
	},
	{
		name: "CSS 3",
		level: "Avanzado",
		keywords: [
			"Desarrollo Web",
			"Frontend",
			"Diseño Responsive"
		]
	},
	{
		name: "Bootstrap",
		level: "",
		keywords: [
			"",
			""
		]
	},
	{
		name: "Angular",
		level: "",
		keywords: [
			"",
			""
		]
	},
	{
		name: "Ionic",
		level: "",
		keywords: [
			"",
			""
		]
	},
	{
		name: "SASS",
		level: "",
		keywords: [
			"",
			""
		]
	},
	{
		name: "Node.js",
		level: "",
		keywords: [
			"",
			""
		]
	},
	{
		name: "ASTRO",
		level: "",
		keywords: [
			"",
			""
		]
	},
	{
		name: "SASS",
		level: "",
		keywords: [
			"",
			""
		]
	},
	{
		name: "Tailwind CSS",
		level: "",
		keywords: [
			"",
			""
		]
	},
	{
		name: "NPM",
		level: "",
		keywords: [
			"",
			""
		]
	}
];
const languages = [
	{
		language: "Español",
		fluency: "Idioma Nativo"
	},
	{
		language: "Ingles",
		fluency: "Nivel B1"
	}
];
const others = [
	{
		name: "Diseño UX"
	},
	{
		name: "Diseño UI"
	},
	{
		name: "Diseño Centrado en el Usuario"
	},
	{
		name: "Librerias de Diseño"
	},
	{
		name: "Diseño Responsive"
	},
	{
		name: "Atomic Design"
	},
	{
		name: "Design Thinking"
	},
	{
		name: "Metodologías Ágiles"
	}
];
const projects = [
	{
		name: "VG Design UI Kit",
		isActive: true,
		description: "Mi propio Kit de Diseño UI/UX ⚡️ VG Design UI Kit ",
		highlights: [
			"Side Project",
			"UI/UX Design",
			"Figma",
			"Atomic Design",
			"Design Library"
		],
		url: "https://www.figma.com/community/file/1273539501651863397/vg-design-ui-kit-v1-10",
		figma: "https://www.figma.com/community/file/1273539501651863397/vg-design-ui-kit-v1-10"
	},
	{
		name: "CV Minimalist",
		isActive: true,
		description: "Curriculum Minimalista maquetado para web y pdf usando ASTRO",
		highlights: [
			"Astro",
			"Side Project",
			"HTML",
			"TypeScript",
			"Front-end",
			"GitHub"
		],
		url: "https://github.com/Francisco-0510/minimalist-portfolio.git",
		github: "https://github.com/Francisco-0510/minimalist-portfolio.git"
	},
	{
		name: "Hospital Angel del Mar",
		isActive: false,
		description: "Rediseño de Sitio Web para Hospital Ángel del Mar.",
		highlights: [
			"Diseño UX",
			"Webflow",
			"UI/UX Design",
			"Figma",
			"Responsive Design"
		],
		url: "https://hospitalangeldelmar.com.mx/"
	},
	{
		name: "BETAJ",
		isActive: false,
		description: "Diseño de Sitio Web para empresa de Seguridad Privada BETAJ",
		highlights: [
			"Diseño UX",
			"Figma",
			"Adobe XD",
			"Webflow",
			"Responsive Design",
			"Front-end"
		],
		url: "https://betaj.mx/"
	},
	{
		name: "Taller de Innovación en la Estrategía Comercial",
		isActive: false,
		description: "Diseño de Landing Page para el 'Taller de Innovación en la Estrategía Comercial', impartido por Gabriel Belsol.",
		highlights: [
			"Figma",
			"Landing Page",
			"UI/UX Design",
			"Mailing",
			"Front-end"
		],
		url: "https://tallerbelsol.nirej.com.mx/"
	},
	{
		name: "Portafolio Web Personal v.1",
		isActive: false,
		description: "Desarrollo web de Portafolio Web Personal.",
		highlights: [
			"Front-end",
			"HTML",
			"CSS",
			"GitHub",
			"Responsive Design",
			"Portfolio"
		],
		url: "https://vicwithgg.netlify.app/",
		github: "https://github.com/Francisco-0510/portafolio-vicwithgg"
	},
	{
		name: "Portafolio Back-end developer",
		isActive: false,
		description: "Desarrollo de portafolio web para programador backend.",
		highlights: [
			"Front-end",
			"HTML",
			"CSS",
			"GitHub",
			"Responsive Design",
			"Portfolio"
		],
		url: "https://www.braquetes.com.mx/#/",
		github: "https://github.com/Braquetes/portfolio"
	},
	{
		name: "Plantilla CV ",
		isActive: false,
		description: "Diseño de Plantilla de Curriculum Vitae  en Figma.",
		highlights: [
			"Figma",
			"Template",
			"UI/UX Design",
			"Side Project",
			"Portfolio"
		],
		url: "https://www.figma.com/community/file/1298753803594743798/cv-template",
		figma: "https://www.figma.com/community/file/1298753803594743798/cv-template"
	},
	{
		name: "Corridos Cap Ecommerce",
		isActive: false,
		description: "Diseño de Ecommerce 'Corridos Cap'",
		highlights: [
			"Figma",
			"Ecommerce",
			"UI/UX Design",
			"Side Project",
			"Template"
		],
		url: "https://www.figma.com/community/file/1300691881883791367/corridos-cap-ecommerce-des",
		figma: "https://www.figma.com/community/file/1300691881883791367/corridos-cap-ecommerce-des"
	},
	{
		name: "Landing Page Maguey Oaxaca",
		isActive: false,
		description: "Estructura basica de Landing Page y Diseño de Landing 'Maguey México'",
		highlights: [
			"Landing Page",
			"UI/UX Design",
			"Side Project",
			"Template",
			"Figma"
		],
		url: "https://www.figma.com/community/file/1300690124723803141/maguey-landing-page",
		figma: "https://www.figma.com/community/file/1300690124723803141/maguey-landing-page"
	},
	{
		name: "Reloj Checador y Sistema El Zapotal",
		isActive: false,
		description: "Diseño de interfaces de usuario para Reloj Checador y Sistema de Administración de Cafereria.",
		highlights: [
			"Figma",
			"UI/UX Design",
			"Responsive Design",
			"Design System"
		],
		url: "https://www.figma.com/community/file/1274243734616345498/zapotal-design",
		github: "https://github.com/Francisco-0510/RelojChecador_V1",
		figma: "https://www.figma.com/community/file/1274243734616345498/zapotal-design"
	},
	{
		name: "Rediseño App Móvil HealthCheck",
		isActive: false,
		description: "Rediseño de Aplicación Móvil HealthCheck (Dispositivos Móviles y wearables).",
		highlights: [
			"Figma",
			"UI/UX Design",
			"Responsive Design",
			"Mobile Design",
			"Design System"
		],
		url: "https://www.figma.com/community/file/1283078639346112182/redesign-healthcheck-medical-mobile-app",
		figma: "https://www.figma.com/community/file/1283078639346112182/redesign-healthcheck-medical-mobile-app"
	},
	{
		name: "Smartwatch and Mobile App Design",
		isActive: false,
		description: "Diseño de Interfaces para Smartwatch",
		highlights: [
			"Mobile Design",
			"Figma",
			"UI/UX Design",
			"Design System",
			"Weareable Design"
		],
		url: "https://www.figma.com/community/file/1270644133161232117/healthcheck-smartwatch-and-mobile-devices-design",
		figma: "https://www.figma.com/community/file/1270644133161232117/healthcheck-smartwatch-and-mobile-devices-design"
	},
	{
		name: "Diseño de App Móvil/Weareable y Guía de Estilos",
		isActive: false,
		description: "Diseño de Interfaces para Smartwatch",
		highlights: [
			"Mobile Design",
			"Figma",
			"UI/UX Design",
			"Design System",
			"Weareable Design",
			"Style Guide"
		],
		url: "https://www.figma.com/community/file/1270644133161232117/healthcheck-smartwatch-and-mobile-devices-design",
		figma: "https://www.figma.com/community/file/1270644133161232117/healthcheck-smartwatch-and-mobile-devices-design"
	},
	{
		name: "Arquitectura y Jerarquía de App Móvil",
		isActive: false,
		description: "Mapas de Navegación y Wireflows de Aplicación Móvil y Aplicación para Smartwatch HealthCheck.",
		highlights: [
			"Mobile Design",
			"Figma",
			"UI/UX Design",
			"User Flows",
			"Weareable Design",
			"Wireflow"
		],
		url: "https://www.figma.com/community/file/1125658163306261422/arquitectura-y-jerarquia-visual-app-healthcheck",
		figma: "https://www.figma.com/community/file/1125658163306261422/arquitectura-y-jerarquia-visual-app-healthcheck"
	},
	{
		name: "Sistema Web de Gestión de Tutorías Escolares",
		isActive: false,
		description: "Sistema Web para la Gestión de Actividades Culturales y Deportivas de la UTVCO / Front-end",
		highlights: [
			"Figma",
			"Ionic",
			"Front-end",
			"Responsive Design",
			"Design System",
			"GitHub",
			"Caso de Estudio"
		],
		url: "https://www.figma.com/community/file/1205620325712950079/diseno-de-sistema-web-para-la-gestion-de-las-actividades-culturales-y-deportiivas-de-la-utvco",
		github: "https://github.com/Francisco-0510/sportUra",
		figma: "https://www.figma.com/community/file/1205620325712950079/diseno-de-sistema-web-para-la-gestion-de-las-actividades-culturales-y-deportiivas-de-la-utvco"
	},
	{
		name: "BIT Tournament 2023",
		isActive: false,
		description: "Diseño de Interfaces y Desarrollo de Front-end en Angular para Torneo de Videojuegos 'BIT Tournament 2023'",
		highlights: [
			"UI/UX Design",
			"Figma",
			"Front-end",
			"Responsive Design",
			"GitHub",
			"Angular",
			"Style Guide"
		],
		url: "https://www.figma.com/community/file/1165464149403530205/diseno-de-interfaces-bit-tournament-2023",
		github: "https://github.com/Francisco-0510/BIT-TOURNAMENT-2023",
		figma: "https://www.figma.com/community/file/1165464149403530205/diseno-de-interfaces-bit-tournament-2023"
	},
	{
		name: "User Story Mapping - BIT TOURNAMENT 2023",
		isActive: false,
		description: "Historias de Usuario, Mapas de Navegación para el Sistema de Videojuegos BIT TOURNAMENT 2023.",
		highlights: [
			"SCRUM",
			"Figma",
			"Front-end",
			"Canvan",
			"GitHub",
			"User Flows",
			"Design Thinking"
		],
		url: "https://www.figma.com/community/file/1183832840468301220/user-story-mapping-bit-tournament-2023",
		figma: "https://www.figma.com/community/file/1183832840468301220/user-story-mapping-bit-tournament-2023"
	},
	{
		name: "Sistema Venta de Boletos La Solteca",
		isActive: false,
		description: "Diseño y Desarrollo Web  Sistema de Venta de Boletos para Empresa de Viajes 'La Solteca'",
		highlights: [
			"HTML",
			"CSS",
			"Front-end",
			"Kan-ban",
			"Prototipado",
			"User Flows",
			"Adobe XD"
		],
		url: "https://xd.adobe.com/view/5b7241f4-f464-4276-69b2-89a327b55523-2d43/",
		github: "https://github.com/Francisco-0510/Solteca",
		figma: "https://www.figma.com/community/file/1104879810169038821/guia-de-estilos-sistema-de-venta-de-boletos-la-solteca"
	}
];

const $$Astro$q = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { image, summary, url } = basics;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>${title}</title><meta name="description"${addAttribute(summary, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/iconVGG.svg"><link rel="preload" as="image"${addAttribute(image, "href")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(summary, "content")}><meta property="og:image" content=""><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(url.split("//")[1] ?? "", "content")}><meta property="twitter:url"${addAttribute(url, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(summary, "content")}><meta name="twitter:image" content=""><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$p = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Section;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<section data-astro-cid-sh445jdo> ", " ", ' </section>  <!--  <script type="module" src="https://unpkg.com/ninja-keys?module"><\/script> --> '])), maybeRenderHead(), title && renderTemplate`<h2 data-astro-cid-sh445jdo>${title}</h2>`, renderSlot($$result, $$slots["default"]));
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/components/Section.astro", void 0);

const $$Astro$o = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$About;
  const { summary } = basics;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Sobre Mi" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${summary}</p> ` })}`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/components/sections/About.astro", void 0);

const $$Astro$n = createAstro();
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Education;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Educaci\xF3n", "data-astro-cid-qtcj2w7e": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-qtcj2w7e> ${education.map(({ institution, startDate, endDate, area }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
    const years = `${startYear} - ${endYear}`;
    return renderTemplate`<li data-astro-cid-qtcj2w7e> <article data-astro-cid-qtcj2w7e> <header data-astro-cid-qtcj2w7e> <div data-astro-cid-qtcj2w7e> <h3 data-astro-cid-qtcj2w7e>${institution}</h3> </div> <time data-astro-cid-qtcj2w7e>${years}</time> </header> <footer data-astro-cid-qtcj2w7e> <p data-astro-cid-qtcj2w7e>${area}</p> </footer> </article> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/components/sections/Education.astro", void 0);

const $$Astro$m = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Experiencia Laboral", "data-astro-cid-ghubstuj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-ghubstuj> ${work.map(
    ({ name, startDate, endDate, position, summary, highlights, url }) => {
      const startYear = new Date(startDate).getFullYear();
      const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
      const years = ` ${startYear} - ${endYear} `;
      return renderTemplate`<li data-astro-cid-ghubstuj> <article data-astro-cid-ghubstuj> <header data-astro-cid-ghubstuj> <div data-astro-cid-ghubstuj> <h3 data-astro-cid-ghubstuj> <a${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-ghubstuj> ${name} </a> </h3> <h4 data-astro-cid-ghubstuj> ${position} </h4> </div> <time data-astro-cid-ghubstuj> ${years} </time> </header> <footer data-astro-cid-ghubstuj> <p data-astro-cid-ghubstuj>${summary}</p> </footer> </article> </li>`;
    }
  )} </ul> ` })} `;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/components/sections/Experience.astro", void 0);

const $$Astro$l = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C274C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-4"><title>Mail Icon</title><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/Mail.astro", void 0);

const $$Astro$k = createAstro();
const $$Phone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C274C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Phone Icon</title><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/Phone.astro", void 0);

const $$Astro$j = createAstro();
const $$X = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="#0F0F0F" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/X.astro", void 0);

const $$Astro$i = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/LinkedIn.astro", void 0);

const $$Astro$h = createAstro();
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="#0F0F0F" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/GitHub.astro", void 0);

const $$Astro$g = createAstro();
const $$WorldMap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$WorldMap;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path> </svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/WorldMap.astro", void 0);

const $$Astro$f = createAstro();
const $$Figma = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Figma;
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#1ABCFE" d="M8.55 8c0-1.289 1.019-2.333 2.275-2.333C12.082 5.667 13.1 6.71 13.1 8c0 1.289-1.018 2.333-2.275 2.333C9.57 10.333 8.55 9.29 8.55 8z"></path><path fill="#0ACF83" d="M4 12.667c0-1.289 1.019-2.334 2.275-2.334H8.55v2.334C8.55 13.955 7.531 15 6.275 15S4 13.955 4 12.667z"></path><path fill="#FF7262" d="M8.55 1v4.667h2.275c1.257 0 2.275-1.045 2.275-2.334C13.1 2.045 12.082 1 10.825 1H8.55z"></path><path fill="#F24E1E" d="M4 3.333c0 1.289 1.019 2.334 2.275 2.334H8.55V1H6.275C5.019 1 4 2.045 4 3.333z"></path><path fill="#A259FF" d="M4 8c0 1.289 1.019 2.333 2.275 2.333H8.55V5.667H6.275C5.019 5.667 4 6.71 4 8z"></path></g></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/Figma.astro", void 0);

const $$Astro$e = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, label, image, location, profiles, phone, email } = basics;
  const { city, region } = location;
  const SOCIAL_ICONS = {
    Figma: $$Figma,
    GitHub: $$GitHub,
    LinkedIn: $$LinkedIn,
    X: $$X
  };
  const linkedInfo = profiles.find(({ network }) => network === "LinedIn");
  linkedInfo?.url;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-anhloy43> <div class="info" data-astro-cid-anhloy43> <h1 data-astro-cid-anhloy43>${name}</h1> <h2 data-astro-cid-anhloy43>${label}</h2> <span data-astro-cid-anhloy43> <!-- icon --> ${renderComponent($$result2, "WorldMap", $$WorldMap, { "data-astro-cid-anhloy43": true })} ${city}, ${region} </span> <footer data-astro-cid-anhloy43> ${email && renderTemplate`<a${addAttribute(`mailto:${email}`, "href")}${addAttribute(`Enviar un correo electr\xF3nico a ${name} al correo ${email}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Mail", $$Mail, { "data-astro-cid-anhloy43": true })} </a>`} ${phone && renderTemplate`<a${addAttribute(`tel:${phone}`, "href")}${addAttribute(`Llamar por tel\xE9fono a a ${name} al n\xFAmero ${phone}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Phone", $$Phone, { "data-astro-cid-anhloy43": true })} </a>`} ${profiles.map(({ network, url, username }) => {
    const Icon = SOCIAL_ICONS[network];
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`Visitar el perfil de ${name} en ${network}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-anhloy43": true })} </a>`;
  })} </footer> </div> <figure data-astro-cid-anhloy43> <img${addAttribute(image, "src")} alt=" {name} " data-astro-cid-anhloy43> </figure> </div> ` })} `;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/components/sections/Hero.astro", void 0);

const $$Astro$d = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Proyectos", "data-astro-cid-44zkpkd5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-44zkpkd5> ${projects.map(
    ({ url, description, highlights, name, isActive, github, figma }) => {
      return renderTemplate`<li data-astro-cid-44zkpkd5> <article data-astro-cid-44zkpkd5> <header data-astro-cid-44zkpkd5> <h3 data-astro-cid-44zkpkd5> <a${addAttribute(url, "href")} target="_blank"${addAttribute(`Ver el proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${name} </a> ${isActive && renderTemplate`<span data-astro-cid-44zkpkd5>•</span>`} ${github && renderTemplate`<a class="github-code-link"${addAttribute(github, "href")} target="_blank"${addAttribute(`Ver c\xF3digo fuente del proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${renderComponent($$result2, "GitHub", $$GitHub, { "data-astro-cid-44zkpkd5": true })} </a>`} ${figma && renderTemplate`<a class="figma-code-link"${addAttribute(figma, "href")} target="_blank"${addAttribute(`Ver archivo en  ${name}`, "title")} data-astro-cid-44zkpkd5> ${renderComponent($$result2, "Figma", $$Figma, { "data-astro-cid-44zkpkd5": true })} </a>`} </h3> <p data-astro-cid-44zkpkd5>${description}</p> </header> <footer data-astro-cid-44zkpkd5> ${highlights.map((highlight) => {
        return renderTemplate`<span data-astro-cid-44zkpkd5>${highlight}</span>`;
      })} </footer> </article> </li>`;
    }
  )} </ul> ` })} `;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/components/sections/Projects.astro", void 0);

const $$Astro$c = createAstro();
const $$Html = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/html.astro", void 0);

const $$Astro$b = createAstro();
const $$Css = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/css.astro", void 0);

const $$Astro$a = createAstro();
const $$Javascript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/javascript.astro", void 0);

const $$Astro$9 = createAstro();
const $$Type = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Type;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path><path d="M9 12h4"></path><path d="M11 12v6"></path><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/type.astro", void 0);

const $$Astro$8 = createAstro();
const $$Node = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Node;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/node.astro", void 0);

const $$Astro$7 = createAstro();
const $$Git = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Git;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 15v-6"></path><path d="M15 11l-2 -2"></path><path d="M11 7l-1.9 -1.9"></path><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/git.astro", void 0);

const $$Astro$6 = createAstro();
const $$Tailwind = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path></svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/tailwind.astro", void 0);

const $$Astro$5 = createAstro();
const $$Bootstrap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Bootstrap;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"></path> <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"></path> </svg>`;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/icons/Bootstrap.astro", void 0);

const $$Astro$4 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Habilidades", "data-astro-cid-sye7xtqh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 data-astro-cid-sye7xtqh>Lenguajes y Frameworks</h3> <ul data-astro-cid-sye7xtqh> ${skills.map(({ name }) => {
    return renderTemplate`<li data-astro-cid-sye7xtqh> <span data-astro-cid-sye7xtqh>${name},</span> </li>`;
  })} </ul> <h3 data-astro-cid-sye7xtqh>Herramientas</h3> <ul data-astro-cid-sye7xtqh> ${tools.map(({ name }) => {
    return renderTemplate`<li data-astro-cid-sye7xtqh> <span data-astro-cid-sye7xtqh>${name}, </span> </li>`;
  })} </ul> <h3 data-astro-cid-sye7xtqh>Otras</h3> <ul data-astro-cid-sye7xtqh> ${others.map(({ name }) => {
    return renderTemplate`<li data-astro-cid-sye7xtqh> <span data-astro-cid-sye7xtqh>${name}, </span> </li>`;
  })} </ul> <h3 data-astro-cid-sye7xtqh>Idiomas</h3> <ul data-astro-cid-sye7xtqh> ${languages.map(({ language, fluency }) => {
    return renderTemplate`<li data-astro-cid-sye7xtqh> <span data-astro-cid-sye7xtqh>${language} (${fluency}), </span> </li>`;
  })} </ul> ` })} `;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/components/sections/Skills.astro", void 0);

const $$Astro$3 = createAstro();
const $$Certificates = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Certificates;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Certificados", "data-astro-cid-py6yiie3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-py6yiie3> ${certificates.map(
    ({ name, date, issuer, url }) => {
      return renderTemplate`<li data-astro-cid-py6yiie3> <article data-astro-cid-py6yiie3> <time data-astro-cid-py6yiie3> ${date} </time> <span data-astro-cid-py6yiie3>${issuer}</span> <header data-astro-cid-py6yiie3> <h4 data-astro-cid-py6yiie3> ${name} </h4> </header> </article> </li>`;
    }
  )} </ul> ` })} `;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/components/sections/Certificates.astro", void 0);

const $$Astro$2 = createAstro();
const $$Languages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Languages;
  return renderTemplate``;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/components/sections/Languages.astro", void 0);

const $$Astro$1 = createAstro();
const $$KeyboardManager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$KeyboardManager;
  const { profiles } = basics;
  const SOCIAL_ICONS = {
    Figma: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"  style="margin: auto"  fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#1ABCFE" d="M8.55 8c0-1.289 1.019-2.333 2.275-2.333C12.082 5.667 13.1 6.71 13.1 8c0 1.289-1.018 2.333-2.275 2.333C9.57 10.333 8.55 9.29 8.55 8z"></path><path fill="#0ACF83" d="M4 12.667c0-1.289 1.019-2.334 2.275-2.334H8.55v2.334C8.55 13.955 7.531 15 6.275 15S4 13.955 4 12.667z"></path><path fill="#FF7262" d="M8.55 1v4.667h2.275c1.257 0 2.275-1.045 2.275-2.334C13.1 2.045 12.082 1 10.825 1H8.55z"></path><path fill="#F24E1E" d="M4 3.333c0 1.289 1.019 2.334 2.275 2.334H8.55V1H6.275C5.019 1 4 2.045 4 3.333z"></path><path fill="#A259FF" d="M4 8c0 1.289 1.019 2.333 2.275 2.333H8.55V5.667H6.275C5.019 5.667 4 6.71 4 8z"></path></g></svg>`,
    GitHub: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin: 8px 8px"
  ><path
    fill="#0F0F0F"
    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  ></path></svg
>`,
    LinkedIn: `<svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="margin: auto"  fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>`,
    X: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin: 8px 8px"
  ><title>X</title><path
    fill="#0F0F0F"
    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
  ></path></svg
>
`
  };
  const profilesInfo = profiles.map(({ network, url }) => {
    const icon = SOCIAL_ICONS[network];
    const firstLetter = network[0].toUpperCase();
    return {
      id: network,
      section: "Social",
      title: `Visitar ${network}`,
      url,
      icon,
      hotkey: `ctrl+${firstLetter}`
    };
  });
  return renderTemplate`${maybeRenderHead()}<footer id="normal-footer" class="no-print" data-astro-cid-5uazswxx>
Pulsa <kbd data-astro-cid-5uazswxx>Ctrl</kbd> + <kbd data-astro-cid-5uazswxx>K</kbd> para abrir la paleta de comandos.
</footer> ${renderComponent($$result, "ninja-keys", "ninja-keys", { "data-astro-cid-5uazswxx": true })} <div id="footer-button" class="no-print" data-astro-cid-5uazswxx> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-command" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5uazswxx> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-5uazswxx></path> <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" data-astro-cid-5uazswxx></path> </svg> </div> <div id="hotkeypad" data-placeholder="Buscar comando"${addAttribute(JSON.stringify(profilesInfo), "data-info")} data-astro-cid-5uazswxx></div>  `;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/components/KeyboardManager.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { name, label } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Portafolio de ${name} - ${label}`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Education", $$Education, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Certificates", $$Certificates, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Languages", $$Languages, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "KeyboardManager", $$KeyboardManager, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/franc/OneDrive/Escritorio/VicWithGG/minimalist-portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
