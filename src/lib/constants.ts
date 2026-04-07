export const SITE = {
  name: "Nordische Energy Systems",
  tagline: "Innovating Sustainable Energy for a Greener Tomorrow",
  description:
    "Deep-tech R&D powerhouse pioneering breakthrough climate change technologies — from aluminium-graphene batteries and seawater mining to 30+ advanced active materials for global markets.",
  url: "https://nordischeenergy.com",
  whatsapp: "+919830425097",
  email: "info@nordischeenergy.com",
  phone: "+91 98304 25097",
  phone2: "+91 98304 25097",
  address: "Nordische Energy Systems Pvt Ltd\n91 Springboard Business Hub, #45/3\n1st Floor, Gopala Krishna Complex\nResidency Road, Bangalore-560025\nKarnataka, India",
  cin: "U40106KA2022PTC158401",
  founded: "2022",
  linkedin: "https://linkedin.com/company/nordische-energy",
  xtwitter: "https://x.com/nordischeenergy",
  brochure: "/NES-Business-Brochure.pdf",
};

export const HEADQUARTERS = {
  company: "Nordische Energy Systems Pvt Ltd",
  city: "Bengaluru, Karnataka, India",
  summary:
    "Deep-tech R&D powerhouse headquartered in Bangalore, staffed by elite research scientists with advanced degrees in chemistry, energy storage, and physics.",
  mapQuery: "91+Springboard+Residency+Road+Bangalore+560025",
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Industries", href: "/industries" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const TRUST_ITEMS = [
  { label: "India R&D and Global Outreach", icon: "factory" },
  { label: "Non-Flammable Storage Chemistry", icon: "shield" },
  { label: "Commercialization-Ready Platforms", icon: "certificate" },
  { label: "Grid to Mobility Applications", icon: "checkCircle" },
  { label: "Recyclable Material Focus", icon: "leaf" },
] as const;

export const STATS = [
  { value: "220 Wh/kg", label: "Al-Graphene Energy Density" },
  { value: "50×", label: "Faster Charging vs Li-ion" },
  { value: "30+", label: "Active Material Variants" },
  { value: "6", label: "Countries with Partners" },
] as const;

export const ENERGY_STORAGE_HIGHLIGHTS = [
  {
    title: "Aluminium-Graphene Battery",
    description:
      "Non-toxic, non-flammable battery technology free from cobalt and rare earth materials. Charges up to 50× faster than comparable lithium-ion, with commercial-grade pouch cells already manufactured and tested at CIPET Bangalore and in Spain.",
    metrics: ["220 Wh/kg energy density", "50× faster charging", "3,000+ cycle life", ">90% recyclable", "No thermal runaway"],
    status: "Technology fully developed — commercial-grade pouch cells manufactured and tested",
    applications: ["EV batteries", "Consumer electronics", "Medical devices"],
  },
  {
    title: "Lead Ultra-Carbon Battery (LCUB)",
    description:
      "Next-generation alternative to traditional lead-acid batteries using 0.5–0.98% engineered carbon in the anode. Acts as an electrochemical pseudo-capacitor, delivering ~100% cycle life increase and 2× faster recharging at comparable price points.",
    metrics: ["~100% cycle life increase", "2× faster recharging", "300 kW exported to Germany", "1.5 MW under production"],
    status: "300 kW grid storage solutions exported to Germany, 1.5 MW more under production",
    applications: ["Grid storage", "Solar energy storage", "ICE vehicles"],
  },
] as const;

