#coding=utf-8
# -*- coding: utf_8 -*-

from selenium import webdriver
from xmllib import newline
from time import sleep
from pip._vendor.urllib3.util import url
from __builtin__ import True
from idlelib.IOBinding import encoding
from idlelib.ReplaceDialog import replace

driver=webdriver.Firefox(executable_path=r'c:\Python27\geckodriver.exe')

import sys
from collections import OrderedDict
from sys import getdefaultencoding
import codecs
import time
import requests
import re
from selenium.webdriver.common.keys import Keys
from add_ff import get_profile_path
import csv
from datetime import timedelta,date

categoris={u"Здания и сооружения топливно-энергетических, металлургических, химических и нефтехимических предприятий":7,
u"Здания и сооружения машиностроительных предприятий":7,
u"Здания и сооружения предприятий лесной, деревообрабатывающей, целлюлозно-бумажной, стекольной, фарфоро-фаянсовой, полиграфической промышленности и предприятий промышленности строительных материалов":7,
u"Здания предприятий легкой, пищевой, микробиологической, мукомольно-крупяной, комбикормовой и медицинской промышленности":7,
u"Здания и сооружения сельскохозяйственных предприятий и предприятий лесного хозяйства":7,
u"Здания и сооружения предприятий строительной индустрии, транспорта и связи":7,
u"Здания и сооружения предприятий торговли,общественного питания, жилищно-коммунального хозяйства":7,
u"Здания предприятий здравоохранения, науки и научного обслуживания, образования,культуры и искусства":7,
u"Исторические памятники":7,
u"Здания для органов государственного управления, обороны, государственной безопасности, финансов и иностранных представительств":7,
u"Сооружения - металлические конструкции. Сооружения хозяйственные металлические":7,
u"Ограды (заборы), кроме металлических":23,
u"Сооружения спортивно-оздоровительные":7,
u"Незавершенное строительство":7,
u"Здания (кроме жилых) и сооружения, не включенные в другие группировки":7,
u"Жилые здания (помещения)":6,
u"Здания (помещения) жилые, не входящие в жилищный фонд":6,
u"Предприятия, как имущественный комплекс":9,
u"Незавершенное строительство - конструкции, сооружения, здания":7,
u"Вентиляционное и климатическое оборудование":23,
u"Грузоподъемное оборудование и комплектующие":10,
u"Измерительное оборудование, инструмент и комплектующие":10,
u"Клининговое оборудование, комплектующие, инструмент":10,
u"Компьютерное оборудование, комплектующие и программное обеспечение":23,
u"Котельное оборудование, инструмент, комплектующие":10,
u"Медицинское оборудование, комплектующие и инструмент":10,
u"Металлообрабатывающее оборудование, комплектующие, инструмент":10,
u"Насосное оборудование, комлектующие, сопутствующие":23,
u"Оборудование для предприятий общественного питания, комплектующие и инструмент":10,
u"Оборудование, комплектующие и инструмент для ремонта и обслуживания транспорта":10,
u"Офисная техника, оргтехника и комплектующие":23,
u"Пожарно-охранное оборудование, комплектующие и инструмент":23,
u"Полиграфическое оборудование, комплектующие и инструмент":10,
u"Производственное, промышленное оборудование, комплектующие и инструмент":10,
u"Санитарно-техническое оборудование, комплектующие и инструмент":23,
u"Спортивное, косметологическое оборудование, комплектующие":23,
u"Средства связи, комплектующие и инструмент":23,
u"Строительно-отделочное оборудование, комплектующие и инструмент":10,
u"Торгово-складское оборудование, инструмент и комплектующие":23,
u"Электрооборудование, комплектующие и инструмент":23,
u"Электродвигатели, генераторы и трансформаторы силовые":23,
u"Машины и оборудование прочие, не включенные в другие группировки":10,
u"Оружие спортивное, охотничье и военная техника двойного применения":23,
u"Техника электронно-вычислительная":23,
u"Приборы для научных исследований":23,
u"Мебель специальная для производств":23,
u"Приборы бытовые":23,
u"Оборудование металлическое для сохранности ценностей (сейфы, несгораемые шкафы, бронированные двери и камеры":23,
u"Оборудование учебное":23,
u"Инвертарь спортивный":23,
u"Инвертарь для театрально-зрелищных учереждений и учереждений культуры":23,
u"Часы (кроме специальных)":23,
u"Тара функциональная, емкости, контейнеры":23,
u"Инвентарь хозяйственно-бытового назначения":23,
u"Мотоциклы, мотороллеры, мопеды и прицепы к ним":5,
u"Аппараты летательные космические":5,
u"Велосипеды и коляски инвалидные":5,
u"Прицепы и полуприцепы, фургоны":4,
u"Суда спортивные, туристские и прогулочные, водно-моторный транспорт":5,
u"Средства транспортные железнодорожные":5,
u"Аппараты летательные воздушные":5,
u"Автомобили":1,
u"Суда торговые и пассажирские":5,
u"Средства транспортные прочие, не включенные в другие группировки":5,
u"Автобусы, микроавтобусы":2,
u"Автозапчасти и сопутствующие товары":23,
u"Специализированная техника":3,
u"Животные звероферм":22,
u"Продукция скотоводства":21,
#u"Животные зоопарков, цирков, служебные собаки":22,
u"Продукция птицеводства":21,
u"Продукция овцеводства, козоводства, кролиководства, коневодства, оленеводства, верблюдоводства":21,
u"Продукция пчелеводства, шмелеводства, шелководства":21,
u"Продукция рыбоводства":21,
u"Удобрения растительного происхождения":21,
u"Корма растительные":21,
u"Растения. Луковицы, семена, саженцы, насаждения многолетние, культуры":21,
u"Земельные участки":8,
u"Участки недр":8,
u"Естественные биологические и водные ресурсы":8,
u"Сырье топливно-энергетическое":23,
u"Сырье минеральное":23,
u"Сырье органическое":23,
u"Сырье искусственное и синтетическое":23,
u"Сырье вторичное. Отходы. Лом":23,
u"Материалы для упаковки и хранения":23,
u"Материалы текстильные. Кожа. Фурнитура":23,
u"Полимерные материалы и изделия. Асбестотехнические изделия":23,
u"Строительные материалы кроме железобетонных конструкций":23,
u"Материалы лакокрасочные, полупродукты, кино-, фото- и магнитные материалы и товары бытовой химии":23,
u"Чугун, ферросплавы, лигатуры, сталь":23,
u"Металлоизделия промышленного назначения. Металлопродукция. Металлопрокат. Арматура трубопроводная":23,
u"Прокат цветных металлов":23,
u"Реактивы химические и вещества высокочистые":23,
u"Продукция целлюлозно-бумажной промышленности":23,
u"Продукция лесозаготовительной и лесопильно-деревообрабатывающей промышленности, фанерного производства":23,
u"Продукция химического и нефтяного машиностроения":23,
u"Продукция общемашиностроительного применения":23,
u"Взрывные устройства и взрывчатые вещества народнохозяйственного назначения":23,
u"Химико-фармацевтическое сырье, продукция медицинского назначения":23,
u"Аудио-видео-фото техника и комплектующие":23,
u"Бытовая химия, моющие средства":23,
u"Галантерея, сувениры, подарки":23,
u"Зоотовары":23,
u"Игрушки, игры":23,
u"Канцелярские товары, офисные принадлежности":23,
u"Ковры, паласы":23,
u"Мебель и комплектующие":23,
u"Обувь":23,
u"Одежда, спецодежда":23,
u"Оптические приборы":23,
u"Парфюмерия, косметика, средства гигиены":23,
u"Печатная, рекламная продукция":23,
u"Текстиль для дома. Постельные принадлежности, полотенца":23,
u"Посуда, сопутствующие товары":23,
u"Прочие товары":23,
u"Растения, цветы, сопутствующие товары":23,
u"Ткани, фурнитура":23,
u"Товары для дачи, сада":23,
u"Карнизы, гардины, жалюзи":23,
u"Книги, предметы искусства, издания":23,
u"Продукция пищевой промышленности. продукция мясной, молочной, рыбной, мукомольно-крупяной, комбикормовой и микробиологической промышленности":23,
u"ОРИГИНАЛЬНЫЕ ПРОИЗВЕДЕНИЯ РАЗВЛЕКАТЕЛЬНОГО ЖАНРА, ЛИТЕРАТУРЫ ИЛИ ИСКУССТВА":23,
u"Базы данных":27,
u"Системные и прикладные программные средства":27,
u"Наукоемкие промышленные технологии в области электронной техники":27,
u"Наукоемкие промышленные технологии в области спецхимии":27,
u"Биотехнологии":27,
u"Наукоемкие промышленные технологии в области ракетно-космической техники":27,
u"Наукоемкие промышленные технологии в области атомной техники":27,
u"Наукоемкие промышленные технологии в области судостроения":27,
u"Наукоемкие промышленные технологии в области радиотехники и средств связи":27,
u"Наукоемкие промышленные технологии в прочих областях":27,
u"Наукоемкие промышленные технологии в области авиастроения и авиационной техники":27,
u"ГЕОЛОГОРАЗВЕДОЧНЫЕ РАБОТЫ":27,
u"Секреты производства («ноу-хау»)":27,
u"Патенты":27,
u"Торговые знаки":27,
u"Топологии интегральных микросхем":27,
u"Права требования на краткосрочные долговые обязательства (дебиторская задолженность)":27,
u"ценные бумаги":27,
u"титулы собственности на капитал (акции и другие финансовые инструменты, подтверждающие заключение сделки по поводу движения финансовых ресурсов)":27,
u"Уступка требований по кредитным обязательствам":24,
#u"Права долевой собственности":,
u"Право хозяйственного ведения имуществом":7,
u"Право оперативного управления имуществом":7,
u"Право пожизенного наследуемого владения земельным участком":8,
u"Право постояннного(бессрочного) пользования земельным участком":8,
#u"Сервитут":,
#u"Право аренды":,
u"Уступка требований по кредитным обязательствам с залоговым имуществом":24,
#u"Прочее":
}
print len(categoris)
print categoris


