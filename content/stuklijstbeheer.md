---
tags:
  - 'productstructuur-en-documentatie'
  - '🧹draft'

title: Stuklijstbeheer
---
*Stuklijstbeheer* is een begrip binnen de industriële digitalisering en productstructuur & documentatie.

## Definitie

**Stuklijstbeheer (Bill of Materials Management)** is het systematische proces van het creëren, onderhouden en beheren van [[manufacturing-bom|product stuklijsten]] die alle componenten, onderdelen en materialen specificeren die nodig zijn voor productie. Het omvat versioning, approval workflows, en integratie met [[enterprise-resource-planning|ERP]] en [[product-lifecycle-management|PLM]] systemen.

## Kenmerken

- **Hierarchical structure**: Multi-level product breakdown met parent-child relationships
- **Version control**: BOM revision management met change tracking en approval
- **Multi-view BOMs**: [[engineering-bom|Engineering]], [[manufacturing-bom|manufacturing]], service BOMs
- **Component specifications**: Part numbers, quantities, units, descriptions
- **Effectivity management**: Date en serial number effectivity control
- **Change management**: [[engineering-change-order|ECO]] integration en impact analysis
- **Approval workflows**: Multi-level BOM review en release processes
- **Integration capabilities**: Connectivity met ERP, PLM, CAD systems
- **Configuration management**: Variant BOM management voor product families

## Toepassing

**Manufacturing stuklijst management:**
- **Production BOMs**: Manufacturing-specific component lists voor production planning
- **Assembly instructions**: Step-by-step assembly procedures met component references
- **Material requirements**: [[materials-requirement-planning|MRP]] input voor production planning
- **Cost calculations**: Product costing based on component costs en quantities

**Engineering design integration:**
- **[[engineering-bom|EBOM]] to [[manufacturing-bom|MBOM]]**: Design-to-manufacturing BOM conversion
- **[[computer-aided-design|CAD]] integration**: Automatic BOM generation from design models
- **Design changes**: [[engineering-change-order|ECO]] impact on existing BOMs
- **Configuration management**: Managing BOMs voor product variants en options

**Supply chain management:**
- **Procurement planning**: Supplier information en lead times per component
- **Inventory control**: Stock levels en reorder points based on BOM requirements
- **Supplier qualification**: Approved vendor lists per component
- **Make-vs-buy decisions**: Component sourcing strategy based on BOM analysis

**Quality management:**
- **Component traceability**: Serial number tracking through BOM hierarchy
- **Quality specifications**: Component quality requirements en testing procedures
- **Supplier quality**: Component quality requirements en inspection procedures
- **Compliance tracking**: Regulatory compliance requirements per component

**Production planning:**
- **Capacity planning**: Resource requirements based on BOM complexity
- **Lead time calculation**: Production timing based on component availability
- **Work order generation**: Manufacturing orders based on BOM requirements
- **Progress tracking**: Production status tracking at BOM level

## Gerelateerde begrippen

**Verwante termen:**
- [[manufacturing-bom|Manufacturing BOM]] - Production-specific bill of materials
- [[engineering-bom|Engineering BOM]] - Design-centric product structure
- [[product-lifecycle-management|PLM]] - Product data management including BOM control
- [[materials-requirement-planning|MRP]] - Production planning using BOM data

**Verwante concepten:**
- [[enterprise-resource-planning|ERP]] - Business systems integrating with BOM management
- [[engineering-change-order|ECO]] - Change control processes affecting BOMs
- [[variantbeheer|Variant management]] - Product family management using structured BOMs
- [[configuratiebeheer|Configuration management]] - Product configuration control including BOMs

## Bronnen

- SAP ERP - Enterprise BOM management en integration capabilities
- Oracle PLM - Product lifecycle management with comprehensive BOM control
- Siemens Teamcenter - PLM platform with advanced BOM management
- Dassault Systèmes ENOVIA - Collaborative product development met BOM management
- PTC Windchill - Product data management including BOM control
- Autodesk Vault - Engineering data management met BOM capabilities
- Arena PLM - Cloud-based product development with BOM management

---
← Terug naar [[kaarten/productstructuur-en-documentatie|Productstructuur & Documentatie kaart]]
