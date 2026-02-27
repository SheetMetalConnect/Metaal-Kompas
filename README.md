# 🧭 Metaal Wegwijzer

*Open kennisplatform voor digitale transformatie in de metaalindustrie*

**Metaal Wegwijzer** is een open-source kennisbase die industriële begrippen helder definieert en richting geeft binnen de context van digitale transformatie in de metaalbewerkende industrie. Het combineert traditionele productiekennis met moderne digitale technologieën in de Nederlandse taal.

🌐 **Website:** https://metaalwegwijzer.vanenkhuizen.com/
📧 **Contact:** info@vanenkhuizen.com

## 🎯 Over dit Project

Metaal Wegwijzer biedt:

- **Heldere definities** van industriële begrippen in Nederlandse taal
- **Praktische toepassingen** specifiek voor de metaalindustrie  
- **Gestructureerde kenniskaarten** die gerelateerde concepten verbinden
- **Actuele inzichten** in digitale transformatie en Industrie 4.0/5.0
- **Open-source toegang** - iedereen kan bijdragen en modificeren

### Doelgroep

Deze kennisbase is ontwikkeld voor:
- Professionals in de metaalindustrie
- Studenten en onderzoekers
- Consultants en adviseurs
- Iedereen die inzicht wil krijgen in industriële digitalisering

## 🚀 Aan de Slag

### Verkennen van Content

De kennisbase bevat over 330 artikelen georganiseerd in thematische kaarten:

- **Procesoptimalisatie & Organisatie**
- **Data-collectie & Industrial Data Platforms** 
- **Event Streaming & Messaging**
- **Digitale Transformatie & Industrie 4.0/5.0**
- **Kwaliteitsmanagement & Software**
- En veel meer...

Begin bij de [startpagina](content/index.md) voor een volledig overzicht.

### Lokaal Ontwikkelen

```bash
# Clone de repository
git clone https://github.com/SheetMetalConnect/Metaal-Kompas.git
cd Metaal-Kompas

# Installeer dependencies
npm install

# Start development server
npx quartz build --serve
```

## 🤝 Bijdragen

Metaal Wegwijzer is volledig open-source en verwelkomt bijdragen van iedereen:

### Manieren om Bij te Dragen

1. **Content toevoegen/verbeteren** - Nieuwe artikelen of updates aan bestaande content
2. **Fouten rapporteren** - Issues aanmaken voor incorrecte informatie
3. **Vertalingen** - Helpen met Nederlandse terminologie
4. **Documentatie** - Verbeteren van gebruikershandleidingen

### Bijdrage Proces

1. Fork de repository
2. Maak een nieuwe branch (`git checkout -b feature/nieuwe-inhoud`)
3. Voeg je wijzigingen toe aan de `content/` map
4. Commit je changes (`git commit -am 'Voeg nieuwe content toe'`)
5. Push naar de branch (`git push origin feature/nieuwe-inhoud`)
6. Maak een Pull Request

### Content Richtlijnen

- Schrijf in het Nederlands
- Focus op praktische toepassingen in de metaalindustrie
- Voeg bronnen en referenties toe waar mogelijk
- Gebruik consistente terminologie
- Houd artikelen beknopt maar informatief

## 📝 Licentie

Dit project valt onder de [MIT License](LICENSE.txt) - zie het licentiebestand voor details.

### Open Source Commitment

Metaal Wegwijzer is en blijft volledig open-source. Alle content, configuraties en aanpassingen zijn vrij beschikbaar voor:
- Gebruik
- Modificatie  
- Redistributie
- Commercieel gebruik

## 🙏 Dankbetuigingen

### Gebouwd met Quartz

Deze kennisbase wordt mogelijk gemaakt door **[Quartz v4](https://quartz.jzhao.xyz/)** van [Jacky Zhao](https://github.com/jackyzha0).

> "[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important." — Richard Hamming

**Quartz** is een krachtige set tools die helpt bij het publiceren van digitale tuinen en notities als website. De v4 versie biedt uitgebreide aanpasbaarheid en gebruiksgemak.

- 🔗 **Quartz Documentatie:** https://quartz.jzhao.xyz/
- 💬 **Quartz Community:** [Discord](https://discord.gg/cRFFHYye7t)
- ⭐ **Quartz Repository:** https://github.com/jackyzha0/quartz
- 💖 **Sponsor Jacky:** https://github.com/sponsors/jackyzha0

### Speciale Dank

- **Jacky Zhao** voor het ontwikkelen en onderhouden van Quartz
- **De Quartz community** voor continue verbetering van het platform
- **Alle contributors** aan dit kennisplatform

## 🏗️ Technische Details

- **Framework:** Quartz v4.5.1
- **Node.js:** >= 22
- **Deployment:** GitHub Pages via GitHub Actions
- **Content:** Markdown met Obsidian-compatible wikilinks
- **Theming:** Aangepaste Nord-stijl (dark default)

## 🔧 Onderhoud & Updates

Snelle onderhoudscheck:

```bash
npm ci
npm run check
npx quartz build
npm outdated
npm audit
```

Quartz core in deze repo gebruikt momenteel **v4.5.1** (`quartz/cli/constants.js`).
Dependency-updates kunnen veilig met patch/minor upgrades worden doorgevoerd; major upgrades eerst apart testen.

---

**Auteur:** Luke van Enkhuizen  
🌐 [vanenkhuizen.com](https://vanenkhuizen.com)  
📧 info@vanenkhuizen.com
