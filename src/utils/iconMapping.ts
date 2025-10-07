import {
  // Transportation & Logistics
  Truck, Container, Ship, Anchor, MapPin, Route, Navigation, Compass,
  // Safety & Security
  Shield, ShieldCheck, AlertTriangle, Lock, Eye, Camera, UserCheck,
  // Technology & Tracking
  Zap, Wifi, Smartphone, Monitor, BarChart3, TrendingUp, Clock,
  // Industrial & Equipment
  Wrench, Cog, Factory, Crane, HardHat, Gauge, Settings,
  // Storage & Warehousing
  Package, Warehouse, Archive, Thermometer, Wind, Database,
  // Documentation & Compliance
  FileText, ClipboardCheck, Award, CheckCircle, Users, Target,
  // Communication & Support
  Phone, MessageCircle, Headphones, AlertCircle, Info,
  // Financial & Business
  DollarSign, TrendingDown, Calculator, PieChart, BarChart,
  // Process & Operations
  ArrowRight, Play, CheckSquare, RefreshCw, Layers, Grid,
  // Emergency & Response
  Siren, FirstAid, PhoneCall, Radio, Zap as Lightning,
  // Chemical & Hazmat
  Beaker, Droplets, Flame, Skull, Triangle,
  // Project & Engineering
  Blueprint, Ruler, PenTool, Building, Construction,
  // Consolidation & Packaging
  Package2, Boxes, PackageOpen, Combine, Merge
} from 'lucide-react';

export interface IconMapping {
  [key: string]: any;
}

// Main icon mapping based on keywords and context
export const iconMapping: IconMapping = {
  // Transportation & Logistics
  'port': Ship,
  'connectivity': MapPin,
  'fleet': Truck,
  'optimization': Target,
  'tracking': Monitor,
  'real-time': Zap,
  'container': Container,
  'route': Route,
  'navigation': Navigation,
  'delivery': Truck,
  'transport': Truck,
  'logistics': Route,
  'movement': ArrowRight,
  'pickup': Package,
  'positioning': MapPin,
  'efficiency': TrendingUp,
  'cost': DollarSign,
  'savings': TrendingDown,
  
  // Safety & Security
  'safety': Shield,
  'security': ShieldCheck,
  'escort': UserCheck,
  'protection': Lock,
  'surveillance': Eye,
  'monitoring': Camera,
  'emergency': AlertTriangle,
  'response': PhoneCall,
  'incident': AlertCircle,
  'risk': AlertTriangle,
  'mitigation': Shield,
  'prevention': ShieldCheck,
  'zero': CheckCircle,
  'certified': Award,
  'compliance': ClipboardCheck,
  
  // Chemical & Hazmat
  'chemical': Beaker,
  'hazardous': Skull,
  'adr': Triangle,
  'hazmat': AlertTriangle,
  'dangerous': Flame,
  'toxic': Droplets,
  'fire': Flame,
  'suppression': FirstAid,
  
  // Project Cargo & Engineering
  'project': Blueprint,
  'engineering': Cog,
  'custom': Settings,
  'solutions': Wrench,
  'feasibility': Ruler,
  'assessment': ClipboardCheck,
  'permit': FileText,
  'clearance': CheckCircle,
  'heavy': Crane,
  'machinery': Factory,
  'equipment': HardHat,
  'industrial': Factory,
  'construction': Building,
  'power': Lightning,
  'generation': Factory,
  'modular': Grid,
  'hydraulic': Gauge,
  
  // Warehousing & Storage
  'warehouse': Warehouse,
  'storage': Archive,
  'climate': Thermometer,
  'temperature': Thermometer,
  'humidity': Wind,
  'inventory': Database,
  'management': BarChart3,
  'facility': Building,
  'controlled': Settings,
  'environment': Wind,
  'strategic': Target,
  'location': MapPin,
  
  // LCL & Consolidation
  'consolidation': Combine,
  'lcl': Package2,
  'packaging': Boxes,
  'packing': PackageOpen,
  'consolidate': Merge,
  'combine': Layers,
  'weekly': Clock,
  'regular': RefreshCw,
  'flexible': Settings,
  'volume': BarChart,
  'small': Package,
  'sharing': Users,
  
  // Technology & Systems
  'gps': Navigation,
  'tracking': Monitor,
  'system': Cog,
  'technology': Smartphone,
  'digital': Monitor,
  'communication': MessageCircle,
  'coordination': Users,
  'integration': Grid,
  'automation': Settings,
  'real-time': Zap,
  'live': Wifi,
  'update': RefreshCw,
  'status': Info,
  
  // Documentation & Process
  'documentation': FileText,
  'customs': ClipboardCheck,
  'clearance': CheckCircle,
  'paperwork': FileText,
  'process': ArrowRight,
  'procedure': CheckSquare,
  'protocol': ClipboardCheck,
  'standard': Award,
  'certification': Award,
  'training': Users,
  'qualified': UserCheck,
  'professional': Award,
  
  // Business & Financial
  'cost': DollarSign,
  'savings': TrendingDown,
  'efficiency': TrendingUp,
  'optimization': Target,
  'value': DollarSign,
  'pricing': Calculator,
  'discount': TrendingDown,
  'benefit': TrendingUp,
  'advantage': Target,
  'competitive': BarChart,
  
  // Support & Communication
  'support': Headphones,
  'helpline': Phone,
  'assistance': MessageCircle,
  'consultation': Users,
  'coordination': MessageCircle,
  'communication': Phone,
  '24/7': Clock,
  'emergency': PhoneCall,
  'response': Radio,
  
  // Quality & Standards
  'quality': Award,
  'excellence': Target,
  'standard': CheckCircle,
  'iso': Award,
  'certified': Award,
  'compliance': ClipboardCheck,
  'regulation': FileText,
  'adherence': CheckSquare,
  'inspection': Eye,
  'verification': CheckCircle,
  
  // Default fallbacks
  'service': Target,
  'solution': Wrench,
  'capability': Settings,
  'feature': CheckCircle,
  'benefit': TrendingUp,
  'advantage': Target,
  'expertise': Award,
  'experience': Users,
  'professional': UserCheck,
  'reliable': Shield,
  'trusted': ShieldCheck,
  'proven': Award
};

