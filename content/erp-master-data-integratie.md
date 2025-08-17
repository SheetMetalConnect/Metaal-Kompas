---
tags:
  - 'softwaredeployment-en-architectuur'
  - 'digitale-transformatie-en-industrie-40-50'
  - '🧹draft'

title: ERP Master Data integratie
---
*ERP Master Data integratie* behandelt de complexe datastructuren die verborgen zitten in ERP-systemen en hoe je deze op een intelligente manier kunt integreren met moderne industriële architecturen zonder gevangen te raken in vendor-specifieke beperkingen.

## De verborgen structuur van bedrijfsdata

ERP-systemen bevatten veel meer dan alleen transactionele data. Ze bevatten de DNA van hoe een organisatie werkt, georganiseerd in hiërarchische structuren die vaak onzichtbaar zijn voor gebruikers. Deze structuren volgen meestal ISA-95 standaarden, met locaties georganiseerd in sites, areas en cells.

Elke laag in deze hiërarchie heeft zijn eigen context en betekenis. Een site kan een complete fabriek zijn, een area kan een productielijn vertegenwoordigen, en een cell is vaak een individuele machine of werkstation. Deze organisatie is niet alleen voor administratieve doeleinden - het weerspiegelt hoe real-time data geïnterpreteerd moet worden.

Wanneer een sensor op een machine data publiceert naar je [[unified-namespace|Unified Namespace]], moet deze data automatisch gekoppeld worden aan de juiste cell, area en site. Alleen zo krijg je contextuele informatie die bruikbaar is voor analytics en besluitvorming.

## Productcomplexiteit ontrafelen

Productdefinities in ERP-systemen lijken eenvoudig, maar verbergen enorme complexiteit. Elke SKU (Stock Keeping Unit) is niet alleen een identifier, maar een complete beschrijving van hoe iets gemaakt moet worden, welke materialen nodig zijn, en welke kwaliteitseisen gelden.

Manufacturing Operations beschrijven niet alleen de volgorde van bewerkingen, maar ook de tijden, de benodigde skills, en de machine-specificaties. Een Bill of Materials gaat verder dan een simpele onderdelenlijst - het definieert substitutieregels, leverancierspreferenties, en kostencalculaties.

Deze informatie is cruciaal voor real-time systemen omdat het de context geeft voor waarom bepaalde beslissingen genomen worden. Als een machine uitvalt, moet het systeem weten welke alternatieven er zijn, wat de kostimpact is, en hoe dit de planning beïnvloedt.

## De drie levensfasen van materiaal

Elk stuk materiaal in een fabriek doorloopt een transformatieproces dat minutieus getrackt wordt door het ERP-systeem. Grondstoffen komen binnen via de achterdeur en krijgen onmiddellijk een unieke identiteit in het systeem. Dit is niet alleen voor voorraadbeheersing, maar ook voor complete traceerbaarheid als er later kwaliteitsproblemen optreden.

Work in Progress materialen zijn de interessantste categorie omdat ze de werkelijke productieactiviteit vertegenwoordigen. Als grondstoffen transformeren naar WIP, ontstaan er nieuwe SKU's die de semi-finished status weergeven. Deze WIP-materialen kunnen dagen of weken in productie blijven, afhankelijk van de complexiteit van het proces.

Eindproducten lijken het eindstation, maar zijn vaak weer het beginpunt voor andere processen. Een eindproduct van de ene fabriek kan de grondstof zijn voor een andere. ERP-systemen moeten deze complexe materiaalstromen begrijpen en traceerbaar houden.

BOM-structuren kunnen meerdere niveaus diep zijn, met sub-assemblies die hun eigen productieprocessen hebben. Dit creëert complexe afhankelijkheden waarbij vertraging in één sub-assembly de gehele productielijn kan beïnvloeden. Voor real-time systemen betekent dit dat je niet alleen de hoofdproducten moet monitoren, maar ook alle onderliggende componenten.

Kostencalculaties door deze BOM-hiërarchieën zijn kritiek voor profitability tracking. Wanneer de prijs van een grondstof wijzigt, moet dit doorgerekend worden door alle niveaus naar de eindproducten. Dit soort berekeningen moet real-time gebeuren voor accurate besluitvorming.

## Work Orders: het hart van de productie

Work orders zijn waar de planning werkelijkheid wordt. Ze vertellen precies wat geproduceerd moet worden, wanneer het klaar moet zijn, en in welke hoeveelheden. Maar hier wordt het interessant: work orders leven niet altijd in het ERP-systeem.

In moderne fabrieken kunnen work orders ontstaan in het [[manufacturing-execution-system|MES]], getriggerd worden door customer demand, of zelfs automatisch gegenereerd door AI-systemen die voorraadniveaus monitoren. Het ERP-systeem kan de planning verzorgen, maar de uitvoering gebeurt dichter bij de shopfloor.

Deze flexibiliteit is cruciaal voor responsive manufacturing. Een pull-gedreven systeem kan reageren op werkelijke vraag in plaats van voorspellingen. Schedules kunnen real-time aangepast worden gebaseerd op machine beschikbaarheid, kwaliteitsissues, of plotselinge orderwijzigingen.

