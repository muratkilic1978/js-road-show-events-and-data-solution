# JavaScript – Road Show: Events og Data

## Klasseøvelse

I denne klasseøvelse arbejder vi videre med **JavaScript DOM, events, arrays, objekter og funktioner**.

Vi skal bygge et **animeret road show**, hvor biler kører hen over skærmen. Når man holder musen over en bil, vises bilens informationer, og når man klikker på den, spiller bilens lyd. Klikker man på solen, skifter scenen mellem dag og nat.

Alle bilernes informationer samles i et **array af objekter**, og en **forEach-løkke** kobler data og billeder sammen, så hver bil får sine egne events.

Øvelsen gennemføres sammen på holdet, hvor underviseren gennemgår og skriver koden på storskærm. Du arbejder samtidig med projektet på din egen computer og følger øvelsen trin for trin.

---

# Fremgangsmåde – sådan kommer du i gang med projektet

I denne øvelse skal du bruge **GitHub Template-metoden**.

Du skal derfor **ikke downloade projektet som ZIP og ikke bruge Fork**.

Følg denne rækkefølge:

```text
GitHub Template
↓
Dit eget repository på GitHub.com
↓
GitHub Desktop
↓
Visual Studio Code
↓
Arbejd med øvelsen
↓
Commit
↓
Push
```

> Følg punkterne **ét ad gangen og i den viste rækkefølge**.

---

## 1. Opret dit eget repository på GitHub.com

Åbn det udleverede **template-repository** på GitHub.com.

Du skal være logget ind på din egen GitHub-konto.

Klik på:

**Use this template**

Vælg derefter:

**Create a new repository**

Vælg din egen GitHub-konto som ejer, og brug det repository-navn, som din underviser har angivet.

Klik derefter på:

**Create repository**

Vent et øjeblik, mens GitHub opretter dit nye repository.

### Kontrollér, at du er i dit eget repository

Når repositoryet er oprettet, skal du kontrollere navnet øverst på siden.

Det skal være **dit eget GitHub-brugernavn**, der står foran repositoryets navn.

Det kan fx se sådan ud:

```text
dit-brugernavn/js-road-show-events-and-data-starter
```

> **Stop her og kontrollér dette, før du går videre.**

---

## 2. Hent dit repository ned på din computer

Nu ligger projektet på **GitHub.com**, men du skal også have det ned på din egen computer.

Åbn **GitHub Desktop**.

Vælg:

**File → Clone repository...**

Vælg fanebladet **GitHub.com**, og find det repository, du netop har oprettet.

Hvis repositoryet ikke vises, kan du i stedet vælge fanebladet **URL** og indsætte adressen til dit repository fra GitHub.com.

### Vælg, hvor projektet skal gemmes

I feltet **Local path** vælger du, hvor projektet skal ligge på din computer.

> **Local path** betyder den mappe på din computer, hvor projektets filer bliver gemt.

Klik derefter på:

**Clone**

Vent, mens GitHub Desktop henter projektet ned på din computer.

---

## 3. Åbn projektet i Visual Studio Code

Når projektet er klonet, vælg:

**Open in Visual Studio Code**

Du skal arbejde direkte i den projektmappe, som GitHub Desktop har klonet.

Kontrollér, at projektet har denne struktur:

```text
js-road-show-events-and-data-starter/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── bg.png
│   ├── red-car.png
│   ├── car.gif
│   ├── light-blue-car.png
│   ├── bus.webp
│   └── truck.webp
├── sound/
│   ├── red-car-horn.wav
│   ├── police-car-sound.wav
│   ├── blue-car-sound.wav
│   ├── bus-sound.wav
│   └── truck-sound.wav
└── README.md
```

---

# Klasseøvelsen

I øvelsen arbejder vi med disse filer:

- `index.html`
- `css/style.css`
- `js/script.js`

Læs kommentarerne i koden, inden du begynder at skrive. Alle steder, hvor du selv skal skrive kode, er markeret med **Skriv selv**. Steder markeret med **Undersøg selv** er spørgsmål, du skal finde svaret på ved at eksperimentere med koden.

Arbejd i denne rækkefølge:

```text
index.html   → byg HTML-strukturen
↓
style.css    → lav himlen, nat-tilstanden, bilernes animationer og tooltip'en
↓
script.js    → lav data, events og funktioner
```

### Det lærer du i øvelsen

- at opbygge en side med **semantisk HTML** og koble CSS og JavaScript på via `class` og `id`
- at bruge **CSS-variabler**, `linear-gradient` og `@keyframes`-animationer
- at samle data i et **array af objekter**
- at gennemløbe et array med **forEach**
- at lytte efter events som `click` og `mouseenter`
- at tilføje og fjerne CSS-klasser med **classList**
- at skrive **funktioner med parametre**
- at indsætte data i HTML med **template literals**
- at afspille lyd med **Audio**

### Test undervejs

Åbn konsollen i browseren med **F12**, og hold øje med beskeder og fejl, mens du arbejder.

> Står der **Cannot read properties of null** i konsollen, passer et `id` i JavaScript ikke med et `id` i HTML'en. Tjek stavningen.

---

# Ekstraopgaver – bus og truck

Når klasseøvelsen virker, skal du udvide road showet med **en bus og en truck**.

Billederne ligger klar i `img`-mappen, og lydene ligger klar i `sound`-mappen.

Ekstraopgaverne er nummereret **E1–E10** og står som kommentarer i de tre filer. Løs dem i denne rækkefølge:

| Opgave | Fil | Hvad skal du gøre? |
| --- | --- | --- |
| E1–E2 | `index.html` | Tilføj billederne af bussen og truck'en |
| E3–E6 | `css/style.css` | Giv køretøjerne størrelse, placering og animation |
| E7–E8 | `js/script.js` | Tilføj bussen og truck'en til `cars`-arrayet |
| E9 | `js/script.js` | Test, at tooltip og lyd virker |
| E10 | `js/script.js` | Besvar refleksionsspørgsmålene |

> Læg mærke til, hvor lidt JavaScript du skal skrive for at få de nye køretøjer til at virke. Det er pointen med E10.

---

# Commit og push

Gem dit arbejde på GitHub undervejs – ikke kun til sidst.

Når du har løst et trin, fx HTML-strukturen, skal du:

1. Åbne **GitHub Desktop**.
2. Skrive en kort og beskrivende besked i feltet **Summary**, fx:

```text
Tilføj HTML-struktur til scene og biler
```

3. Klikke på **Commit to main**.
4. Klikke på **Push origin**.

> En god commit-besked fortæller, **hvad** du har lavet. Undgå beskeder som "ændringer" eller "update".

Kontrollér til sidst på GitHub.com, at dine ændringer er kommet op i dit repository.
