# coding=utf-8
from bottle import run, BaseRequest
from routes import *

if '__main__':
    BaseRequest.MEMFILE_MAX = 1024 * 1024

    run(app, host='localhost', port=8001, debug=True, reloader=True)
