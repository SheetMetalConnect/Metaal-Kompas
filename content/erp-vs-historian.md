---
title: ERP vs. Historian
tags: [industrie, digitalisering, softwaremodules-en-integratie]
---

Een veelvoorkomende vraag is of historische data in een [[historian-database|Historian]] moet worden vastgelegd voor de ERP-laag.

## Het Verschil

- **Historian / Time-Series Database:** Wordt voornamelijk gebruikt voor het vastleggen van datapunten over tijd, het verwerken van hoogfrequente data en het vastleggen van alle gedetailleerde fluctuaties in een systeem.
- **ERP-systeem:** Registreert over het algemeen informatie op hoog niveau met een veel lagere frequentie (bijvoorbeeld de voltooiingstijd van een order).

## Dataduplicatie met een Unified Namespace

Hoewel er overlappende data kan zijn tussen een [[unified-namespace|Unified Namespace (UNS)]] en een ERP-systeem, wordt dit beschouwd als een best practice. Het ERP-systeem blijft de primaire en vertrouwde bron voor de data, en de UNS spiegelt in wezen de updates die in het ERP-systeem plaatsvinden. Het doel van deze "gedupliceerde" data is om real-time reacties op de werkvloer te faciliteren en cloud-gebaseerde data-analyses mogelijk te maken.

## Gerelateerde begrippen

- [[enterprise-resource-planning|Enterprise Resource Planning (ERP)]]
- [[historian-database|Historian-database]]
- [[unified-namespace|Unified Namespace (UNS)]]
- [[tijdreeksdatabase|Tijdreeksdatabase]]

---
← Terug naar [[kaarten/softwaremodules-en-integratie|Softwaremodules & Integratie kaart]]
