from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

# Spotify API Setup
client_id = '65beeda011d64395ab4fdd5dac3ea7b2'
client_secret = 'b0cc80ab10694cb9940463ef227876f9'

# Authentication
auth_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(auth_manager=auth_manager)



def get_songs(query): #function that searches and filters songs based on user input
  all_songs = []
  for offset in range(0, 100, 20):  # Each page has 20 results
      results = sp.search(q=query, type='track', limit=20, offset=offset)
      for track in results['tracks']['items']:
          all_songs.append({
              'name': track['name'],
              'image': track['album']['images'][0]['url'],
              'artist': track['artists'][0]['name'],
              'album': track['album']['name'],
          })
  return all_songs

name = "merebuddy"
input = get_songs(name)

print(input)