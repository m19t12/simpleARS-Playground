# coding=utf-8
from test import BaseUITestCase
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
import json


class ChromeIndexTestCase(BaseUITestCase):
    def setUp(self):
        super(ChromeIndexTestCase, self).setUp()
        self.chrome_webdriver = webdriver.Chrome(executable_path=self.chrome_executable_path)

    def test_check_load_json(self):
        driver = self.chrome_webdriver
        driver.get("http://localhost:8001/")
        element = driver.find_element_by_xpath("//textarea[@ref='query_text']")
        element.send_keys('{"~":["id"]}')
        element = driver.find_element_by_xpath("//button[@ref='load_json']")
        element.click()
        WebDriverWait(driver, 10).until(
            ec.visibility_of_element_located((By.XPATH, "//div[@ref='load_data_modal']")))
        element = driver.find_element_by_xpath("//textarea[@ref='url_input']")
        element.send_keys('https://jsonplaceholder.typicode.com/posts/1')
        element = driver.find_element_by_xpath("//button[@ref='load_data']")
        element.click()
        WebDriverWait(driver, 10).until(
            ec.invisibility_of_element_located((By.XPATH, "//div[@ref='load_data_modal']")))
        element = driver.find_element_by_xpath("//button[@ref='execute_query']")
        element.click()
        WebDriverWait(driver, 10).until(
            ec.visibility_of_element_located((By.XPATH, "//table[@ref='data_table']")))
        element = driver.find_element_by_xpath("//table[@ref='data_table']")
        assert "dataTable" in element.get_attribute("class")

    def tearDown(self):
        self.chrome_webdriver.close()
