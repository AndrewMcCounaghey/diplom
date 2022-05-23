var json_main = {
    "type": "FeatureCollection",
    "features": getMain()
    };
var json_car = {
    "type": "FeatureCollection",
    "features": getCar()
    };
var json_oborud = {
    "type": "FeatureCollection",
    "features": getOborud()
    };
var json_zhil = {
    "type": "FeatureCollection",
    "features": getZhil()
    };
var json_komerch = {
    "type": "FeatureCollection",
    "features": getKomerch()
    };

function getMain(){
    var obj_list = document.querySelector('#main');
    var objs_list_li = obj_list.querySelectorAll('li');
    //console.log(objs_list_li);
    var atr=[];
    var g=[];
    for(var i=0; i<objs_list_li.length; i++){
        var idd = objs_list_li[i].getAttribute('data-id');
        var position = objs_list_li[i].getAttribute('data-position');
        var pos = position.split(',');
        var link = objs_list_li[i].getAttribute('data-link');
        var price_a = objs_list_li[i].getAttribute('data-price');
        var price=String(price_a).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');;
        
        var category = objs_list_li[i].getAttribute('data-category');
        var type = objs_list_li[i].getAttribute('data-type');
        var st="";
        if (type == "-1")
            t_ico = "ico-down"
        else if (type == "-2")
            t_ico = "ico-til"
        else if (type =="1")
            t_ico = "ico-up"

        if(type == "-1" && category=="23"){
            st="1"
        }
        else if(type == "1" && category=="23"){
            st="2"
        }
        else if(type == "-2" &&  category=="23"){
            st="3"
        }
        else if(type == "-1" &&  category=="24"){
            st="4"
        }
        else if(type == "1" &&  category=="24"){
            st="5"
        }
        else if(type == "-2" &&  category=="24"){
            st="6"
        }
        else if(type == "-1" &&  (category=="20" || category=="21" || category=="22" || category=="104" || category=="61")){
            st="7"
        }
        else if(type == "1" &&  (category=="20" || category=="21" || category=="22" || category=="104" || category=="61")){
            st="8"
        }
        else if(type == "-2" &&  (category=="20" || category=="21" || category=="22" || category=="104" || category=="61")){
            st="9"
        }
        else if(type == "-1" &&  (category=="27" || category=="28" || category=="44" || category=="26" || category=="45" || category=="52" || category=="50")){
            st="10"
        }
        else if(type == "1" &&  (category=="27" || category=="28" || category=="44" || category=="26" || category=="45" || category=="52" || category=="50")){
            st="11"
        }
        else if(type == "-2" &&  (category=="27" || category=="28" || category=="44" || category=="26" || category=="45" || category=="52" || category=="50")){
            st="12"
        }
        var photos = objs_list_li[i].getAttribute('data-photos');
        var z = objs_list_li[i].getAttribute('data-zag');
        var zag = z.substr(0, 40)+"...";
        
        g = {type:"Feature", id:Number(idd), geometry: {type: "Point",coordinates:[Number(pos[1]), Number(pos[0])]},properties: {id_point:idd,balloonContentHeader: "<div class='asds' id='"+idd+"' style='display: flex;'><div class='phts' style='width:42%;'><a href='"+link+"' class='image' target='_blank'><img src='"+photos+"'></a></div><div class='sp'><span class='ico "+t_ico+"'></span><a href='"+link+"' class='image' target='_blank'><span itemprop='identifier'>"+zag+"</span></a><div class='price'>"+price+" ₽</div></div></div>"},status:st}
        atr.push(g);
        
        
    }
   
    return atr;
}
function getCar(){
    var obj_list = document.querySelector('#car');
    var objs_list_li = obj_list.querySelectorAll('li');
    //console.log(objs_list_li);
    var atr=[];
    var g=[];
    for(var i=0; i<objs_list_li.length; i++){
        var idd = objs_list_li[i].getAttribute('data-id');
        var position = objs_list_li[i].getAttribute('data-position');
        var pos = position.split(',');
        var link = objs_list_li[i].getAttribute('data-link');
        var price_a = objs_list_li[i].getAttribute('data-price');
        var price=String(price_a).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');;
        var category = objs_list_li[i].getAttribute('data-category');
        var type = objs_list_li[i].getAttribute('data-type');
        if (type == "-1")
            t_ico = "ico-down"
        else if (type == "-2")
            t_ico = "ico-til"
        else if (type =="1")
            t_ico = "ico-up"
        var photos = objs_list_li[i].getAttribute('data-photos');
        var z = objs_list_li[i].getAttribute('data-zag');
        var zag = z.substr(0, 40)+"...";

        if(type == "-1" &&  (category=="20" || category=="21" || category=="22" || category=="104" || category=="61"))
            st="7"
        else if(type == "1" &&  (category=="20" || category=="21" || category=="22" || category=="104" || category=="61"))
            st="8"
        else if(type == "-2" &&  (category=="20" || category=="21" || category=="22" || category=="104" || category=="61"))
            st="9"
        
        g = {type:"Feature", id:Number(idd), geometry: {type: "Point",coordinates:[Number(pos[1]), Number(pos[0])]},properties: {id_point:idd,balloonContentHeader: "<div class='asds' id='"+idd+"' style='display: flex;'><div class='phts' style='width:42%;'><a href='"+link+"' class='image' target='_blank'><img src='"+photos+"'></a></div><div class='sp'><span class='ico "+t_ico+"'></span><a href='"+link+"' class='image' target='_blank'><span itemprop='identifier'>"+zag+"</span></a><div class='price'>"+price+" ₽</div></div></div>"},status:st}
        atr.push(g);
        
        
    }
   
    return atr;
}
function getOborud(){
    var obj_list = document.querySelector('#oborud');
    var objs_list_li = obj_list.querySelectorAll('li');
    //console.log(objs_list_li);
    var atr=[];
    var g=[];
    for(var i=0; i<objs_list_li.length; i++){
        var idd = objs_list_li[i].getAttribute('data-id');
        var position = objs_list_li[i].getAttribute('data-position');
        var pos = position.split(',');
        var link = objs_list_li[i].getAttribute('data-link');
        var price_a = objs_list_li[i].getAttribute('data-price');
        var price=String(price_a).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');;
        var category = objs_list_li[i].getAttribute('data-category');
        var type = objs_list_li[i].getAttribute('data-type');
        if (type == "-1")
            t_ico = "ico-down"
        else if (type == "-2")
            t_ico = "ico-til"
        else if (type =="1")
            t_ico = "ico-up"
        var photos = objs_list_li[i].getAttribute('data-photos');
        var zag = objs_list_li[i].getAttribute('data-zag');

        if(type == "-1" &&  (category=="27" || category=="28" || category=="44" || category=="26" || category=="45" || category=="52" || category=="50"))
            st="10"
         else if(type == "1" &&  (category=="27" || category=="28" || category=="44" || category=="26" || category=="45" || category=="52" || category=="50"))
            st="11"
         else if(type == "-2" &&  (category=="27" || category=="28" || category=="44" || category=="26" || category=="45" || category=="52" || category=="50"))
            st="12"
        g = {type:"Feature", id:Number(idd), geometry: {type: "Point",coordinates:[Number(pos[1]), Number(pos[0])]},properties: {id_point:idd,balloonContentHeader: "<div class='asds' id='"+idd+"' style='display: flex;'><div class='phts' style='width:42%;'><a href='"+link+"' class='image' target='_blank'><img src='"+photos+"'></a></div><div class='sp'><span class='ico "+t_ico+"'></span><a href='"+link+"' class='image' target='_blank'><span itemprop='identifier'>"+zag+"</span></a><div class='price'>"+price+" ₽</div></div></div>"},status:st}
        atr.push(g);
        
        
    }
   
    return atr;
}
function getZhil(){
    var obj_list = document.querySelector('#dvizh');
    var objs_list_li = obj_list.querySelectorAll('li');
    //console.log(objs_list_li);
    var atr=[];
    var g=[];
    for(var i=0; i<objs_list_li.length; i++){
        var idd = objs_list_li[i].getAttribute('data-id');
        var position = objs_list_li[i].getAttribute('data-position');
        var pos = position.split(',');
        var link = objs_list_li[i].getAttribute('data-link');
        var price_a = objs_list_li[i].getAttribute('data-price');
        var price=String(price_a).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');;
        var category = objs_list_li[i].getAttribute('data-category');
        var type = objs_list_li[i].getAttribute('data-type');
        if (type == "-1")
            t_ico = "ico-down"
        else if (type == "-2")
            t_ico = "ico-til"
        else if (type =="1")
            t_ico = "ico-up"
        var photos = objs_list_li[i].getAttribute('data-photos');
        var z = objs_list_li[i].getAttribute('data-zag');
        var zag = z.substr(0, 40)+"...";
        if(type == "-1" && category=="23")
            st="1"
        else if(type == "1" && category=="23")
            st="2"
        else if(type == "-2" &&  category=="23")
            st="3"
        
        g = {type:"Feature", id:Number(idd), geometry: {type: "Point",coordinates:[Number(pos[1]), Number(pos[0])]},properties: {id_point:idd,balloonContentHeader: "<div class='asds' id='"+idd+"' style='display: flex;'><div class='phts' style='width:42%;'><a href='"+link+"' class='image' target='_blank'><img src='"+photos+"'></a></div><div class='sp'><span class='ico "+t_ico+"'></span><a href='"+link+"' class='image' target='_blank'><span itemprop='identifier'>"+zag+"</span></a><div class='price'>"+price+" ₽</div></div></div>"},status:st}
        atr.push(g);
        
        
    }
   
    return atr;
}
function getKomerch(){
    var obj_list = document.querySelector('#komerch');
    var objs_list_li = obj_list.querySelectorAll('li');
    ////console.log(objs_list_li);
    var atr=[];
    var g=[];
    for(var i=0; i<objs_list_li.length; i++){
        var idd = objs_list_li[i].getAttribute('data-id');
        var position = objs_list_li[i].getAttribute('data-position');
        var pos = position.split(',');
        var link = objs_list_li[i].getAttribute('data-link');
        var price_a = objs_list_li[i].getAttribute('data-price');
        var price=String(price_a).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');;
        var category = objs_list_li[i].getAttribute('data-category');
        var type = objs_list_li[i].getAttribute('data-type');
        if (type == "-1")
            t_ico = "ico-down"
        else if (type == "-2")
            t_ico = "ico-til"
        else if (type =="1")
            t_ico = "ico-up"
        var photos = objs_list_li[i].getAttribute('data-photos');
        var z = objs_list_li[i].getAttribute('data-zag');
        var zag = z.substr(0, 40)+"...";

        if(type == "-1" &&  category=="24")
            st="4"
        else if(type == "1" &&  category=="24")
            st="5"
        else if(type == "-2" &&  category=="24")
            st="6"
       
        g = {type:"Feature", id:Number(idd), geometry: {type: "Point",coordinates:[Number(pos[1]), Number(pos[0])]},properties: {id_point:idd,balloonContentHeader: "<div class='asds' id='"+idd+"' style='display: flex;'><div class='phts' style='width:42%;'><a href='"+link+"' class='image' target='_blank'><img src='"+photos+"'></a></div><div class='sp'><span class='ico "+t_ico+"'></span><a href='"+link+"' class='image' target='_blank'><span itemprop='identifier'>"+zag+"</span></a><div class='price'>"+price+" ₽</div></div></div>"},status:st}
        atr.push(g);
        
        
    }
   
    return atr;
}
var file_main = JSON.stringify(json_main);
var file_car = JSON.stringify(json_car);
var file_oborud = JSON.stringify(json_oborud);
var file_zhil = JSON.stringify(json_zhil);
var file_komerch = JSON.stringify(json_komerch);
var data={'main': file_main, 'car':file_car, 'oborud':file_oborud, 'zhil':file_zhil, 'komerch':file_komerch};
$.ajax({
    method:'POST',
    dataType: 'json',
    url: '/ajax/create_json_file_main.php', 
    cache: false,
    async: true,
    data: data,
    success: function(data) {
        
    },
    error: function(XMLHttpRequest, errorStr) {
       
    }
});

