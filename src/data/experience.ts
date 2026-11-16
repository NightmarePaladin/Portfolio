export interface ExperienceEntry {
  id: string
  role: string
  organization: string
  location?: string
  period?: string
  type: 'military' | 'technical' | 'education'
  summary: string
  highlights: string[]
  skills: string[]
}

/** Sourced from the resume. Listed most recent first. */
export const experience: ExperienceEntry[] = [
  {
    id: 'black-buffalo',
    role: 'Field Technician',
    organization: 'Black Buffalo 3D',
    location: 'East Stroudsburg, PA',
    period: 'Jan 2022 – Dec 2022',
    type: 'technical',
    summary:
      'Deployed, tested, and supported concrete 3D printers, control units, and material extrusion systems for customers, working alongside international technical teams.',
    highlights: [
      'Independently diagnosed and repaired printer and control-unit failures on-site, minimizing customer downtime.',
      'Wrote technical manuals standardizing operating, maintenance, and troubleshooting procedures for new equipment.',
      'Onboarded and trained about 25 customers weekly on operation, maintenance, and repair.',
    ],
    skills: ['Field diagnostics', 'Technical writing', 'Customer training'],
  },
  {
    id: 'field-bridge',
    role: 'Production Technician (Air Liquide)',
    organization: 'Field Bridge',
    location: 'Mount Bethel, PA',
    period: 'Dec 2020 – Jan 2022',
    type: 'technical',
    summary: 'Supported production operations at an Air Liquide plant under strict safety and environmental regulations.',
    highlights: [
      'Troubleshot reactor and manifold systems during process upsets, limiting production downtime.',
      'Managed and disposed of hazardous materials in compliance with plant requirements.',
      'Trained new employees and coordinated across departments.',
    ],
    skills: ['Process troubleshooting', 'Safety compliance', 'Training'],
  },
  {
    id: 'best-buy',
    role: 'Consultation Agent, Geek Squad (Certified Apple Repair Technician)',
    organization: 'Best Buy',
    location: 'Stroudsburg, PA',
    period: 'Sep 2017 – Jan 2020',
    type: 'technical',
    summary: 'Provided in-store, on-site, and remote repair and IT support for customers and small businesses.',
    highlights: [
      'Diagnosed hardware, software, and OS issues on-site and remotely; ranked 16th company-wide in productivity.',
      'Documented diagnostics and repairs in the NOVA ticketing platform and explained fixes to non-technical customers.',
      'Installed and configured Windows, Linux, and macOS to client requirements.',
    ],
    skills: ['Windows', 'Linux', 'macOS', 'IT support'],
  },
  {
    id: 'usaf-support',
    role: 'Support Technician / Supervisor',
    organization: 'U.S. Air Force',
    location: 'Shaw AFB, SC',
    period: 'Sep 2015 – Jul 2017',
    type: 'military',
    summary: 'Supervised a team of 5 Airmen in daily technical support operations for the squadron.',
    highlights: [
      'Set up PC workstations and managed mobile devices including laptops, iPads, and Toughbooks.',
      'Repaired printers, tablets, and laptops at the component level, saving $70K+ in replacement costs.',
      'Inspected, maintained, and inventoried $15M in test equipment as records custodian.',
    ],
    skills: ['Leadership', 'Hardware repair', 'Asset accountability'],
  },
  {
    id: 'usaf-f16',
    role: 'Tactical Aircraft Maintainer (F-16)',
    organization: 'U.S. Air Force',
    location: 'Kunsan & Osan AB, South Korea',
    period: 'Jan 2013 – Sep 2015',
    type: 'military',
    summary: 'Maintained and inspected F-16 fighter aircraft to keep them mission-ready for flight operations.',
    highlights: [
      'Troubleshot electrical, communication, navigation, hydraulic, and fuel systems on $20M F-16 aircraft.',
      'Removed, installed, and inspected aircraft and engine components per technical orders.',
      'Interpreted engineering drawings, technical orders, and repair manuals; trained new personnel.',
    ],
    skills: ['Systems troubleshooting', 'Technical orders', 'Training'],
  },
]
