---
tags:
  - 'digitale-transformatie-en-industrie-40-50'
  - '🧹draft'

title: Enterprise Resource Planning (ERP)
---
_Enterprise resource planning (ERP)_ is een begrip binnen de bedrijfssoftware en enterprise systemen die alle kernbedrijfsprocessen integreert en fungeert als de centrale informatiebron voor planning en administratie. Voor metaalbewerkingsbedrijven vormt ERP de basis voor bedrijfsprocessen, maar heeft het beperkingen bij real-time productiebesturing.

## Definitie

Enterprise resource planning (ERP) is een suite van geïntegreerde softwareoplossingen gebouwd rondom een **enkel datamodel**, ontworpen om alle kernbedrijfsprocessen te beheren en te coördineren. Het ERP-systeem organiseert een bedrijf door alle assets (menselijk, financieel, fysiek), kosten, producten en productieprocessen in één samenhangend systeem te verenigen.

> [!info] Modulaire opbouw Een ERP-programma bestaat meestal uit kleine deelprogramma's (modules) die allemaal een specifieke taak ondersteunen, zoals computerprogramma's voor financiële administratie of voorraadbeheer.

### Kernprincipe van ERP

Het kernprincipe van ERP is dat het een **bedrijfsmanagementoplossing** is gericht op het management met een hoog niveau overzicht. ERP is de hub van de business voor Executive Leadership en hun teams. Het organiseert een bedrijf door antwoord te geven op vragen zoals:

- Welke [[asset-inventaris|assets]] heeft het bedrijf?
- Waar zitten de kosten?
- Wat verkopen we?
- Hoe bouwen we wat we verkopen?
- Wat hebben we in voorraad?

Voor metaalbewerking betekent dit: orders beheren, materiaal plannen, maar niet real-time productiebesturing.

> [!tip] Eenmalige data-invoer Een belangrijk gevolg van een ERP-systeem is dat gegevens van bijvoorbeeld klanten en producten slechts **eenmaal ingevoerd** hoeven te worden, omdat een enkele database wordt gehanteerd.

## Geschiedenis en ontwikkeling

### Vroege ontwikkeling (1960s-1970s)

De oorsprong van het ERP-systeem kan gesitueerd worden in de **jaren 1960**, toen bij veel ondernemingen de behoefte ontstond aan systemen om voorraad bij te houden. Vanaf de **jaren 1970** leidde dit tot de ontwikkeling van **Material Requirements Planning (MRP)** systemen.

### MRP II evolutie (1980s)

Begin van de **jaren 1980** evolueerde MRP tot **MRP II (Manufacturing Resource Planning)** waarbij primaire functies werden geïntegreerd met andere bedrijfsfuncties.

### ERP I - Enterprise systemen (1990s)

De eerste generatie **ERP I** werd geïntroduceerd door **The Gartner Group** in het begin van de jaren 1990.

**Kenmerken:**

- **Grote enterprise focus** - MKB kon nauwelijks bij deze systemen
- **Hoge kosten** - Miljoenen aan licenties en implementatie
- **Voorbeelden**: SAP R/3, Oracle, PeopleSoft

### ERP II - Industriële ERP (2000s)

In de **jaren 2000** ontstonden de eerste echte ERP-systemen specifiek voor de industrie en het MKB.

**Kenmerken:**

- **Centralisatie in databases** - Vooral SQL Server als centrale datahub
- **Fat clients** - Windows clients met lokale verwerking
- **Industrie-specifiek** - Speciaal ontwikkeld voor productiesectoren
- **MKB toegankelijk** - Betaalbare licenties en implementaties
- **Voorbeelden**: Bemet/PDC, MKG, Ridder R8

> [!note] Technische architectuur ERP II De meeste ERP II software tussen 2000-2010 werd vooral gebouwd op **.NET en Windows** platformen met **SQL Server of PostgreSQL** databases. De kern was **centralisatie in databases** met fat clients die lokaal verwerkten.

