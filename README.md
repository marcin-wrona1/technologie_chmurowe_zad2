# Technologie Chmurowe - Zadanie 2.

## Dokumentacja

![dokumentacja - schemat architektury](./arch.png)

## Wymagana konfiguracja

Imię i nazwisko autora jest ustawiane za pomocą zmiennej środowiskowej `REACT_APP_PROJECT_AUTHOR`. Zalecane jest ustawienie za pomocą pliku `client/.env.local`, np.:

```sh
REACT_APP_PROJECT_AUTHOR='Marcin Wrona'
```

Zmienna środowiskowa musi zostać ustawiona przed zbudowaniem obrazu (w wersji produkcyjnej) lub przed uruchomieniem kontenera `client` (w wersji rozwojowej). Gotowe obrazy z Docker Hub nie wymagają jej ustawienia.
