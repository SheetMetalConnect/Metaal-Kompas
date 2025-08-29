---
tags:
  - 'productstructuur-en-documentatie'
  - '🧹draft'

title: Manufacturing BOM (mBOM)
---
*Manufacturing BOM (mBOM)* is een begrip binnen de industriële digitalisering en productstructuur & documentatie.

## Definitie

**Manufacturing BOM (mBOM)** is een gestructureerde lijst van alle materialen, componenten, sub-assemblies en onderdelen die nodig zijn voor de productie van een specifiek product, inclusief hoeveelheden, specificaties en productievolgorde. Het vormt de basis voor [[material-requirements-planning|MRP]] berekeningen en productie planning.

## Kenmerken

- **Hiërarchische structuur**: Multi-level breakdown van product tot basis materialen
- **Productie-georiënteerd**: Geoptimaliseerd voor manufacturing processes en assembly
- **Hoeveelheid specificaties**: Exacte quantities per component niveau
- **[[productierouting|Routing]] integratie**: Koppeling met work center sequences en operations
- **Effectiviteits data**: Valid-from/valid-to dates voor versiecontrole
- **Make-vs-buy indicatie**: Internal production versus purchased components
- **Costing informatie**: Material costs en labor content per level
- **[[traceerbaarheid-en-productidentificatie|Traceability]] support**: Component tracking en [[serienummer|serial number]] management

## Toepassing

**Metaalbewerking assemblies:**
- **Machined assemblies**: Bewerkte componenten met fasteners, seals, bearings
- **Welded structures**: Base materials, welding consumables, preparation steps
- **Sheet metal products**: Raw sheet, cut blanks, formed components, hardware
- **Cast/forged components**: Raw castings/forgings met machining requirements

**Productiestructuur levels:**
- **Level 0**: Final product (eindproduct)
- **Level 1**: Major sub-assemblies (hoofd sub-assemblies)
- **Level 2**: Components en sub-components
- **Level 3+**: Raw materials, fasteners, consumables

**[[enterprise-resource-planning|ERP]] systeem functies:**
- **[[material-requirements-planning|MRP]] input**: Basis voor material planning calculations
- **Cost roll-up**: Product costing van component level naar finished good
- **Inventory management**: Stock level planning per component
- **Procurement planning**: Purchase order generation voor bought-out parts

**Manufacturing execution:**
- **Work order generation**: Production orders met component picking lists
- **Kit preparation**: Material staging voor assembly operations
- **Quality planning**: [[controleplan|Control plan]] koppeling per BOM level
- **Change management**: [[engineering-change-order|ECO]] impact analysis across BOM levels

**Engineering vs Manufacturing BOM:**
- **[[engineering-bom|Engineering BOM (eBOM)]]**: Design-centric, functional grouping
- **Manufacturing BOM (mBOM)**: Production-centric, assembly sequence optimized
- **BOM transformation**: eBOM naar mBOM conversion voor manufacturing
- **Phantom assemblies**: Logical groupings die niet physical worden geassembleerd

## Gerelateerde begrippen

**Verwante termen:**
- [[engineering-bom|Engineering BOM (eBOM)]] - Design-oriented product structure
- [[stuklijst-bill-of-materials|Stuklijst (BOM)]] - General bill of materials concept
- [[material-requirements-planning|MRP]] - Planning systeem dat mBOM gebruikt
- [[productierouting|Productie routing]] - Work center sequences gekoppeld aan mBOM

**Verwante concepten:**
- [[product-lifecycle-management|PLM]] - Product data management including BOM evolution
- [[manufacturing-execution-system|MES]] - Shop floor execution using mBOM data
- [[enterprise-resource-planning|ERP]] - Integrated business system met mBOM als core data
- [[configure-price-quote|CPQ]] - Product configuration met dynamic BOM generation

## Bronnen

- APICS Supply Chain Operations Reference (SCOR) model
- SAP PP (Production Planning) - Manufacturing BOM functionality
- Oracle Manufacturing Cloud - BOM management best practices
- Siemens Teamcenter - PLM BOM transformation processes
- SOLIDWORKS PDM - Engineering to Manufacturing BOM workflows
- Autodesk Vault - BOM data management solutions
- PTC Windchill - Product lifecycle BOM management

---
← Terug naar [[kaarten/productstructuur-en-documentatie|Productstructuur & Documentatie kaart]]
