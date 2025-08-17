---
title: Single Source of Truth (SSOT)
tags: [industrie, digitalisering, softwaredeployment-en-architectuur, data-governance]
---



*Single Source of Truth (SSOT)* is een fundamenteel architectuurprincipe waarbij elke data-element één autoritatieve, betrouwbare bron heeft binnen een organisatie.

## Definitie

Single Source of Truth betekent dat voor elk gegeven, elke metric of elk data-element er precies één definitieve, autoritatieve bron bestaat. Alle andere systemen en processen verwijzen naar of synchroniseren met deze primaire bron in plaats van eigen kopieën te onderhouden.

## Kenmerken

- **Unieke autoritatieve bron** voor elk data-element
- **Eliminatie van data-duplicatie** en inconsistenties
- **Gecentraliseerde data-governance** en kwaliteitscontrole
- **Traceerbare data-herkomst** (data lineage)
- **Geautomatiseerde distributie** naar consumerende systemen
- **Consistente definities** en semantiek

## Implementatie in UNS

Binnen een [[unified-namespace|Unified Namespace]] wordt SSOT gerealiseerd door:

1. **Designated Publishers**: Elk topic heeft één aangewezen publisher
2. **Canonical Data Models**: Gestandaardiseerde datastructuren
3. **Master Data Management**: Centrale beheer van referentiedata
4. **Event Sourcing**: Wijzigingen als opeenvolgende events
5. **Data Validation**: Kwaliteitscontroles bij de bron

## Toepassing

SSOT wordt toegepast voor:
- **Master data** (klanten, producten, locaties)
- **Operationele metrics** (OEE, kwaliteitsdata, productie-output)
- **Configuratiedata** (recepten, parameters, instellingen)
- **Traceabiliteitsdata** (batch numbers, serial numbers)

## Voordelen

- **Eliminatie van data-inconsistenties**
- **Verhoogde data-kwaliteit** en betrouwbaarheid
- **Vereenvoudigde integraties** en onderhoud
- **Snellere probleemoplossing** door heldere eigenaarschap
- **Compliance** met data-governance eisen

## Uitdagingen

- **Performance** bij hoge volumes
- **Beschikbaarheid** van de centrale bron
- **Change management** bij migratie naar SSOT
- **Data ownership** en verantwoordelijkheden

## Gerelateerde begrippen

- [[unified-namespace|Unified Namespace (UNS)]]
- [[master-data-management|Master Data Management (MDM)]]
- [[datagovernance|Datagovernance]]
- [[data-herkomst|Data-herkomst (data lineage)]]
- [[event-sourcing|Event sourcing]]
- [[data-kwaliteitsbeheer|Data-kwaliteitsbeheer]]

## Bronnen

- Data Management Body of Knowledge (DMBOK)
- ISO 8000 Data Quality Standards
- Enterprise Data Architecture principles

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]