### ERP III - Web-based ERP (2015+)

Sinds **2015** kwam web-based ERP op als nieuwe generatie.

**Kenmerken:**

- **Volledig web-gebaseerd** - Browser-gebaseerde toegang
- **Cloud hosting** - SaaS-modellen worden mainstream
- **Voorbeelden**: Microsoft Business Central, Odoo, NetSuite

### ERP IV - Cloud native + AI (2020+)

De nieuwste generatie **ERP IV** met AI-integratie.

**Kenmerken:**

- **Cloud native architectuur** - Gebouwd voor de cloud vanaf de grond
- **AI-integratie** - Machine learning en automatische insights
- **Volledig flexibel** - Zelf aanpasbaar zonder programmeerkennis

## ERP typen en toepassingsgebieden

### Kleine bedrijven ERP

**Kenmerken:**

- Generiek ontwerp voor brede toepasbaarheid
- Snelle implementatie met standaard configuraties
- Beperkte maatwerkmogelijkheden

**Voorbeelden:** Zoho, QuickBooks, Exact Online

### Branche-specifieke ERP (Vertical ERP)

**Kenmerken:**

- Industrie- of processpecifiek ontworpen
- Gespecialiseerde functionaliteiten voor specifieke sectoren

**Voorbeelden:** Ridder iQ (metaal), MKG (metaal)

### Enterprise ERP (Generalistische ERP)

**Kenmerken:**

- Industrie-agnostisch platform
- Zeer aanpasbaar en configureerbaar
- Uitgebreide functionaliteit voor complexe organisaties

**Voorbeelden:** SAP, Epicor, Oracle, Infor LN, Microsoft Dynamics

### Open source ERP

**Kenmerken:**

- Toegang tot broncode voor aanpassingen
- Broncode gratis beschikbaar, maar hosting en support kunnen betaald zijn

**Voorbeelden:** Odoo (Community vs Enterprise editie), ERPNext, Carbon

> [!warning] Kostenverwachting Hoewel de broncode gratis is, zijn er vaak betaalde hosted versies en premium ondersteuning beschikbaar.

### Best of breed vs all-in-one benadering

Traditioneel promoten ERP-leveranciers een **all-in-one benadering** waarbij ERP het centrale systeem is waar alle andere applicaties omheen gebouwd worden. Deze benadering belooft eenvoud maar leidt vaak tot vendor lock-in en beperkte flexibiliteit.

Een alternatieve benadering is **best of breed**, waarbij verschillende gespecialiseerde systemen voor specifieke functies worden gekozen en geïntegreerd via moderne architecturen zoals [[unified-namespace|Unified Namespace]].

## Kern ERP functionaliteiten

### Boekhouding & financiën

- **Grootboek (General Ledger)** - Centrale boekhouding en financiële rapportage
- **Crediteuren/Debiteuren** - Leveranciers- en klantenbeheer
- **Kostenbeheersing** - Tracking van operationele en productiekosten

### Stamgegevensbeheer (Master Data Management)

- **Rekeningschema** - Rekeningschema en financiële structuur
- **Activabeheer** - Beheer van bedrijfsmiddelen en inventaris
- **Leveranciersbeheer** - Leveranciers- en inkoopgegevens

### Toeleveringsketen management

- **Voorraadbeheer** - Voorraadbeheersing en -planning
- **Leveranciersrelaties** - Leveranciersrelaties en contractbeheer
- **Aanvulling** - Automatische aanvulling en inkoop

### Productieprocessen

- **Stuklijst (Bill of Materials)** - Stuklijstbeheer en productstructuren
- **Werkorders** - Productieorder planning en uitvoering via MRP-modules
- **Bewerkingen** - Definitie van productiestappen en routings
- **Productiebonnen** - Materiaaluitgifte en arbeidsregistratie
- **Productieplanning** - Capaciteits- en productieplanning via MRP/MRP II

