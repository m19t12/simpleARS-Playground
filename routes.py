# coding=utf-8
import json

from bottle import Bottle, template, static_file, request

from model import retrieve_data

app = Bottle()


@app.route('/build/<filename:path>')
def doc_server(filename):
    return static_file(filename, root='build')


@app.route('/')
def index():
    return template('index')


@app.route('/ars-list', method=['POST', 'OPTIONS'])
def get_data():
    payload = request.json
    data = retrieve_data(payload)
    return json.dumps(data)