export const PRODUCTS = [
  {
    slug: "lithium-ion-battery-packs",
    name: "Lithium-Ion Battery Packs",
    tagline: "Maximum Energy. Minimum Footprint.",
    shortDescription:
      "High-density, long-cycle battery systems engineered for demanding EV and industrial applications.",
    fullDescription:
      "Our lithium-ion battery packs deliver industry-leading energy density in compact form factors. Engineered with precision cell selection, advanced thermal management, and integrated Battery Management Systems, these packs are designed to withstand the operational demands of electric mobility and industrial environments. Each unit undergoes 127-point quality verification before delivery.",
    features: [
      "Energy density up to 280 Wh/kg",
      "Cycle life exceeding 3,000 charge-discharge cycles",
      "Operating temperature range: -20°C to +60°C",
      "Integrated multi-level BMS with CAN/CANopen interface",
      "IP67 rated enclosure options",
      "Configurable voltage: 24V / 48V / 72V / 96V / custom",
      "State-of-Charge accuracy: ±2%",
      "Thermal runaway prevention with passive & active cooling",
    ],
    specs: [
      { param: "Chemistry", value: "NMC / LFP (application-specific)" },
      { param: "Nominal Voltage", value: "24V – 800V (configurable)" },
      { param: "Capacity Range", value: "10 Ah – 500 Ah" },
      { param: "Energy Range", value: "1 kWh – 200 kWh" },
      { param: "Peak Discharge", value: "Up to 5C" },
      { param: "Continuous Charge", value: "1C – 2C" },
      { param: "Communication", value: "CAN 2.0B, CANopen, RS485, Modbus" },
      { param: "Protection Class", value: "IP54 / IP67 (optional)" },
      { param: "Certifications", value: "UN38.3, IEC 62619, CE, RoHS" },
      { param: "Warranty", value: "3 years / 2000 cycles (whichever first)" },
    ],
    applications: ["Electric Vehicles", "AGVs & Forklifts", "Marine Propulsion", "Backup Power", "Industrial Equipment"],
    icon: "battery",
    color: "var(--color-nord-teal)",
  },
  {
    slug: "ev-battery-modules",
    name: "EV Battery Modules",
    tagline: "Engineered for the Road Ahead.",
    shortDescription:
      "Modular, scalable battery solutions optimized for electric passenger vehicles and commercial fleets.",
    fullDescription:
      "Nordische EV Battery Modules are purpose-built for electric vehicle platforms where weight, safety, and range define the product. Our modular architecture allows OEMs and fleet operators to configure the exact energy density required, with full BMS integration and automotive-grade cell qualification. Each module is crash-tested, thermally validated, and production-ready.",
    features: [
      "Automotive-grade cell qualification (IATF 16949)",
      "Structural module design for floor-pack integration",
      "Active liquid cooling channels integrated",
      "Crash-compliant aluminum housing — 15g side impact rated",
      "Automatic cell balancing with passive dissipation",
      "OBD-II diagnostic compatibility",
      "SOH prediction algorithm built into BMS",
      "Second-life repurposing program available",
    ],
    specs: [
      { param: "Cell Format", value: "Prismatic / Pouch (by model)" },
      { param: "Module Voltage", value: "48V nominal per module" },
      { param: "Module Capacity", value: "30 Ah – 120 Ah" },
      { param: "Module Energy", value: "1.4 kWh – 5.8 kWh" },
      { param: "Pack Configuration", value: "Up to 20 modules in series" },
      { param: "Thermal System", value: "Liquid cooled (glycol circuit)" },
      { param: "Charging Protocol", value: "CCS2, CHAdeMO, AC Type 2" },
      { param: "Operating Temp", value: "-30°C to +55°C" },
      { param: "Certifications", value: "ECE R100, UN38.3, ISO 26262" },
      { param: "Warranty", value: "5 years / 150,000 km" },
    ],
    applications: ["Passenger EVs", "Electric Buses", "Light Commercial Vehicles", "Electric Motorcycles", "Delivery Vans"],
    icon: "bolt",
    color: "var(--color-nord-amber)",
  },
  {
    slug: "custom-battery-solutions",
    name: "Custom Battery Solutions",
    tagline: "Your Application. Our Engineering.",
    shortDescription:
      "End-to-end battery system design for unique industrial requirements where standard solutions fall short.",
    fullDescription:
      "When standard battery products cannot meet your operational envelope, Nordische Engineering delivers from the ground up. Our in-house R&D team collaborates directly with client engineering teams to define the chemistry, architecture, thermal strategy, BMS logic, and mechanical integration — producing a battery system designed specifically around your application, not adapted to it. From concept to production-ready prototype in 12–16 weeks.",
    features: [
      "Chemistry selection consultation (NMC, LFP, LTO, NCA)",
      "Custom mechanical form factor — any shape, any dimension",
      "Application-specific BMS firmware development",
      "Thermal simulation (CFD) before physical prototype",
      "EMC and vibration testing per IEC/MIL-STD",
      "Full regulatory certification support (CE, UL, UN38.3)",
      "Small-batch manufacturing: 10–500 units",
      "Post-delivery field support and lifecycle monitoring",
    ],
    specs: [
      { param: "Voltage", value: "Fully custom (3.6V – 1200V)" },
      { param: "Capacity", value: "Fully custom" },
      { param: "Lead Time", value: "12–16 weeks (prototype)" },
      { param: "Min. Order", value: "10 units (prototype) / 100 units (production)" },
      { param: "BMS", value: "Custom firmware on NXP/STM32 platform" },
      { param: "Certifications", value: "Application-specific — we manage process" },
      { param: "Testing", value: "In-house: thermal, vibration, cycle, EMC" },
      { param: "Collaboration", value: "Joint NDA-protected development process" },
    ],
    applications: ["Defence & Aerospace", "Medical Equipment", "Subsea Systems", "Racing Vehicles", "Off-Grid Installations"],
    icon: "settings",
    color: "var(--color-nord-mist)",
  },
] as const;

export const TECH_PILLARS = [
  {
    title: "High Energy Density Architecture",
    description:
      "Our cell-to-pack integration eliminates intermediate module housing, reducing dead weight by 18% and increasing usable energy density to 280 Wh/kg. Every cubic centimeter is engineered intentionally.",
    icon: "zap",
    stat: "280 Wh/kg",
  },
  {
    title: "Enhanced Safety Architecture",
    description:
      "Seven independent protection layers operate simultaneously: overcurrent, overvoltage, under-voltage, over-temperature, short-circuit, cell imbalance, and isolation fault detection. Thermal runaway containment is validated to IEC 62619.",
    icon: "shield",
    stat: "7-Layer Protection",
  },
  {
    title: "Extended Lifecycle Engineering",
    description:
      "Precision cell matching within ±2% capacity tolerance at pack assembly, combined with adaptive balancing algorithms, extends pack life beyond 3,000 cycles while maintaining over 80% capacity retention — exceeding industry standard by 40%.",
    icon: "refreshCw",
    stat: "3,000+ Cycles",
  },
  {
    title: "Intelligent Battery Management",
    description:
      "Our in-house BMS firmware continuously monitors 48 parameters per cell, running Kalman-filter SOC estimation and predictive SOH algorithms. Real-time data is accessible via CAN bus or optional cloud dashboard for fleet operators.",
    icon: "cpu",
    stat: "48 Parameters / Cell",
  },
  {
    title: "Advanced Thermal Management",
    description:
      "Passive cooling (phase-change materials + heat spreaders) and active liquid cooling options maintain cell temperature variance below 2°C across the pack during peak load — critical for long-term cycle life and safety in high-ambient environments.",
    icon: "thermometer",
    stat: "<2°C Variance",
  },
  {
    title: "Second-Life & Sustainability",
    description:
      "Every Nordische battery is designed with end-of-life reuse in mind. Packs reaching 80% capacity after EV use are recertified and redeployed in stationary storage applications, reducing lifecycle carbon footprint by an estimated 60%.",
    icon: "leaf",
    stat: "60% Lower Lifecycle CO₂",
  },
] as const;