ymaps.ready(init);
var myMap;


function init () {
    myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 12,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search',
            minZoom: 3
        }),
        clusterer = new ymaps.Clusterer(),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: false,
            clusterHasBalloon: false,
        });
       
   
    zhilNedv = new ymaps.control.Button({
        data:{
        content:"Жилая недвижимость"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });    
    komerchNedv = new ymaps.control.Button(
        {
        data:{
        content:"Коммерческая недвижимость"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });    
    transpTech = new ymaps.control.Button(
        {
        data:{
        content:"Транспорт и техника"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });      
    oborud = new ymaps.control.Button({
        data:{
        content:"Оборудование"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });
    allMark = new ymaps.control.Button({
        data:{
        content:"Все"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });
    myMap.controls.add(oborud);
    myMap.controls.add(transpTech);
    myMap.controls.add(komerchNedv);
    myMap.controls.add(zhilNedv);
    myMap.controls.add(allMark);
    //выбрано всё
    allMark.state.set('selected', true);
   
    allMark.events.add('click', function(e){
               
        myMap.destroy();
        ymaps.ready(init);
       // //console.log(file_json);    
    });
    
    zhilNedv.events.add('click', function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init1(coor,zoom_));
       // //console.log(file_json);    
    });
    komerchNedv.events.add('click',function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init2(coor, zoom_));     
    });
    transpTech.events.add('click', function(e){
         var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init3(coor,zoom_));     
    });
    oborud.events.add('click', function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init4(coor, zoom_));   
    });
    //Чтобы задать опции одиночным объектам и кластерам,
    //обратимся к дочерним коллекциям ObjectManager.
    var file_json = "/assets/js/map/json_map/main.json";
    ajax_get(file_json);

    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');
    objectManager.objects.options.set('preset', 'islands#blueDotIcon');
    objectManager.clusters.options.set('preset', 'islands#blueClusterIcons');
    myMap.geoObjects.add(objectManager);
    

    // all_button.events.add('click', function (e){
    //     alert("keke");
    // });
    function ajax_get(file_json){
        //console.log(file_json);
       
        $.ajax({
            url: file_json
        }).done(function(data) {
            //console.log(data);
            objectManager.add(data);
            geoObjectsQuery = ymaps.geoQuery(data);


            // Обновляем список видимых гео-объектов при изменении видимой области.
            myMap.events.add('boundschange', function() { 
                var visibleGeoObjects = geoObjectsQuery.searchIntersect(myMap);
                var id_obj = geoObjectsQuery.get('objectId');
                // //console.log(id_obj);
                // Собираем данные из видимых гео-объектов.
                var visibleObjectsHtml = [];
                visibleGeoObjects.each(function(x) {
                    var id_obj = x.properties.get('id_point');
                    // //console.log(id_obj);
                    var iconContent = x.properties.get('balloonContentHeader');
                    visibleObjectsHtml.push('<li id="'+id_obj+'" class="point -noactive">' + iconContent + '</li>');
                });
              
            // Обновляем список.
            var visibleElement = document.getElementById('visible');
            visibleElement.innerHTML = '<ul>' + visibleObjectsHtml.join('') + '</ul>'
                });
            objectManager.objects.events.add('click', function (e) {
                var objectId=e.get('objectId');
                viewObject(objectId);
            });
            
            //при закрытии балуна
            myMap.balloon.events.add('close', function(e){
                myMap.behaviors.enable([
                    "drag", 
                    "dblClickZoom", 
                    "rightMouseButtonMagnifier",
                    "scrollZoom" 
                ]);
                document.getElementById('visible').style.display = 'inline-block';
                document.getElementById('lot_add').style.display = 'none';
            });                                       
            
            var objectState = clusterer.getObjectState(geoObjectsQuery);
            if (objectState.isClustered) {
                // Если метка находится в кластере, выставим ее в качестве активного объекта.
                // Тогда она будет "выбрана" в открытом балуне кластера.
                objectState.cluster.state.set('activeObject', geoObjectsQuery);
                clusterer.balloon.open(objectState.cluster);
                viewObject(objectId);
            } else if (objectState.isShown) {
                // Если метка не попала в кластер и видна на карте, откроем ее балун.
                geoObjectsQuery.balloon.open();
            }
            objectManager.objects.each(function(object) {
                
                if (object.status == "1") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#redHomeIcon'
                  });
                } else if(object.status == "2") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#greenHomeIcon'
                  });
                }else if(object.status == "3") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#blueHomeIcon'
                  });
                }else if(object.status == "4") {
                      objectManager.objects.setObjectOptions(object.id, {
                        preset: 'islands#redFactoryIcon'
                      });
                }else if(object.status == "5") {
                      objectManager.objects.setObjectOptions(object.id, {
                        preset: 'islands#greenFactoryIcon'
                      });
                }else if(object.status == "6") {
                      objectManager.objects.setObjectOptions(object.id, {
                        preset: 'islands#blueFactoryIcon'
                      });
                }else if(object.status == "7") {
                      objectManager.objects.setObjectOptions(object.id, {
                        preset: 'islands#redAutoIcon'
                      });
                }else if(object.status == "8") {
                      objectManager.objects.setObjectOptions(object.id, {
                        preset: 'islands#greenAutoIcon'
                      });
                }else if(object.status == "9") {
                      objectManager.objects.setObjectOptions(object.id, {
                        preset: 'islands#blueAutoIcon'
                      });
                }else if(object.status == "10") {
                      objectManager.objects.setObjectOptions(object.id, {
                        preset: 'islands#redRepairShopIcon'
                      });
                }else if(object.status == "11") {
                      objectManager.objects.setObjectOptions(object.id, {
                        preset: 'islands#greenRepairShopIcon'
                      });
                }else if(object.status == "12") {
                      objectManager.objects.setObjectOptions(object.id, {
                        preset: 'islands#blueRepairShopIcon'
                      });
                }

            });
        });
    }

    function viewObject(objectId){
        var el = document.getElementById(objectId);
        myMap.behaviors.disable([
            'drag',
            'scrollZoom'
            ]);
        //левая часть

        var element = document.querySelectorAll('div[id="'+objectId+'"]');
        var lot = document.getElementById('lot_add');     
        lot.innerHTML = element[0].outerHTML;
        document.getElementById(objectId).style.display = null;
        document.getElementById('visible').style.display = 'none';
        document.getElementById('lot_add').style.display = 'inline-block';
                    
    }
}

