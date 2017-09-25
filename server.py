# coding=utf-8
from bottle import run
from routes import *

if '__main__':
    run(app, host='localhost', port=8001, debug=True, reloader=True)
