export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  about: string;
  keyBenefits: Array<{
    title: string;
    description: string;
  }>;
  technicalSpecs: Array<{
    title: string;
    description: string;
  }>;
  industries: string[];
  process: Array<{
    title: string;
    description: string;
  }>;
  compliance?: Array<{
    title: string;
    description: string;
  }>;
  specializedEquipment?: string[];
  cargoTypes?: string[];
  safetyFeatures?: string[];
  emergencySupport?: string;
  ctaText: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "empty-container-transportation",
    title: "India's Pioneer in Empty Container Transportation",
    subtitle: "Efficient repositioning of empty containers with specialized skeleton trailers and real-time tracking systems.",
    heroImage: "/images/use-everywhere/images1.png",
    about: "Leading empty container transportation service connecting major ports and inland container depots across India. Our specialized fleet of skeleton trailers ensures safe, efficient movement of 20ft, 40ft, and 45ft empty containers with real-time tracking and optimized route planning.",
    keyBenefits: [
      {
        title: "Port Connectivity",
        description: "Direct connections to all major Indian ports and ICDs"
      },
      {
        title: "Fleet Optimization",
        description: "Specialized skeleton trailers for maximum efficiency"
      },
      {
        title: "Real-time Tracking",
        description: "GPS monitoring and live status updates"
      },
      {
        title: "Cost Efficiency",
        description: "Optimized routes and consolidated shipments"
      }
    ],
    technicalSpecs: [
      {
        title: "Container Types",
        description: "20ft, 40ft, and 45ft empty containers"
      },
      {
        title: "Vehicle Types",
        description: "Specialized skeleton trailers and platform vehicles"
      },
      {
        title: "Load Capacity",
        description: "Up to 30 tons per vehicle with optimal weight distribution"
      },
      {
        title: "Safety Standards",
        description: "ISO certified handling procedures and GPS tracking"
      }
    ],
    industries: ["Manufacturing", "Automotive", "Textiles", "Chemicals", "FMCG", "Pharmaceuticals"],
    process: [
      {
        title: "Container Pickup",
        description: "Efficient collection from ports and depots"
      },
      {
        title: "Route Optimization",
        description: "Smart routing for fastest delivery times"
      },
      {
        title: "Real-time Monitoring",
        description: "GPS tracking and status updates"
      },
      {
        title: "Safe Delivery",
        description: "Secure positioning at destination facilities"
      }
    ],
    ctaText: "Ready to optimize your empty container logistics? Get started with India's most reliable service."
  },
  {
    slug: "export-import-containers",
    title: "Seamless Container Logistics from Port to Door",
    subtitle: "Full-service export and import container transportation with customs support and damage-free delivery guarantee.",
    heroImage: "/images/use-everywhere/images2.png",
    about: "Complete container logistics solution covering 20ft, 40ft, and 45ft loaded containers. From customs clearance documentation to final delivery, we handle every aspect of your container transportation needs with precision and reliability.",
    keyBenefits: [
      {
        title: "End-to-End Service",
        description: "Port pickup to final destination delivery"
      },
      {
        title: "Customs Support",
        description: "Documentation and clearance assistance"
      },
      {
        title: "Multi-Size Capability",
        description: "20ft, 40ft, 45ft container handling"
      },
      {
        title: "Damage Prevention",
        description: "Specialized securing and handling protocols"
      }
    ],
    technicalSpecs: [
      {
        title: "Container Types",
        description: "Standard, high-cube, refrigerated, open-top"
      },
      {
        title: "Weight Capacity",
        description: "Up to 28 tons per container"
      },
      {
        title: "Special Handling",
        description: "Reefer containers, hazardous goods containers"
      },
      {
        title: "Documentation",
        description: "Complete customs and transport paperwork"
      }
    ],
    industries: ["Exporters", "Importers", "Manufacturing Companies", "FMCG Brands", "Pharmaceutical Companies", "Automotive Sector"],
    process: [
      {
        title: "Route Planning",
        description: "Optimal route selection for timely delivery"
      },
      {
        title: "Customs Coordination",
        description: "Documentation and clearance management"
      },
      {
        title: "Secure Transport",
        description: "GPS tracking and real-time updates"
      },
      {
        title: "Final Delivery",
        description: "Door-to-door service with delivery confirmation"
      }
    ],
    compliance: [
      {
        title: "Customs Bonded Transportation",
        description: "Authorized bonded carrier status"
      },
      {
        title: "International Safety Standards",
        description: "Full compliance with global shipping standards"
      },
      {
        title: "Insurance Coverage",
        description: "Comprehensive coverage for high-value cargo"
      },
      {
        title: "Trained Drivers",
        description: "Container handling expertise and certification"
      }
    ],
    ctaText: "Streamline your container logistics with our comprehensive service."
  },
  {
    slug: "project-cargo-management",
    title: "Moving the Unmovable - Project Cargo Specialists",
    subtitle: "Oversized, overweight, and complex cargo transportation with custom engineering solutions and permit management.",
    heroImage: "/images/use-everywhere/images3.png",
    about: "Industrial machinery, power plant equipment, construction components - we move what others consider impossible. Our project cargo expertise includes route surveys, permit acquisition, custom vehicle configurations, and specialized handling equipment for the most challenging shipments.",
    keyBenefits: [
      {
        title: "Custom Solutions",
        description: "Tailored vehicles and handling for unique cargo"
      },
      {
        title: "Route Engineering",
        description: "Comprehensive route surveys and feasibility studies"
      },
      {
        title: "Permit Management",
        description: "Complete regulatory compliance and documentation"
      },
      {
        title: "Risk Mitigation",
        description: "Advanced planning and contingency protocols"
      }
    ],
    specializedEquipment: [
      "Multi-axle trailers (50ft to 90ft length capacity)",
      "Hydraulic modular trailers for heavy loads",
      "Low-bed and high-bed semi-trailers",
      "Custom rigging and lifting equipment",
      "Escort vehicles and pilot cars"
    ],
    cargoTypes: [
      "Power generation equipment",
      "Industrial machinery and boilers",
      "Construction equipment and cranes",
      "Oil & gas processing units",
      "Infrastructure components"
    ],
    technicalSpecs: [
      {
        title: "Load Capacity",
        description: "Up to 500 tons with modular trailer systems"
      },
      {
        title: "Dimensions",
        description: "Length up to 90ft, width up to 20ft, height up to 25ft"
      },
      {
        title: "Route Clearance",
        description: "Bridge, tunnel, and overhead clearance verification"
      },
      {
        title: "Permit Coverage",
        description: "State and national highway movement permits"
      }
    ],
    industries: ["Power Generation", "Oil & Gas", "Construction", "Manufacturing", "Infrastructure Development"],
    process: [
      {
        title: "Feasibility Assessment",
        description: "Technical evaluation and route analysis"
      },
      {
        title: "Custom Engineering",
        description: "Vehicle configuration and handling design"
      },
      {
        title: "Permit Acquisition",
        description: "Regulatory approvals and route clearances"
      },
      {
        title: "Execution Planning",
        description: "Detailed transportation and safety protocols"
      },
      {
        title: "Project Delivery",
        description: "Supervised transport with real-time monitoring"
      }
    ],
    compliance: [
      {
        title: "Certified Project Managers",
        description: "Professional engineers and project management certification"
      },
      {
        title: "Advanced Securing Techniques",
        description: "Specialized cargo securing and stabilization methods"
      },
      {
        title: "Emergency Response Procedures",
        description: "Comprehensive emergency and contingency planning"
      },
      {
        title: "Comprehensive Insurance",
        description: "Full coverage for high-value project cargo"
      }
    ],
    ctaText: "Have complex cargo that needs specialized handling? Let our experts assess your project."
  },
  {
    slug: "chemical-transportation",
    title: "Safe Chemical Transport with Zero Incidents Record",
    subtitle: "ADR-certified drivers and safety-equipped vehicles for hazardous and non-hazardous chemical transportation.",
    heroImage: "/images/use-everywhere/images4.png",
    about: "Specialized chemical transportation service with certified drivers, safety-equipped vehicles, and emergency response protocols. We handle both hazardous and non-hazardous chemicals with strict adherence to safety regulations and environmental compliance.",
    keyBenefits: [
      {
        title: "Safety Excellence",
        description: "Zero major incidents track record"
      },
      {
        title: "Certified Operations",
        description: "ADR-trained drivers and safety protocols"
      },
      {
        title: "Regulatory Compliance",
        description: "Full adherence to chemical transport regulations"
      },
      {
        title: "Emergency Preparedness",
        description: "24/7 emergency response capabilities"
      }
    ],
    safetyFeatures: [
      "Safety-equipped vehicles with hazard identification",
      "Emergency response kits and protocols",
      "GPS tracking and communication systems",
      "Insurance coverage for chemical cargo",
      "Regular vehicle safety inspections"
    ],
    cargoTypes: [
      "Industrial chemicals and solvents",
      "Pharmaceutical raw materials",
      "Agricultural chemicals and fertilizers",
      "Paint and coating materials",
      "Food-grade chemicals"
    ],
    technicalSpecs: [
      {
        title: "Vehicle Types",
        description: "Specialized chemical tankers and container vehicles"
      },
      {
        title: "Capacity Range",
        description: "5,000L to 35,000L tanker capacity"
      },
      {
        title: "Safety Equipment",
        description: "Emergency response kits, fire suppression systems"
      },
      {
        title: "Certification",
        description: "ADR compliance and hazmat transportation permits"
      }
    ],
    industries: ["Chemical Manufacturing", "Pharmaceuticals", "Agriculture", "Paint & Coatings", "Food Processing"],
    process: [
      {
        title: "Cargo Assessment",
        description: "Chemical classification and safety requirements"
      },
      {
        title: "Vehicle Preparation",
        description: "Safety equipment verification and setup"
      },
      {
        title: "Route Planning",
        description: "Safest route selection avoiding populated areas"
      },
      {
        title: "Transport Execution",
        description: "Continuous monitoring and emergency readiness"
      },
      {
        title: "Safe Delivery",
        description: "Proper unloading with safety protocols"
      }
    ],
    compliance: [
      {
        title: "ADR Compliance",
        description: "European Agreement on Dangerous Goods compliance"
      },
      {
        title: "Indian Regulations",
        description: "Full adherence to Indian chemical transport regulations"
      },
      {
        title: "Environmental Safety",
        description: "Environmental protection and safety protocols"
      },
      {
        title: "Driver Certification",
        description: "Regular driver certification and safety training"
      }
    ],
    emergencySupport: "24/7 emergency helpline with trained chemical response team and coordination with local authorities.",
    ctaText: "Need reliable chemical transportation with uncompromising safety? Contact our chemical transport specialists."
  },
  {
    slug: "bulk-cargo-solutions",
    title: "Bulk Cargo Experts - Steel to Grains, We Move It All",
    subtitle: "Optimized vehicle configurations and specialized handling for bulk materials, construction goods, and industrial cargo.",
    heroImage: "/images/use-everywhere/images5.png",
    about: "Comprehensive bulk cargo transportation covering steel coils, construction materials, grains, and industrial goods. Our optimized vehicle fleet and specialized handling techniques ensure efficient, damage-free delivery of bulk materials across India.",
    keyBenefits: [
      {
        title: "Load Optimization",
        description: "Maximum payload efficiency for cost savings"
      },
      {
        title: "Damage Prevention",
        description: "Specialized securing and handling methods"
      },
      {
        title: "Fleet Diversity",
        description: "Multiple vehicle types for different bulk cargo needs"
      },
      {
        title: "Industry Expertise",
        description: "Deep knowledge of bulk material characteristics"
      }
    ],
    cargoTypes: [
      "Steel Products: Coils, plates, beams, and structural steel",
      "Construction Materials: Cement, sand, gravel, and building supplies",
      "Agricultural Products: Grains, pulses, and food commodities",
      "Industrial Materials: Raw materials and semi-finished goods"
    ],
    specializedEquipment: [
      "Open-top trailers for steel coils and heavy materials",
      "Covered vehicles for weather-sensitive cargo",
      "Multi-axle trailers for heavy bulk loads",
      "Custom securing systems for different material types"
    ],
    technicalSpecs: [
      {
        title: "Handling Expertise",
        description: "Proper load distribution and weight balancing"
      },
      {
        title: "Securing Techniques",
        description: "Advanced lashing and securing techniques"
      },
      {
        title: "Material Protocols",
        description: "Material-specific handling protocols"
      },
      {
        title: "Loading Supervision",
        description: "Loading and unloading supervision"
      }
    ],
    industries: ["Steel Manufacturing", "Construction", "Agriculture", "Industrial Manufacturing"],
    process: [
      {
        title: "Cargo Assessment",
        description: "Material type and handling requirements analysis"
      },
      {
        title: "Vehicle Selection",
        description: "Optimal vehicle configuration for specific cargo"
      },
      {
        title: "Loading Supervision",
        description: "Professional loading with proper securing"
      },
      {
        title: "Transport Monitoring",
        description: "GPS tracking and regular status updates"
      },
      {
        title: "Delivery Confirmation",
        description: "Safe unloading and delivery documentation"
      }
    ],
    compliance: [
      {
        title: "Vehicle Inspections",
        description: "Pre-transport vehicle inspections"
      },
      {
        title: "Driver Training",
        description: "Material-specific handling training for drivers"
      },
      {
        title: "Equipment Maintenance",
        description: "Regular equipment maintenance and upgrades"
      },
      {
        title: "Insurance Coverage",
        description: "Insurance coverage for bulk cargo"
      }
    ],
    ctaText: "Optimize your bulk cargo transportation costs and efficiency with our specialized service."
  },
  {
    slug: "high-value-goods-escort",
    title: "Maximum Security for Your Most Valuable Cargo",
    subtitle: "Armed escort services with trained security personnel and GPS tracking for high-value and sensitive shipments.",
    heroImage: "/images/use-everywhere/images5.png",
    about: "Premium security escort service for valuable cargo requiring enhanced protection during transportation. Our trained security personnel, escort vehicles, and advanced tracking systems provide comprehensive protection for high-value goods across challenging routes.",
    keyBenefits: [
      {
        title: "Professional Security",
        description: "Trained and licensed security personnel"
      },
      {
        title: "Real-Time Monitoring",
        description: "GPS tracking and communication systems"
      },
      {
        title: "Risk Assessment",
        description: "Route evaluation and threat analysis"
      },
      {
        title: "Insurance Coverage",
        description: "Comprehensive coverage for high-value cargo"
      }
    ],
    safetyFeatures: [
      "Armed Escort Vehicles: Professional security teams in dedicated vehicles",
      "Communication Systems: Real-time coordination with control room",
      "GPS Tracking: Continuous monitoring and location updates",
      "Emergency Response: Quick reaction protocols for security incidents"
    ],
    cargoTypes: [
      "Electronics and high-tech equipment",
      "Pharmaceutical products and medicines",
      "Jewelry and precious items",
      "Cash and financial instruments",
      "Sensitive documents and materials"
    ],
    technicalSpecs: [
      {
        title: "Personnel Qualifications",
        description: "Licensed security professionals"
      },
      {
        title: "Driver Training",
        description: "Advanced driver training certification"
      },
      {
        title: "Surveillance Skills",
        description: "Surveillance and threat assessment skills"
      },
      {
        title: "Emergency Response",
        description: "Emergency response and first-aid training"
      }
    ],
    industries: ["Electronics", "Pharmaceuticals", "Jewelry", "Banking & Finance", "Government"],
    process: [
      {
        title: "Risk Assessment",
        description: "Route analysis and threat evaluation"
      },
      {
        title: "Security Planning",
        description: "Escort team selection and coordination setup"
      },
      {
        title: "Pre-Transport Briefing",
        description: "Security protocols and emergency procedures"
      },
      {
        title: "Escort Execution",
        description: "Armed escort with continuous monitoring"
      },
      {
        title: "Secure Delivery",
        description: "Verified handover with complete documentation"
      }
    ],
    compliance: [
      {
        title: "Technology Integration",
        description: "GPS tracking and real-time location sharing"
      },
      {
        title: "Communication Systems",
        description: "Communication systems for instant coordination"
      },
      {
        title: "Digital Documentation",
        description: "Digital documentation and proof systems"
      },
      {
        title: "Law Enforcement",
        description: "Integration with law enforcement networks"
      }
    ],
    ctaText: "Protect your most valuable shipments with our professional escort service."
  },
  {
    slug: "warehousing-storage",
    title: "Strategic Storage Solutions Near Major Ports",
    subtitle: "Climate-controlled warehousing with inventory management and last-mile distribution capabilities.",
    heroImage: "/images/use-everywhere/images5.png",
    about: "Comprehensive warehousing and storage solutions strategically located near major ports and ICDs. Our modern facilities offer climate control, inventory management, and integrated distribution services for seamless supply chain operations.",
    keyBenefits: [
      {
        title: "Strategic Locations",
        description: "Near major ports and transportation hubs"
      },
      {
        title: "Climate Control",
        description: "Temperature and humidity-controlled environments"
      },
      {
        title: "Inventory Management",
        description: "Real-time tracking and stock management"
      },
      {
        title: "Integrated Services",
        description: "Combined storage and transportation solutions"
      }
    ],
    specializedEquipment: [
      "Climate-Controlled Environment: Temperature and humidity management",
      "Security Systems: 24/7 surveillance and access control",
      "Material Handling Equipment: Forklifts, cranes, and loading equipment",
      "Fire Safety Systems: Advanced fire detection and suppression",
      "Quality Storage Infrastructure: Proper racking and organization systems"
    ],
    cargoTypes: [
      "Container Storage: Empty and loaded container parking",
      "Bulk Storage: Open and covered storage for bulk materials",
      "Specialized Storage: Temperature-sensitive and hazardous goods",
      "Document Storage: Secure storage for important paperwork"
    ],
    technicalSpecs: [
      {
        title: "Value-Added Services",
        description: "Inventory management and reporting, pick and pack services"
      },
      {
        title: "Distribution Services",
        description: "Last-mile distribution and cross-docking operations"
      },
      {
        title: "Quality Control",
        description: "Quality inspection services and documentation"
      },
      {
        title: "Technology Integration",
        description: "Warehouse management system (WMS) and real-time tracking"
      }
    ],
    industries: ["Manufacturing", "E-commerce", "FMCG", "Pharmaceuticals", "Automotive", "Textiles"],
    process: [
      {
        title: "Facility Assessment",
        description: "Storage requirements and facility selection"
      },
      {
        title: "Inventory Setup",
        description: "WMS configuration and inventory organization"
      },
      {
        title: "Storage Management",
        description: "Real-time inventory tracking and management"
      },
      {
        title: "Distribution Coordination",
        description: "Last-mile delivery and transportation coordination"
      },
      {
        title: "Reporting & Analytics",
        description: "Digital documentation and performance reporting"
      }
    ],
    compliance: [
      {
        title: "Strategic Locations",
        description: "Mumbai Port and JNPT, Chennai Port and ICD coverage"
      },
      {
        title: "National Coverage",
        description: "Delhi ICD, Bangalore and industrial corridors"
      },
      {
        title: "Flexible Terms",
        description: "Short-term and long-term storage options"
      },
      {
        title: "Scalable Solutions",
        description: "Pay-per-use pricing models and customized agreements"
      }
    ],
    ctaText: "Optimize your supply chain with our strategic warehousing solutions."
  },
  {
    slug: "lcl-consolidation-services",
    title: "Small Packages, Big Savings - LCL Consolidation",
    subtitle: "Cost-effective shipping for smaller consignments with weekly consolidations and nationwide delivery.",
    heroImage: "/images/use-everywhere/images5.png",
    about: "Less-than-Container-Load (LCL) consolidation service that combines multiple smaller shipments into single containers for cost-effective transportation. Perfect for businesses with smaller shipping volumes who want container shipping benefits without full container costs.",
    keyBenefits: [
      {
        title: "Cost Savings",
        description: "Share container costs with other shippers"
      },
      {
        title: "Regular Service",
        description: "Weekly consolidation schedules"
      },
      {
        title: "Nationwide Reach",
        description: "Delivery across India's major cities"
      },
      {
        title: "Flexible Volumes",
        description: "No minimum shipment requirements"
      }
    ],
    specializedEquipment: [
      "Weekly Consolidations: Regular departure schedules",
      "Professional Packing: Expert consolidation and securing",
      "Inventory Tracking: Individual shipment identification and tracking",
      "Door-to-Door Service: Pickup and delivery included"
    ],
    cargoTypes: [
      "Commercial Goods: Business-to-business shipments",
      "E-commerce Products: Online retail fulfillment",
      "Industrial Parts: Machinery components and spare parts",
      "Consumer Electronics: Technology and electronic goods",
      "Textile Products: Garments and fabric materials"
    ],
    technicalSpecs: [
      {
        title: "Documentation Services",
        description: "Individual shipment documentation and consolidated customs clearance"
      },
      {
        title: "Tracking & Reporting",
        description: "Proof of delivery for each consignment and detailed tracking"
      },
      {
        title: "Coverage Areas",
        description: "Major metro cities and industrial centers connectivity"
      },
      {
        title: "Pricing Advantages",
        description: "Shared costs, volume discounts, and predictable pricing"
      }
    ],
    industries: ["E-commerce", "Manufacturing", "Electronics", "Textiles", "Small & Medium Enterprises"],
    process: [
      {
        title: "Booking & Collection",
        description: "Shipment booking and pickup scheduling"
      },
      {
        title: "Warehouse Consolidation",
        description: "Professional packing and container loading"
      },
      {
        title: "Transportation",
        description: "Container movement with consolidated cargo"
      },
      {
        title: "Deconsolidation",
        description: "Careful unpacking at destination warehouse"
      },
      {
        title: "Final Delivery",
        description: "Individual shipment delivery to consignees"
      }
    ],
    compliance: [
      {
        title: "Metro Coverage",
        description: "Mumbai, Delhi, Bangalore, Chennai, Kolkata connectivity"
      },
      {
        title: "Industrial Centers",
        description: "Pune, Ahmedabad, Coimbatore, Ludhiana coverage"
      },
      {
        title: "Port Connectivity",
        description: "JNPT, Chennai Port, Kolkata Port connections"
      },
      {
        title: "Market Reach",
        description: "Tier-2 and Tier-3 city connectivity for emerging markets"
      }
    ],
    ctaText: "Reduce your shipping costs with our efficient LCL consolidation service."
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}