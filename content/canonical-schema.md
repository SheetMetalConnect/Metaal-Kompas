---
tags:
  - data-analyse-en-business-intelligence
  - live
title: Canonical schema
---
## Definitie

Een **canonical schema** is een gestandaardiseerde, centrale representatie van data die wordt gebruikt als tussenlaag bij systeemintegraties. Het canonical schema fungeert als gemeenschappelijke taal: in plaats van dat elk systeem direct vertaald moet worden naar ieder ander systeem, worden alle datastromen eerst naar dit uniforme schema gemapt. Dit maakt integraties overzichtelijker, consistenter en makkelijker te beheren.

---

## Kenmerken

- **Gestandaardiseerd**: één uniforme representatie voor meerdere bronsystemen.
    
- **Onafhankelijkheid**: ontkoppelt bronsystemen van doelsystemen.
    
- **Herbruikbaar**: mappings kunnen meerdere keren gebruikt worden.
    
- **Transparant**: expliciet maakt welke entiteiten, attributen en relaties centraal staan.
    
- **Stabiel**: verandert minder vaak dan individuele bronsystemen of applicaties.
    
- **Uitbreidbaar**: kan meegroeien met nieuwe systemen of datadomeinen.
    

---

## Toepassing

- Als tussenlaag voor [[erp-integratiestrategie-uitgebreid|ERP-integratiestrategie]].
    
- Publiceren van ERP-data naar een [[unified-namespace|UNS]].
    
- Koppelen van legacy-systemen en moderne applicaties via een uniforme datastructuur.
    
- Onderdeel van [[database-schema-design|database schema design]] voor integratieplatforms.
    
- Basis voor [[batch-elt|Batch ELT]], [[cdc-change-data-capture|CDC]] en [[api-pulls|API-pulls]].
    

---

## Uitleg en voorbeelden

### Waarom een canonical schema?

Zonder canonical schema moet elk systeem rechtstreeks op elk ander systeem worden aangesloten. Dit betekent dat voor _n_ systemen er mappings nodig zijn. Dit is niet schaalbaar.

Met een canonical schema heeft elk systeem slechts **één mapping**: van/naar het canonical model. Dit maakt het beheer drastisch eenvoudiger.

> [!tip] Minder spaghetti Canonical schema’s voorkomen een web van punt-tot-punt koppelingen en vervangen dit door een hub-and-spoke model.

### Voorbeelden

- **ERP ↔ MES ↔ UNS**: In plaats van dat ERP en MES elkaars datamodellen volledig moeten begrijpen, publiceren beide naar een canonical schema. Vanuit daar kan de UNS gevoed worden.
    
- **Legacy CRM koppelen**: Een oud CRM-systeem gebruikt eigen codes en tabellen. Door dit te mappen naar het canonical schema worden de gegevens bruikbaar voor nieuwe BI-tools.
    
- **Stamdata management**: Een canonical schema maakt duidelijk hoe entiteiten als _klant_, _product_, of _asset_ in de hele organisatie uniform gedefinieerd zijn.
    

### Nadere uitleg

- **Expliciete bedrijfsregels**: In ERP zijn veel regels impliciet (bijv. validaties op productcodes). In een canonical schema worden deze expliciet vastgelegd.
    
- **Flexibiliteit**: Nieuwe systemen kunnen eenvoudig aangesloten worden door alleen een mapping naar het canonical schema toe te voegen.
    
- **Validatiepunt**: Het canonical schema fungeert als checkpoint voor datakwaliteit. Alleen data die voldoet aan de regels komt door.
    

---

## Waarom belangrijk?

- **Schaalbaarheid**: zonder canonical schema groeit complexiteit exponentieel bij elk nieuw systeem.
    
- **Consistentie**: voorkomt dat dezelfde entiteit in elk systeem anders gedefinieerd wordt.
    
- **Beheersbaarheid**: maakt integraties traceerbaar en documenteerbaar.
    
- **Strategisch voordeel**: legt de basis voor real-time analytics, [[digitale-transformatie|digitale transformatie]] en robuuste UNS-architecturen.
    

> [!warning] Zonder canonical schema Organisaties lopen vast in een kluwen van maatwerkinterfaces en inconsistente definities, waardoor elke wijziging kostbaar en risicovol wordt.

---

## Gerelateerde begrippen

- [[erp-integratiestrategie|ERP-integratiestrategie]]
    
- [[unified-namespace|Unified Namespace (UNS)]]
    
- [[api-architectuur|API-architectuur]]
    
- [[database-schema-design|Database schema design]]
    
- [[middleware-integratie|Middleware integratie]]
    
- [[batch-elt|Batch ELT]]
    
- [[cdc-change-data-capture|Change Data Capture (CDC)]]
    
- [[api-pulls|API-pulls]]
    
- [[middleware-taps|Middleware taps]]
    

---

## Bronnen

- Hohpe, G., Woolf, B. _Enterprise Integration Patterns_.
    
- Reynolds, W. (Inductive Automation) – Integratie en UNS-aanpak.
    
- Praktijkervaringen uit ERP- en MES-integraties in de industrie.