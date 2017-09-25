# coding=utf-8
import json

from simple_ars.extraction import ars_list
import requests


def retrieve_data(payload):
    data = payload.get('data')
    search = payload.get('search')
    return ars_list(data, search)
