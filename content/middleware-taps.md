---
tags:
  - data-analyse-en-business-intelligence
  - event-streaming-messaging-en-integratie
title: Middleware taps
---
# Middleware taps

## Definitie

**Middleware taps** zijn integratiepatronen waarbij data uit een ERP of ander bronsysteem niet direct uit de database of API wordt gehaald, maar via een tussenliggende laag (middleware) wordt afgevangen. De tap leest of abonneert zich op datastromen binnen de middleware en maakt die beschikbaar voor downstream systemen.

## Kenmerken

- **Indirect**: de tap heeft geen directe toegang tot het ERP, maar tot de middleware.
    
- **Afhankelijkheid**: de kwaliteit en volledigheid van de data hangt af van hoe de middleware is ingericht.
    
- **Complexiteit**: extra lagen verhogen latency en beheerlast.
    
- **Samenwerking vereist**: vaak zijn aparte teams verantwoordelijk voor de middleware.
    
- **Valideren tegen bron**: altijd checken of de middleware-data overeenkomt met de echte ERP-data.
    

## Toepassing

- Abonneren op berichtenstromen uit een ESB (Enterprise Service Bus) of iPaaS.
    
- Voeden van een [[canonical-schema|canonical schema]] zonder directe SQL- of API-toegang tot het ERP.
    
- Integreren met legacy-systemen waar directe toegang onmogelijk of ongewenst is.
    
- Tijdelijke oplossing bij migraties, wanneer directe bron-toegang nog niet beschikbaar is.
    

## Gerelateerde begrippen

- [[api-architectuur|API-architectuur]]
    
- [[batch-elt|Batch ELT]]
    
- [[cdc-change-data-capture|Change Data Capture (CDC)]]
    
- [[erp-integratiestrategie-uitgebreid|ERP-integratiestrategie]]
    

## Bronnen

- Hohpe, G., Woolf, B. _Enterprise Integration Patterns_.
    
- MuleSoft en Dell Boomi documentatie.
    
- Ervaringen uit middleware-gedreven integratieprojecten.
---
← Terug naar [[kaarten/data-analyse-en-business-intelligence|Data, Analyse & Business Intelligence kaart]]
