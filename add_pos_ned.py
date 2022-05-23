import json
import requests
import time
import sys

res = requests.get("https://www.heveya.ru/parse/add_kad_num.php", verify=False)
arr = res.json()
cnt = len(arr)
print(cnt)

l = list(arr.keys())
print(l)
l.sort(reverse=True)
x = 1
for id in l:

	if x%980==0:
		time.sleep(86000)
	x+=1
	data = arr[id]
	link = data['link'];
	price = data['price']
	category = data['category']	
	photos = data['photos']
	desc = data['zag']
	desc = (desc[:55] + '...') if len(desc) > 55 else desc
	adrs = data['address']
	try:
		res = requests.get("https://geocode-maps.yandex.ru/1.x/?apikey=************************&format=json&geocode="+adrs)
		a = res.json()
		p=a['response']['GeoObjectCollection']["featureMember"][0]["GeoObject"]["Point"]['pos']
		pos=p.split()
		pos = ""+pos[0]+","+pos[1]+""
		payload={'id':id, 'position':pos, 'link':link, 'price':price, 'category':category, 'photos':photos, 'zag':desc, 'address':adrs, 'position':pos}
		print(payload)
		rr = requests.get("https://heveya.ru/parse/add_position.php", params=payload, verify=False)
		print(rr)
	except:
		print(sys.exc_info())
		continue