> [!note] ERP productie mogelijkheden vs beperkingen ERP-systemen **kunnen** wel productieprocessen ondersteunen via MRP-modules, inclusief stuklijsten, productieorders, bewerkingen en bonnen. Dit wordt veel gebruikt in de metaalindustrie. **Echter**, ERP is vaak **niet flexibel genoeg** voor complexe productieomgevingen en kan leiden tot **hoge kosten** door aanpassingen. Alternatieven zijn eigen [[manufacturing-execution-system|MES]] of [[unified-namespace|UNS]] voor meer flexibiliteit.

### Rapportage & analytics

- **Operationele rapportage** - Dagelijkse operationele rapportages
- **Financiële rapportage** - Financiële verslaglegging en compliance
- **Prestatie dashboards** - KPI monitoring en bedrijfsinformatie

## ERP beperkingen voor productieomgevingen

### Waarom ERP alleen niet genoeg is

#### De groeiende kloof tussen planning en realiteit

Naarmate metaalbedrijven groeien, ontstaat er een kloof tussen ERP-planning en werkvloer-realiteit:

- **Orders in ERP** - Netjes georganiseerd volgens planning
- **Realiteit werkvloer** - Spoedorders, machinestilstanden, onvoorziene vertragingen
- **Gevolg** - ERP-gegevens komen steeds verder af te staan van werkelijke situatie

#### ERP beperkingen voor metaalbewerking

- **Geen real-time feedback** - Wat gebeurt er nu op de werkvloer?
- **Beperkte machine-integratie** - Geen directe verbinding met CNC-machines, lasapparatuur
- **Geen flexibele planning** - Moeilijk inspelen op dagelijkse veranderingen
- **Beperkte kwaliteitscontrole** - Geen real-time kwaliteitsdata van productieprocessen
- **Complexe KPI-berekeningen** - [[overall-equipment-effectiveness|Overall Equipment Effectiveness (OEE)]] calculeren via ERP is enorm complex en kostbaar, terwijl dit met goede productie MES-data eenvoudig is

### ERP shopfloor control modules

Veel ERP-leveranciers bieden shopfloor control modules:

#### Voordelen

- **Vertrouwde omgeving** - Bouwt voort op bestaand systeem
- **Directe integratie** - Naadloze koppeling met ERP-data
- **Kosteneffectief** - Geen nieuw systeem nodig

#### Beperkingen

- **Beperkte real-time mogelijkheden** - ERP is gebouwd voor transacties, niet voor real-time events
- **Weinig machine-connectiviteit** - Moeilijk te koppelen aan diverse machines
- **Beperkte flexibiliteit** - Geen snelle aanpassing aan veranderende omstandigheden

## ERP in digitale transformatie context

### De strategische rol van ERP

> [!note] ERP als business context ERP is cruciaal voor digitalisering omdat het de **structuur van het bedrijf** en de details van bedrijfsactiviteiten bevat. Het bevat de financiële cijfers - kosten en omzet - die nodig zijn om winst te berekenen, wat belangrijke context biedt voor optimale beslissingen. ML en AI hebben deze informatie nodig.

### ERP + MES: de perfecte combinatie

Voor metaalbewerkingsbedrijven is de ideale situatie:

- **ERP** - Beheert orders, planning, financiën, inkoop
- **[[manufacturing-execution-system|MES]]** - Regelt real-time productiebesturing
- **Samenwerking** - ERP geeft orders door aan MES, MES geeft feedback terug aan ERP

#### Moderne integratie via datahub

Traditioneel werden ERP-MES koppelingen **point-to-point** gerealiseerd, wat leidde tot complexe en onderhoudsgevoelige verbindingen. Steeds vaker zie je dat deze koppelingen niet meer rechtstreeks zijn, maar via een **datahub** of **[[unified-namespace|Unified Namespace]]** lopen.

**Voordelen van hub-gebaseerde integratie:**

