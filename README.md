# Strona biura tłumaczeń z kalkulatorem on-line 

### Opis funkcjonalności

Strona biura tłumaczeń udostępnia natychmiastową wycenę tłumaczenia w zależności od wybranego przez klienta zakresu usługi oraz terminu realizacji. 

Strona jest wizytówką firmy, przedstawia najważniejsze informacje o niej i pozwala klientowi na łatwy kontakt z firmą. 

Najważniejszą funkcjonalnością na stronie jest natychmiastowy kalkulator, który na podstawie długości wklejonego przez klienta tekstu i wybranego przez niego języka oblicza ceny dla 3 zakresów usług i 3 możliwych terminów realizacji zlecenia.

Po wybraniu konkretnej ceny (zakresu usługi i terminu realizacji) klient może od razu wypełnienić formularz kontaktowy i otrzymać fakturę pro-forma, której opłacenie będzie oznaczało zamówienie usługi tłumaczenia wklejonego tekstu.  
(projekt w fazie rozwoju)

### Uruchamianie 

w konsoli:      nmp run start
w przeglądarce: http://localhost:3002/

### TO DO 

dodać przynne przewijanie do początków sekcji po naciśnięciu linków

+ uzupełnić walidację okienek formularza

+ uzupełnić walidację całego formularza przed wysłaniem

dodać tworzenie faktury na podstawie danych dostarczonych przez klienta

dodać możliwość pobrania lub wysyłania faktury emailem 

funkcja onSubmit na formularzu: 
    /sprawdza walidację okienek
    /tworzy fakturę na podstawie danych
    /wysyła fakturę na podany email


