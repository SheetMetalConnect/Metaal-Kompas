---
tags:
  - 'industriële-communicatieprotocollen'
  - '🧹draft'

title: OPC UA Evolutie en Objectmodel
---
## OPC Classic Voorbeeld (eind jaren 90)

Stel je een fabriek voor met een temperatuursensor die is aangesloten op een PLC (Programmable Logic Controller).

1.  De PLC verzamelt temperatuurgegevens.
2.  Een OPC Classic-server draait op een Windows-pc en maakt verbinding met de PLC.
3.  Een monitoringapplicatie (OPC Client) wil de temperatuur uitlezen.

**Proces:**

-   De OPC Client gebruikt COM/DCOM om gegevens op te vragen bij de OPC Server.
-   De OPC Server haalt gegevens op van de PLC en stuurt deze terug naar de client.

**Beperking:**

-   Deze opzet werkt alleen op Windows-systemen vanwege de afhankelijkheid van COM/DCOM.

## OPC UA Voorbeeld (modern)

Dezelfde fabriek, maar nu met [[open-platform-communications-unified-architecture|OPC UA]]:

1.  De PLC met de temperatuursensor wordt weergegeven in de adresruimte van de OPC UA-server.
2.  De OPC UA-server kan op elk platform draaien (Windows, Linux, etc.).
3.  Meerdere clients hebben toegang tot de gegevens, zelfs via internet.

**Proces:**

-   Een OPC UA-client (bijvoorbeeld een smartphone-app) maakt veilig verbinding met de OPC UA-server.
-   De client bladert door de adresruimte van de server om het object van de temperatuursensor te vinden.
-   De client abonneert zich op temperatuurveranderingen of leest de huidige waarde.

**Voordeel:**

-   Platformonafhankelijk, veilig en kan over netwerken werken.

## Vergelijking van Objectmodellen

### OLE/COM (basis voor OPC Classic)

Zie het als het insluiten van een Excel-spreadsheet in een Word-document. De temperatuurgegevens zouden een cel in dat spreadsheet zijn. Om er toegang toe te krijgen, zou je Microsoft-specifieke tools nodig hebben.

### OPC UA Objectmodel

Zie het als een [[virtual-factory-digital-twin-digitale-tweeling|digitale tweeling]] van de fabriek. De temperatuursensor wordt weergegeven als een object in deze virtuele fabriek. Het heeft eigenschappen (huidige temperatuur), methoden (kalibreren) en gebeurtenissen (temperatuur te hoog).

**Voorbeeldstructuur in OPC UA:**

```
Fabriek
├── Productielijn1
│   ├── Temperatuursensor
│   │   ├── HuidigeTemperatuur (Variabele)
│   │   ├── Kalibreren (Methode)
│   │   └── TemperatuurAlarm (Gebeurtenis)
│   └── Druksensor
│       ├── HuidigeDruk (Variabele)
│       └── DrukAlarm (Gebeurtenis)
└── Productielijn2
    └── ...
```

## Toepassing in de praktijk

Neem een drankenbottelarij:

1.  **OPC Classic (oud systeem):**
    -   Een Windows-pc in de controlekamer draait de OPC-server.
    -   Operators kunnen temperaturen alleen vanuit die kamer bewaken.
    -   Het toevoegen van nieuwe sensoren vereist wijzigingen in het Windows-gebaseerde systeem.
2.  **OPC UA (nieuw systeem):**
    -   De OPC UA-server draait op een kleine industriële computer bij de productielijnen.
    -   Operators kunnen overal monitoren met behulp van veilige web-apps.
    -   Nieuwe sensoren kunnen eenvoudig worden toegevoegd en automatisch worden ontdekt door clients.
    -   Gegevens van alle sensoren kunnen eenvoudig worden geïntegreerd in cloud-analyseplatforms.

**Belangrijkste verschil:**

OPC UA behandelt alles (sensoren, processen, zelfs hele productielijnen) als onderling verbonden objecten, wat het veel flexibeler en krachtiger maakt voor moderne industriële automatiseringsbehoeften.

## Gerelateerde begrippen

- [[open-platform-communications-unified-architecture|OPC UA]]
- [[ole-object-linking-and-embedding|OLE (Object Linking and Embedding)]]
- [[virtual-factory-digital-twin-digitale-tweeling|Digitale tweeling (digital twin)]]

---
← Terug naar [[kaarten/industriële-communicatieprotocollen|Industriële communicatieprotocollen kaart]]