- **Ontkoppeling** - Systemen hoeven elkaar niet direct te kennen
- **Schaalbaarheid** - Nieuwe systemen kunnen eenvoudig toegevoegd worden
- **Flexibiliteit** - Dataformaten en protocols kunnen per systeem verschillen
- **Betrouwbaarheid** - Minder complexe point-to-point verbindingen

### Twee belangrijkste informatietypen in ERP

#### Bedrijfsstructuur en resources

- **Wat maken we** - Productcatalogus, stuklijsten, specificaties
- **Voor wie maken we het** - Klanten, orders, contracten
- **Met welke werkplekken** - Productiefaciliteiten, machines, werkstations
- **Met welke mensen** - Personeelsgegevens, vaardigheden, kostenplaatsen
- **Welke specificaties** - Kwaliteitseisen, procedures, recepten

#### Financiële en operationele details

- **Financiële informatie** - Kosten, prijzen, marges, budgetten (**ERP draait om GELD**)
- **Het wat** - Welke producten maken we en tegen welke kosten
- **Het waarom** - Orders, klantvereisten, winstgevendheid
- **Het hoe** - Processen, doorlooptijden, kostprijsberekeningen
- **Winstgevendheid** - Per product, klant, order en kostenplaats

## ERP integratie met Unified Namespace

### Traditionele ERP integratie

```
Operational Systems
       │ (Point-to-point)
       ▼
   ERP System
       │ (Batch/Scheduled)
       ▼
   Reporting Layer
```

### Moderne UNS-gebaseerde integratie voor metaalbewerking

```
        Unified Namespace (MQTT)
              │
    ┌─────────┼─────────┐
    │         │         │
   MES       ERP      SCADA
    │         │         │
    └─── Event Flow ────┘

ERP: Orders, BOM, Kosten
MES: Real-time productie, OEE, Kwaliteit  
SCADA: Machine control, Sensoren
```

> [!tip] Event-gedreven integratie Deze integratie via [[unified-namespace|Unified Namespace]] maakt real-time event-gedreven communicatie mogelijk tussen ERP en productiesystemen, terwijl elk systeem zijn kernfunctionaliteiten behoudt.

### ERP als systeemnode

De traditionele benadering van ERP-leveranciers stelt ERP voor als het **centrale systeem** waar alle andere applicaties omheen gebouwd worden. Deze "ERP-als-centrum" filosofie staat echter steeds meer onder druk door de opkomst van **best of breed** oplossingen.

**ERP als systeemnode** beschrijft een moderne benadering waarbij bedrijfssystemen onderdeel zijn van een bredere digitale architectuur, niet de centrale spil waar alles omheen draait. In plaats van één monolithisch systeem wordt ERP één van de vele gespecialiseerde nodes in een gedistribueerde architectuur.

Deze verschuiving is essentieel voor succesvolle digitale transformatie in de metaalindustrie, waar flexibiliteit en specialisatie vaak belangrijker zijn dan de eenvoud van één leverancier.

Voor meer details zie [[erp-als-systeemnode]] en [[erp-integratiestrategie]].

## Gerelateerde begrippen

- [[unified-namespace|Unified Namespace (UNS)]] - Moderne ERP integratie architectuur
- [[manufacturing-execution-system|Manufacturing Execution System (MES)]] - ERP-MES integratie voor productie
- [[isa-95-model|ISA-95 model]] - ERP niveau 4-5 in industriële hiërarchie
- [[it-ot-convergentie|IT/OT-convergentie]] - Bedrijfs- en operationele systeem integratie
- [[digitale-transformatie|Digitale transformatie]] - ERP's rol in digitalisering

## Bronnen

- [Enterprise resource planning - Wikipedia](https://nl.wikipedia.org/wiki/Enterprise_resource_planning)

---

← Terug naar [[kaarten/digitale-transformatie-en-industrie-40|Digitale transformatie & Industrie 4.0/5.0 kaart]]