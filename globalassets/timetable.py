import requests
from bs4 import BeautifulSoup
import json

# URL adresa konkrétního rozvrhu, který chcete stáhnout
ROZVRH_URL = "https://bakalari.infis.cz/Timetable/Public/Actual/Class/YQ"

def stahni_a_parsuj_rozvrh(url):
    """Stáhne HTML rozvrhu a vrátí objekt BeautifulSoup."""
    
    # Hlavičky pro simulaci běžného prohlížeče (důležité pro některé servery)
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    print(f"Stahuji data z: {url}")
    
    try:
        # 1. Stažení HTML obsahu
        response = requests.get(url, headers=headers)
        response.raise_for_status() # Vyhodí chybu pro špatné status kódy (4xx nebo 5xx)
        
        # 2. Vytvoření objektu BeautifulSoup pro parsování
        soup = BeautifulSoup(response.content, 'html.parser')
        
        print("Stahování úspěšné.")
        return soup
        
    except requests.exceptions.RequestException as e:
        print(f"Chyba při stahování stránky: {e}")
        return None

# Hlavní část skriptu
soup = stahni_a_parsuj_rozvrh(ROZVRH_URL)

if soup:
    # Ověření, že jsme se dostali ke správnému obsahu (vypíšeme titulek stránky)
    print("\nTitulek stránky:", soup.title.string.strip())
    
    # Nyní budeme muset najít správnou tabulku rozvrhu v HTML
    # Přejdeme k dalšímu kroku: hledání a extrakce dat
    print("-" * 30)
    print("Připraveno k parsování tabulky.")