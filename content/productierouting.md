---
tags:
  - 'productstructuur-en-documentatie'
  - '🧹draft'

title: Productierouting (routing)
---
*Productierouting (routing)* is een begrip binnen de industriële digitalisering en productstructuur & documentatie.

## Definitie

**Productierouting (routing)** is een gestructureerd plan dat de exacte volgorde van bewerkingsstappen, werkplekken, gereedschappen en tijden specificeert die nodig zijn om een product te vervaardigen. Het definieert het pad dat een component doorloopt van grondstof tot eindproduct, inclusief alle productieactiviteiten en resources.

## Kenmerken

- **Operatie volgorde**: Sequentiële bewerkingsstappen in logische productievolgorde
- **Work center assignment**: Specifieke machines of werkplekken per operatie
- **Setup tijden**: Machine voorbereiding en tooling changeover durations
- **Run tijden**: Actual machining, welding of assembly time per piece
- **Tooling specificaties**: Required cutting tools, fixtures, measuring equipment
- **Proces parameters**: Cutting speeds, feeds, welding parameters, torque specs
- **Labor requirements**: Skill levels, certification requirements, manning levels
- **Quality checkpoints**: [[controleplan|Control plan]] integration met inspection points

## Toepassing

**Metaalbewerking routings:**
- **CNC machining**: Op10-Rough milling, Op20-Finish milling, Op30-Drilling, Op40-Inspection
- **Turning operations**: Op10-Face and turn OD, Op20-Turn ID, Op30-Thread, Op40-Final inspect
- **Grinding**: Op10-Rough grind, Op20-Finish grind, Op30-Superfinish, Op40-Final measurement
- **Heat treatment**: Op10-Load furnace, Op20-Heat to temp, Op30-Quench, Op40-Temper

**Assembly routings:**
- **Sub-assembly**: Component preparation, fitting, fastening, verification
- **Main assembly**: Sub-assembly integration, torquing, fluid filling, testing
- **Final assembly**: Cosmetic installation, labeling, packaging, shipping prep
- **Quality gates**: [[first-article-inspection|FAI]], in-process inspection, final test

**Welding routings:**
- **Preparation**: Material cutting, edge prep, fit-up, tack welding
- **Welding sequence**: Pass planning, [[welding-procedure-specification|WPS]] execution, inter-pass cleaning
- **Post-weld**: Heat treatment, [[non-destructive-testing|NDT]], dimensional inspection
- **Finishing**: Grinding, machining, surface treatment, final inspection

**[[material-requirements-planning|MRP]] integratie:**
- **Capacity planning**: Work center load calculation en resource requirements
- **Lead time calculation**: Total manufacturing time determination
- **Cost estimation**: Labor en machine hour costing per operation
- **Scheduling**: Operation timing en work center availability

**[[manufacturing-execution-system|MES]] executie:**
- **Work order generation**: Shop floor job packets met routing details
- **Real-time tracking**: Operation completion status en actual times
- **Exception handling**: Routing deviations en alternative paths
- **Performance measurement**: Actual vs standard time analysis

## Gerelateerde begrippen

**Verwante termen:**
- [[manufacturing-bom|Manufacturing BOM]] - Product structure gekoppeld aan routing operations
- [[werkinstructie|Werkinstructie]] - Detailed procedures voor routing operations
- [[controleplan|Control Plan]] - Quality checkpoints embedded in routing
- [[material-requirements-planning|MRP]] - Planning system using routing data

**Verwante concepten:**
- [[manufacturing-execution-system|MES]] - Shop floor execution using routing data
- [[advanced-planning-and-scheduling|APS]] - Detailed scheduling optimization
- [[lean-manufacturing|Lean]] - Waste elimination in routing optimization
- [[single-minute-exchange-of-die|SMED]] - Setup time reduction voor routing efficiency

## Bronnen

- SAP PP (Production Planning) - Routing functionality en work center integration
- Oracle Manufacturing Cloud - Routing management en execution
- EPICOR ERP - Manufacturing routing en capacity planning
- Siemens Teamcenter Manufacturing - PLM routing integration
- Infor M3 - Multi-site routing management
- Microsoft Dynamics 365 - Supply Chain routing functionality
- APICS Production Operations Management - Routing best practices

---
← Terug naar [[kaarten/productstructuur-en-documentatie|Productstructuur & Documentatie kaart]]
