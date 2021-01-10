import psycopg2
from read_splitting_pdf_2 import book_scrape
import numpy as np


conn = psycopg2.connect(database="typing-practice-DB", user='postgres', password='ManishPort', host='localhost')

cur = conn.cursor()

quotes, num_of_quotes = book_scrape(10, 200)

a = list(range(4, num_of_quotes+4))
b = quotes


listy = []
for i, j in zip(a, b):
    listy.append([i, j])
# print(listy)


insert_query = 'INSERT INTO "Symbiosis_quotes" (id, quote_text) values (%s, %s)'
cur.executemany(insert_query, listy)





conn.commit()
conn.close()