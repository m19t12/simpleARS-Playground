# coding=utf-8
import os
from unittest import TestCase


class BaseUITestCase(TestCase):
    """
    Basic class for initializing web drivers
    """

    def setUp(self):
        self.chrome_executable_path = os.path.dirname(os.path.realpath(__file__)) + "/webdrivers/chrome/chromedriver"
        self.firefox_executable_path = os.path.dirname(os.path.realpath(__file__)) + "/webdrivers/firefox/geckodriver"