export const INDUSTRIES = [
  {
    slug: "electric-vehicles",
    name: "Electric Vehicles",
    icon: "car",
    headline: "Powering the Transition to Zero-Emission Mobility",
    description:
      "The shift to electric transportation demands batteries that go beyond adequate — they must deliver reliability across 200,000+ km in extreme temperature conditions, fast-charge compatibility, and crash-level structural safety. Nordische EV battery systems are engineered to meet and exceed these demands for OEMs, fleet operators, and conversion specialists.",
    painPoints: [
      "Range anxiety from underperforming packs",
      "Thermal management failures in hot climates",
      "Heavy modules reducing cargo capacity",
      "Long replacement downtime on commercial fleets",
    ],
    ourAnswer: [
      "Industry-leading 280 Wh/kg energy density",
      "Liquid cooling rated for -30°C to +55°C operation",
      "Structural floor-pack design — weight-integrated, not added",
      "Plug-and-play swap compatibility on fleet configurations",
    ],
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy Storage",
    icon: "sunMedium",
    headline: "Storing Clean Energy When the Sun Sets and Wind Stops",
    description:
      "Solar and wind generation is intermittent. Nordische stationary energy storage systems provide the buffer that makes renewable energy dispatchable — whether for industrial self-consumption, grid-stabilization, or off-grid installations. Our LFP-chemistry systems are optimized for the 6,000+ cycle life that utility-scale economics demand.",
    painPoints: [
      "Low cycle life driving high levelized storage cost",
      "Thermal runaway risk in large stationary arrays",
      "Complex BMS integration with inverter systems",
      "Regulatory compliance for grid-connected storage",
    ],
    ourAnswer: [
      "LFP chemistry: 6,000+ cycles at 80% DoD",
      "Modular rack design: 5 kWh to 10 MWh scalable",
      "Native SunSpec/Modbus inverter integration",
      "Full IEC 62619 and grid-code certification support",
    ],
  },
  {
    slug: "telecom-infrastructure",
    name: "Telecom Infrastructure",
    icon: "radioTower",
    headline: "Zero Downtime for the Networks That Keep the World Connected",
    description:
      "Telecom towers and data centers cannot tolerate power interruptions. Nordische backup power batteries replace lead-acid VRLA systems with lithium alternatives that deliver 3× the energy in 50% of the space, require zero maintenance, and operate reliably across the extreme temperature ranges found in outdoor cabinet installations across Europe and beyond.",
    painPoints: [
      "Lead-acid replacement cycles every 3–4 years",
      "High weight-to-energy ratio limiting installation options",
      "High-temperature failure in outdoor cabinet installations",
      "Manual maintenance visits increasing OpEx",
    ],
    ourAnswer: [
      "LFP: 10-year design life — 3× vs lead-acid",
      "50% weight reduction for tower-top and rooftop installations",
      "Passive thermal management to +55°C ambient — no active cooling",
      "Remote SOH monitoring — eliminate manual inspection visits",
    ],
  },
  {
    slug: "industrial-applications",
    name: "Industrial Applications",
    icon: "factory",
    headline: "Reliable Power for Demanding Industrial Environments",
    description:
      "From automated guided vehicles to mining equipment to maritime propulsion, industrial applications push batteries harder than any other use case. Nordische industrial battery systems are designed for high-vibration, high-temperature, high-discharge environments where failure is not an option and maintenance windows are narrow.",
    painPoints: [
      "Battery failure causing costly production line stoppages",
      "Inadequate cycle life driving frequent replacement cost",
      "Vibration and shock degrading cell integrity over time",
      "Complex multi-shift charging logistics",
    ],
    ourAnswer: [
      "MIL-STD vibration and shock qualification",
      "3,000+ cycle life — 1 replacement per 8-year equipment life",
      "Opportunity-charging compatible: boost to 80% in 20 minutes",
      "Industrial CAN/CANopen BMS for PLC integration",
    ],
  },
] as const;

export const CASE_STUDIES = [
  {
    slug: "ev-fleet-urban-logistics",
    client: "Urban Logistics Operator (North Germany)",
    title: "Fleet Electrification: 40-Vehicle Delivery Van Conversion",
    industry: "Electric Vehicles",
    challenge:
      "A regional logistics operator was converting a 40-vehicle diesel delivery fleet to electric. The challenge: the vans required 80 kWh packs that fit within the existing van floor template, support 2C fast charging for mid-shift top-up, and maintain 200 km range in winter conditions (-15°C).",
    solution:
      "Nordische designed a modular 80 kWh pack using prismatic NMC cells in a floor-integrated structural enclosure. Liquid thermal management maintained cell temperature above 10°C in sub-zero ambient through pre-conditioning triggered by fleet management software. BMS integrated with the operator's telematics via CAN bus.",
    results: [
      "220 km winter range achieved (vs 195 km target)",
      "2C fast charge to 80% in 24 minutes",
      "15,000 km per vehicle average with zero degradation events",
      "38% reduction in total fleet energy cost vs diesel baseline",
    ],
    deliveryWeeks: 14,
    units: 40,
  },
  {
    slug: "renewable-storage-solar-farm",
    client: "Solar Developer (Brandenburg, Germany)",
    title: "2 MWh Grid-Edge Storage for 8 MW Solar Farm",
    industry: "Renewable Energy Storage",
    challenge:
      "A solar farm developer needed grid-edge storage to maximize self-consumption, reduce curtailment, and provide 30-minute peak-shaving to avoid grid congestion penalties. The system needed to pass grid-code compliance for VDE-AR-N 4105 certification.",
    solution:
      "Deployed 2 MWh of rack-mounted LFP systems in weatherproof outdoor enclosures. SunSpec-compatible BMS integrated directly with the existing SMA inverter cluster. Nordische engineering team managed the VDE-AR-N 4105 certification process end-to-end.",
    results: [
      "94.5% round-trip efficiency achieved",
      "Grid curtailment reduced from 18% to under 3%",
      "VDE-AR-N 4105 certification completed in 6 weeks",
      "Projected payback period: 7.2 years (vs 9.5-year industry average)",
    ],
    deliveryWeeks: 18,
    units: 40,
  },
  {
    slug: "telecom-backup-upgrade",
    client: "Telecom Tower Operator (Germany)",
    title: "Lead-Acid Replacement: 220-Tower Backup Power Upgrade",
    industry: "Telecom Infrastructure",
    challenge:
      "A tower operator managing 220 outdoor towers across northern Germany was spending €380,000 annually on lead-acid replacement cycles and maintenance visits. High-temperature failures were causing an average of 2.3 outage events per tower per year.",
    solution:
      "Nordische supplied drop-in LFP replacement modules with passive thermal management rated to +60°C ambient. Remote SOH monitoring via cellular module eliminated scheduled visits. Installation was completed by the operator's own teams using Nordische installation guides.",
    results: [
      "Annual maintenance cost reduced by 71% (€270k/year saving)",
      "Outage events reduced to 0.1 per tower per year",
      "10-year design life vs 3.5-year lead-acid average",
      "Installation completed across all 220 towers in 8 weeks",
    ],
    deliveryWeeks: 6,
    units: 220,
  },
] as const;

