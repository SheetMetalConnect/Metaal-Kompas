---
tags:
  - 'programmatie-en-aansturing-productiemiddelen'
  - '🧹draft'

title: M‑code
---
*M‑code* is een begrip binnen de industriële digitalisering en programmatie & aansturing productiemiddelen.

## Definitie

**M-code** (Machine Functions) zijn numerieke codes die hulpfuncties van CNC-machines aansturen, zoals spil in-/uitschakeling, koelvloeistof controle, gereedschapswisseling en programma-onderbrekingen. M-codes werken samen met [[g-code|G-code]] om complete bewerkingsinstructies te vormen voor geautomatiseerde metaalbewerking.

## Kenmerken

- **Hulpfuncties**: Controle van machines onderdelen die niet direct met materiaalbewerking te maken hebben
- **Discrete acties**: On/off commando's in tegenstelling tot continue bewegingen
- **Machine-specifiek**: Verschillende CNC-merken kunnen variaties hebben in M-code implementatie
- **Synchrone uitvoering**: M-codes worden uitgevoerd op specifieke momenten tijdens G-code sequenties
- **Modal behavior**: Sommige M-codes blijven actief tot ze expliciet worden uitgeschakeld
- **Safety integration**: Veel M-codes hebben veiligheidsimplicaties voor operators en equipment
- **Programma controle**: Start, stop en pauze functies voor CNC-programma uitvoering
- **I/O operations**: Controle van externe apparaten en sensoren

## Toepassing

**Spindle control en gereedschap:**
- **M03/M04**: Spil rechtsom/linksom draaien voor verschillende bewerkingen
- **M05**: Spil stoppen voor veilige gereedschapswisseling
- **M06**: Automatische gereedschapswisseling (ATC - Automatic Tool Change)
- **M19**: Spil orientatie voor specifieke positionering

**Koelvloeistof management:**
- **M07**: Mistkoeling voor delicate bewerkingen
- **M08**: Vloeistofkoeling voor zware bewerkingen en spaan-afvoer
- **M09**: Koeling uit voor droge bewerkingen

**Programma controle:**
- **M00**: Programma pauze met operator interventie mogelijkheid
- **M01**: Optionele stop voor kwaliteitscontroles
- **M02**: Programma einde
- **M30**: Programma einde met rewind naar start

**Veiligheid en automatisering:**
- **M21/M22**: Mirror image functions voor symmetrische bewerkingen
- **M98/M99**: Subprogramma aanroep en return voor herbruikbare sequences
- **Custom M-codes**: Machine-specifieke functies zoals robots, conveyors, enz.

**Metaalindustrie specifiek:**
- **Plasma snijden**: M-codes voor gas selectie, pierce delay, cut height controle
- **Laser snijden**: Focus controle, beam power, assist gas selectie
- **Draaibanken**: Chuck open/close, tailstock operaties
- **Bewerkingscentra**: Pallet wisseling, workholding systemen

**Integratie met productiesystemen:**
- **[[manufacturing-execution-system|MES]] communicatie**: Status updates via M-codes
- **Kwaliteitscontrole**: Automatische meting triggers
- **[[traceerbaarheidssysteem|Batch tracking]]**: Part marking en identificatie
- **[[andon-systeem|Andon]] signaling**: Status indicatie naar productielijn

## Gerelateerde begrippen

- [[g-code|G-code]] - Bewegingsinstructies die samen met M-codes worden gebruikt
- [[cnc-programmatie|CNC Programmatie]] - Overkoepelende discipline voor machine programmering
- [[computer-aided-manufacturing|CAM]] - Software die M-codes genereert in bewerkingsprogramma's
- [[cam-postprocessor|CAM Post-processor]] - Vertaling van CAM naar machine-specifieke M-codes
- [[manufacturing-execution-system|MES]] - Systemen die M-code programma's beheren en monitoren
- [[plc-programmering|PLC Programmering]] - Machine logica die M-code functies implementeert
- [[human-machine-interface|HMI]] - Operator interfaces voor M-code functie controle
- [[overall-equipment-effectiveness|OEE]] - Efficiency metrics beïnvloed door M-code optimalisatie
- [[andon-systeem|Andon System]] - Visuele signalen gecontroleerd door M-codes
- [[traceerbaarheidssysteem|Traceerbaarheid]] - Product tracking functies via M-codes

## Bronnen

- NIST RS274/NGC M-code Standard Reference
- ISO 6983 - Numerical control programming language specifications
- Fanuc Series CNC M-code Programming Manual
- Haas Automation M-code Reference Guide
- Siemens SINUMERIK M-code Functions Manual
- Mazak Matrix CNC M-code Reference
- OKUMA OSP Control M-code Programming Guide
- LinuxCNC M-code Implementation Documentation

---
← Terug naar [[kaarten/programmatie-en-aansturing-productiemiddelen|Programmatie & Aansturing Productiemiddelen kaart]]
