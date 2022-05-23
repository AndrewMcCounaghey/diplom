#coding=utf-8
#	-*-	coding:	utf_8	-*-

from selenium import webdriver
import sys
import time
import requests
import re
from selenium.webdriver.common.keys	import Keys

import os
from requests.packages.urllib3.exceptions import InsecureRequestWarning

requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

dat={};
dat['idd']=52
u='https://www.heveya.ru/parse/clear_chet.php'
r = requests.post(u, data=dat, verify=False)
print(r)
res	=requests.get("https://www.heveya.ru/ajax/fill_db_vin.php",	verify=False)
arr	=res.json()
cnt	=len(arr)
l=list(arr.keys())
l.sort(reverse=True)
fp=webdriver.FirefoxProfile('C:\\Users\\VM\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\4rsqjdtk.parse')
driver=webdriver.Firefox(fp)
fp1 = webdriver.FirefoxProfile('C:\\Users\\VM\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\d8ka8fbp.parse2')
driver1 = webdriver.Firefox(fp1)

x=1

for	id in l:
	data=arr[id]
	print(id)

	if x%15==0:
		time.sleep(15)
	x+=1
	
	desc=data['description']
	print(desc)
	if desc.find("(Марка:")>=0:
		print("find description inn")
		continue
	
	#найдем	сами	номера
	vin=re.findall(r"([A-Z0-9]{17})+",desc)
	vin =list(set(vin))
	#vin	=	set(vin)
	i=0
	#vin_number=vin[0]
	for	vin_number in vin:
		try:
			if vin_number.find("vin") or vin_number.find("VIN")>=0:
				e=vin_number.split(u"VIN")
				vin_number= e[1]
		except:
			print("next")
		print(vin_number)
		array=[]
		
		try:
			driver.get("https://auto.ru/history/")
			t=driver.find_element_by_xpath(".//div[@class='TextInput__input TextInput__input_r8']")
			inp=t.find_element_by_xpath(".//input[@class='TextInput__control']")
			inp.send_keys(vin_number)
			driver.find_element_by_xpath(".//button[@class='Button Button_color_blue Button_size_promo Button_type_button Button_width_default VinCheckInput__button_size-h64']").click()
			time.sleep(12)
			d= driver.find_element_by_xpath(".//div[@class='VinReportPreviewDesktop__top']")
			names=d.find_element_by_xpath(".//div[@class='VinReportPreviewDesktop__mmm']").get_attribute("textContent")
			n=names.split(",")
			names=n[0]
			print(names)
			dss= d.find_element_by_xpath(".//div[@class='VinReportPreviewDesktop__info']")
			p=dss.find_elements_by_xpath(".//div[@class='VinReportPreviewDesktop__infoItemValue']")
			power=p[1].get_attribute("textContent")
			print(power)
			year=p[2].get_attribute("textContent")			
			print(year)
			
			if(names!=""):
				driver1.get("https://auto.ru/")
				time.sleep(3)
				try:
										
					txt=driver1.find_element_by_xpath(".//input[@class='TextInput__control']")
					time.sleep(3)
					txt.send_keys(names," ", year)
					time.sleep(3)
					txt.send_keys(Keys.ENTER)
					time.sleep(10)
					lots=driver1.find_elements_by_xpath(".//div[@class='ListingItem']")
					#count_lots=len(lots)
					excellent=[]
					good=[]
					default=[]
					try:
						for lot in lots:
							excellent_pr=lot.find_elements_by_xpath(".//div[@class='OfferPriceBadge OfferPriceBadge_excellent']")
							good_pr=lot.find_elements_by_xpath(".//div[@class='OfferPriceBadge OfferPriceBadge_good']")
							
							if excellent_pr!=[]:
								
								link=lot.find_element_by_xpath(".//a[@class='Link ListingItemTitle__link']").get_attribute('href')
								excellent.append(link)
								break
								
							elif good_pr!=[]:
								
								link=lot.find_element_by_xpath(".//a[@class='Link ListingItemTitle__link']").get_attribute('href')
								good.append(link)
								break
								
							else:
								
								link=lot.find_element_by_xpath(".//a[@class='Link ListingItemTitle__link']").get_attribute('href')
								default.append(link)
								break
						
						if len(excellent)>0:
							href=excellent[0]
						elif len(good)>0 :
							href=good[0]
						else:
							href=default[0]
						driver1.get(href)
						time.sleep(5)
						try:
							card_head=driver1.find_element_by_xpath(".//div[@class='CardHead']")
							top_price=card_head.find_element_by_xpath(".//span[@class='OfferPriceCaption__price']").get_attribute("textContent")
							# top_price=top_price.encode('utf-8')
						except:
							print("INFO_end1:",sys.exc_info())
					except:
							print("INFO_end2:",sys.exc_info())		
				except:
					print("INFO_end3:",sys.exc_info())
					continue
			else:
				continue
			
			if(top_price):
				try:
					payload={'name':names,'year':year,'power':power, 'avg_cost': top_price, 'vin_code':vin_number}
					rr=requests.get("https://heveya.ru/ajax/addVin.php?id="+id,	params=payload,	verify=False)
							
					print("Success")
				except:
					print(sys.exc_info())
			else:
				payload={'name':names,'year':year,'power':power,'avg_cost': '', 'vin_code':vin_number}
				rr=requests.get("https://heveya.ru/ajax/addVin.php?id="+id,	params=payload,	verify=False)
							
				print("Success")

		except:
			print("[INFO]:")
			print(sys.exc_info())
		#break

driver.close()
driver1.close()
