---
tags:
  - 'softwaredeployment-en-architectuur'
  - '🧹draft'

title: Versiebeheer met Git
---
*Versiebeheer met Git* is een begrip binnen de industriële digitalisering en softwaredeployment & architectuur.

## Definitie

**Versiebeheer met Git** is een gedistribueerd versiebeheersysteem dat wijzigingen in bestanden en projecten bijhoudt over de tijd. Git maakt het mogelijk om samenwerking tussen ontwikkelaars te faciliteren, wijzigingen te tracken, en verschillende versies van software en documentatie te beheren. In de metaalindustrie wordt Git niet alleen gebruikt voor softwareontwikkeling, maar ook voor het beheer van configuratiebestanden, technische documentatie, PLC-programma's en CAD-bestanden.

## Kenmerken

### 1. Gedistribueerde Architectuur
- **Lokale Repository**: Volledige geschiedenis beschikbaar op elke machine
- **Offline Werken**: Commits en wijzigingen mogelijk zonder netwerkverbinding
- **Redundantie**: Elke kloon fungeert als volledige backup

### 2. Branching & Merging
- **Feature Branches**: Isolatie van nieuwe functionaliteiten
- **Merge Strategies**: Verschillende manieren om wijzigingen samen te voegen
- **Conflict Resolution**: Tools voor het oplossen van tegenstrijdige wijzigingen

### 3. Wijzigingsbeheer
- **Commit History**: Chronologische registratie van alle wijzigingen
- **Diff Tracking**: Detectie van exacte verschillen tussen versies
- **Rollback Mogelijkheden**: Terugkeren naar eerdere stabiele versies

### 4. Collaboration Features
- **Remote Repositories**: Centrale delen van code via platforms zoals GitHub/GitLab
- **Pull Requests**: Code review proces voor kwaliteitscontrole
- **Issue Tracking**: Koppeling met bug tracking en feature requests

## Toepassing

### 1. PLC-Programmatie
- **Ladder Logic Versioning**: Bijhouden van wijzigingen in PLC-programma's
- **Configuration Management**: Beheer van HMI-configuraties en parameter sets
- **Backup & Recovery**: Automatische backup van kritische besturingssoftware

### 2. CAD en Engineering Files
- **Drawing Revisions**: Versiebeheer van technische tekeningen en 3D-modellen
- **Collaboration**: Samenwerking tussen engineers aan complexe ontwerpen
- **Release Management**: Gecontroleerde releases van engineering deliverables

### 3. Productiedocumentatie
- **Work Instructions**: Versiebeheer van werkstromen en procedures
- **Quality Documentation**: Traceerbare wijzigingen in kwaliteitsdocumenten
- **Compliance Records**: Audittrail voor regulatory compliance

### 4. Automatisering & DevOps
- **Infrastructure as Code**: Versiebeheer van server- en netwerkconfiguraties
- **CI/CD Integration**: Automatische deployment pipelines
- **Configuration Management**: Centraal beheer van applicatieconfiguraties

### 5. Data Pipeline & Analytics
- **ETL Scripts**: Versiebeheer van data transformation logica
- **Report Templates**: Beheer van BI-rapportages en dashboards
- **Data Models**: Tracking van database schema wijzigingen

## Gerelateerde begrippen

**Development & Deployment:**
- [[continuous-integration-continuous-deployment|Continuous Integration/Continuous Deployment (CI/CD)]]
- [[gitops|GitOps]]
- [[configuratiebeheer|Configuratiebeheer]]
- [[infrastructure-as-code|Infrastructure as Code]]

**Documentatie & Compliance:**
- [[document-management-system|Document Management System (DMS)]]
- [[revisiebeheer|Revisiebeheer]]
- [[auditdocumentatie|Auditdocumentatie]]
- [[projectdocumentatie|Projectdocumentatie]]

**Productiesystemen:**
- [[plc-programmering|PLC-programmering]]
- [[manufacturing-execution-system|Manufacturing Execution System (MES)]]
- [[computer-aided-design|Computer-Aided Design (CAD)]]
- [[workflow-automatisering|Workflow-automatisering]]

**Data & Analytics:**
- [[extract-transform-load|Extract, Transform, Load (ETL)]]
- [[data-pipeline|Data Pipeline]]
- [[metadata-beheer|Metadata Beheer]]

## Bronnen

- **Git Documentation**: Officiële Git documentatie en tutorials
- **GitHub**: Populair platform voor Git repository hosting
- **GitLab**: Enterprise Git platform met CI/CD integratie
- **Atlassian Bitbucket**: Git repository management voor teams
- **Pro Git Book**: Uitgebreide Git handleiding (gratis beschikbaar)
- **Git Flow**: Branching model voor release management

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]