Elke work order bevat kritieke informatie die doorstroomt naar alle gekoppelde systemen: hoeveel moet er geproduceerd worden, welk product exact, wanneer het klaar moet zijn, en eventuele speciale requirements voor deze specifieke batch.

## De holy grail: real-time winstgevendheid

De ultieme doelstelling van ERP-integratie is het real-time kunnen berekenen van winstgevendheid per asset. Stel je voor dat je elke machine, elke shift kunt zien wat het kost om te draaien en hoeveel revenue er gegenereerd wordt. Dit transformeert hoe productiebesluiten genomen worden.

Traditionele OEE-metingen vertellen je of een machine draait, maar niet of het winstgevend draait. Een machine kan 95% OEE hebben maar tegelijkertijd geld verliezen door hoge energiekosten of inefficiënte materiaalgebruik. Real-time profitability combining operationele data met financiële context geeft het complete plaatje.

Deze berekeningen moeten gebeuren in de [[unified-namespace|Unified Namespace]], niet achteraf in maandrapportages. Alleen zo kunnen operators en AI-systemen direct reageren op veranderende circumstances. Als een machine inefficiënt wordt, moet dit binnen minuten zichtbaar zijn, niet na weken.

OEE krijgt hierdoor een financiële dimensie. Op operationeel niveau helpt het bij dagelijkse scheduling en resource-allocatie. Op executive niveau toont het waar investeringen nodig zijn en welke bottlenecks de grootste financiële impact hebben.

## De complexiteit van productfamilies

Productfamilies lijken eenvoudig in ERP-systemen, maar verbergen enorme variatie-complexiteit. Twee producten kunnen 95% identieke BOM's hebben, maar dat laatste 5% verschil kan compleet andere productieprocessen vereisen. Deze subtiele variaties zijn cruciaal voor planning en kostencalculatie.

Standaard procedures gelden voor de basis van een product, maar klantspecifieke requirements kunnen leiden tot ad-hoc aanpassingen. Een automotive onderdeel kan dezelfde basis hebben, maar verschillende coatings, toleranties, of testprocedures afhankelijk van de eindklant.

Version control van deze standaarden is complex omdat wijzigingen downstream effecten kunnen hebben. Een kleine aanpassing in een coating process kan impact hebben op alle producten die deze coating gebruiken. ERP-systemen moeten deze afhankelijkheden kunnen traceren en managers waarschuwen voor potentiële impacts.

## Systematische integratiebenadering

ERP Master Data integratie vereist een methodische benadering omdat elke implementatie uniek is. Begin met grondige identificatie van het ERP-systeem, niet alleen het product maar ook de versie, customisaties, en het organisatieniveau waar het opereert. Een enterprise-wide SAP implementatie vereist een andere strategie dan een lokale MES-gekoppelde oplossing.

Interface capabilities bepalen grotendeels je integratiepatroon. Moderne REST API's bieden flexibiliteit maar vereisen andere security overwegingen dan directe database toegang. SOAP interfaces kunnen meer gestructureerde data leveren maar zijn vaak langzamer voor real-time toepassingen.

De [[unified-namespace|Unified Namespace]] moet zo gemodelleerd worden dat ERP-data natuurlijk past binnen de bredere informatiestructuur. Dit betekent vaak dat je ERP-hiërarchieën moet mappen naar ISA-95 structuren en ervoor moet zorgen dat events betekenisvol zijn voor verschillende consumenten.

## De realiteit van ERP-diversiteit

Elke ERP-integratie is een uniek project omdat geen twee implementaties hetzelfde zijn. Zelfs organisaties die hetzelfde ERP-product gebruiken kunnen radicaal verschillende datastructuren hebben. Customisaties, configuraties, en lokale aanpassingen zorgen voor eindeloze variaties.

Dit is fundamenteel anders dan machine-integratie, waar protocollen meestal gestandaardiseerd zijn. ERP-integratie vereist detectivewerk, diplomatie, en vaak compromissen tussen verschillende belanghebbenden. De middleware-teams, ERP-administrators, en business users hebben allemaal verschillende perspectieven op hoe data gebruikt moet worden.

Wanneer er geen standaard interface beschikbaar is, moet je terug naar de OEM of implementatiepartner. Soms betekent dit dat je creatieve oplossingen moet vinden, zoals file-based data exchange of indirect toegang via reporting tools.

De belangrijkste les is dat ERP-integratie een proces is, geen product. Elke implementatie vereist maatwerk, grondige documentatie, en meestal meerdere iteraties om goed te krijgen. Maar wanneer het eenmaal werkt, heb je toegang tot de rijkste bron van bedrijfscontext die beschikbaar is voor je digitale transformatie.

## Gerelateerde begrippen

- [[unified-namespace|Unified Namespace (UNS)]] - Integratie architectuur
- [[erp-integratiestrategie|ERP integratiestrategie]] - Implementation approach
- [[erp-als-systeemnode|ERP als systeemnode]] - Architectural positioning
- [[enterprise-resource-planning|Enterprise Resource Planning (ERP)]] - System fundamentals
- [[manufacturing-execution-system|Manufacturing Execution System (MES)]] - Complementary systems
- [[bill-of-materials|Bill of Materials (BOM)]] - Product structure definition

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]