class FedresData:
    def __init__(self):
              
        firefoxProfile = get_profile_path("default")
        self.driver = webdriver.Firefox()
                        
    def Stop(self):
       
        self.driver.quit()
        self.driver2.quit()
        
    def GetPrice(self):
        
        try:
            arrayStPr= []
            arrayEndPr=[]
            arrayCateg=[]
            arrayVid=[]
            arrayReg=[]
            filename=open("1.txt",'r')
            link=filename.readline()
            filename1=codecs.open(u"Torgi.txt",'a+','utf-8')
            
            def log(str):
                filename1.write(str + u'\n')
           
            fl=True
            while link: 
                fl=True
                print link
                
                curPage=1
                
                while fl==True:
                    try:                        
                        self.driver.get(link)
                        time.sleep(2.5)
                        i=0                        
                        fl=True                    

                        while i!=None:
                            
                            print ("i:",i)
                            print "CHISTKA"
                            arrayReg=[]                            
                            arrayCateg=[]                          
                            arrayStPr=[]                            
                            arrayEndPr=[]                                                                                                     
                            arrayVid=[] 
                            
                            #category                            
                            category=self.driver.find_element_by_xpath(".//tr[@id='ctl00_cphBody_lvLotList_ctrl"+str(i)+"_trClassification']//td[@colspan='2']")
                            ct=category.get_attribute("textContent").strip().replace('\t', "").replace('\n', "")
                            time.sleep(1.5)
                            #print ct
                            if ct!="":
                                try:                                
                                    
                                    for c in categoris.keys():
                                        
                                        try:
                                            
                                            if ct.find(c)>0:
                                                
                                                ct = str(categoris[c])
                                                print ct
                                                arrayCateg.append(ct)
                                                print "Zapisal"
                                                
                                            else:
                                              link=filename.readline()                               
                                              
                                                
                                        except:
                                            print(sys.exc_info())
                                except:
                                    print(sys.exc_info())    
                            
                             #Region
                            try:
                                region=self.driver.find_element_by_id("ctl00_cphBody_lnkDebtor").click()
                                time.sleep(2)
                                rg=self.driver.find_element_by_id("ctl00_cphBody_lblRegion")
                                rgg=rg.get_attribute("textContent").strip().replace('\t',"").replace('\n',"").replace(" ", "")
                                if (rgg==u"г.Москва" or rgg==u"Московскаяобласть"):
                                    rgg="1"
                                else:
                                    rgg="0"
                                print rgg
                                arrayReg.append(rgg)
                                self.driver.get(link)
                                time.sleep(1)
                                
                            except:
                                print(sys.exc_info())
                            
                               #VID
                            try:
                                vid=self.driver.find_element_by_xpath(".//tr[@id='ctl00_cphBody_trTradeType']")
                                vd=vid.get_attribute("textContent").strip().replace('\t', "").replace('\n', "").replace(" ", "").replace(u"Видторгов", "")
                                time.sleep(2)
                                if(vd==u"Открытыйаукцион"):
                                    vd="0"
                                else:
                                    vd="1"
                                    
                                print vd
                                arrayVid.append(vd)
                            except:
                                print(sys.exc_info())                                                       
                                
                                #startprice                                
                            try:    
                                time.sleep(0.2)                               
                                priceStart=self.driver.find_element_by_xpath(".//tr[@id='ctl00_cphBody_lvLotList_ctrl"+str(i)+"_trStartPrice']//td[@class='StaticText']")                          
                                time.sleep(1)
                                pr=priceStart.get_attribute("textContent").strip().replace('\t',"").replace('\n',"")
                                
                                print pr
                                arrayStPr.append(pr)
                                
                            except:
                                pr="0"
                                print pr
                                arrayStPr.append(pr)
                                
                                   #finalprice
                            try:
                                priceFinal=self.driver.find_element_by_xpath(".//tr[@id='ctl00_cphBody_lvLotList_ctrl"+str(i)+"_trPrice']//td[@class='StaticText']")
                                time.sleep(1)
                                pr1=priceFinal.get_attribute("textContent").strip().replace('\t',"").replace('\n',"")
                                print pr1
                                arrayEndPr.append(pr1)
                            except:
                                    
                                pr1="0"
                                print pr1
                                arrayEndPr.append(pr1)                                        
                            
                           #PAGERS
                            try:
                                pager = link.find_element_by_xpath(".//tr[@class='pager']")#страницы
                                
                            except:
                                pager = None
                            fl = False
                            if pager!=None:
                                els = pager.find_elements_by_xpath(".//a[@href]")
                                print els    
                                curPage+=1
                                fs = "Page$"+str(curPage)+"')"
                                print fs 
                                for link in els:
                                    print link.get_attribute("href")
                                    if link.get_attribute("href").find(fs)>0:
                                        try:
                                            link.click()
                                            time.sleep(1)
                                            fl = True
                                            print fl
                                            print "after click"
                                            break
                                        except:
                                            print "error click nexpage"
                                            fl = False                          
                                                                           
                            else:                                
                                fl = False
                                print fl
                            print fl   
                            print "ZAPIS V ARRAY"   
                            time.sleep(1)
                            try:
                                                             
                                for rgg in arrayReg:
                                    filename1.write(rgg+";")
                                    print rgg+"-Zapisano"
                                time.sleep(0.2)
                                for vd in arrayVid:
                                    filename1.write(vd+";")
                                    print vd+"-Zapisano"
                                time.sleep(0.2)
                                for ct in arrayCateg:      
                                    filename1.write(str(ct)+";")  
                                    print ct+"-Zapisano"
                                time.sleep(0.2)                            
                                for pr in arrayStPr:
                                    filename1.write(pr+";")
                                    print pr+"-Zapisano"
                                time.sleep(0.2)
                                for pr1 in arrayEndPr:
                                    filename1.write(pr1+";"+'\n')
                                    print pr1+"-Zapisano"                                           
                                time.sleep(0.2)     
                                
                            except:
                                print(sys.exc_info())
                                                                  
                            i=i+1
                            
                    except:                    
                        fl=False
                        print(sys.exc_info())                    
                    
                link=filename.readline()                               
            filename1.close()
            
        except:
            print(sys.exc_info()) 
            
            #Публичное предложение  
    def GetVidPubl(self):
        try:            
            self.driver.get("http://bankrot.fedresurs.ru/TradeList.aspx")
            time.sleep(0.5)
            
            el=self.driver.find_element_by_id("ctl00_cphBody_ucTradeType_ddlBoundList")            
            el.send_keys(Keys.ARROW_DOWN)
            el.send_keys(Keys.ARROW_DOWN)
            el.send_keys(Keys.ARROW_DOWN)
            
            time.sleep(0.5)
            
            el1=self.driver.find_element_by_id("ctl00_cphBody_ucTradeStatus_ddlBoundList")
            el1.send_keys(Keys.ARROW_DOWN)
            el1.send_keys(Keys.ARROW_DOWN)
            el1.send_keys(Keys.ARROW_DOWN)
            el1.send_keys(Keys.ARROW_DOWN)
            el1.send_keys(Keys.ARROW_DOWN)
            el1.send_keys(Keys.ARROW_DOWN)            
            time.sleep(0.5)
            
           # btn=self.driver.find_element_by_id("ctl00_cphBody_btnTradeSearch").click()
           # time.sleep(0.5)          
            
            i=670
            
            while i<735:#по датам
                fl=True
                
                curPage = 1
                el=self.driver.find_element_by_id("ctl00_cphBody_gvTradeList")
                

                t=date.today()
                t=t-timedelta(days=i)
                t=t.strftime("%d.%m.%Y")
                z=self.driver.find_element_by_id("ctl00_cphBody_cldrBeginDate_tbSelectedDate")
                
                z.clear()
                z.send_keys(t)
                time.sleep(2)
                
                tt1=date.today()
                tt1=tt1-timedelta(days=i)
                tt1=tt1.strftime("%d.%m.%Y")
                z1=self.driver.find_element_by_id("ctl00_cphBody_cldrEndDate_tbSelectedDate")
                
                z1.clear()
                z1.send_keys(tt1)
                time.sleep(2)
                
                
                btn=self.driver.find_element_by_id("ctl00_cphBody_btnTradeSearch").click()
                time.sleep(1)
                
                while fl==True:
                    arr=[]
                    try:
                        
                        print 0
                        time.sleep(2)
                        el=self.driver.find_element_by_id("ctl00_cphBody_gvTradeList")#список всех тогов 
                        print "00"
                        links = el.find_elements_by_xpath(".//a[@href]")
                        time.sleep(2)
                        for link in links:#собираем ссылки на торги
                            
                            txt=link.get_attribute("href")
                            
                            if txt.find("TradeCard")>0:
                                arr.append(txt)
                        print 1    
                        try:
                            pager = el.find_element_by_xpath(".//tr[@class='pager']")#страницы
                            
                        except:
                            pager = None
                        print 3
                        fl = False
                        time.sleep(1)
                        if pager!=None:
                            els = pager.find_elements_by_xpath(".//a[@href]")
                            print len(els)    
                            curPage+=1
                            fs = "Page$"+str(curPage)+"')"
                            time.sleep(2)
                            print fs 
                            for el in els:
                                print el.get_attribute("href")
                                if el.get_attribute("href").find(fs)>0:
                                    try:
                                        el.click()
                                        time.sleep(7)
                                        fl = True
                                        print fl
                                        print "after click"
                                        break
                                    except:
                                        print "error click nexpage"
                                        fl = False
                                        break
                                
                                    
                        else:
                            
                            fl = False
                            
                        print fl
                        print "ARRAY:",arr
                        #запись в txt
                        try:
                            
                            filename=open('parse1.txt','a+')
                            print "OPEN FILE"
                            f=filename.readlines()
                            print "READ"
                            for txt in arr:
                                                                                               
                                if txt in f:
                                    print "such link already exists!!!!!!!!!!!!! \n"
                                    
                                else:
                                    print txt                                   
                                    filename.write(txt+'\n')
                                                                                
                        except:
                            print(sys.exc_info())
                       
                                                     
                    except:
                        time.sleep(1)
                        print(sys.exc_info())
                        #break
                time.sleep(5)
                i+=1
                print "i=",i
                               
        except:            
            print(sys.exc_info())
            
            #Открытый аукцион
    def GetVidOtkr(self):
        try:
            
            self.driver2.get("http://bankrot.fedresurs.ru/TradeList.aspx")
            time.sleep(0.5)
            
            el=self.driver2.find_element_by_id("ctl00_cphBody_ucTradeType_ddlBoundList")            
            el.send_keys(Keys.ARROW_DOWN)
            
            time.sleep(0.5)
            
            el1=self.driver2.find_element_by_id("ctl00_cphBody_ucTradeStatus_ddlBoundList")
            el1.send_keys(Keys.ARROW_DOWN)
            el1.send_keys(Keys.ARROW_DOWN)
            el1.send_keys(Keys.ARROW_DOWN)
            el1.send_keys(Keys.ARROW_DOWN)
            el1.send_keys(Keys.ARROW_DOWN)
            el1.send_keys(Keys.ARROW_DOWN)            
            time.sleep(0.5)
            
            #btn=self.driver.find_element_by_id("ctl00_cphBody_btnTradeSearch").click()
            #time.sleep(0.5)          
            
            i=671#days
            
            while i<735:#по датам
                fl=True
                curPage = 1
                el=self.driver2.find_element_by_id("ctl00_cphBody_gvTradeList")
                t=date.today()
                t=t-timedelta(days=i)
                t=t.strftime("%d.%m.%Y")
                z=self.driver2.find_element_by_id("ctl00_cphBody_cldrBeginDate_tbSelectedDate")
                z.clear()
                z.send_keys(t)
                time.sleep(2)
                
                tt1=date.today()
                tt1=tt1-timedelta(days=i)
                tt1=tt1.strftime("%d.%m.%Y")
                z1=self.driver2.find_element_by_id("ctl00_cphBody_cldrEndDate_tbSelectedDate")
                z1.clear()
                z1.send_keys(tt1)
                
                time.sleep(2)
                btn=self.driver2.find_element_by_id("ctl00_cphBody_btnTradeSearch").click()
                time.sleep(1)
                while fl==True:
                    
                    try:
                        arr=[]
                        time.sleep(2)
                        el=self.driver2.find_element_by_id("ctl00_cphBody_gvTradeList")#список всех тогов 
                        links = el.find_elements_by_xpath(".//a[@href]")
                        time.sleep(2)
                        for link in links:#собираем ссылки на торги
                            
                            txt=link.get_attribute("href")
                            
                            if txt.find("TradeCard")>0:
                                arr.append(txt)
                            
                        try:
                            pager = el.find_element_by_xpath(".//tr[@class='pager']")#страницы
                            
                        except:
                            pager = None
                        fl = False
                        
                        if pager!=None:
                            els = pager.find_elements_by_xpath(".//a[@href]")
                            print len(els)    
                            curPage+=1
                            fs = "Page$"+str(curPage)+"')"
                            print fs 
                            for el in els:
                                print el.get_attribute("href")
                                if el.get_attribute("href").find(fs)>0:
                                    try:
                                        el.click()
                                        time.sleep(7)
                                        fl = True
                                        print fl
                                        print "after click"
                                        break
                                    except:
                                        print "error click nexpage"
                                        fl = False
                                        
                                
                                    
                        else:
                            
                            fl = False
                            
                        print fl
                        print arr
                        time.sleep(2)
                        try:
                            
                            filename=open('parse.txt','a+')
                            print "OPEN FILE"
                            f=filename.readlines()
                            print "READ"
                            
                            for txt in arr:
                                print txt
                                filename.write(txt+'\n')
                                   
                        except:
                            print(sys.exc_info())
                            #break
                                                     
                    except:
                        time.sleep(2)
                        print(sys.exc_info())
                        break
                print "i=",i
                time.sleep(2)
                i+=1
                               
        except:            
            print(sys.exc_info())
