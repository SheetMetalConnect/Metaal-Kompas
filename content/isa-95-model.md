---
title: ISA-95 model
tags: [industrie, digitalisering, softwaredeployment-en-architectuur, standaarden]
---

*ISA-95 model* is een internationale standaard die een referentiemodel biedt voor de integratie van enterprise- en control systemen, met als doel de communicatie tussen business en manufacturing systemen te verbeteren.

## Definitie

ISA-95 (Enterprise-Control System Integration) definieert een hiërarchisch model voor industriële systemen dat de interface tussen enterprise planning en manufacturing control beschrijft. Het model biedt een gemeenschappelijke terminologie en architectuur voor systeem-integratie in de manufacturing sector.

## Functionele Hiërarchie

### Level 0-4 Model
```
Level 4: Business Planning & Logistics
    ↕ (Plant Production Scheduling, etc.)
Level 3: Manufacturing Operations Management
    ↕ (Dispatching Production, etc.)
Level 2: Area Supervisory Control
    ↕ (Monitoring, Control)
Level 1: Basic Process Control
    ↕ (Sensing, Manipulation)
Level 0: Physical Production Process
```

**Level 0**: De fysieke productieprocessen
- **Raw materials, equipment, finished products**
- **Energy flows and transformations**

**Level 1**: Sensing en direct control
- **Sensors, actuators, basic control devices**
- **Basic regulatory control (PLC, DCS)**

**Level 2**: Area supervisory control
- **Supervisory control, optimization**
- **[[manufacturing-execution-system|MES]], batch control systems**

**Level 3**: Manufacturing operations management
- **Production workflow control**
- **Detailed production scheduling**

**Level 4**: Business planning en logistics
- **[[enterprise-resource-planning|ERP]] systems**
- **Plant business planning**

## Equipment Hiërarchie

### Physical Asset Model
```
Enterprise
├── Site
│   ├── Area
│   │   ├── Process Cell
│   │   │   ├── Unit
│   │   │   │   └── Equipment Module
│   │   │   │       └── Control Module
```

**Definities:**
- **Enterprise**: De volledige organisatie
- **Site**: Een fysieke locatie (fabriek, plant)
- **Area**: Een productiegebied binnen een site
- **Process Cell**: Een groep van units voor een specifiek proces
- **Unit**: Equipment dat een of meer major processing activities uitvoert
- **Equipment Module**: Een groep van control modules
- **Control Module**: De kleinste logische eenheid

## Information Model

### Activity Model
- **Process Segment**: Kleinste element van manufacturing information
- **Operation**: Groep van process segments
- **Procedure**: Groep van operations
- **Unit Procedure**: Procedure voor een specifieke unit

### Resource Model
- **Personnel**: Human resources model
- **Equipment**: Physical asset resources
- **Material**: Raw materials, intermediate products, finished goods
- **Process Segment**: Information resources

## Toepassing in UNS

### Namespace Structuur
Een [[unified-namespace|Unified Namespace]] kan ISA-95 hiërarchie volgen:

```
VanEnkhuizen_BV/
├── Fabriek_Rotterdam/
│   ├── Productie_Area_A/
│   │   ├── Lijn_1/
│   │   │   ├── Oven_001/
│   │   │   │   ├── Temperature_Control/
│   │   │   │   └── Status_Module/
│   │   │   └── Robot_002/
│   │   └── Lijn_2/
│   └── Warehouse_Area/
```

### Topic Mapping
```json
{
  "namespace_path": "Enterprise/Site/Area/ProcessCell/Unit",
  "isa95_level": 2,
  "equipment_class": "ProcessUnit",
  "capability": ["Heating", "Monitoring"],
  "reports_to": "Area_Supervisor",
  "contains": ["TempSensor_001", "PressureSensor_002"]
}
```

## Integration Benefits

### Semantic Consistency
- **Gemeenschappelijke terminologie** tussen OT en IT systemen
- **Standaard data exchange** formats
- **Consistent reporting** structuren
- **Unified equipment** modellering

### System Interoperability
- **Reduced integration** complexity
- **Standard interfaces** tussen levels
- **Clear responsibilities** per level
- **Scalable architecture** patterns

## Manufacturing Operations Model

### Production Information
- **Production Capability** - wat kan geproduceerd worden
- **Production Schedule** - wat wordt gepland
- **Production Performance** - wat is gerealiseerd

### Resource Information
- **Resource Capability** - beschikbare resources
- **Resource Schedule** - geplande resource usage
- **Resource Performance** - werkelijke resource utilization

## Moderne Implementaties

### Industry 4.0 Integration
- **[[digitale-tweeling|Digital Twin]]** mapping naar ISA-95 hiërarchie
- **[[internet-of-things|IoT]]** devices gestructureerd volgens equipment model
- **Analytics** georganiseerd per level en capability

### Cloud Architecture
- **Edge computing** op Level 1-2
- **Cloud services** op Level 3-4
- **Hybrid deployments** met ISA-95 boundaries

### Event-Driven Architecture
- **Events** getagged met ISA-95 level en location
- **[[event-gedreven-architectuur|Event routing]]** gebaseerd op hiërarchie
- **Aggregation patterns** per organizational level

## Implementatie Overwegingen

### Organizational Alignment
- **Role mapping** naar ISA-95 levels
- **Responsibility matrices** per equipment hierarchy
- **Decision authority** boundaries
- **Information flow** optimization

### Technology Mapping
- **System architecture** aligned met functional levels
- **Data governance** per hierarchical level
- **Security policies** gebaseerd op level boundaries
- **Performance requirements** per level

### Change Management
- **Gradual migration** naar ISA-95 compliance
- **Training programs** voor stakeholders
- **Pilot implementations** per area or line
- **Best practice sharing** tussen sites

## Standards Compliance

### Related Standards
- **IEC 62264**: International equivalent van ISA-95
- **ISA-88**: Batch Control standard (integreert met ISA-95)
- **MESA MOM**: Manufacturing Operations Management model
- **NAMUR Pyramid**: Process industry specific interpretation

### Certification Programs
- **ISA-95 Professional** certification
- **MESA certified** implementation guidelines
- **Vendor compliance** programs

## Gerelateerde begrippen

- [[unified-namespace|Unified Namespace (UNS)]]
- [[manufacturing-execution-system|Manufacturing Execution System (MES)]]
- [[enterprise-resource-planning|Enterprise Resource Planning (ERP)]]
- [[manufacturing-operations-management|Manufacturing Operations Management (MOM)]]
- [[semantisch-datamodel|Semantisch datamodel]]
- [[hierarchical-namespace|Hierarchical namespace]]

## Bronnen

- ISA-95.00.01-2010 Enterprise-Control System Integration
- IEC 62264 Enterprise-control system integration
- MESA International ISA-95 Implementation Guide
- Purdue Enterprise Reference Architecture (PERA)

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]