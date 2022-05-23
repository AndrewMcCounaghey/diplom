#coding=utf-8
#	-*-	coding:	utf_8	-*-

import requests
from bs4 import BeautifulSoup
import sys
import time
import requests
import re
import os

def kad_parse():
	res	=requests.get("https://www.heveya.ru/parse/fill_db_kadastr.php",verify=False)
	arr	=res.json()
	cnt	=len(arr)
	l=list(arr.keys())
	l.sort(reverse=True)
	for	id in l:
		data=arr[id]
		print(id)		
		
		desc=data['description']
		#найдем	сами	номера
		kads=re.findall(r"[0-9]+:[0-9]+:[0-9]+:[0-9]+", desc)
		kads =list(set(kads))
		i=0		
		for	kad_number in kads:
			kad = kad_number.replace(":", "-")
			print(kad_number)
			
			try:
				url='https://reestrgos.com/object/'+kad
				r = requests.get(url)
				time.sleep(15)
				data={}
				data['kad_num'] = kad_number
				data['count_s'] ="1 владелец"
				data['view_s']=""
				data['kad_price'] =''
				data['floor'] =''
				data['form_s'] =''
				data['type']=''
				data['address']=''
				t=""
				soup = BeautifulSoup(r.text, 'lxml')
				quotes = soup.find_all('div', class_='object__table-td')
				for i in range(0, len(quotes),1):
					q= quotes[i].text
					#print(q)
					if "Адрес полный" in q:
						data['address'] = quotes[i+1].text
					if "лощадь" in q:
						data['square'] = quotes[i+1].text
					if "Тип" in q:		
						t = quotes[i+1].text

					if t.find("земельный участок")>=0 and "атегория зем" in q:
						data['type']=quotes[i+1].text
					if t.find("земельный участок")>=0 and "орма собственн" in q:
						data['form_s'] = quotes[i+1].text
					elif t.find("земельный участок")==-1 and "Этаж" in q:
						data['type']=t
						data['floor'] = quotes[i+1].text

					if "адастровая стоимость" in q:
						data['kad_price'] = quotes[i+1].text
					if "Вид собственн" in q:
						data['view_s'] = quotes[i+1].text
					if "кол-во влад" in q:
						count_s= quotes[i+1].text
						if count_s.find("0")>=0:
							data['count_s'] = "1 владелец"
					else:
						data['count_s'] = "1 владелец"
				print(data)
			except:
				print(sys.exc_info())
				time.sleep(7)
				continue
			try:
				print(1);
				if data['address']!="":
						try:
							rr=requests.get("https://heveya.ru/parse/addKad.php?id="+id,	params=data,verify=False)
								
							print(rr)
						except:
							print(sys.exc_info())
				else:
					continue
			except:
				print(sys.exc_info())
				continue
	if cnt<100:
		pass
	else:
		kad_parse()

if __name__ == '__main__':
	kad_parse()