function init1 (coor, zoom_) {
    myMap = new ymaps.Map('map', {
            center: coor,
            zoom: zoom_,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search',
            minZoom: 3
        }),
        clusterer = new ymaps.Clusterer(),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: false,
            clusterHasBalloon: false,
        });
       
    //кнопки
    // all_button = new ymaps.control.Button("Все");
    // myMap.controls.add(all_button);
    zhilNedv = new ymaps.control.Button({
        data:{
        content:"Жилая недвижимость"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });    
    komerchNedv = new ymaps.control.Button(
        {
        data:{
        content:"Коммерческая недвижимость"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });    
    transpTech = new ymaps.control.Button(
        {
        data:{
        content:"Транспорт и техника"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });      
    oborud = new ymaps.control.Button({
        data:{
        content:"Оборудование"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });
    allMark = new ymaps.control.Button({
        data:{
        content:"Все"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });
    myMap.controls.add(oborud);
    myMap.controls.add(transpTech);
    myMap.controls.add(komerchNedv);
    myMap.controls.add(zhilNedv);
    myMap.controls.add(allMark);
       
   allMark.events.add('click', function(e){
               
        myMap.destroy();
        ymaps.ready(init);
       // //console.log(file_json);    
    });
    
    zhilNedv.events.add('click', function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init1(coor,zoom_));
       // //console.log(file_json);    
    });
    komerchNedv.events.add('click',function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init2(coor, zoom_));     
    });
    transpTech.events.add('click', function(e){
         var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init3(coor,zoom_));     
    });
    oborud.events.add('click', function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init4(coor, zoom_));   
    });
  

    zhilNedv.state.set('selected', true);

    var file_json = "/assets/js/map/json_map/zhil.json";
    ajax_get(file_json);
  
   
    //Чтобы задать опции одиночным объектам и кластерам,
    //обратимся к дочерним коллекциям ObjectManager.
    

    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');
    objectManager.objects.options.set('preset', 'islands#blueDotIcon');
    objectManager.clusters.options.set('preset', 'islands#blueClusterIcons');
    myMap.geoObjects.add(objectManager);
    

    // all_button.events.add('click', function (e){
    //     alert("keke");
    // });
    function ajax_get(file_json){
        //console.log(file_json);
       
        $.ajax({
            url: file_json
        }).done(function(data) {
            //console.log(data);
            objectManager.add(data);
            geoObjectsQuery = ymaps.geoQuery(data);
            objectManager.objects.each(function(object) {
                if (object.status == "1") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#redHomeIcon'
                  });
                } else if(object.status == "2") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#greenHomeIcon'
                  });
                }else if(object.status == "3") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#blueHomeIcon'
                  });
              }
          });
            // Обновляем список видимых гео-объектов при изменении видимой области.
            myMap.events.add('boundschange', function() { 
                var visibleGeoObjects = geoObjectsQuery.searchIntersect(myMap);
                var id_obj = geoObjectsQuery.get('objectId');
                // //console.log(id_obj);
                // Собираем данные из видимых гео-объектов.
                var visibleObjectsHtml = [];
                visibleGeoObjects.each(function(x) {

                    var id_obj = x.properties.get('id_point');
                    // //console.log(id_obj);
                    var iconContent = x.properties.get('balloonContentHeader');
                    visibleObjectsHtml.push('<li id="'+id_obj+'" class="point -noactive">' + iconContent + '</li>');
                });
              
            // Обновляем список.
            var visibleElement = document.getElementById('visible');
            visibleElement.innerHTML = '<ul>' + visibleObjectsHtml.join('') + '</ul>'
                });
            objectManager.objects.events.add('click', function (e) {
                var objectId=e.get('objectId');
                viewObject(objectId);
            });
            
            //при закрытии балуна
            myMap.balloon.events.add('close', function(e){
                myMap.behaviors.enable([
                    "drag", 
                    "dblClickZoom", 
                    "rightMouseButtonMagnifier",
                    "scrollZoom" 
                ]);
                document.getElementById('visible').style.display = 'inline-block';
                document.getElementById('lot_add').style.display = 'none';
            });                                       
            
            var objectState = clusterer.getObjectState(geoObjectsQuery);
            if (objectState.isClustered) {
                // Если метка находится в кластере, выставим ее в качестве активного объекта.
                // Тогда она будет "выбрана" в открытом балуне кластера.
                objectState.cluster.state.set('activeObject', geoObjectsQuery);
                clusterer.balloon.open(objectState.cluster);
                viewObject(objectId);
            } else if (objectState.isShown) {
                // Если метка не попала в кластер и видна на карте, откроем ее балун.
                geoObjectsQuery.balloon.open();
            }
            
        });
    }

    function viewObject(objectId){
        var el = document.getElementById(objectId);
        myMap.behaviors.disable([
            'drag',
            'scrollZoom'
            ]);
        //левая часть

        var element = document.querySelectorAll('div[id="'+objectId+'"]');
        var lot = document.getElementById('lot_add');     
        lot.innerHTML = element[0].outerHTML;
        document.getElementById(objectId).style.display = null;
        document.getElementById('visible').style.display = 'none';
        document.getElementById('lot_add').style.display = 'inline-block';
                    
    }
}
function init2 (coor, zoom_) {
    myMap = new ymaps.Map('map', {
            center: coor,
            zoom: zoom_,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search',
            minZoom: 3
        }),
        clusterer = new ymaps.Clusterer(),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: false,
            clusterHasBalloon: false,
        });
       
    //кнопки
    // all_button = new ymaps.control.Button("Все");
    // myMap.controls.add(all_button);
    zhilNedv = new ymaps.control.Button({
        data:{
        content:"Жилая недвижимость"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });    
    komerchNedv = new ymaps.control.Button(
        {
        data:{
        content:"Коммерческая недвижимость"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });    
    transpTech = new ymaps.control.Button(
        {
        data:{
        content:"Транспорт и техника"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });      
    oborud = new ymaps.control.Button({
        data:{
        content:"Оборудование"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });
    allMark = new ymaps.control.Button({
        data:{
        content:"Все"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });
    myMap.controls.add(oborud);
    myMap.controls.add(transpTech);
    myMap.controls.add(komerchNedv);
    myMap.controls.add(zhilNedv);
    myMap.controls.add(allMark);
       
    allMark.events.add('click', function(e){
               
        myMap.destroy();
        ymaps.ready(init);
       // //console.log(file_json);    
    });
    
    zhilNedv.events.add('click', function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init1(coor,zoom_));
       // //console.log(file_json);    
    });
    komerchNedv.events.add('click',function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init2(coor, zoom_));     
    });
    transpTech.events.add('click', function(e){
         var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init3(coor,zoom_));     
    });
    oborud.events.add('click', function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init4(coor, zoom_));   
    });
  

    komerchNedv.state.set('selected', true);

    var file_json = "/assets/js/map/json_map/komerch.json";
    ajax_get(file_json);
  
    //Чтобы задать опции одиночным объектам и кластерам,
    //обратимся к дочерним коллекциям ObjectManager.
    

    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');
    objectManager.objects.options.set('preset', 'islands#blueDotIcon');
    objectManager.clusters.options.set('preset', 'islands#blueClusterIcons');
    myMap.geoObjects.add(objectManager);
    

    // all_button.events.add('click', function (e){
    //     alert("keke");
    // });
    function ajax_get(file_json){
        //console.log(file_json);
       
        $.ajax({
            url: file_json
        }).done(function(data) {
            
            objectManager.add(data);
            geoObjectsQuery = ymaps.geoQuery(data);
            objectManager.objects.each(function(object) {
                if (object.status == "4") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#redFactoryIcon'
                  });
                } else if(object.status == "5") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#greenFactoryIcon'
                  });
                }else if(object.status == "6") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#blueFactoryIcon'
                  });
              }
          });
            // Обновляем список видимых гео-объектов при изменении видимой области.
            myMap.events.add('boundschange', function() { 
                var visibleGeoObjects = geoObjectsQuery.searchIntersect(myMap);
                var id_obj = geoObjectsQuery.get('objectId');
                // //console.log(id_obj);
                // Собираем данные из видимых гео-объектов.
                var visibleObjectsHtml = [];
                visibleGeoObjects.each(function(x) {
                    var id_obj = x.properties.get('id_point');
                    // //console.log(id_obj);
                    var iconContent = x.properties.get('balloonContentHeader');
                    visibleObjectsHtml.push('<li id="'+id_obj+'" class="point -noactive">' + iconContent + '</li>');
                });
              
            // Обновляем список.
            var visibleElement = document.getElementById('visible');
            visibleElement.innerHTML = '<ul>' + visibleObjectsHtml.join('') + '</ul>'
                });
            objectManager.objects.events.add('click', function (e) {
                var objectId=e.get('objectId');
                viewObject(objectId);
            });
            
            //при закрытии балуна
            myMap.balloon.events.add('close', function(e){
                myMap.behaviors.enable([
                    "drag", 
                    "dblClickZoom", 
                    "rightMouseButtonMagnifier",
                    "scrollZoom" 
                ]);
                document.getElementById('visible').style.display = 'inline-block';
                document.getElementById('lot_add').style.display = 'none';
            });                                       
            
            var objectState = clusterer.getObjectState(geoObjectsQuery);
            if (objectState.isClustered) {
                // Если метка находится в кластере, выставим ее в качестве активного объекта.
                // Тогда она будет "выбрана" в открытом балуне кластера.
                objectState.cluster.state.set('activeObject', geoObjectsQuery);
                clusterer.balloon.open(objectState.cluster);
                viewObject(objectId);
            } else if (objectState.isShown) {
                // Если метка не попала в кластер и видна на карте, откроем ее балун.
                geoObjectsQuery.balloon.open();
            }
            
        });
    }

    function viewObject(objectId){
        var el = document.getElementById(objectId);
        myMap.behaviors.disable([
            'drag',
            'scrollZoom'
            ]);
        //левая часть

        var element = document.querySelectorAll('div[id="'+objectId+'"]');
        var lot = document.getElementById('lot_add');     
        lot.innerHTML = element[0].outerHTML;
        document.getElementById(objectId).style.display = null;
        document.getElementById('visible').style.display = 'none';
        document.getElementById('lot_add').style.display = 'inline-block';
                    
    }
}
function init3 (coor,zoom_) {
    myMap = new ymaps.Map('map', {
            center: coor,
            zoom: zoom_,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search',
            minZoom: 3
        }),
        clusterer = new ymaps.Clusterer(),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: false,
            clusterHasBalloon: false,
        });
       
    //кнопки
    // all_button = new ymaps.control.Button("Все");
    // myMap.controls.add(all_button);
    zhilNedv = new ymaps.control.Button({
        data:{
        content:"Жилая недвижимость"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });    
    komerchNedv = new ymaps.control.Button(
        {
        data:{
        content:"Коммерческая недвижимость"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });    
    transpTech = new ymaps.control.Button(
        {
        data:{
        content:"Транспорт и техника"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });      
    oborud = new ymaps.control.Button({
        data:{
        content:"Оборудование"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });
    allMark = new ymaps.control.Button({
        data:{
        content:"Все"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });
    myMap.controls.add(oborud);
    myMap.controls.add(transpTech);
    myMap.controls.add(komerchNedv);
    myMap.controls.add(zhilNedv);
    myMap.controls.add(allMark);
       
    allMark.events.add('click', function(e){
               
        myMap.destroy();
        ymaps.ready(init);
       // //console.log(file_json);    
    });
    
    zhilNedv.events.add('click', function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init1(coor,zoom_));
       // //console.log(file_json);    
    });
    komerchNedv.events.add('click',function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init2(coor, zoom_));     
    });
    transpTech.events.add('click', function(e){
         var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init3(coor,zoom_));     
    });
    oborud.events.add('click', function(e){
        var l = myMap.getBounds();
        var zoom_ = myMap.getZoom(); 
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init4(coor, zoom_));   
    });
  

    transpTech.state.set('selected', true);

    var file_json = "/assets/js/map/json_map/car.json";
    ajax_get(file_json);
    //Чтобы задать опции одиночным объектам и кластерам,
    //обратимся к дочерним коллекциям ObjectManager.
    

    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');
    objectManager.objects.options.set('preset', 'islands#blueDotIcon');
    objectManager.clusters.options.set('preset', 'islands#blueClusterIcons');
    myMap.geoObjects.add(objectManager);
    

    // all_button.events.add('click', function (e){
    //     alert("keke");
    // });
    function ajax_get(file_json){
        //console.log(file_json);
       
        $.ajax({
            url: file_json
        }).done(function(data) {
            //console.log(data);
            objectManager.add(data);
            geoObjectsQuery = ymaps.geoQuery(data);
            objectManager.objects.each(function(object) {
                if (object.status == "7") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#redAutoIcon'
                  });
                } else if(object.status == "8") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#greenAutoIcon'
                  });
                }else if(object.status == "9") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#blueAutoIcon'
                  });
              }
          });
            // Обновляем список видимых гео-объектов при изменении видимой области.
            myMap.events.add('boundschange', function() { 
                var visibleGeoObjects = geoObjectsQuery.searchIntersect(myMap);
                var id_obj = geoObjectsQuery.get('objectId');
                // //console.log(id_obj);
                // Собираем данные из видимых гео-объектов.
                var visibleObjectsHtml = [];
                visibleGeoObjects.each(function(x) {
                    var id_obj = x.properties.get('id_point');
                    // //console.log(id_obj);
                    var iconContent = x.properties.get('balloonContentHeader');
                    visibleObjectsHtml.push('<li id="'+id_obj+'" class="point -noactive">' + iconContent + '</li>');
                });
              
            // Обновляем список.
            var visibleElement = document.getElementById('visible');
            visibleElement.innerHTML = '<ul>' + visibleObjectsHtml.join('') + '</ul>'
                });
            objectManager.objects.events.add('click', function (e) {
                var objectId=e.get('objectId');
                viewObject(objectId);
            });
            
            //при закрытии балуна
            myMap.balloon.events.add('close', function(e){
                myMap.behaviors.enable([
                    "drag", 
                    "dblClickZoom", 
                    "rightMouseButtonMagnifier",
                    "scrollZoom" 
                ]);
                document.getElementById('visible').style.display = 'inline-block';
                document.getElementById('lot_add').style.display = 'none';
            });                                       
            
            var objectState = clusterer.getObjectState(geoObjectsQuery);
            if (objectState.isClustered) {
                // Если метка находится в кластере, выставим ее в качестве активного объекта.
                // Тогда она будет "выбрана" в открытом балуне кластера.
                objectState.cluster.state.set('activeObject', geoObjectsQuery);
                clusterer.balloon.open(objectState.cluster);
                viewObject(objectId);
            } else if (objectState.isShown) {
                // Если метка не попала в кластер и видна на карте, откроем ее балун.
                geoObjectsQuery.balloon.open();
            }
            
        });
    }

    function viewObject(objectId){
        var el = document.getElementById(objectId);
        myMap.behaviors.disable([
            'drag',
            'scrollZoom'
            ]);
        //левая часть

        var element = document.querySelectorAll('div[id="'+objectId+'"]');
        var lot = document.getElementById('lot_add');     
        lot.innerHTML = element[0].outerHTML;
        document.getElementById(objectId).style.display = null;
        document.getElementById('visible').style.display = 'none';
        document.getElementById('lot_add').style.display = 'inline-block';
                    
    }
}
function init4 (coor, zoom_) {
    myMap = new ymaps.Map('map', {
            center: coor,
            zoom: zoom_,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search',
            minZoom: 3
        }),
        clusterer = new ymaps.Clusterer(),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: false,
            clusterHasBalloon: false,
        });
       
    //кнопки
    // all_button = new ymaps.control.Button("Все");
    // myMap.controls.add(all_button);
    zhilNedv = new ymaps.control.Button({
        data:{
        content:"Жилая недвижимость"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });    
    komerchNedv = new ymaps.control.Button(
        {
        data:{
        content:"Коммерческая недвижимость"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });    
    transpTech = new ymaps.control.Button(
        {
        data:{
        content:"Транспорт и техника"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });      
    oborud = new ymaps.control.Button({
        data:{
        content:"Оборудование"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });
    allMark = new ymaps.control.Button({
        data:{
        content:"Все"},
        options: {
            // Поскольку кнопка будет менять вид в зависимости от размера карты,
            // зададим ей три разных значения maxWidth в массиве.
            maxWidth: [178]
        }
        });
    myMap.controls.add(oborud);
    myMap.controls.add(transpTech);
    myMap.controls.add(komerchNedv);
    myMap.controls.add(zhilNedv);
    myMap.controls.add(allMark);
       
    allMark.events.add('click', function(e){
               
        myMap.destroy();
        ymaps.ready(init);
       // //console.log(file_json);    
    });
    
    zhilNedv.events.add('click', function(e){
        var l = myMap.getBounds();
        
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init1(coor));
       // //console.log(file_json);    
    });
    komerchNedv.events.add('click',function(e){
        var l = myMap.getBounds();
        
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init2(coor));     
    });
    transpTech.events.add('click', function(e){
         var l = myMap.getBounds();
        
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init3(coor));     
    });
    oborud.events.add('click', function(e){
         var l = myMap.getBounds();
        
        var x0=l[0][0];
        var y0=l[0][1];
        var x1=l[1][0];
        var y1=l[1][1];
        var x=x1-((x1-x0)/2);
        var y=y1-((y1-y0)/2);
        var coor = [Number(x),Number(y)];         
        myMap.destroy();
        ymaps.ready(init4(coor));   
    });
  

    oborud.state.set('selected', true);

    var file_json = "/assets/js/map/json_map/oborud.json";
    ajax_get(file_json);
    //Чтобы задать опции одиночным объектам и кластерам,
    //обратимся к дочерним коллекциям ObjectManager.
    

    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');
    objectManager.objects.options.set('preset', 'islands#blueDotIcon');
    objectManager.clusters.options.set('preset', 'islands#blueClusterIcons');
    myMap.geoObjects.add(objectManager);
    

    // all_button.events.add('click', function (e){
    //     alert("keke");
    // });
    function ajax_get(file_json){
        //console.log(file_json);
       
        $.ajax({
            url: file_json
        }).done(function(data) {
            //console.log(data);
            objectManager.add(data);
            geoObjectsQuery = ymaps.geoQuery(data);
            objectManager.objects.each(function(object) {
                if (object.status == "10") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#redRepairShopIcon'
                  });
                } else if(object.status == "11") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#greenRepairShopIcon'
                  });
                }else if(object.status == "12") {
                  objectManager.objects.setObjectOptions(object.id, {
                    preset: 'islands#blueRepairShopIcon'
                  });
              }
          });
            // Обновляем список видимых гео-объектов при изменении видимой области.
            myMap.events.add('boundschange', function() { 
                var visibleGeoObjects = geoObjectsQuery.searchIntersect(myMap);
                var id_obj = geoObjectsQuery.get('objectId');
                // //console.log(id_obj);
                // Собираем данные из видимых гео-объектов.
                var visibleObjectsHtml = [];
                visibleGeoObjects.each(function(x) {
                    var id_obj = x.properties.get('id_point');
                    // //console.log(id_obj);
                    var iconContent = x.properties.get('balloonContentHeader');
                    visibleObjectsHtml.push('<li id="'+id_obj+'" class="point -noactive">' + iconContent + '</li>');
                });
              
            // Обновляем список.
            var visibleElement = document.getElementById('visible');
            visibleElement.innerHTML = '<ul>' + visibleObjectsHtml.join('') + '</ul>'
                });
            objectManager.objects.events.add('click', function (e) {
                var objectId=e.get('objectId');
                viewObject(objectId);
            });
            
            //при закрытии балуна
            myMap.balloon.events.add('close', function(e){
                myMap.behaviors.enable([
                    "drag", 
                    "dblClickZoom", 
                    "rightMouseButtonMagnifier",
                    "scrollZoom" 
                ]);
                document.getElementById('visible').style.display = 'inline-block';
                document.getElementById('lot_add').style.display = 'none';
            });                                       
            
            var objectState = clusterer.getObjectState(geoObjectsQuery);
            if (objectState.isClustered) {
                // Если метка находится в кластере, выставим ее в качестве активного объекта.
                // Тогда она будет "выбрана" в открытом балуне кластера.
                objectState.cluster.state.set('activeObject', geoObjectsQuery);
                clusterer.balloon.open(objectState.cluster);
                viewObject(objectId);
            } else if (objectState.isShown) {
                // Если метка не попала в кластер и видна на карте, откроем ее балун.
                geoObjectsQuery.balloon.open();
            }
            
        });
    }

    function viewObject(objectId){
        var el = document.getElementById(objectId);
        myMap.behaviors.disable([
            'drag',
            'scrollZoom'
            ]);
        //левая часть

        var element = document.querySelectorAll('div[id="'+objectId+'"]');
        var lot = document.getElementById('lot_add');     
        lot.innerHTML = element[0].outerHTML;
        document.getElementById(objectId).style.display = null;
        document.getElementById('visible').style.display = 'none';
        document.getElementById('lot_add').style.display = 'inline-block';
                    
    }
}
