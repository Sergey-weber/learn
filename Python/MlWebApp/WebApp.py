import pandas as pd
from  sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from PIL import Image
import streamlit as st

# Create title and a sub-title
st.write("""
# Diabetes Detection
Detect if someone has diabetes using machine learning and python !
""")

# Open and display imageimage 
image = Image.open('')
st.image(image, caption='ML', use_column_width=True)

# Get the data 