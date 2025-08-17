---
tags:
  - 'digitale-transformatie-en-industrie-40-50'
  - '🧹draft'

title: Manufacturing Execution System (MES)
---
*Manufacturing Execution System (MES)* is een software-oplossing die de uitvoering van productieprocessen beheert en coördineert, fungeer als brug tussen bedrijfsplanning (ERP) en shopfloor-automatisering (SCADA/PLC).

## Definitie

Een **Manufacturing Execution System (MES)** is een dynamisch informatiesysteem dat de uitvoering van productieactiviteiten in real-time monitort, controleert en documenteert. Het MES fungeert als de verbindingslaag tussen enterprise-level planning systemen (ERP) en shopfloor control systemen (SCADA/PLC).

> **Belangrijk:** Elke MES-implementatie is uniek. "MES bij klant A is nooit gelijk aan MES bij klant B, terwijl SCADA bij klant A over het algemeen identiek is aan SCADA bij klant B."

## Positie in de Manufacturing Stack

```
Enterprise Level
├── Cloud Services
└── ERP: Enterprise Resource Planning
    │
    ▼ (Business Integration)
    │
├── MES: Manufacturing Execution System  ← **Flexible Layer**
    │
    ▼ (Production Integration)
    │
├── SCADA: Supervisory Control & Data Acquisition  ← **Standardized Layer**
└── PLC/HMI: Programmable Logic Controller
```

### MES vs. SCADA Karakteristieken

| Aspect | MES | SCADA |
|--------|-----|-------|
| **Consistentie** | Varieert per implementatie | Consistent tussen implementaties |
| **Functionaliteit** | Aangepast aan bedrijfsbehoeften | Gestandaardiseerde functies |
| **Complexiteit** | Hoge customisatie | Relatief uniform |
| **Evolutie** | Groeit mee met business | Stabiele functionaliteit |

## Kern MES Capabilities

### Altijd Aanwezige Functies

#### 1. Work Order Management
- **Work Order tracking**: Actieve werkorders (NIET sales orders)
- **Order status**: Real-time voortgang monitoring
- **Resource allocation**: Toewijzing van mensen, machines, materialen
- **Priority management**: Dynamische prioritering

#### 2. Overall Equipment Effectiveness (OEE)
- **Availability**: Percentage beschikbare tijd
- **Performance**: Snelheid t.o.v. nominale snelheid
- **Quality**: Percentage goede producten
- **Real-time calculation**: Continue OEE monitoring

#### 3. Downtime Tracking
- **Downtime categorization**: Geplande vs. ongeplande stilstand
- **Root cause analysis**: Oorzaak identificatie
- **MTTR tracking**: Mean Time To Repair monitoring
- **Availability impact**: Effect op productiecapaciteit

### Vaak Optionele Functies

#### 4. Scheduling (Vaak Weggelaten)
- **Detailed daily planning**: Pull-based scheduling
- **Capacity planning**: Resource optimalisatie
- **Sequence optimization**: Productievolgtorde

> **Waarschuwing:** Scheduling is vaak de eerste capability die uit MES wordt gehaald, omdat dit ook door ERP kan worden afgehandeld.

## Uitgebreide MES Functionaliteiten

### Kwaliteitsmanagement
- **DQIP**: Digital Quality Inspection Plans
- **Sample collection**: Kwaliteitsmonsters verzameling
- **SPC**: Statistical Process Control
- **ISO 9001 compliance**: Kwaliteitsnorm naleving
- **Quality deviation tracking**: Afwijkingen registratie

### Productie-ondersteuning
- **Recipe management**: Receptbeheer (Definition, Spec, Deviation)
- **Work instructions**: Digitale werkinstructies
- **Staff competencies**: Medewerker vaardigheden en training
- **Preventive maintenance**: Preventief onderhoudsplanning

### Inventory & Materials
- **BOM to inventory**: Stuklijst naar voorraad koppeling
- **WIP consumption**: Work-in-Progress verbruik
- **Raw material tracking**: Grondstof tracering
- **Finished goods**: Eindproduct registratie
- **Kitting**: Materiaal samenstelling voor orders

## MES Implementatie Filosofie

### Modulaire Aanpak
> **Kernprincipe:** "MES is geen product... het is een grote emmer van capabilities en je kiest alleen degene die je nodig hebt voor je business."

### Implementatie Strategie
1. **Start with core**: Begin met essentiële functionaliteiten
2. **Add as needed**: Voeg functionaliteiten toe wanneer nodig
3. **Grow with business**: Laat MES meegroeien met bedrijf
4. **Customize extensively**: Pas aan aan specifieke behoeften

### Business Evolution
- **Phase 1**: Work Order Management + OEE
- **Phase 2**: Quality Management + Traceability
- **Phase 3**: Advanced Planning + Analytics
- **Phase 4**: Integration met IoT en AI

## MES voor Specifieke Industrieën

### Fabricators / High-Mix, Low-Volume
**Bijzonder belangrijk voor:**
- **Complexe operaties**: Vele verschillende producten
- **Flexible production**: Snelle omschakeling tussen orders
- **Detailed management**: Gedetailleerde productiecontrole
- **Customer-specific requirements**: Klantspecifieke eisen

### Proces Industrie
- **Recipe-driven**: Receptgebaseerde productie
- **Batch management**: Chargebeheer en tracking
- **Regulatory compliance**: Strenge regelgeving
- **Process optimization**: Continue procesverbetering

### Discrete Manufacturing
- **Assembly tracking**: Assemblage monitoring
- **Serialization**: Unieke product identificatie
- **Component traceability**: Onderdeel tracering
- **Test data management**: Testresultaten beheer