export const MANUFACTURING_CONTENT = {
  headline: "Precision Manufacturing & Rigorous Testing",
  subheadline:
    "Every battery system that leaves our facility has passed a 127-point quality verification protocol.",
  intro:
    "Our manufacturing facility in Berlin spans 4,200 m² and operates under ISO 9001:2015 quality management. Dry-room assembly, automated cell grading, and computer-controlled formation cycling ensure that every unit meets specification before shipment. We do not outsource assembly. Everything is built and verified in-house.",
  capabilities: [
    {
      title: "Dry Room Cell Assembly",
      description:
        "Cell handling and pack assembly in controlled <1% relative humidity dry rooms to prevent moisture-induced degradation. Critical for prismatic and pouch cell formats.",
    },
    {
      title: "Automated Cell Grading",
      description:
        "Every incoming cell is tested for capacity, internal resistance, and self-discharge rate. Cells are binned to ±2% capacity match before pack assembly — eliminating weak-cell scenarios.",
    },
    {
      title: "Formation & Aging Cycles",
      description:
        "All packs undergo 3–5 controlled formation cycles and a 72-hour aging period before final testing. This process stabilizes SEI formation and filters early-life failures.",
    },
    {
      title: "Environmental Testing",
      description:
        "Thermal cycling chamber (-40°C to +85°C), vibration table (IEC 60068), and humidity exposure testing. Destructive testing performed on sample units from each production batch.",
    },
    {
      title: "Electrical Safety Testing",
      description:
        "Hipot, insulation resistance, short-circuit protection validation, and BMS failsafe verification on 100% of units. No unit ships without passing all 127 electrical checkpoints.",
    },
    {
      title: "Traceability & Documentation",
      description:
        "Full production traceability: cell serial numbers, formation data, test results, and inspection sign-off are documented per pack. Delivered with each unit as a Production Record.",
    },
  ],
  certifications: ["ISO 9001:2015", "IEC 62619", "UN38.3", "CE Marking", "RoHS", "REACH"],
} as const;

