---
tags:
  - 'industriële-communicatieprotocollen'
  - '🧹draft'

title: OPC en Gerelateerde Technologieën
---
## Sleutelbegrippen en Definities

### OLE (Object Linking and Embedding)

Een Microsoft-technologie uit de vroege jaren 90 die het mogelijk maakte om data en functionaliteit tussen applicaties te delen.

### COM (Component Object Model)

Microsoft's raamwerk voor inter-procescommunicatie, de basis voor OLE.

### DCOM (Distributed COM)

Een uitbreiding van COM voor netwerkgebaseerde componentinteractie, gebruikt in OPC Classic en nu als verouderd beschouwd.

### OPC (OLE for Process Control)

Een aanpassing van OLE-technologie voor industriële automatisering, met als doel een standaard te creëren voor hardware- en software-interoperabiliteit.

## Historische Context

1.  **Begin jaren 90:** Microsoft introduceert OLE.
2.  **Midden jaren 90:** Oprichting van de OPC Foundation.
3.  **Eind jaren 90:** Ontwikkeling van OPC Classic (gebaseerd op COM/DCOM).
4.  **Jaren 2000:** Ontwikkeling van [[open-platform-communications-unified-architecture|OPC UA (Unified Architecture)]].

## OPC-versies

### OPC Classic

-   Gebaseerd op Microsoft's COM/DCOM.
-   Beperkt tot Windows-platforms.
-   Omvat specificaties zoals DA (Data Access) en A&E (Alarms & Events).

### OPC UA (Unified Architecture)

-   Platformonafhankelijk.
-   Geïntroduceerd om de beperkingen van OPC Classic aan te pakken.
-   Heeft tot doel de verschillende OPC-specificaties te verenigen.

## Veelvoorkomende Toepassing in de Productie

1.  Meerdere PLC's op de werkvloer (bijv. Beckhoff, Allen Bradley, Siemens).
2.  Een OPC-server (bijv. KEPServerEX) maakt verbinding met PLC's via native protocollen.
3.  De OPC-server stelt data beschikbaar via de OPC UA-standaard.
4.  OPC-clients hebben via één interface toegang tot data van meerdere PLC's.

## Kritiek op OPC UA voor IIoT

Volgens Walker Reynolds (4.0 Solutions) heeft OPC UA enkele nadelen:

1.  **Technische schuld:** Overgeërfd van de klassieke standaard.
2.  **Bedrijfsbelangen:** Grote bedrijven beïnvloeden de standaard in hun voordeel.
3.  **Bureaucratie:** De OPC Foundation is een logge organisatie.

## Gerelateerde begrippen

- [[ole-object-linking-and-embedding|OLE (Object Linking and Embedding)]]
- [[open-platform-communications-unified-architecture|OPC UA]]

---
← Terug naar [[kaarten/industriële-communicatieprotocollen|Industriële communicatieprotocollen kaart]]
