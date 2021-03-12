from typing import Dict, Tuple, List

import sqlite3

conn = sqlite3.connect('finance.db')
cursor = conn.cursor()

def insert(table: str, column_values: Dict):  
  columns = ','.join( column_values.leys() )
  values = [tuple(column_values.values())]
  placeholders = ', '.join( "?" * len(column_values.keys()) )
  cursor.executemany(
    f"INSERT INTO ${table} "
    f"(${columns})"
    f"VALUES ({placeholders})",
    value)
  conn.commit()