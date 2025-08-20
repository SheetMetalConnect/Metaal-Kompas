---
tags:
  - 'data-analyse-en-business-intelligence'
  - '🧹draft'

title: Extract‑Transform‑Load (ETL)
---
*Extract‑Transform‑Load (ETL)* is een begrip binnen de industriële digitalisering en data, analyse & business intelligence.


## Definitie

**(Batch) ELT (Extract, Load, Transform)** is een integratiepatroon waarbij gegevens periodiek in grote hoeveelheden uit bronsystemen worden geëxtraheerd, vervolgens onbewerkt in een doelsysteem of staging-omgeving worden geladen, en daarna pas worden getransformeerd naar de gewenste structuur of het [[canonical-schema|canonical schema]].

## Kenmerken

- **Periodiek**: uitgevoerd volgens een schema (bijv. elk uur, dagelijks, wekelijks).
    
- **Volledig of incrementeel**: kan een hele dataset verplaatsen of alleen wijzigingen sinds de laatste run.
    
- **Scheiding van stappen**: extractie, laden en transformatie zijn gescheiden fases.
    
- **Schaalbaar**: geschikt voor grote hoeveelheden data.
    
- **Robuustheid**: foutafhandeling kan centraal in de pipeline geregeld worden.
    

## Toepassing

- Integratie van [[enterprise-resource-planning|ERP]]-data naar een datawarehouse of analyticsplatform.
    
- Periodiek synchroniseren van stamdata en transacties met een [[unified-namespace|UNS]].
    
- Het opbouwen van een historische dataset voor trendanalyse en rapportage.
    
- Voorbereiding van data voor business intelligence (BI) dashboards.
    

## Gerelateerde begrippen

- [[canonical-schema|Canonical schema]]
    
- [[database-schema-design|Database schema design]]
    
- [[etl|ETL]]
    
- [[erp-integratiestrategie-uitgebreid|ERP-integratiestrategie]]
    

## Bronnen

- Kimball, R. _The Data Warehouse Toolkit_.
    
- Inmon, W. H. _Building the Data Warehouse_.
    
- Ervaringen en best practices uit de maakindustrie.
---
← Terug naar [[kaarten/data-analyse-en-business-intelligence|Data, Analyse & Business Intelligence kaart]]