export const ABOUT_CONTENT = {
  headline: "Innovating Sustainable Energy for a Greener Tomorrow",
  story: [
    "Nordische Energy Systems Pvt Ltd (NES), established in 2022, aims to revolutionize the energy landscape by spearheading research and development in breakthrough climate change technologies.",
    "Headquartered in Bangalore, NES is a deep-tech R&D powerhouse, staffed by a team of elite research scientists with advanced degrees in chemistry, energy storage, and physics.",
    "Our four technology pillars — Innovative Energy Storage, Integrated Metal Extraction, Active & Advanced Materials, and Green Hydrogen — span the full value chain from raw material innovation to finished energy systems.",
    "NES is dedicated to creating scalable, high-quality, affordable technologies that are environmentally sustainable, technologically advanced, and designed to benefit society on a large scale.",
  ],
  vision:
    "To pioneer ecologically sustainable and socially inclusive technologies, promoting environmental and social justice.",
  mission:
    "To catalyse the global shift towards sustainable energy by innovating and delivering cutting-edge, eco-friendly solutions.",
  values: [
    { title: "Ecological Sustainability", description: "Every technology we develop prioritises environmental responsibility and resource efficiency." },
    { title: "Social Inclusivity", description: "We design technologies that benefit communities at scale, not just corporations." },
    { title: "Scientific Excellence", description: "Our team of elite research scientists pushes boundaries in chemistry, energy storage, and physics." },
    { title: "Scalable Innovation", description: "We build high-quality, affordable solutions designed for global deployment." },
  ],
  milestones: [
    { title: "Al-G Technology Tested", description: "Aluminium-graphene battery successfully tested at CIPET Bangalore and in Spain." },
    { title: "Pouch Cells Manufactured", description: "Commercial-grade pouch cells manufactured in Spain using Al-G technology." },
    { title: "Grid Storage Exported", description: "300 kW LCUB grid storage solutions exported to Germany; 1.5 MW more under production." },
    { title: "SWM Prototype Developed", description: "Sea Water Mining & Green Hydrogen laboratory-grade prototype successfully developed." },
    { title: "Active Materials Produced", description: "Significant quantities of few-layered graphene and 30+ advanced materials produced and tested." },
  ],
  partners: [
    { name: "CIPET", location: "Bangalore, India", role: "R&D of Aluminium Graphene technology", logo: "/images/partners/cipet.svg" },
    { name: "CSIR-AMPRI", location: "Bhopal, India", role: "Aluminium Foam technology", logo: "/images/partners/csir-ampri.svg" },
    { name: "Iolitec", location: "Germany", role: "Electrolyte manufacturing for Al-G Battery", logo: "/images/partners/iolitec-logo.svg" },
    { name: "Albufera Energy Storage S.L.", location: "Spain", role: "Commercial-grade pouch cell development", logo: "/images/partners/albufera.svg" },
    { name: "DaVinci Supercars Co", location: "USA", role: "Al-G Battery factory setup", logo: "/images/partners/davinci.svg" },
    { name: "Sakshi Auto Parts (EMIKO)", location: "India", role: "LCUB battery manufacturing", logo: "/images/partners/sakshi.svg" },
    { name: "Sister Nivedita University", location: "India", role: "SWM and Green Hydrogen R&D", logo: "/images/partners/snu.svg" },
    { name: "Future Relevant Consulting", location: "India", role: "Strategy, expertise, and fundraising", logo: "/images/partners/future-relevant.svg" },
  ],
  businessModel: [
    { title: "Technology Licensing", description: "Licensing proprietary battery and extraction technologies to manufacturers globally." },
    { title: "Royalty Fees", description: "Revenue from sales of products utilizing NES technology." },
    { title: "Active Materials Supply", description: "Direct supply of 30+ advanced materials for battery and industrial applications." },
    { title: "Pouch Cell Manufacturing", description: "NES-owned aluminium-graphene pouch cell manufacturing units." },
  ],
  geographicReach: ["India", "Germany", "Spain", "Holland", "UK", "USA"],
  targetMarkets: [
    "Consumer Electronics", "EV Manufacturers", "Renewable Energy Storage", "Medical Devices",
    "Industrial Applications", "Defence & Aerospace", "Automotive (ICE & Hybrid)",
    "Telecommunications", "Smart Grids", "Agriculture", "Marine & Shipping",
    "Military & Defense", "Electric Aviation", "Off-Grid Energy Solutions", "Construction & Infrastructure",
  ],
} as const;

