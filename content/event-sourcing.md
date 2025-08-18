---
tags:
  - 'event-streaming-messaging-en-integratie'
  - '🧹draft'

title: Event sourcing
---
*Event sourcing* is een begrip binnen de industriële digitalisering en event streaming, messaging & integratie.

## Definitie

**Event sourcing** is een architectuurpatroon waarbij de staat van een applicatie wordt bepaald door een reeks onveranderlijke gebeurtenissen (events) in plaats van het direct opslaan van de huidige toestand. Alle wijzigingen worden vastgelegd als events in een event store, en de huidige staat wordt afgeleid door het afspelen van deze gebeurtenissen. Dit biedt een complete audittrail en maakt het mogelijk om de geschiedenis van het systeem te reconstrueren op elk gewenst moment in de tijd.

## Kenmerken

- **Immutable events**: Gebeurtenissen worden nooit gewijzigd of verwijderd na opslag
- **Complete audittrail**: Elke wijziging is traceerbaar met tijdstempel en context
- **State reconstruction**: Huidige staat kan opnieuw worden opgebouwd door events af te spelen
- **Time travel**: Mogelijkheid om de staat op elk moment in de tijd te bekijken
- **Event versioning**: Schema evolutie met backward compatibility
- **Replay capability**: Events kunnen opnieuw afgespeeld worden voor testing of recovery
- **Multiple views**: Verschillende projecties kunnen uit dezelfde event stream gebouwd worden
- **Distributed systems**: Natuurlijke fit voor [[event-gedreven-architectuur|event-driven architecturen]]

## Toepassing

**Industriële traceerbaarheid:**
- **Productiegeschiedenis**: Complete tracking van [[batchnummer|batches]] door productieproces
- **Kwaliteitsaudit**: Reconstructie van alle kwaliteitsmetingen en beslissingen
- **Materiaaltracering**: [[heat-number|Heat numbers]] en grondmateriaal gebruik door tijd
- **Procesoptimalisatie**: Analyseren van historische procesparameters en uitkomsten

**Manufacturing execution:**
- **Work order historie**: Complete levenscyclus van productieorders
- **Machine events**: Alle status wijzigingen, settings en performance data
- **Maintenance records**: Volledige onderhoudsgeschiedenis per asset
- **[[overall-equipment-effectiveness|OEE]] berekening**: Historische data voor trend analyse

**Compliance en documentatie:**
- **[[iso-9001-kwaliteitsmanagement|ISO 9001]] compliance**: Onweerlegbare documentatie van processen
- **Regulatory reporting**: Complete audit trail voor inspectors
- **Change management**: Tracking van alle proces- en parameterwijzigingen
- **Root cause analysis**: [[root-cause-analysis|Terugwerken]] door gebeurtenissen naar oorzaken

**Integration met UNS:**
- **[[unified-namespace|Unified Namespace]]** als event distribution mechanism
- **[[apache-kafka|Apache Kafka]]** als schaalbare event store
- **Multiple projections**: Verschillende views voor MES, ERP, en analytics
- **Real-time updates**: Immediate state changes via event streams

## Gerelateerde begrippen

- [[event-gedreven-architectuur|Event-gedreven architectuur]] - Architectuurstijl die event sourcing ondersteunt
- [[apache-kafka|Apache Kafka]] - Platform voor gedistribueerde event storage
- [[unified-namespace|Unified Namespace]] - Event distribution voor industriële toepassingen
- [[historian-database|Historian Database]] - Traditionele time-series opslag vs. event sourcing
- [[traceerbaarheidssysteem|Traceerbaarheidssysteem]] - Implementatie via event sourcing patterns
- [[auditmanagement|Auditmanagement]] - Compliance ondersteuning door complete audit trails
- [[data-herkomst|Data herkomst (data lineage)]] - Tracking van data transformaties via events
- [[command-query-responsibility-segregation|CQRS]] - Complementair patroon voor read/write separation

## Bronnen

- Greg Young - Event Sourcing pattern documentation
- Martin Fowler - Event Sourcing articles en presentations
- Axon Framework - Event sourcing for Java applications
- EventStore - Purpose-built database for event sourcing
- Apache Kafka - Event streaming platform documentation
- Microsoft Event Sourcing pattern guidance
- Domain-Driven Design - Eric Evans foundational work

---
← Terug naar [[kaarten/event-streaming-messaging-en-integratie|Event streaming, messaging & integratie kaart]]