## Integration Architectuur

### Traditionele Integratie
```
ERP System
    │ (ODBC/API)
    ▼
MES System
    │ (OPC/Modbus)
    ▼
SCADA/PLC
```

### Modern UNS-based Integration
```
        Unified Namespace
              │
    ┌───────┼───────┐
    │       │       │
   ERP     MES    SCADA
```

### UNS Topic Structure voor MES
```
MES/Site1/Line1/
├── WorkOrders/
│   ├── Active/
│   ├── Completed/
│   └── Queue/
├── OEE/
│   ├── Availability/
│   ├── Performance/
│   └── Quality/
├── Downtime/
│   ├── Planned/
│   ├── Unplanned/
│   └── Reasons/
└── Quality/
    ├── Inspections/
    ├── Deviations/
    └── SPC_Data/
```

## MES Data Model

### Real-time Events
```json
{
  "timestamp": "2024-08-17T14:30:00Z",
  "event_type": "work_order_start",
  "work_order_id": "WO_2024_1001",
  "line_id": "Line_01",
  "product_id": "PROD_ABC123",
  "quantity_planned": 1000,
  "operator_id": "OP_001",
  "recipe_version": "v2.1",
  "materials": [
    {
      "material_id": "MAT_001",
      "lot_number": "LOT_20240817_A",
      "quantity_consumed": 0
    }
  ]
}
```

### OEE Metrics
```json
{
  "timestamp": "2024-08-17T14:30:00Z",
  "line_id": "Line_01",
  "shift": "Day",
  "oee_metrics": {
    "availability": 85.2,
    "performance": 92.1,
    "quality": 98.7,
    "oee": 77.4
  },
  "downtime_minutes": 22,
  "production_count": 920,
  "reject_count": 12
}
```

## Voordelen van MES

### Operationele Voordelen
- **Real-time visibility**: Directe inzicht in productie
- **Improved OEE**: Systematische efficiency verbetering
- **Quality control**: Proactieve kwaliteitsbewaking
- **Reduced waste**: Minimalisatie van verspilling

### Business Voordelen
- **Faster response**: Snellere reactie op problemen
- **Better planning**: Accurate data voor planning
- **Compliance**: Naleving van regelgeving
- **Cost reduction**: Lagere operationele kosten

### Strategic Voordelen
- **Data-driven decisions**: Beslissingen op basis van data
- **Continuous improvement**: Continue procesverbetering
- **Competitive advantage**: Operationele excellentie
- **Scalability**: Groeimogelijkheden

## Uitdagingen

### Technische Uitdagingen
- **System integration**: Complexe systeemkoppelingen
- **Data quality**: Betrouwbare en accurate data
- **Real-time performance**: Snelle responstijden
- **Scalability**: Groei naar meer lijnen/sites

### Organizational Uitdagingen
- **Change management**: Acceptatie van nieuwe processen
- **Training requirements**: Medewerker opleiding
- **Process standardization**: Uniformiteit in werkwijzen
- **ROI demonstration**: Aantoonbare return on investment

### Implementation Uitdagingen
- **Customization complexity**: Maatwerk complexiteit
- **Legacy integration**: Koppeling met oude systemen
- **Vendor lock-in**: Afhankelijkheid van leverancier
- **Maintenance overhead**: Onderhoud en updates

## Gerelateerde begrippen

**System Integration & Architecture:**
- [[unified-namespace|Unified Namespace (UNS)]] - Moderne MES integratie architectuur
- [[enterprise-resource-planning|ERP]] - Business-level planning systemen
- [[isa-95-model|ISA-95 model]] - Manufacturing hierarchy standaard
- [[event-gedreven-architectuur|Event-gedreven architectuur]] - Real-time MES updates

**Production Management:**
- [[overall-equipment-effectiveness|Overall Equipment Effectiveness (OEE)]] - Kern MES metric
- [[work-order-management|Work Order Management]] - Productieorder beheer
- [[production-planning-scheduling|Production Planning & Scheduling]] - Capaciteitsplanning
- [[lean-manufacturing|Lean Manufacturing]] - Procesoptimalisatie

**Quality & Compliance:**
- [[kwaliteitsmanagementsysteem|Kwaliteitsmanagementsysteem]] - MES quality module
- [[traceerbaarheidssysteem|Traceerbaarheidssysteem]] - Product tracking
- [[statistical-process-control-software|SPC Software]] - Statistische procescontrole
- [[iso-9001-kwaliteitsmanagement|ISO 9001]] - Kwaliteitsnorm compliance

**Data & Analytics:**
- [[single-source-of-truth|Single Source of Truth (SSOT)]] - MES als productie data authority
- [[historian-database|Historian Database]] - Langetermijn data opslag
- [[kpi-dashboard|KPI Dashboard]] - MES performance visualisatie
- [[data-democratisering|Data democratisering]] - Self-service MES analytics

**Automation & Control:**
- [[scada-systemen|SCADA Systemen]] - Proces monitoring en control
- [[programmable-logic-controller|PLC]] - Shopfloor automatisering
- [[human-machine-interface|HMI]] - Operator interfaces
- [[industrial-internet-of-things|IIoT]] - Connected manufacturing devices

## Bronnen

- ISA-95 Enterprise-Control System Integration Standard
- MESA International MES Best Practices
- Gartner Magic Quadrant for Manufacturing Execution Systems
- Manufacturing Operations Management (MOM) frameworks

---
← Terug naar [[kaarten/digitale-transformatie-en-industrie-40-50|Digitale transformatie & Industrie 4.0/5.0 kaart]]
