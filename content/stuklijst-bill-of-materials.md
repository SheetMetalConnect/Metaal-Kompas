---
tags:
  - 'productstructuur-en-documentatie'
  - '🧹draft'

title: Stuklijst / Bill of Materials (BOM)
---
*Stuklijst / Bill of Materials (BOM)* is een gestructureerde lijst die alle componenten, materialen, onderdelen en hun hoeveelheden definieert die nodig zijn om een product te maken, assembleren of repareren.

## Definitie

Een **Stuklijst (Bill of Materials - BOM)** is een formele, hiërarchische lijst van alle componenten, onderdelen, assemblages, subassemblages, intermediaire producten, en grondstoffen die nodig zijn om een eindproduct te vervaardigen. Het fungeert als de "recept" voor productie en vormt de basis voor planning, inkoop, kostencalculatie en productiebesturing.

### Hiërarchische Structuur
Een BOM wordt georganiseerd in niveaus:
- **Niveau 0**: Eindproduct (bijv. fiets)
- **Niveau 1**: Hoofdcomponenten (wielen, frame, stuur, zadel)
- **Niveau 2**: Subcomponenten (banden, pedalen, spaken, reflectoren)
- **Niveau 3**: Basisonderdelen en materialen

## Types van BOMs

### Engineering BOM (EBOM)
**[[engineering-bom|Engineering BOM]]** wordt gecreëerd door het ontwerpteam:
- Gebaseerd op CAD-ontwerpen en productspecificaties
- Bevat alle conceptuele componenten en hun relaties
- Include geometrische en functionele eigenschappen
- Wordt gebruikt voor productontwikkeling en validatie

### Manufacturing BOM (MBOM)
**[[manufacturing-bom|Manufacturing BOM]]** wordt geoptimaliseerd voor productie:
- Aangepast aan werkelijke productieprocessen
- Bevat productie-specifieke informatie (routing, bewerkingen)
- Include gereedschappen, fixtures en consumables
- Geoptimaliseerd voor efficiënte productie en assemblage

### Service BOM (SBOM)
**Service BOM** voor onderhoud en reparatie:
- Bevat vervangbare onderdelen en spare parts
- Include service-specifieke componenten
- Gekoppeld aan onderhoudsschema's en procedures
- Gebruikt voor after-sales support en field service

## Structuur en Componenten

### BOM Header Informatie
- **Product identificatie**: Artikelnummer, beschrijving, versie
- **Geldigheidsperiode**: Effectieve datums, revisie status
- **Authorisatie**: Goedkeuringen, verantwoordelijke personen
- **Configuratie**: Product varianten, opties

### BOM Line Items
Elke regel in de BOM bevat:
- **Component identificatie**: Onderdeel nummer, beschrijving
- **Hoeveelheid**: Aantal per eenheid eindproduct
- **Eenheid**: Stuks, kg, liter, meter
- **Positie nummer**: Reference designator
- **Substitute components**: Alternatieve onderdelen
- **Lead time**: Doorlooptijd voor beschikbaarheid

### Attributen en Properties
```
BOM Line Attributes:
├── Identification
│   ├── Part Number
│   ├── Description
│   └── Reference Designator
├── Quantity Information
│   ├── Quantity per Assembly
│   ├── Unit of Measure
│   └── Scrap Factor
├── Sourcing Details
│   ├── Preferred Supplier
│   ├── Lead Time
│   └── Cost Information
└── Manufacturing
    ├── Make vs Buy
    ├── Phantom Assembly
    └── Operation Sequence
```

## BOM Management en Configuratie

### Configureerbare BOMs
- **Variant BOMs**: Voor product varianten en opties
- **Option Classes**: Keuze tussen alternatieven
- **Conditional Logic**: Regels voor componentkeuze
- **Effectivity Dating**: Tijd-afhankelijke configuraties

### Phantom Assemblies
**Phantom (virtuele) assemblages** zijn:
- Logische groeperingen zonder fysieke vorm
- Tijdelijke assemblages die direct worden gedemonteerd
- Vereenvoudiging van complexe structures
- Kostenbesparing door eliminatie van assemblage stappen

### Multi-Level BOMs
```
Fiets (Niveau 0)
├── Voorwiel Assembly (Niveau 1)
│   ├── Velg (Niveau 2)
│   ├── Spaken (Niveau 2) - Qty: 32
│   ├── Naaf (Niveau 2)
│   └── Band (Niveau 2)
├── Frame Assembly (Niveau 1)
│   ├── Hoofdframe (Niveau 2)
│   ├── Voorvork (Niveau 2)
│   └── Lagers (Niveau 2) - Qty: 4
└── Aandrijving Assembly (Niveau 1)
    ├── Crankstel (Niveau 2)
    ├── Ketting (Niveau 2)
    └── Cassette (Niveau 2)
```

