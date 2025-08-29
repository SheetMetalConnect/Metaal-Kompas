---
tags:
  - 'softwaremodules-en-integratie'
  - '🧹draft'

title: Material Requirements Planning (MRP)
---
*Material Requirements Planning (MRP)* is een begrip binnen de industriële digitalisering en softwaremodules & integratie.

## Definitie

**Material Requirements Planning (MRP)** is een informatiesysteem dat de materiaalbehoeften berekent op basis van productieplannen, [[stuklijst-bill-of-materials|stuklijsten]] en voorraadniveaus. Het systeem bepaalt wanneer en hoeveel van elk materiaal moet worden besteld of geproduceerd om aan de vraag te voldoen zonder overbodige voorraad aan te houden.

## Kenmerken

- **Time-phased planning**: Berekening van materiaalbehoeften per tijdsperiode
- **[[stuklijst-bill-of-materials|BOM]] explosie**: Automatische breakdown van eindproducten naar componenten
- **Voorraad integratie**: Real-time koppeling met warehouse management systemen
- **Lead time management**: Leverancier doorlooptijden en productietijden integratie
- **Lot sizing**: Optimale bestelhoeveelheden en productie batch groottes
- **Safety stock**: Buffer voorraad berekening voor demand variabiliteit
- **Master production schedule**: Koppeling met hoofdproductieplanning
- **Exception reporting**: Alerts voor planning problemen en shortages

## Toepassing

**Metaalbewerking materiaalplanning:**
- **Ruw materiaal**: Steel plates, bars, tubes, sheet metal planning
- **Semi-finished goods**: Machined blanks, castings, forgings requirements
- **Standard components**: Fasteners, bearings, seals, gaskets procurement
- **Consumables**: Cutting tools, welding materials, coolants, abrasives

**Productiestructuur planning:**
- **Multi-level [[manufacturing-bom|manufacturing BOM]]**: Complex assembly structure breakdown
- **Make-vs-buy decisions**: Internal production versus supplier sourcing
- **[[productierouting|Production routing]]**: Work center capacity en timing integration
- **Component substitution**: Alternative materials en supplier flexibility

**MRP berekening proces:**
- **Gross requirements**: Total demand van alle bronnen (sales orders, forecasts)
- **Net requirements**: Gross demand minus on-hand inventory en scheduled receipts
- **Planned orders**: Generated purchase en production orders met timing
- **Capacity validation**: Work center load verification en resource planning

**[[enterprise-resource-planning|ERP]] systeem integratie:**
- **Sales order processing**: Customer demand direct naar MRP calculation
- **Purchase management**: Automatic PO generation en supplier communication
- **Production scheduling**: [[advanced-planning-and-scheduling|APS]] koppeling voor detailed scheduling
- **Financial integration**: Cost calculation en budget impact analysis

**Advanced MRP functies:**
- **What-if analysis**: Scenario planning voor demand changes
- **Pegging analysis**: Traceability van demand naar supply orders
- **Multi-plant planning**: Integrated planning across multiple facilities
- **Supplier collaboration**: Vendor managed inventory en consignment integration

## Gerelateerde begrippen

**Verwante termen:**
- [[advanced-planning-and-scheduling|Advanced Planning & Scheduling (APS)]] - Uitgebreide planning en scheduling optimalisatie
- [[manufacturing-bom|Manufacturing BOM]] - Productiestructuur voor MRP calculations
- [[enterprise-resource-planning|ERP]] - Integrated business system waarin MRP onderdeel is
- [[supply-chain-management|Supply Chain Management]] - Bredere supply chain optimization

**Verwante concepten:**
- [[just-in-time-productie|Just-in-Time]] - Lean manufacturing approach voor inventory reduction
- [[kanban|Kanban]] - Pull-based material flow system
- [[manufacturing-execution-system|MES]] - Shop floor execution system integration
- [[warehouse-management-system|WMS]] - Inventory management system koppeling

## Bronnen

- APICS Supply Chain Operations Reference (SCOR) model
- MRP crusade door Oliver Wight International
- SAP MM (Materials Management) module documentation  
- Oracle Manufacturing Cloud - MRP implementation guides
- Microsoft Dynamics 365 Supply Chain Management
- Infor M3 - Multi-site manufacturing planning
- EPICOR ERP - Manufacturing resource planning features

---
← Terug naar [[kaarten/softwaremodules-en-integratie|Softwaremodules & Integratie kaart]]
