# Technologie Chmurowe - Zadanie 2.

## Dokumentacja

![dokumentacja - schemat architektury](./arch.png)

## Wymagana konfiguracja

### Imię i nazwisko autora

Imię i nazwisko autora jest ustawiane za pomocą zmiennej środowiskowej `REACT_APP_PROJECT_AUTHOR`. Zalecane jest ustawienie za pomocą pliku `client/.env.local`, np.:

```sh
REACT_APP_PROJECT_AUTHOR='Marcin Wrona'
```

Zmienna środowiskowa musi zostać ustawiona przed zbudowaniem obrazu (w wersji produkcyjnej) lub przed uruchomieniem kontenera `client` (w wersji rozwojowej). Gotowe obrazy z Docker Hub nie wymagają jej ustawienia.

### Wzór ciągu geometrycznego

Wartość wybranego wyrazu jest obliczana ze wzoru:

```
a(n) = a(1) * q^(n-1)
```

gdzie:

* n - numer wyrazu,
* a(1) - pierwszy wyraz ciągu,
* q - iloraz ciągu.

Wyrazy `a(1)` oraz `q` są stałymi definiującymi ciąg. Należy je ustawić jako zmienne środowiskowe dla kontenera `worker` (np. w pliku `.env`):
* `a(1)` - zmienna `TCH2_A1`,
* `q` - zmienna `TCH2_Q`.