// Function to get icon based on title and description
export function getIconForContent(title: string, description?: string): any {
  const searchText = `${title} ${description || ''}`.toLowerCase();
  
  // Check for exact matches first
  for (const [keyword, icon] of Object.entries(iconMapping)) {
    if (searchText.includes(keyword)) {
      return icon;
    }
  }
  
  // Fallback to a generic icon
  return Target;
}

// Service-specific icon mappings for better context
export const serviceSpecificIcons: { [key: string]: IconMapping } = {
  'empty-container-transportation': {
    'port': Ship,
    'fleet': Container,
    'tracking': Monitor,
    'cost': TrendingDown,
    'container': Container,
    'vehicle': Truck,
    'load': Gauge,
    'safety': Shield,
    'pickup': Package,
    'route': Route,
    'monitoring': Eye,
    'delivery': MapPin
  },
  
  'export-import-containers': {
    'end-to-end': Route,
    'customs': FileText,
    'multi-size': Container,
    'damage': Shield,
    'container': Container,
    'weight': Gauge,
    'special': Settings,
    'documentation': ClipboardCheck,
    'route': Navigation,
    'coordination': MessageCircle,
    'transport': Truck,
    'delivery': MapPin,
    'bonded': Award,
    'international': Ship,
    'insurance': Shield,
    'trained': Users
  },
  
  'project-cargo-management': {
    'custom': Wrench,
    'route': Ruler,
    'permit': FileText,
    'risk': Shield,
    'load': Crane,
    'dimensions': Ruler,
    'clearance': CheckCircle,
    'permit': ClipboardCheck,
    'feasibility': Blueprint,
    'engineering': Cog,
    'acquisition': FileText,
    'execution': Play,
    'delivery': Truck,
    'certified': Award,
    'securing': Lock,
    'emergency': AlertTriangle,
    'insurance': Shield
  },
  
  'chemical-transportation': {
    'safety': Shield,
    'certified': Award,
    'regulatory': ClipboardCheck,
    'emergency': AlertTriangle,
    'vehicle': Beaker,
    'capacity': Gauge,
    'equipment': FirstAid,
    'certification': Award,
    'cargo': Droplets,
    'preparation': Settings,
    'route': Navigation,
    'execution': Monitor,
    'delivery': Shield,
    'adr': Triangle,
    'indian': FileText,
    'environmental': Wind,
    'driver': Users
  },
  
  'high-value-goods-escort': {
    'armed': Shield,
    'surveillance': Eye,
    'communication': Radio,
    'coordination': MessageCircle,
    'personnel': UserCheck,
    'driver': Users,
    'surveillance': Camera,
    'emergency': PhoneCall,
    'risk': AlertTriangle,
    'security': Lock,
    'briefing': Users,
    'escort': UserCheck,
    'delivery': Shield,
    'technology': Smartphone,
    'communication': MessageCircle,
    'digital': Monitor,
    'law': Award
  },
  
  'warehousing-storage': {
    'strategic': MapPin,
    'climate': Thermometer,
    'inventory': Database,
    'integrated': Grid,
    'value-added': TrendingUp,
    'distribution': Route,
    'quality': Award,
    'technology': Monitor,
    'facility': Building,
    'setup': Settings,
    'management': BarChart3,
    'coordination': MessageCircle,
    'reporting': FileText,
    'locations': MapPin,
    'coverage': Route,
    'flexible': Settings,
    'scalable': TrendingUp
  },
  
  'lcl-consolidation-services': {
    'cost': TrendingDown,
    'regular': Clock,
    'nationwide': Route,
    'flexible': Settings,
    'documentation': FileText,
    'tracking': Monitor,
    'coverage': MapPin,
    'pricing': Calculator,
    'booking': ClipboardCheck,
    'consolidation': Combine,
    'transportation': Truck,
    'deconsolidation': PackageOpen,
    'delivery': Package,
    'metro': MapPin,
    'industrial': Factory,
    'port': Ship,
    'market': TrendingUp
  }
};

// Function to get service-specific icon
export function getServiceIcon(serviceSlug: string, title: string, description?: string): any {
  const serviceIcons = serviceSpecificIcons[serviceSlug];
  
  if (serviceIcons) {
    const searchText = `${title} ${description || ''}`.toLowerCase();
    
    for (const [keyword, icon] of Object.entries(serviceIcons)) {
      if (searchText.includes(keyword)) {
        return icon;
      }
    }
  }
  
  // Fallback to general icon mapping
  return getIconForContent(title, description);
}