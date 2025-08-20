---
tags:
  - data-analyse-en-business-intelligence
title: CDC (Change Data Capture)
---

## Definitie

**Change Data Capture (CDC)** is een integratiepatroon waarmee wijzigingen in een databron (inserts, updates, deletes) in bijna real-time worden vastgelegd en beschikbaar worden gemaakt voor verwerking in downstream systemen zoals [[unified-namespace|UNS]], data lakes of analytics-platformen.

## Kenmerken

- **Real-time of near real-time**: legt wijzigingen vast zodra ze plaatsvinden.
    
- **Incrementeler dan batch**: alleen veranderingen worden doorgegeven, geen volledige datasets.
    
- **Meerdere technieken**: log-based (bijv. binlog), timestamp-delta of trigger-based.
    
- **Efficiëntie**: verlaagt de belasting op systemen door alleen mutaties te verwerken.
    
- **Integriteit**: behoudt de volledige historiek van wijzigingen indien gewenst.
    

## Toepassing

- Synchroniseren van ERP-transacties naar een [[canonical-schema|canonical schema]] of datawarehouse.
    
- Event-gedreven publicatie naar [[unified-namespace|UNS]] voor productie- en onderhoudssystemen.
    
- Het voeden van near real-time dashboards en KPI-monitoring.
    
- Ondersteunen van auditability en historische analyses door wijzigingen expliciet vast te leggen.
    

## Gerelateerde begrippen

- [[batch-elt|Batch ELT]]
    
- [[canonical-schema|Canonical schema]]
    
- [[erp-integratiestrategie-uitgebreid|ERP-integratiestrategie]]
    
- [[database-schema-design|Database schema design]]
    

## Bronnen

- Microsoft Docs: _Change Data Capture (SQL Server)_.
    
- Debezium.io documentatie (open source CDC-platform).
    
- Ervaringen uit integratieprojecten in de industrie.