export const TECHNOLOGY_VERTICALS = [
  {
    slug: "energy-storage",
    name: "Energy Storage",
    tagline: "Non-Flammable, High-Cycle Battery Platforms",
    description:
      "Nordische develops two differentiated energy storage chemistries — Aluminium-Ion Graphene and Lead Ultra-Carbon — both at manufacturing readiness (TRL 10). These platforms prioritize safety, recyclability, and performance beyond conventional lithium supply chains.",
    highlights: [
      {
        title: "Aluminium-Graphene Battery",
        points: [
          "Energy density: 150 Wh/kg",
          "Power density: 800 W/kg",
          "Ultra-fast charging up to 10C rate",
          "Cycle life: >3,000 cycles",
          "Coulombic efficiency: >97.8%",
          "Recyclable rate: >90%",
          "Non-toxic, non-flammable, no thermal runaway",
        ],
      },
      {
        title: "Lead Ultra-Carbon Battery",
        points: [
          "Proprietary 2D engineered carbonous materials in negative plates",
          "Electrochemical pseudo-capacitor behavior for extended lifespan",
          "Improved cycle life and faster charging",
          "Enhanced extreme temperature performance",
          "Superior high-rate power discharge",
          "Reduced sulphation",
        ],
      },
    ],
    applications: ["Electric vehicles", "Consumer electronics", "Grid storage", "Industrial equipment", "Portable power", "Hybrid vehicles"],
    icon: "battery",
  },
  {
    slug: "hydrogen-seawater",
    name: "Hydrogen & Seawater Mining",
    tagline: "Powering Through the Blue Economy",
    description:
      "NES has developed a patent-pending integrated Sea Water Mining system that produces green hydrogen, extracts lithium and critical minerals, and generates fresh water — all from seawater. Using membrane-less electrolysis, sand-based thermal storage, and ceramic membrane separation, this nexus approach solves freshwater scarcity, eliminates brine waste, and creates multiple revenue streams from a single process.",
    highlights: [
      {
        title: "Blue Economy & The Problem",
        points: [
          "Ocean represents 99% of Earth's living volume — if it were a country, GDP would rank 7th globally",
          "Planned 80 GW hydrogen capacity needs ~110 million cubic metres of pure water",
          "Reverse Osmosis drawbacks: high electricity, brine waste, carbon footprint",
          "NES Integrated Nexus Approach produces hydrogen, fresh water, minerals, and electricity from seawater",
        ],
      },
      {
        title: "Sand-Based Thermal Desalination",
        points: [
          "Sand battery stores solar energy at 600–1,000°C",
          "30% powers infrastructure immediately, 70% stored for overnight use",
          "More water produced than electrolyzer needs — surplus for drinking/agriculture",
          "Works with any heat source above 60°C",
        ],
      },
      {
        title: "Membrane-Less Green Hydrogen",
        points: [
          "Patent-pending box electrode with perforation — no expensive membranes",
          "Ni-based electrocatalyst via hydrothermal method at 500°C",
          "Low cost, scalable, environmentally friendly, highly durable",
          "India targets 5 million tonnes green hydrogen/year by 2030",
        ],
      },
      {
        title: "Lithium & Mineral Extraction",
        points: [
          "Ceramic membrane with crystal structure selectively passes lithium ions",
          "3-compartment electrochemical cell with copper cathode coated in engineering carbon",
          "42,000-hour membrane life with negligible performance decay",
          "FePO₄-coated titanium electrode for LiFePO₄ intercalation",
          "Outputs: Lithium Hydroxide, Magnesium Hydroxide, Calcium Hydroxide, Soda Ash, Chlorine gas, Hydrogen",
        ],
      },
      {
        title: "Cost Analysis",
        points: [
          "Only ~€5 of electricity extracts: 1 kg Lithium + 0.87 kg Hydrogen + 2 kg Chlorine",
          "Plus substantial Magnesium, Calcium, and Lye (NaOH)",
          "Hydrogen and chlorine value more than offsets electricity cost",
          "All electricity from captive solar — truly green and carbon-neutral",
        ],
      },
    ],
    applications: ["Green hydrogen fuel", "Lithium for batteries", "Industrial chlorine", "Drinking water production", "Magnesium for aerospace", "Calcium for industry", "Soda ash production", "Carbon-neutral heating"],
    icon: "droplets",
  },
  {
    slug: "advanced-materials",
    name: "Advanced Light Materials",
    tagline: "Ultra-Lightweight Foams for Aerospace, Automotive, and Beyond",
    description:
      "Nordische pioneers advanced light materials combining carbon-based and metal foams, offering an exceptional strength-to-weight ratio without compromising structural integrity. These materials represent a revolution in material science — ultra-lightweight, superior durability, and outstanding thermal and acoustic insulation.",
    highlights: [
      {
        title: "Foam Technologies",
        points: [
          "Carbon-based foam — lightweight structural applications",
          "Aluminium foams (open and closed cell) — impact absorption",
          "Nickel foams — electrochemical and filtration applications",
          "Exceptional thermal and acoustic insulation properties",
        ],
      },
      {
        title: "Industry Applications",
        points: [
          "Aerospace: weight reduction for enhanced fuel efficiency",
          "Automotive: interiors, structural elements, insulation",
          "Construction: lightweight structural panels",
          "Medical: biocompatible scaffolds and implants",
        ],
      },
    ],
    applications: ["Aerospace components", "Automotive structures", "Thermal insulation", "Acoustic dampening", "Medical scaffolds"],
    icon: "layers",
  },
  {
    slug: "active-materials",
    name: "Active Materials",
    tagline: "Engineered Nanomaterials for Next-Generation Applications",
    description:
      "Nordische produces three families of advanced carbon-based nanomaterials — Few-Layered Graphene (FLG), Reduced Graphene Oxide (rGO), and Functionalized Multi-Walled Carbon Nanotubes (f-MWCNTs). Each is engineered for specific industrial needs with customizable properties.",
    highlights: [
      {
        title: "Few-Layered Graphene (FLG)",
        points: [
          "2–5 layers thick with high electrical and thermal conductivity",
          "Exceptional mechanical strength",
          "Enhanced supercapacitors and battery performance",
          "Ultra-sensitive gas and biomolecule detection",
        ],
      },
      {
        title: "rGO & f-MWCNTs",
        points: [
          "rGO: combines conductivity with improved processability",
          "Large surface area for enhanced adsorption and catalysis",
          "f-MWCNTs: high aspect ratio and tensile strength",
          "Enhanced dispersibility in solvents and polymers",
        ],
      },
    ],
    applications: ["Energy storage enhancement", "Transparent electronics", "EMI shielding", "Drug delivery", "Water purification", "Wearable devices"],
    icon: "atom",
  },
  {
    slug: "metal-extraction",
    name: "Metal & Material Extraction",
    tagline: "Sustainable Recovery of Critical Minerals",
    description:
      "Our Metal and Material Extraction division develops efficient, eco-friendly, and economically viable methods for extracting essential metals from unconventional sources — seawater, brine, and industrial byproducts like fly ash. This diversifies global supply chains while supporting circular economy principles.",
    highlights: [
      {
        title: "Extraction Technologies",
        points: [
          "Lithium from seawater via advanced membrane-based electrodialysis",
          "Magnesium from oceanic cation-rich water treatment",
          "Lithium and gallium recovery from coal fly ash",
          "Comprehensive byproduct utilization: chlorine, hydrogen, soda ash",
        ],
      },
      {
        title: "Sustainability Impact",
        points: [
          "Climate change mitigation through reduced mining impact",
          "Circular economy: converting waste streams to resources",
          "High-purity output for aerospace, automotive, and biomedical use",
          "Diversification of global critical mineral supply chains",
        ],
      },
    ],
    applications: ["Battery raw materials", "Aerospace alloys", "Biomedical magnesium", "Electronics manufacturing", "Catalyst production"],
    icon: "pickaxe",
  },
  {
    slug: "solar-desalination",
    name: "Solar Desalination",
    tagline: "Clean Water from Sun & Sand",
    description:
      "NES pioneers off-grid desalination systems that use solar heat and sand (SiO₂) as a thermal energy storage battery. The SiO₂ sand bed is not a filter — it is a thermal battery that stores solar energy during the day and powers desalination at night or on cloudy days. Zero chemicals, zero membranes, minimal maintenance.",
    highlights: [
      {
        title: "SiO₂ Thermal Battery Technology",
        points: [
          "Sand stores solar energy as heat — powers desalination 24/7",
          "High specific heat enables efficient heat storage",
          "Low thermal conductivity ensures slow heat loss",
          "Vacuum evaporation at lower temperatures reduces energy input",
          ">70% energy efficiency",
          "Zero chemicals, zero membranes, minimal maintenance",
        ],
      },
      {
        title: "Product Range",
        points: [
          "Solar Desalination Units: 50 to 10,000 litres/day",
          "SiO₂-based Thermal Battery Systems for energy storage",
          "Hybrid Solar + Induction Heating Plants",
          "Designed for dry, remote, and energy-constrained regions",
          "Scalable and accessible for climate-resilient communities",
        ],
      },
    ],
    applications: ["Drinking water in arid regions", "Agricultural irrigation", "Off-grid communities", "Industrial water supply", "Disaster relief"],
    icon: "sunMedium",
  },
] as const;