## Toepassing in Systemen

### ERP Integration
**[[enterprise-resource-planning|ERP]]** systemen gebruiken BOMs voor:
- **[[material-requirements-planning|Material Requirements Planning (MRP)]]**: Materiaalbehoefteplanning
- **Kostencalculatie**: Product costing en pricing
- **Inkoop planning**: Purchase order generation
- **Inventaris beheer**: Stock level optimization

### PLM Integration
**[[product-lifecycle-management|PLM]]** systemen beheren:
- **[[engineering-bom|EBOM]]** tijdens productontwikkeling
- **Change management**: Engineering change orders
- **Version control**: BOM revisie beheer
- **Collaboration**: Multi-disciplinaire teams

### MES Integration
**[[manufacturing-execution-system|MES]]** gebruikt BOMs voor:
- **Productie planning**: Work order creation
- **Material allocation**: Component toewijzing
- **Quality control**: Inspection en testing requirements
- **Traceability**: [[product-genealogie|Product genealogie]] tracking

## BOM Accuracy en Maintenance

### Data Integrity
- **Single source of truth**: Centrale BOM repository
- **Change control**: Gecontroleerde wijzigingsprocedures
- **Approval workflows**: Multi-level authorization
- **Audit trails**: Traceerbare wijzigingshistorie

### BOM Accuracy Metrics
- **Completeness**: Alle benodigde componenten aanwezig
- **Correctness**: Juiste hoeveelheden en specificaties
- **Currency**: Up-to-date informatie
- **Consistency**: Geen conflicten tussen systemen

### Common BOM Errors
- **Missing components**: Ontbrekende onderdelen
- **Incorrect quantities**: Verkeerde hoeveelheden
- **Outdated revisions**: Verouderde versies
- **Circular references**: Oneindige loops in structuur

## Impact op Bedrijfsprocessen

### Cost Management
- **Material cost rollup**: Geaggregeerde materiaalkosten
- **Labor cost allocation**: Arbeidskosten toewijzing
- **Overhead distribution**: Indirecte kosten verdeling
- **Target costing**: Kostendoelstellingen

### Supply Chain Management
- **Supplier qualification**: Leverancier validatie
- **Lead time planning**: Doorlooptijd management
- **Risk assessment**: Supply continuity analysis
- **Cost optimization**: Sourcing strategies

### Quality Assurance
- **Specification compliance**: Voldoen aan eisen
- **Supplier quality**: Leverancier kwaliteitsbeheer
- **Change impact**: Effect van wijzigingen
- **Regulatory compliance**: Wettelijke vereisten

## Digital Twin Integration

BOMs in **[[virtual-factory-digital-twin-digitale-tweeling|Digital Twin]]** omgevingen:
- **As-built BOMs**: Werkelijke geïnstalleerde configuratie
- **Real-time updates**: Live configuratie wijzigingen
- **Predictive maintenance**: Component levensduur voorspelling
- **Performance optimization**: Data-gedreven verbeteringen

## Gerelateerde begrippen

**Product Structuur:**
- [[engineering-bom|Engineering BOM (EBOM)]] - Ontwerpgerichte stuklijst
- [[manufacturing-bom|Manufacturing BOM (MBOM)]] - Productiegericht stuklijst
- [[product-data-management|Product Data Management (PDM)]] - BOM databeheer
- [[product-lifecycle-management|PLM]] - Levenscyclus management

**Planning & Control:**
- [[material-requirements-planning|Material Requirements Planning (MRP)]] - Materiaalplanning
- [[enterprise-resource-planning|ERP]] - Bedrijfsresources planning
- [[manufacturing-execution-system|MES]] - Productie-uitvoering
- [[stuklijstbeheer|Stuklijstbeheer]] - BOM maintenance

**Traceability & Quality:**
- [[product-genealogie|Product genealogie]] - Component herkomst
- [[traceerbaarheidssysteem|Traceerbaarheidssysteem]] - Tracking & tracing
- [[configuratiebeheer|Configuratiebeheer]] - Versie controle
- [[variantbeheer|Variantbeheer]] - Product varianten

## Bronnen

- APICS Supply Chain Operations Reference Model (SCOR)
- ISO 10007 Configuration Management Guidelines
- PLM Implementation Best Practices
- MRP/ERP System Documentation

---
← Terug naar [[kaarten/productstructuur-en-documentatie|Productstructuur & Documentatie kaart]]
