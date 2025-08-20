---
tags:
  - softwaredeployment-en-architectuur
title: API-pulls
---

## Definitie

**API-pulls** zijn een integratiepatroon waarbij data uit een bronsysteem wordt opgehaald via een beschikbare API (meestal REST of SOAP). De data wordt actief ‘gepulld’ door het vragende systeem, vaak met behulp van filters, paginatie en delta-parameters.

## Kenmerken

- **Vraaggestuurd**: de consument initieert de datastroom, niet de bron.
    
- **Flexibel**: filters, queryparameters en paginatie bepalen welke data opgehaald wordt.
    
- **Idempotentie belangrijk**: om dubbele records of inconsistente resultaten te vermijden.
    
- **Afhankelijk van API-rate limits**: beperkingen op aantal requests per tijdseenheid.
    
- **Latency**: afhankelijk van poll-frequentie en beschikbaarheid van de API.
    

## Toepassing

- Ophalen van stamdata uit ERP naar een [[canonical-schema|canonical schema]].
    
- Periodiek binnenhalen van transactiedata (bijv. orders, voorraadstanden) via REST of SOAP.
    
- Aanvullen van [[batch-elt|Batch ELT]]-processen met API-pulls voor incrementele updates.
    
- Publiceren van ERP-data naar [[unified-namespace|UNS]] door periodieke API-polls.
    

## Gerelateerde begrippen

- [[cdc-change-data-capture|Change Data Capture (CDC)]]
    
- [[batch-elt|Batch ELT]]
    
- [[canonical-schema|Canonical schema]]
    
- [[api-architectuur|API-architectuur]]
    

## Bronnen

- OpenAPI Specification (Swagger).
    
- OASIS standaard voor SOAP.
    
- Industrie-ervaringen met ERP-integraties via API’s.

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]