export const INDUSTRIES_OPTIONS = [
  "Electric Vehicles",
  "Renewable Energy Storage",
  "Telecom Infrastructure",
  "Industrial Applications",
  "Marine",
  "Defence & Aerospace",
  "Other",
] as const;

export const CAPACITY_OPTIONS = [
  "Under 10 kWh",
  "10–50 kWh",
  "50–200 kWh",
  "200 kWh – 1 MWh",
  "Above 1 MWh",
  "Not yet defined",
] as const;

export const FOOTER_LINKS = {
  products: [
    { label: "Lithium-Ion Battery Packs", href: "/products#lithium-ion-battery-packs" },
    { label: "EV Battery Modules", href: "/products#ev-battery-modules" },
    { label: "Custom Battery Solutions", href: "/products#custom-battery-solutions" },
  ],
  technologies: [
    { label: "Energy Storage", href: "/technology/energy-storage" },
    { label: "Hydrogen & Seawater", href: "/technology/hydrogen-seawater" },
    { label: "Advanced Materials", href: "/technology/advanced-materials" },
    { label: "Active Materials", href: "/technology/active-materials" },
    { label: "Metal Extraction", href: "/technology/metal-extraction" },
    { label: "Solar Desalination", href: "/technology/solar-desalination" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  industries: [
    { label: "Electric Vehicles", href: "/industries/electric-vehicles" },
    { label: "Renewable Energy", href: "/industries/renewable-energy" },
    { label: "Telecom Infrastructure", href: "/industries/telecom-infrastructure" },
    { label: "Industrial Applications", href: "/industries/industrial-applications" },
  ],
  blog: [
    { label: "All Articles", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Site Map", href: "/sitemap" },
    { label: "Cookie Policy", href: "/privacy-policy#cookies" },
  ],
} as const;

export const BLOG_ARTICLES = [
  {
    slug: "aluminium-graphene-battery-future-energy-storage",
    title: "Why Aluminium-Graphene Batteries Could Replace Lithium-Ion",
    excerpt:
      "Lithium-ion batteries dominate the market, but supply chain risks, thermal runaway hazards, and recycling challenges are driving the search for alternatives. Aluminium-graphene technology offers a compelling answer — non-flammable chemistry, 50× faster charging, and over 90% recyclability without rare earth dependencies.",
    category: "Energy Storage",
    date: "2025-03-15",
    readTime: "6 min read",
    body: [
      "The global battery market is projected to reach $400 billion by 2030, yet over 75% of current production depends on lithium, cobalt, and nickel — materials concentrated in a handful of geopolitically sensitive regions. As demand accelerates for electric vehicles, grid storage, and consumer electronics, the fragility of this supply chain becomes an existential risk for manufacturers and nations alike.",
      "Aluminium-graphene batteries represent a fundamental shift in energy storage chemistry. Unlike lithium-ion cells, which rely on intercalation of lithium ions into graphite anodes, aluminium-graphene cells use aluminium as the anode and few-layered graphene as the cathode. The result is a battery that charges up to 50 times faster, operates without thermal runaway risk, and achieves energy densities competitive with commercial lithium-ion at 220 Wh/kg.",
      "The safety profile is transformative. Traditional lithium-ion cells contain flammable organic electrolytes that can ignite during thermal runaway — a cascading failure mode responsible for warehouse fires, vehicle recalls, and flight bans on damaged devices. Aluminium-graphene cells use ionic liquid electrolytes that are inherently non-flammable. In nail penetration and crush tests, these cells show zero thermal runaway propagation.",
      "Recyclability is another critical advantage. Over 90% of materials in an aluminium-graphene battery can be recovered and reused, compared to roughly 50% for lithium-ion. Aluminium is the most abundant metal in Earth's crust, and graphene can be produced from natural graphite or biomass sources, eliminating dependence on conflict minerals.",
      "Nordische Energy Systems has manufactured commercial-grade aluminium-graphene pouch cells tested at CIPET Bangalore and in Spain, demonstrating over 3,000 charge cycles with greater than 97.8% coulombic efficiency. The technology is at manufacturing readiness level TRL 10 — meaning it is not a laboratory concept but a production-validated platform.",
      "For OEMs and system integrators evaluating next-generation battery platforms, aluminium-graphene technology offers a path to safer, more sustainable, and supply-chain-resilient energy storage. The question is no longer whether this technology works — it is how quickly the industry will adopt it.",
    ],
  },
  {
    slug: "lead-ultra-carbon-battery-grid-storage",
    title: "Lead Ultra-Carbon Batteries: The Unsung Hero of Grid Storage",
    excerpt:
      "While lithium dominates headlines, enhanced lead-acid batteries with 2D carbonous materials are quietly delivering reliable, cost-effective grid storage at scale. Learn how Lead Ultra-Carbon technology extends cycle life, improves charging speed, and reduces total cost of ownership for utility and telecom operators.",
    category: "Grid Storage",
    date: "2025-02-20",
    readTime: "5 min read",
    body: [
      "Grid-scale energy storage does not always need the highest energy density — it needs reliability, low cost, and proven supply chains. While lithium-ion batteries attract venture capital and media attention, a quieter revolution is happening in lead-acid technology. Lead Ultra-Carbon Batteries (LCUB) integrate proprietary 2D engineered carbonous materials into negative plates, creating an electrochemical pseudo-capacitor effect that dramatically extends cycle life and charging speed.",
      "Traditional lead-acid batteries suffer from sulfation — a progressive buildup of lead sulfate crystals on the negative plate that degrades capacity over time. LCUB technology mitigates sulfation through the carbon additive's high surface area and conductivity, maintaining active material utilization across thousands of cycles. The result is a battery that lasts 2–3× longer than conventional VRLA batteries in partial state-of-charge cycling applications like solar storage and telecom backup.",
      "Cost is where LCUB technology shines brightest. The levelised cost of storage for LCUB systems is 40–60% lower than lithium-ion for stationary applications where weight and volume are not primary constraints. Lead-acid manufacturing infrastructure exists globally, supply chains are mature, and end-of-life recycling rates exceed 99% — the highest of any battery chemistry.",
      "Nordische Energy Systems has exported 300 kW of LCUB grid storage solutions to Germany, with an additional 1.5 MW under production. These systems are deployed in telecom backup, solar farm storage, and industrial UPS applications where reliability and total cost of ownership are the primary selection criteria.",
      "For utility operators and telecom companies evaluating energy storage options, LCUB technology offers a proven, bankable solution that does not require new supply chains, specialised recycling infrastructure, or thermal management systems. It is the pragmatic choice for large-scale deployment today.",
    ],
  },
  {
    slug: "seawater-mining-green-hydrogen-minerals",
    title: "Mining the Ocean: How Seawater Extraction Could Solve the Mineral Crisis",
    excerpt:
      "Seawater contains virtually every element on the periodic table — including lithium, magnesium, and rare earths critical to the energy transition. Nordische's integrated Sea Water Mining and Green Hydrogen system extracts these minerals while co-producing clean hydrogen, turning desalination waste into a resource.",
    category: "Green Technology",
    date: "2025-01-10",
    readTime: "7 min read",
    body: [
      "The energy transition faces a paradox: the technologies needed to decarbonise the economy — batteries, wind turbines, solar panels — require minerals whose extraction often causes significant environmental damage. Lithium mining consumes 2.2 million litres of water per tonne produced. Cobalt mining in the DRC involves well-documented human rights concerns. Rare earth processing generates radioactive waste.",
      "Seawater contains an estimated 230 billion tonnes of dissolved minerals, including lithium (concentration: 0.17 ppm), magnesium (1,290 ppm), potassium (380 ppm), and trace quantities of virtually every element on the periodic table. The challenge has always been economic — extracting minerals from such dilute concentrations requires enormous energy inputs.",
      "Nordische Energy Systems has developed an integrated Sea Water Mining (SWM) and Green Hydrogen system that fundamentally changes this calculus. The process uses solar-thermal energy to concentrate seawater, then applies selective extraction membranes to separate target minerals. As a co-product, the system electrolyses the remaining brine to produce green hydrogen at the point of use — eliminating transportation costs and creating a zero-waste circular process.",
      "The laboratory-grade prototype has successfully demonstrated extraction of lithium, magnesium, and calcium from seawater samples, with the green hydrogen co-production validated independently. The technology roadmap targets pilot-scale deployment by 2026, with commercial systems designed for integration into existing desalination plants.",
      "For regions dependent on desalination — the Middle East, North Africa, coastal India, and Australia — this technology converts a waste stream (concentrated brine, which is currently dumped back into the ocean causing ecological damage) into a revenue stream. Instead of paying to dispose of brine, operators could sell extracted minerals and hydrogen.",
      "The strategic implications extend further. Nations currently dependent on China for rare earth processing, or on South America for lithium, could develop domestic mineral supply chains from their own coastlines. Energy security and mineral security converge in a single technology platform.",
    ],
  },
  {
    slug: "active-materials-graphene-industrial-applications",
    title: "Beyond Batteries: How Advanced Active Materials Are Transforming Industry",
    excerpt:
      "Few-layered graphene, nano-silicon composites, and specialised electrode materials are not just battery components — they are enabling breakthroughs in coatings, composites, electronics, and catalysis. Nordische produces over 30 active material variants for global industrial customers.",
    category: "Materials Science",
    date: "2024-12-05",
    readTime: "5 min read",
    body: [
      "When most people hear 'graphene', they think of batteries. But the commercial reality of advanced carbon materials is far broader. Few-layered graphene, carbon nanotubes, nano-silicon composites, and engineered electrode materials are finding applications across coatings, polymer composites, thermal management, water treatment, and catalysis.",
      "Nordische Energy Systems produces over 30 active material variants at its R&D facility, including few-layered graphene (FLG), graphene oxide (GO), reduced graphene oxide (rGO), carbon nanotubes (CNT), nano-silicon, and specialised cathode and anode materials. These are not laboratory curiosities — they are supplied in commercial quantities to industrial customers across six countries.",
      "In the coatings industry, adding just 0.5–2% graphene to epoxy or polyurethane formulations can improve corrosion resistance by 60%, increase thermal conductivity by 300%, and enhance mechanical strength by 40%. For marine coatings, anti-fouling, and industrial protective coatings, these improvements translate directly into extended service life and reduced maintenance costs.",
      "In polymer composites, graphene-reinforced materials are replacing metal components in automotive and aerospace applications where weight reduction is critical. A graphene-enhanced nylon composite can achieve the stiffness of aluminium at one-third the weight — enabling lighter vehicles with better fuel efficiency or range.",
      "For battery manufacturers, Nordische's active materials serve as drop-in performance enhancers. Adding FLG to lithium-ion cathodes improves rate capability and cycle life. Nano-silicon anode additives can increase theoretical capacity by 10×. These materials are validated, characterised, and supplied with full technical data sheets for integration into existing production lines.",
      "The active materials business represents Nordische's most immediately scalable revenue stream — the materials are produced today, shipped globally, and generate recurring revenue from industrial customers who integrate them into their own products.",
    ],
  },
] as const;
