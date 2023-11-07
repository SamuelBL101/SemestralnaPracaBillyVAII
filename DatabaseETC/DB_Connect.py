import mysql.connector

# Nastavte pripojenie k MySQL databáze
connection = mysql.connector.connect(
    host='DropShippingDB',  # Host je rovnaký ako názov kontajnera
    user='root',
    password='DropShippingPW',
    database='DBDropShipping'  # Názov vašej databázy
)

# Vytvorte kurzor pre vykonávanie SQL príkazov
cursor = connection.cursor()

# Teraz môžete vykonávať SQL príkazy
cursor.execute('SELECT * FROM USER')  # Používame názov tabuľky "USER"

# Získať výsledky
results = cursor.fetchall()

# Uzavrite kurzor a pripojenie
cursor.close()
connection.close()
