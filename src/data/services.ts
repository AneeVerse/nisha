export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  about: {
    title: string;
    description: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    image: string;
  };
  keyBenefits: Array<{
    title: string;
    description: string;
  }>;
  technicalSpecs: Array<{
    title: string;
    description: string;
  }>;
  industries: Array<{
    title: string;
    description: string;
  }>;
  process: Array<{
    title: string;
    description: string;
  }>;
  ctaText: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "empty-container-transportation",
    title: "India's Pioneer in Empty Container Transportation",
    subtitle: "Connecting all major ports and ICDs with cost-effective empty container solutions since 1982.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Revolutionizing Container Movement",
      description: "Nisha Roadways revolutionized empty container movement by road in India. We handle 20ft, 40ft, and 45ft empty containers with specialized skeleton trailers and platform vehicles, ensuring quick turnaround times at competitive rates.",
      stats: [
        { value: "1982", label: "Since" },
        { value: "Pan-India", label: "Coverage" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Cost Leadership", description: "Up to 40% savings compared to rail transport" },
      { title: "Speed Advantage", description: "Direct port-to-port delivery without transshipment delays" },
      { title: "Fleet Expertise", description: "Dedicated skeleton and platform trailers" },
      { title: "Network Coverage", description: "Presence at all major ports and ICDs nationwide" }
    ],
    technicalSpecs: [
      { title: "Container Types", description: "20ft, 40ft, and 45ft empty containers" },
      { title: "Vehicle Types", description: "Specialized skeleton trailers and platform vehicles" },
      { title: "Load Capacity", description: "Up to 30 tons per vehicle with optimal weight distribution" },
      { title: "Safety Standards", description: "ISO certified handling procedures and GPS tracking" }
    ],
    industries: [
      { title: "Manufacturing", description: "Raw materials, finished goods, and industrial equipment transportation" },
      { title: "Automotive", description: "Vehicle parts, components, and finished automobiles" },
      { title: "Textiles", description: "Fabric, garments, and textile machinery" },
      { title: "Chemicals", description: "Industrial chemicals and pharmaceutical products" },
      { title: "Electronics", description: "Consumer electronics and technology equipment" },
      { title: "Retail", description: "Consumer goods and retail merchandise" }
    ],
    process: [
      { title: "Booking Request", description: "Submit your container transportation requirements through our online portal or contact our team directly" },
      { title: "Route Planning", description: "Our logistics team plans the optimal route considering traffic, regulations, and delivery timelines" },
      { title: "Transportation", description: "Secure loading and transportation with real-time GPS tracking and regular status updates" },
      { title: "Delivery", description: "Safe delivery to destination with proper documentation and confirmation of receipt" }
    ],
    ctaText: "Ready to optimize your empty container logistics? Get started with India's most reliable service."
  },
  {
    slug: "export-import-containers",
    title: "Seamless Export-Import Container Solutions",
    subtitle: "Complete container logistics from port to door with customs support and damage-free delivery guarantee.",
    heroImage: "/images/use-everywhere/images2.png",
    about: {
      title: "Complete Container Logistics",
      description: "Full-service export and import container transportation covering 20ft, 40ft, and 45ft loaded containers. From customs clearance documentation to final delivery, we handle every aspect of your container transportation needs with precision and reliability.",
      stats: [
        { value: "24/7", label: "Operations" },
        { value: "100%", label: "Compliance" }
      ],
      image: "/images/use-everywhere/images3.png"
    },
    keyBenefits: [
      { title: "End-to-End Service", description: "Port pickup to final destination delivery" },
      { title: "Customs Support", description: "Documentation and clearance assistance" },
      { title: "Multi-Size Capability", description: "20ft, 40ft, 45ft container handling" },
      { title: "Damage Prevention", description: "Specialized securing and handling protocols" }
    ],
    technicalSpecs: [
      { title: "Container Types", description: "Standard, high-cube, refrigerated, open-top" },
      { title: "Weight Capacity", description: "Up to 28 tons per container" },
      { title: "Special Handling", description: "Reefer containers, hazardous goods containers" },
      { title: "Documentation", description: "Complete customs and transport paperwork" }
    ],
    industries: [
      { title: "Exporters", description: "International trade and export businesses" },
      { title: "Importers", description: "Import companies and trading houses" },
      { title: "Manufacturing", description: "Industrial manufacturers and suppliers" },
      { title: "FMCG", description: "Fast-moving consumer goods companies" },
      { title: "Pharmaceuticals", description: "Medical and pharmaceutical products" },
      { title: "Automotive", description: "Auto parts and vehicle manufacturers" }
    ],
    process: [
      { title: "Route Planning", description: "Optimal route selection for timely delivery" },
      { title: "Customs Coordination", description: "Documentation and clearance management" },
      { title: "Secure Transport", description: "GPS tracking and real-time updates" },
      { title: "Final Delivery", description: "Door-to-door service with delivery confirmation" }
    ],
    ctaText: "Streamline your container logistics with our comprehensive service."
  },
  {
    slug: "project-cargo-management",
    title: "Moving the Unmovable - Project Cargo Specialists",
    subtitle: "Oversized, overweight, and complex cargo transportation with custom engineering solutions.",
    heroImage: "/images/use-everywhere/images3.png",
    about: {
      title: "Industrial Cargo Expertise",
      description: "Industrial machinery, power plant equipment, construction components - we move what others consider impossible. Our project cargo expertise includes route surveys, permit acquisition, custom vehicle configurations, and specialized handling equipment.",
      stats: [
        { value: "500T+", label: "Max Capacity" },
        { value: "40+ Years", label: "Experience" }
      ],
      image: "/images/use-everywhere/images1.png"
    },
    keyBenefits: [
      { title: "Custom Solutions", description: "Tailored vehicles and handling for unique cargo" },
      { title: "Route Engineering", description: "Comprehensive route surveys and feasibility studies" },
      { title: "Permit Management", description: "Complete regulatory compliance and documentation" },
      { title: "Risk Mitigation", description: "Advanced planning and contingency protocols" }
    ],
    technicalSpecs: [
      { title: "Weight Capacity", description: "Up to 500 tons with specialized trailers" },
      { title: "Dimensional Limits", description: "No size restrictions with proper planning" },
      { title: "Special Equipment", description: "Hydraulic trailers, SPMTs, cranes" },
      { title: "Route Planning", description: "Bridge analysis and road feasibility studies" }
    ],
    industries: [
      { title: "Power Generation", description: "Turbines, generators, and power plant equipment" },
      { title: "Oil & Gas", description: "Refinery equipment and pipeline components" },
      { title: "Construction", description: "Heavy machinery and construction equipment" },
      { title: "Mining", description: "Mining equipment and processing machinery" },
      { title: "Steel", description: "Steel plant equipment and heavy structures" },
      { title: "Infrastructure", description: "Bridge components and infrastructure materials" }
    ],
    process: [
      { title: "Site Survey", description: "Detailed route and site assessment" },
      { title: "Engineering Design", description: "Custom transport solution development" },
      { title: "Permit Acquisition", description: "Regulatory approvals and documentation" },
      { title: "Execution", description: "Careful transport with expert supervision" }
    ],
    ctaText: "Ready to move your impossible cargo? Let our experts handle your project."
  },
  {
    slug: "bulk-cargo-solutions",
    title: "Efficient Bulk Cargo Transportation",
    subtitle: "Specialized handling of dry bulk, liquid bulk, and break bulk cargo with advanced logistics.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Bulk Cargo Excellence",
      description: "Comprehensive bulk cargo solutions for industries requiring specialized handling. Our fleet includes pneumatic tankers, tipper trucks, and specialized bulk carriers designed for efficient loading, transport, and discharge operations.",
      stats: [
        { value: "1000+", label: "Vehicles" },
        { value: "99.5%", label: "On-Time" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Specialized Fleet", description: "Pneumatic tankers and bulk carriers" },
      { title: "Contamination Control", description: "Dedicated vehicles for specific products" },
      { title: "Efficient Loading", description: "Advanced loading and discharge systems" },
      { title: "Quality Assurance", description: "Product integrity throughout transport" }
    ],
    technicalSpecs: [
      { title: "Capacity Range", description: "15 to 45 cubic meters per vehicle" },
      { title: "Product Types", description: "Cement, chemicals, grains, powders" },
      { title: "Loading Systems", description: "Pneumatic, gravity, and mechanical systems" },
      { title: "Safety Features", description: "Pressure monitoring and emergency systems" }
    ],
    industries: [
      { title: "Cement", description: "Cement plants and construction materials" },
      { title: "Chemicals", description: "Chemical powders and granules" },
      { title: "Food Processing", description: "Grains, flour, and food ingredients" },
      { title: "Pharmaceuticals", description: "Pharmaceutical powders and ingredients" },
      { title: "Mining", description: "Mineral ores and processed materials" },
      { title: "Agriculture", description: "Seeds, fertilizers, and agricultural products" }
    ],
    process: [
      { title: "Product Analysis", description: "Understanding cargo characteristics and requirements" },
      { title: "Vehicle Selection", description: "Choosing appropriate bulk carrier type" },
      { title: "Loading Operations", description: "Efficient and contamination-free loading" },
      { title: "Delivery", description: "Safe discharge at destination facilities" }
    ],
    ctaText: "Optimize your bulk cargo operations with our specialized solutions."
  },
  {
    slug: "chemical-transportation",
    title: "Safe Chemical Transportation Solutions",
    subtitle: "Hazardous and non-hazardous chemical transport with full regulatory compliance and safety protocols.",
    heroImage: "/images/use-everywhere/images2.png",
    about: {
      title: "Chemical Safety Excellence",
      description: "Specialized chemical transportation services with trained drivers, certified vehicles, and comprehensive safety protocols. We handle acids, alkalis, solvents, and specialty chemicals with complete regulatory compliance and emergency response capabilities.",
      stats: [
        { value: "Zero", label: "Incidents" },
        { value: "24/7", label: "Emergency Support" }
      ],
      image: "/images/use-everywhere/images3.png"
    },
    keyBenefits: [
      { title: "Safety First", description: "Comprehensive safety protocols and training" },
      { title: "Regulatory Compliance", description: "Full adherence to hazmat regulations" },
      { title: "Emergency Response", description: "24/7 emergency support and response teams" },
      { title: "Specialized Equipment", description: "Chemical-compatible tanks and safety systems" }
    ],
    technicalSpecs: [
      { title: "Tank Materials", description: "Stainless steel, FRP, and specialized linings" },
      { title: "Safety Systems", description: "Emergency valves, spill containment, monitoring" },
      { title: "Capacity Range", description: "5,000 to 30,000 liters per vehicle" },
      { title: "Temperature Control", description: "Heated and insulated tanks available" }
    ],
    industries: [
      { title: "Chemical Manufacturing", description: "Chemical plants and processing facilities" },
      { title: "Pharmaceuticals", description: "Pharmaceutical raw materials and intermediates" },
      { title: "Petrochemicals", description: "Petroleum derivatives and specialty chemicals" },
      { title: "Water Treatment", description: "Water treatment chemicals and solutions" },
      { title: "Agriculture", description: "Pesticides, fertilizers, and agricultural chemicals" },
      { title: "Food Processing", description: "Food-grade chemicals and additives" }
    ],
    process: [
      { title: "Safety Assessment", description: "Chemical compatibility and risk analysis" },
      { title: "Route Planning", description: "Safe route selection avoiding sensitive areas" },
      { title: "Loading Procedures", description: "Certified loading with safety protocols" },
      { title: "Monitored Transport", description: "Real-time monitoring with emergency backup" }
    ],
    ctaText: "Trust your chemical transportation to safety experts."
  },
  {
    slug: "coastal-services",
    title: "Comprehensive Coastal Transportation",
    subtitle: "Specialized coastal cargo services connecting major ports with inland destinations efficiently.",
    heroImage: "/images/use-everywhere/images3.png",
    about: {
      title: "Coastal Connectivity",
      description: "Dedicated coastal transportation services linking major Indian ports with inland industrial centers. Our coastal fleet specializes in container, bulk, and break-bulk cargo movement with optimized routes and port connectivity.",
      stats: [
        { value: "12", label: "Major Ports" },
        { value: "500+", label: "Routes" }
      ],
      image: "/images/use-everywhere/images1.png"
    },
    keyBenefits: [
      { title: "Port Expertise", description: "Deep knowledge of all major coastal ports" },
      { title: "Multimodal Solutions", description: "Seamless road-sea-rail integration" },
      { title: "Cost Optimization", description: "Efficient coastal routes reducing transport costs" },
      { title: "Time Efficiency", description: "Direct port connections minimizing delays" }
    ],
    technicalSpecs: [
      { title: "Port Coverage", description: "All major and minor ports on Indian coast" },
      { title: "Cargo Types", description: "Containers, bulk, break-bulk, project cargo" },
      { title: "Fleet Variety", description: "Trailers, tankers, flatbeds, specialized vehicles" },
      { title: "Documentation", description: "Complete port and customs documentation" }
    ],
    industries: [
      { title: "Shipping Lines", description: "Container and cargo shipping companies" },
      { title: "Port Operators", description: "Port authorities and terminal operators" },
      { title: "Steel", description: "Steel plants and metal processing industries" },
      { title: "Coal & Mining", description: "Coal transportation and mining operations" },
      { title: "Petroleum", description: "Oil refineries and petroleum products" },
      { title: "Fertilizers", description: "Fertilizer plants and agricultural inputs" }
    ],
    process: [
      { title: "Port Coordination", description: "Seamless coordination with port authorities" },
      { title: "Cargo Planning", description: "Optimal cargo consolidation and routing" },
      { title: "Transport Execution", description: "Efficient movement with real-time tracking" },
      { title: "Delivery Confirmation", description: "Proof of delivery and documentation" }
    ],
    ctaText: "Connect your coastal operations with our specialized services."
  },
  {
    slug: "domestic-cargo-containers",
    title: "Domestic Container Transportation",
    subtitle: "Efficient domestic container movement connecting industrial centers across India.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Domestic Container Excellence",
      description: "Comprehensive domestic container transportation services connecting manufacturing hubs, distribution centers, and consumption markets across India. Our specialized fleet ensures safe, timely delivery of containerized cargo nationwide.",
      stats: [
        { value: "28", label: "States Covered" },
        { value: "1000+", label: "Routes Daily" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Pan-India Network", description: "Comprehensive coverage across all states" },
      { title: "Container Expertise", description: "Specialized handling of all container types" },
      { title: "Hub Connectivity", description: "Direct connections between industrial centers" },
      { title: "Flexible Scheduling", description: "Customized schedules for business needs" }
    ],
    technicalSpecs: [
      { title: "Container Sizes", description: "20ft, 40ft, 45ft standard and high-cube" },
      { title: "Vehicle Types", description: "Container trailers and multi-axle vehicles" },
      { title: "Load Capacity", description: "Up to 32 tons per container" },
      { title: "Tracking Systems", description: "GPS monitoring and status updates" }
    ],
    industries: [
      { title: "FMCG", description: "Fast-moving consumer goods distribution" },
      { title: "Textiles", description: "Garment and textile industry logistics" },
      { title: "Automotive", description: "Auto parts and component distribution" },
      { title: "Electronics", description: "Consumer electronics and appliances" },
      { title: "Pharmaceuticals", description: "Medical and pharmaceutical distribution" },
      { title: "E-commerce", description: "Online retail and marketplace logistics" }
    ],
    process: [
      { title: "Route Optimization", description: "Efficient route planning for timely delivery" },
      { title: "Container Loading", description: "Professional loading and securing procedures" },
      { title: "Transit Monitoring", description: "Real-time tracking and status updates" },
      { title: "Final Delivery", description: "Safe delivery with proper documentation" }
    ],
    ctaText: "Streamline your domestic container logistics with our nationwide network."
  },
  {
    slug: "high-value-goods",
    title: "High-Value Goods Transportation",
    subtitle: "Secure transportation of valuable cargo with enhanced security protocols and insurance coverage.",
    heroImage: "/images/use-everywhere/images2.png",
    about: {
      title: "Premium Security Solutions",
      description: "Specialized transportation for high-value goods including electronics, pharmaceuticals, jewelry, and sensitive equipment. Our security-enhanced fleet provides maximum protection with GPS tracking, armed escorts, and comprehensive insurance coverage.",
      stats: [
        { value: "₹100Cr+", label: "Insurance Coverage" },
        { value: "Zero", label: "Loss Record" }
      ],
      image: "/images/use-everywhere/images3.png"
    },
    keyBenefits: [
      { title: "Maximum Security", description: "Multi-layered security protocols and monitoring" },
      { title: "Insurance Coverage", description: "Comprehensive coverage for high-value cargo" },
      { title: "Real-time Tracking", description: "Advanced GPS and communication systems" },
      { title: "Trained Personnel", description: "Security-trained drivers and support staff" }
    ],
    technicalSpecs: [
      { title: "Security Features", description: "GPS tracking, panic buttons, communication systems" },
      { title: "Vehicle Types", description: "Armored and security-enhanced vehicles" },
      { title: "Escort Services", description: "Armed security escorts when required" },
      { title: "Insurance Limits", description: "Up to ₹100 crores coverage per shipment" }
    ],
    industries: [
      { title: "Electronics", description: "High-end electronics and technology products" },
      { title: "Pharmaceuticals", description: "Expensive medicines and medical equipment" },
      { title: "Jewelry", description: "Precious metals and jewelry items" },
      { title: "Banking", description: "Cash and valuable document transportation" },
      { title: "Art & Antiques", description: "Valuable art pieces and collectibles" },
      { title: "Aerospace", description: "Aircraft parts and precision instruments" }
    ],
    process: [
      { title: "Security Assessment", description: "Risk analysis and security planning" },
      { title: "Route Planning", description: "Secure route selection and timing" },
      { title: "Secure Loading", description: "Supervised loading with security protocols" },
      { title: "Protected Transit", description: "Monitored transport with security backup" }
    ],
    ctaText: "Protect your valuable cargo with our premium security services."
  },
  {
    slug: "high-value-goods-escort",
    title: "High-Value Goods Escort Services",
    subtitle: "Armed escort services for extremely valuable cargo requiring maximum security protection.",
    heroImage: "/images/use-everywhere/images3.png",
    about: {
      title: "Maximum Protection Services",
      description: "Premium escort services for extremely high-value shipments requiring armed security protection. Our trained security personnel provide round-the-clock protection with advanced communication systems and emergency response protocols.",
      stats: [
        { value: "Licensed", label: "Security Personnel" },
        { value: "24/7", label: "Protection" }
      ],
      image: "/images/use-everywhere/images1.png"
    },
    keyBenefits: [
      { title: "Armed Protection", description: "Licensed armed security personnel" },
      { title: "Emergency Response", description: "Immediate response to security threats" },
      { title: "Communication Systems", description: "Advanced communication and alert systems" },
      { title: "Route Security", description: "Pre-planned secure routes and checkpoints" }
    ],
    technicalSpecs: [
      { title: "Security Personnel", description: "Licensed and trained armed guards" },
      { title: "Communication", description: "Satellite communication and emergency alerts" },
      { title: "Vehicle Security", description: "Armored vehicles with security features" },
      { title: "Response Time", description: "Immediate emergency response capability" }
    ],
    industries: [
      { title: "Banking", description: "Cash transportation and valuable documents" },
      { title: "Jewelry", description: "High-value jewelry and precious metals" },
      { title: "Government", description: "Sensitive government materials and documents" },
      { title: "Defense", description: "Defense equipment and sensitive materials" },
      { title: "Pharmaceuticals", description: "Extremely valuable medical products" },
      { title: "Technology", description: "Sensitive technology and prototypes" }
    ],
    process: [
      { title: "Threat Assessment", description: "Comprehensive security risk evaluation" },
      { title: "Security Planning", description: "Detailed security protocol development" },
      { title: "Escort Deployment", description: "Armed escort team deployment" },
      { title: "Secure Delivery", description: "Protected delivery with confirmation" }
    ],
    ctaText: "Ensure maximum security for your most valuable shipments."
  },
  {
    slug: "lcl-consolidation",
    title: "LCL Consolidation Services",
    subtitle: "Less than Container Load consolidation services optimizing costs for smaller shipments.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Smart Consolidation Solutions",
      description: "Efficient Less than Container Load (LCL) consolidation services that combine multiple smaller shipments into full container loads, reducing costs while maintaining delivery schedules. Perfect for businesses with smaller volume requirements.",
      stats: [
        { value: "60%", label: "Cost Savings" },
        { value: "Daily", label: "Consolidations" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Cost Optimization", description: "Significant savings through shared container costs" },
      { title: "Flexible Volumes", description: "No minimum volume requirements" },
      { title: "Regular Schedules", description: "Daily consolidation and dispatch services" },
      { title: "Cargo Security", description: "Professional packing and cargo protection" }
    ],
    technicalSpecs: [
      { title: "Minimum Volume", description: "From 1 cubic meter shipments" },
      { title: "Container Types", description: "20ft and 40ft standard containers" },
      { title: "Consolidation Centers", description: "Strategic locations across major cities" },
      { title: "Documentation", description: "Individual tracking for each shipment" }
    ],
    industries: [
      { title: "Small Exporters", description: "Small and medium export businesses" },
      { title: "E-commerce", description: "Online retailers and marketplace sellers" },
      { title: "Trading Companies", description: "Import-export trading businesses" },
      { title: "Manufacturers", description: "Small batch manufacturers and suppliers" },
      { title: "Startups", description: "New businesses with limited volumes" },
      { title: "Retailers", description: "Retail businesses with periodic shipments" }
    ],
    process: [
      { title: "Shipment Booking", description: "Easy booking through online portal" },
      { title: "Consolidation", description: "Professional packing and consolidation" },
      { title: "Container Loading", description: "Efficient loading and documentation" },
      { title: "Delivery Tracking", description: "Individual shipment tracking and delivery" }
    ],
    ctaText: "Reduce your shipping costs with our smart consolidation services."
  },
  {
    slug: "lcl-consolidation-services",
    title: "Advanced LCL Consolidation Solutions",
    subtitle: "Premium LCL services with value-added logistics and supply chain optimization.",
    heroImage: "/images/use-everywhere/images2.png",
    about: {
      title: "Premium Consolidation Services",
      description: "Advanced LCL consolidation with value-added services including warehousing, inventory management, and supply chain optimization. Designed for businesses requiring comprehensive logistics solutions beyond basic consolidation.",
      stats: [
        { value: "50+", label: "Consolidation Centers" },
        { value: "99%", label: "Accuracy Rate" }
      ],
      image: "/images/use-everywhere/images3.png"
    },
    keyBenefits: [
      { title: "Value-Added Services", description: "Warehousing, packaging, and inventory management" },
      { title: "Supply Chain Integration", description: "End-to-end supply chain solutions" },
      { title: "Technology Platform", description: "Advanced tracking and management systems" },
      { title: "Custom Solutions", description: "Tailored consolidation strategies" }
    ],
    technicalSpecs: [
      { title: "Warehouse Network", description: "50+ strategically located consolidation centers" },
      { title: "Technology Systems", description: "WMS, TMS, and real-time tracking" },
      { title: "Value-Added Services", description: "Packaging, labeling, quality checks" },
      { title: "Integration Capabilities", description: "ERP and system integration options" }
    ],
    industries: [
      { title: "Retail Chains", description: "Multi-location retail and distribution" },
      { title: "FMCG Brands", description: "Consumer goods manufacturers" },
      { title: "Fashion & Apparel", description: "Clothing and fashion industry" },
      { title: "Electronics", description: "Consumer electronics and components" },
      { title: "Healthcare", description: "Medical devices and pharmaceutical supplies" },
      { title: "Automotive", description: "Auto parts and component suppliers" }
    ],
    process: [
      { title: "Requirement Analysis", description: "Understanding specific consolidation needs" },
      { title: "Solution Design", description: "Custom consolidation strategy development" },
      { title: "Implementation", description: "System setup and process implementation" },
      { title: "Optimization", description: "Continuous improvement and optimization" }
    ],
    ctaText: "Optimize your supply chain with our advanced consolidation solutions."
  },
  {
    slug: "logistics-consulting",
    title: "Strategic Logistics Consulting",
    subtitle: "Expert consulting services to optimize your supply chain and reduce logistics costs.",
    heroImage: "/images/use-everywhere/images3.png",
    about: {
      title: "Supply Chain Excellence",
      description: "Comprehensive logistics consulting services helping businesses optimize their supply chain operations, reduce costs, and improve efficiency. Our experts analyze your current operations and design customized solutions for maximum impact.",
      stats: [
        { value: "30%", label: "Average Cost Reduction" },
        { value: "500+", label: "Projects Completed" }
      ],
      image: "/images/use-everywhere/images1.png"
    },
    keyBenefits: [
      { title: "Cost Optimization", description: "Significant reduction in logistics costs" },
      { title: "Process Improvement", description: "Streamlined operations and workflows" },
      { title: "Technology Integration", description: "Modern logistics technology implementation" },
      { title: "Strategic Planning", description: "Long-term supply chain strategy development" }
    ],
    technicalSpecs: [
      { title: "Analysis Tools", description: "Advanced analytics and modeling software" },
      { title: "Consulting Areas", description: "Network design, process optimization, technology" },
      { title: "Implementation Support", description: "Full implementation and change management" },
      { title: "Performance Metrics", description: "KPI development and monitoring systems" }
    ],
    industries: [
      { title: "Manufacturing", description: "Industrial and manufacturing companies" },
      { title: "Retail", description: "Retail chains and distribution networks" },
      { title: "E-commerce", description: "Online retail and marketplace businesses" },
      { title: "Healthcare", description: "Pharmaceutical and medical device companies" },
      { title: "Automotive", description: "Auto manufacturers and suppliers" },
      { title: "FMCG", description: "Consumer goods and food companies" }
    ],
    process: [
      { title: "Current State Analysis", description: "Comprehensive assessment of existing operations" },
      { title: "Gap Identification", description: "Identifying improvement opportunities" },
      { title: "Solution Design", description: "Developing customized optimization strategies" },
      { title: "Implementation Support", description: "Guiding implementation and measuring results" }
    ],
    ctaText: "Transform your logistics operations with expert consulting."
  },
  {
    slug: "over-dimension-cargo",
    title: "Over-Dimensional Cargo Transportation",
    subtitle: "Specialized handling of oversized cargo with custom equipment and route planning.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Oversized Cargo Specialists",
      description: "Expert transportation of over-dimensional cargo including industrial machinery, construction equipment, and large structures. Our specialized fleet and experienced team handle cargo that exceeds standard size and weight limits with precision and safety.",
      stats: [
        { value: "200T+", label: "Max Weight" },
        { value: "Zero", label: "Damage Claims" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Specialized Equipment", description: "Custom trailers and handling equipment" },
      { title: "Route Engineering", description: "Detailed route surveys and planning" },
      { title: "Permit Management", description: "Complete regulatory compliance" },
      { title: "Safety Protocols", description: "Comprehensive safety measures and procedures" }
    ],
    technicalSpecs: [
      { title: "Weight Capacity", description: "Up to 200 tons with specialized trailers" },
      { title: "Dimensional Limits", description: "No size restrictions with proper planning" },
      { title: "Equipment Types", description: "Lowbed trailers, extendable trailers, SPMTs" },
      { title: "Safety Features", description: "Escort vehicles, warning systems, route marking" }
    ],
    industries: [
      { title: "Construction", description: "Heavy construction equipment and machinery" },
      { title: "Power Generation", description: "Turbines, transformers, and power equipment" },
      { title: "Oil & Gas", description: "Refinery equipment and large vessels" },
      { title: "Infrastructure", description: "Bridge components and structural elements" },
      { title: "Mining", description: "Mining equipment and processing machinery" },
      { title: "Manufacturing", description: "Large industrial machinery and equipment" }
    ],
    process: [
      { title: "Feasibility Study", description: "Route analysis and transport feasibility" },
      { title: "Permit Acquisition", description: "Obtaining all necessary permits and approvals" },
      { title: "Equipment Preparation", description: "Custom equipment setup and testing" },
      { title: "Supervised Transport", description: "Expert-supervised transportation execution" }
    ],
    ctaText: "Move your oversized cargo safely with our specialized expertise."
  },
  {
    slug: "rail-services",
    title: "Integrated Rail Transportation Services",
    subtitle: "Multimodal rail solutions connecting major industrial centers with cost-effective transport.",
    heroImage: "/images/use-everywhere/images2.png",
    about: {
      title: "Rail Logistics Excellence",
      description: "Comprehensive rail transportation services offering cost-effective solutions for bulk cargo, containers, and long-distance shipments. Our rail network connectivity ensures efficient movement of goods across major industrial corridors.",
      stats: [
        { value: "5000+", label: "Rail Cars" },
        { value: "All Major", label: "Rail Networks" }
      ],
      image: "/images/use-everywhere/images3.png"
    },
    keyBenefits: [
      { title: "Cost Efficiency", description: "Significant cost savings for long-distance transport" },
      { title: "Environmental Benefits", description: "Reduced carbon footprint compared to road transport" },
      { title: "High Capacity", description: "Large volume handling capabilities" },
      { title: "Network Coverage", description: "Access to extensive rail network" }
    ],
    technicalSpecs: [
      { title: "Car Types", description: "Container cars, bulk cars, specialized wagons" },
      { title: "Capacity Range", description: "20 to 60 tons per car" },
      { title: "Network Access", description: "All major rail networks and terminals" },
      { title: "Multimodal Integration", description: "Seamless road-rail connectivity" }
    ],
    industries: [
      { title: "Steel", description: "Steel plants and metal processing industries" },
      { title: "Coal & Mining", description: "Coal transportation and mining operations" },
      { title: "Cement", description: "Cement plants and construction materials" },
      { title: "Chemicals", description: "Chemical plants and processing facilities" },
      { title: "Agriculture", description: "Grain transportation and food processing" },
      { title: "Automotive", description: "Auto manufacturers and component suppliers" }
    ],
    process: [
      { title: "Route Planning", description: "Optimal rail route selection and scheduling" },
      { title: "Car Allocation", description: "Appropriate rail car type selection" },
      { title: "Loading Operations", description: "Efficient loading at origin terminals" },
      { title: "Delivery Coordination", description: "Final delivery and unloading coordination" }
    ],
    ctaText: "Leverage rail efficiency for your long-distance transportation needs."
  },
  {
    slug: "solar-panel-transportation",
    title: "Specialized Solar Panel Transportation",
    subtitle: "Careful handling and transport of solar panels and renewable energy equipment.",
    heroImage: "/images/use-everywhere/images3.png",
    about: {
      title: "Renewable Energy Logistics",
      description: "Specialized transportation services for solar panels, wind turbine components, and renewable energy equipment. Our careful handling procedures and specialized equipment ensure damage-free delivery of sensitive renewable energy components.",
      stats: [
        { value: "1000+", label: "MW Transported" },
        { value: "99.9%", label: "Damage-Free" }
      ],
      image: "/images/use-everywhere/images1.png"
    },
    keyBenefits: [
      { title: "Specialized Handling", description: "Expert handling of fragile solar equipment" },
      { title: "Damage Prevention", description: "Advanced packaging and securing methods" },
      { title: "Project Coordination", description: "Coordinated delivery for large projects" },
      { title: "Installation Support", description: "On-site delivery and positioning services" }
    ],
    technicalSpecs: [
      { title: "Equipment Types", description: "Solar panels, inverters, mounting systems" },
      { title: "Vehicle Features", description: "Air-ride suspension, climate control" },
      { title: "Packaging Systems", description: "Custom packaging and securing methods" },
      { title: "Handling Equipment", description: "Specialized lifting and positioning equipment" }
    ],
    industries: [
      { title: "Solar Manufacturers", description: "Solar panel and component manufacturers" },
      { title: "EPC Contractors", description: "Engineering, procurement, and construction companies" },
      { title: "Power Developers", description: "Renewable energy project developers" },
      { title: "Distributors", description: "Solar equipment distributors and dealers" },
      { title: "Installation Companies", description: "Solar installation and service companies" },
      { title: "Government Projects", description: "Government renewable energy initiatives" }
    ],
    process: [
      { title: "Equipment Assessment", description: "Detailed assessment of equipment specifications" },
      { title: "Custom Packaging", description: "Specialized packaging for protection" },
      { title: "Careful Loading", description: "Expert loading with damage prevention" },
      { title: "Site Delivery", description: "Precise delivery and positioning at site" }
    ],
    ctaText: "Power your renewable energy projects with our specialized transport."
  },
  {
    slug: "storage-warehousing",
    title: "Comprehensive Storage & Warehousing",
    subtitle: "Modern warehousing solutions with inventory management and distribution services.",
    heroImage: "/images/use-everywhere/images1.png",
    about: {
      title: "Modern Warehousing Solutions",
      description: "State-of-the-art warehousing and storage facilities with advanced inventory management systems. Our strategically located warehouses provide comprehensive storage solutions with value-added services for diverse industries.",
      stats: [
        { value: "10M+", label: "Sq Ft Space" },
        { value: "50+", label: "Locations" }
      ],
      image: "/images/use-everywhere/images2.png"
    },
    keyBenefits: [
      { title: "Strategic Locations", description: "Warehouses in key industrial and commercial areas" },
      { title: "Advanced Technology", description: "WMS and inventory management systems" },
      { title: "Value-Added Services", description: "Packaging, labeling, and quality control" },
      { title: "Flexible Solutions", description: "Short-term and long-term storage options" }
    ],
    technicalSpecs: [
      { title: "Storage Capacity", description: "10+ million square feet across locations" },
      { title: "Facility Features", description: "Climate control, security systems, fire safety" },
      { title: "Technology Systems", description: "WMS, RFID, barcode scanning" },
      { title: "Handling Equipment", description: "Forklifts, conveyor systems, automated storage" }
    ],
    industries: [
      { title: "FMCG", description: "Consumer goods and food products" },
      { title: "Pharmaceuticals", description: "Medical and pharmaceutical products" },
      { title: "Electronics", description: "Consumer electronics and components" },
      { title: "Textiles", description: "Garments and textile products" },
      { title: "Automotive", description: "Auto parts and components" },
      { title: "E-commerce", description: "Online retail and marketplace fulfillment" }
    ],
    process: [
      { title: "Requirement Analysis", description: "Understanding storage and handling requirements" },
      { title: "Facility Allocation", description: "Appropriate warehouse space allocation" },
      { title: "Inventory Management", description: "Professional inventory tracking and management" },
      { title: "Distribution Services", description: "Order fulfillment and distribution support" }
    ],
    ctaText: "Optimize your inventory management with our modern warehousing solutions."
  },
  {
    slug: "warehousing-solutions",
    title: "Advanced Warehousing Solutions",
    subtitle: "Technology-driven warehousing with automation and supply chain integration.",
    heroImage: "/images/use-everywhere/images2.png",
    about: {
      title: "Next-Generation Warehousing",
      description: "Advanced warehousing solutions featuring automation, robotics, and AI-driven inventory management. Our smart warehouses provide maximum efficiency with reduced costs and improved accuracy for modern supply chains.",
      stats: [
        { value: "99.9%", label: "Accuracy Rate" },
        { value: "Automated", label: "Systems" }
      ],
      image: "/images/use-everywhere/images3.png"
    },
    keyBenefits: [
      { title: "Automation Technology", description: "Robotic systems and automated processes" },
      { title: "AI-Driven Operations", description: "Artificial intelligence for optimization" },
      { title: "Real-time Visibility", description: "Complete inventory visibility and tracking" },
      { title: "Scalable Solutions", description: "Flexible capacity based on business needs" }
    ],
    technicalSpecs: [
      { title: "Automation Level", description: "Fully automated storage and retrieval systems" },
      { title: "AI Capabilities", description: "Machine learning for demand forecasting" },
      { title: "Integration Options", description: "ERP, WMS, and e-commerce platform integration" },
      { title: "Performance Metrics", description: "Real-time KPI monitoring and reporting" }
    ],
    industries: [
      { title: "E-commerce Giants", description: "Large online retailers and marketplaces" },
      { title: "Pharmaceutical", description: "Temperature-controlled pharmaceutical storage" },
      { title: "Automotive", description: "Just-in-time automotive component storage" },
      { title: "Fashion & Retail", description: "Fast-fashion and seasonal inventory management" },
      { title: "Technology", description: "High-value electronics and components" },
      { title: "Healthcare", description: "Medical devices and healthcare supplies" }
    ],
    process: [
      { title: "Technology Assessment", description: "Evaluating automation and technology needs" },
      { title: "System Design", description: "Custom warehouse automation design" },
      { title: "Implementation", description: "Technology deployment and integration" },
      { title: "Optimization", description: "Continuous improvement and performance tuning" }
    ],
    ctaText: "Future-proof your warehousing with our advanced automation solutions."
  },
  {
    slug: "warehousing-storage",
    title: "Flexible Warehousing & Storage",
    subtitle: "Customizable storage solutions with flexible terms and value-added services.",
    heroImage: "/images/use-everywhere/images3.png",
    about: {
      title: "Flexible Storage Solutions",
      description: "Customizable warehousing and storage solutions designed to meet diverse business requirements. From short-term storage to long-term distribution centers, we provide flexible terms and comprehensive services tailored to your needs.",
      stats: [
        { value: "Flexible", label: "Terms" },
        { value: "24/7", label: "Access" }
      ],
      image: "/images/use-everywhere/images1.png"
    },
    keyBenefits: [
      { title: "Flexible Terms", description: "Short-term and long-term storage options" },
      { title: "Customizable Space", description: "Tailored storage configurations" },
      { title: "Value-Added Services", description: "Packaging, sorting, and distribution services" },
      { title: "Cost-Effective", description: "Competitive pricing with transparent costs" }
    ],
    technicalSpecs: [
      { title: "Space Options", description: "From 1000 sq ft to 100,000+ sq ft" },
      { title: "Storage Types", description: "Ambient, climate-controlled, cold storage" },
      { title: "Access Options", description: "24/7 access with security systems" },
      { title: "Service Levels", description: "Basic storage to full-service fulfillment" }
    ],
    industries: [
      { title: "Small Businesses", description: "Growing businesses needing flexible storage" },
      { title: "Seasonal Businesses", description: "Companies with seasonal inventory fluctuations" },
      { title: "Importers", description: "Import businesses needing temporary storage" },
      { title: "Manufacturers", description: "Manufacturers requiring overflow storage" },
      { title: "Distributors", description: "Regional distributors and wholesalers" },
      { title: "Startups", description: "New businesses with evolving storage needs" }
    ],
    process: [
      { title: "Needs Assessment", description: "Understanding specific storage requirements" },
      { title: "Space Configuration", description: "Customizing storage space and services" },
      { title: "Service Setup", description: "Implementing required services and systems" },
      { title: "Ongoing Support", description: "Continuous support and service optimization" }
    ],
    ctaText: "Find the perfect storage solution for your business needs."
  }
];

// Helper function to get service data by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}

// Helper function to get all service slugs
export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}