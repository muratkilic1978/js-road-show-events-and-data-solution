# JavaScript – DOM Audio Soundboard

## Klasseøvelse

I denne klasseøvelse arbejder vi videre med **JavaScript DOM, events og funktioner**, og vi lærer at **afspille lyd med JavaScript**.

Vi skal bygge et **soundboard med dyrelyde**. Når man klikker på en knap, afspilles dyrets lyd. Klikker man på en ny knap, stopper den lyd, der spiller, og den nye lyd starter forfra.

På klassen laver vi **lion** og **dog** sammen. Bagefter laver du selv **elephant** og **monkey** som ekstraopgaver.

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
dit-brugernavn/js-dom-audio-soundboard-starter
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
js-dom-audio-soundboard-starter/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── sound/
│   ├── dog.wav
│   ├── elephant.wav
│   ├── lion.wav
│   └── monkey.wav
└── README.md
```

---

# Klasseøvelsen

I øvelsen arbejder vi med disse filer:

- `index.html`
- `css/style.css`
- `js/script.js`

Læs kommentarerne i koden, inden du begynder at skrive. Alle steder, hvor du selv skal skrive kode, er markeret med **Skriv selv**. Steder markeret med **Skriv sammen med underviseren** løser vi i fællesskab på storskærm.

Arbejd i denne rækkefølge:

```text
index.html   → link til script.js
↓
style.css    → placér overskrift og knapper med Flexbox
↓
script.js    → hent knapperne, opret lydene og lyt efter klik
```

### Det lærer du i øvelsen

- at hente HTML-elementer med **getElementById**
- at oprette et lydobjekt med **new Audio()** og angive lydfilen med **src**
- at lytte efter **click**-events med **addEventListener**
- at afspille lyd med **.play()**
- at stoppe lyd med **.pause()** og spole tilbage til starten med **.currentTime = 0**
- at samle gentagen kode i en **funktion**, her `stopAllSounds()`
- at placere elementer i rækker og kolonner med **CSS Flexbox**

### Test undervejs

Åbn konsollen i browseren med **F12**, og hold øje med fejl, mens du arbejder.

> Står der **Cannot read properties of null** i konsollen, passer et `id` i JavaScript ikke med et `id` i HTML'en. Tjek stavningen.

> Kan du ikke høre lyden, så tjek stien til lydfilen, og at lyden på din computer er slået til.

---

# Ekstraopgaver – elephant og monkey

Når lion og dog virker, skal du selv tilføje **elephant** og **monkey**.

Lydfilerne ligger klar i `sound`-mappen.

Ekstraopgaverne er nummereret **E1–E6** og står som kommentarer i filerne. Løs dem i denne rækkefølge:

| Opgave | Fil | Hvad skal du gøre? |
| --- | --- | --- |
| E1–E2 | `index.html` | Tilføj en knap til elephant og en knap til monkey |
| E3 | `js/script.js` | Hent elephant-knappen, opret lyden og lyt efter klik |
| E4 | `js/script.js` | Gør det samme for monkey |
| E5 | `js/script.js` | Tilføj de nye lyde i funktionen `stopAllSounds()` |
| E6 | `js/script.js` | Test, at alle fire knapper virker |

> Glemmer du E5, bliver lyden ved med at spille, når du klikker på et andet dyr. Prøv det, og se hvad der sker.

---

# Commit og push

Gem dit arbejde på GitHub undervejs – ikke kun til sidst.

Når du har løst et trin, fx lyden til dog-knappen, skal du:

1. Åbne **GitHub Desktop**.
2. Skrive en kort og beskrivende besked i feltet **Summary**, fx:

```text
Tilføj lyd til dog-knappen
```

3. Klikke på **Commit to main**.
4. Klikke på **Push origin**.

> En god commit-besked fortæller, **hvad** du har lavet. Undgå beskeder som "ændringer" eller "update".

Kontrollér til sidst på GitHub.com, at dine ændringer er kommet op i dit repository.
