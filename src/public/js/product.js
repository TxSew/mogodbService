// Lưu
function Save(key,value) {
    localStorage.setItem(key,JSON.stringify(value))
}
//HÀM LẤY DỮ LIỆU TỪ LOCAL VÀ CẬP NHẬT
function createStorage(key){
    const store=JSON.parse(localStorage.getItem(key)) ?? {}
    const save = () =>{
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage={
        get(key){
            return (store)
        },
        set( value){
            store = value
            save()
        },
        remove(key){
            delete store[key]
            save()
        },
    }
    return storage
}
var listDeal=[
    {   
        id:1,
        class:'countdown',
        name: 'QUẦN KAKI ỐNG SUÔNG NIKE',
        price:400000,
        img1:"/img/bosutapnam/kaki.jpg",
       
    },
    {
        id:2,
        class:'countdown1',
        name: 'QUẦN VẢI ỐNG SUÔNG NIKE',
        price:600000,
        img1:"/img/bosutapnam/quanvai.jpg",
    }
]
//Lưu vào localStorage
Save('listDeal',listDeal)


//RENDER RA HTML

var Deal=function(){
    const getKey=createStorage('listDeal')
    const getData=getKey.get('listDeal')
    for (var i in getData){
        var data = getData[i]  
            render="";
            render= '<div class="deal-products-card">\n'+
            '                    <div class="deal-products-card-left">\n'+
            '                        <p class="name">'+data.name+'</p>\n'+
            '                        <p class="price">'+data.price+' đ</p>\n'+
            '                        <p class="time"> Thời gian còn lại: <span class="'+data.class+'"></span></p>                       \n'+
            '                        <button onclick="addCard(\''+ data.id + '\')" type="button"><i class="fas fa-shopping-cart"></i><p>MUA NGAY</p></button>\n'+
            '                    </div>\n'+
            '                    <div class="deal-products-card-right">\n'+
            '                        <img src="'+data.img1+'" width="100%" height="100%">\n'+
            '                    </div>\n'+
            '                </div>';
    document.getElementById('deal').innerHTML+=render;
    
    }
}
Deal()


//LƯU BỘ SƯU TẬP NAM

var listBosuutapNam=[
    {
        id:3,
        name: 'Quần jean dài nổi bật ',
        price:880000,
        img1:'/img/bosutapnam/nam1.jpg',
    },
    {
      id:4,
      name: 'Quần kaki New York',
      price:500000,
      img1:'/img/bosutapnam/kaki1.jpg',
      img2:'/img/bosutapnam/kaki2.jpg',
      img3:'/img/bosutapnam/kaki3.jpg',
    },
    {
      id:5,
      name: 'Quần vải ống suông',
      price:600000,
      img1:'/img/bosutapnam/quanvai1.jpg',
      img2:'/img/bosutapnam/quanvai2.jpg',
      img3:'/img/bosutapnam/quanvai3.jpg',
    },
    {
      id:6,
      name: 'Áo khoác kéo khóa Nike',
      price:750000,
      img1:'/img/bosutapnam/aokhoac1.jpg',
      img2:'/img/bosutapnam/aokhoac2.jpg',
      img3:'/img/bosutapnam/aokhoac3.jpg',
    },
    {
      id:7,
      name: 'Áo khoác có mũ Nike',
      price:500000,
      img1:'/img/bosutapnam/khoacmu1.jpg',
      img2:'/img/bosutapnam/khoacmu2.jpg',
      img3:'/img/bosutapnam/khoacmu3.jpg',
    }
  
]
Save('listNam',listBosuutapNam)

var productMan=function(){

    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    var [productManOne, ...productManAll]=getData
      var data = productManOne
          render="";
          render = '<div class="productMan-left-img">\n'+
          '                                    <img src="'+data.img1+'">\n'+
          '                                    <div class="overlay">\n'+
          '                                        <div class="overlay-button">\n'+
          '                                            <button type="button" class="btn btn-secondary" style="margin-right: 50px;">Xem sản phẩm</button>\n'+
          '                                            <button type="button" class="btn btn-secondary" onclick="addCard(\''+ data.id + '\')">Add to card</button>\n'+
          '                                          \n'+
          '                                        </div>\n'+
          '                                    </div>    \n'+
          '                                </div>                       \n'+
          '                                <div>\n'+
          '                                    <p class="nameProduct" >'+data.name+'</p>\n'+
          '                                    <p class="price">'+data.price+'đ</p>                           \n'+
          '                                </div>   ';
      document.getElementById('sanphamNam-left').innerHTML+=render;
  }
    
productMan()

var productManlist=function(){
    const getKey=createStorage('listNam')
    const getData=getKey.get('listNam')
    var [productManOne, ...productManAll]=getData
    var render="";
        for(var i in productManAll){
            var data=productManAll[i];
                render = '<div class="card">\n'+
      '                                <div class="tabs-img">\n'+
      '                                   <div class="tab-pane active">\n'+
      '                                        <img class="card-img-top" src="'+data.img1+'" alt="Card image cap">\n'+
      '                                        <div class="overlay">\n'+
      '                                            <button type="button" class="btn btn-warning" onclick="addCard(\''+ data.id + '\')">Add to card</button>\n'+
      '                                        </div>\n'+
      '                                   </div>\n'+
      '                                   <div class="tab-pane">\n'+
      '                                        <img class="card-img-top" src="'+data.img2+'" alt="Card image cap">\n'+
      '                                        <div class="overlay">\n'+
      '                                            <button type="button" class="btn btn-warning" onclick="addCard(\''+ data.id + '\')">Add to card</button>\n'+
      '                                        </div>\n'+
      '                                    </div>\n'+
      '                                    <div class="tab-pane">\n'+
      '                                        <img class="card-img-top" src="'+data.img3+'" alt="Card image cap">\n'+
      '                                        <div class="overlay">\n'+
      '                                            <button type="button" class="btn btn-warning" onclick="addCard(\''+ data.id + '\')">Add to card</button>\n'+
      '                                        </div>\n'+
      '                                   </div>\n'+
      '                                </div>                          \n'+
      '                                <div class="card-body">\n'+
      '                                    <div class="card-body-top">\n'+
      '                                        <p class="card-title">'+data.name+'</p>\n'+
      '                                        <p class="card-price">'+data.price+'đ</p>\n'+
      '                                    </div>                            \n'+
      '                                  <div class="tabs">\n'+
      '                                    <div class="tab-item active">\n'+
      '                                        <img src="'+data.img1+'">\n'+
      '                                    </div>\n'+
      '                                    <div class="tab-item ">\n'+
      '                                        <img src="'+data.img2+'">\n'+
      '                                    </div>\n'+
      '                                    <div class="tab-item ">\n'+
      '                                        <img src="'+data.img3+'">\n'+
      '                                    </div>\n'+
      '                                  </div>\n'+
      '                                </div>\n'+
      '                            </div>';
      document.getElementById('sanphamNam-right').innerHTML+=render
  }
}
productManlist()

//LƯU BỘ SƯU TẬP NỮ

var listBosuutapNu=[
    {
        id:8,
        name: 'Quần skinny Asos',
        price:880000,
        img1:'assets/img/bosutapnam/nu.jpg',
    },
    {
      id:9,
      name: 'Quần cạp cao Asos',
      price:500000,
      img1:'/img/bosutapnam/quancapcao1.jpg',
      img2:'/img/bosutapnam/quancapcao2.jpg',
      img3:'/img/bosutapnam/quancapcao3.jpg',
    },
    {
      id:10,
      name: 'Quần ống lửng Asos',
      price:600000,
      img1:'/img/bosutapnam/quanonglung1.jpg',
      img2:'/img/bosutapnam/quanonglung2.jpg',
      img3:'/img/bosutapnam/quanonglung3.jpg',
    },
    {
      id:11,
      name: 'Chân váy midi Asos',
      price:750000,
      img1:'/img/bosutapnam/chanvay1.jpg',
      img2:'/img/bosutapnam/chanvay2.jpg',
      img3:'/img/bosutapnam/chanvay3.jpg',
    },
    {
      id:12,
      name: 'Băng đô hoa Asos',
      price:500000,
      img1:'/img/bosutapnam/vong1.jpg',
      img2:'/img/bosutapnam/vong2.jpg',
      img3:'/img/bosutapnam/vong3.jpg',
    }
  
]
Save('listNu',listBosuutapNu)
var [productWomenOne, ...productWomenAll]=listBosuutapNu;

var productWomen=function(){
    const getKey=createStorage('listNu')
    const getData=getKey.get('listNu')
    var [productWomenOne, ...productWomenAll]=getData;
    var data = productWomenOne
        render="";
        render = '<div class="productMan-left-img">\n'+
        '                                    <img src="'+data.img1+'">\n'+
        '                                    <div class="overlay">\n'+
        '                                        <div class="overlay-button">\n'+
        '                                            <a href="#"><button type="button" class="btn btn-secondary" style="margin-right: 50px;">Xem sản phẩm</button></a>\n'+
        '                                            <a href="#"><button type="button" class="btn btn-secondary" onclick="addCard(\''+ data.id + '\')">Add to card</button></a>\n'+
        '                                          \n'+
        '                                        </div>\n'+
        '                                    </div>    \n'+
        '                                </div>                       \n'+
        '                                <div>\n'+
        '                                    <p class="nameProduct" >'+data.name+'</p>\n'+
        '                                    <p class="price">'+data.price+'đ</p>                           \n'+
        '                                </div>   ';
    document.getElementById('sanphamNu-left').innerHTML+=render;
}
  
productWomen()

var productWomenlist=function(){
    var render="";
    const getKey=createStorage('listNu')
    const getData=getKey.get('listNu')
    var [productWomenOne, ...productWomenAll]=getData;
    for(var i in productWomenAll){
        var data=productWomenAll[i];
            render = '<div class="card">\n'+
    '                                <div class="tabs-img">\n'+
    '                                   <div class="tab-pane active">\n'+
    '                                        <img class="card-img-top" src="'+data.img1+'" alt="Card image cap">\n'+
    '                                        <div class="overlay">\n'+
    '                                            <button type="button" class="btn btn-warning" onclick="addCard(\''+ data.id + '\')">Add to card</button>\n'+
    '                                        </div>\n'+
    '                                   </div>\n'+
    '                                   <div class="tab-pane">\n'+
    '                                        <img class="card-img-top" src="'+data.img2+'" alt="Card image cap">\n'+
    '                                        <div class="overlay">\n'+
    '                                            <button type="button" class="btn btn-warning" onclick="addCard(\''+ data.id + '\')">Add to card</button>\n'+
    '                                        </div>\n'+
    '                                    </div>\n'+
    '                                    <div class="tab-pane">\n'+
    '                                        <img class="card-img-top" src="'+data.img3+'" alt="Card image cap">\n'+
    '                                        <div class="overlay">\n'+
    '                                            <button type="button" class="btn btn-warning" onclick="addCard(\''+ data.id + '\')">Add to card</button>\n'+
    '                                        </div>\n'+
    '                                   </div>\n'+
    '                                </div>                          \n'+
    '                                <div class="card-body">\n'+
    '                                    <div class="card-body-top">\n'+
    '                                        <p class="card-title">'+data.name+'</p>\n'+
    '                                        <p class="card-price">'+data.price+'đ</p>\n'+
    '                                    </div>                            \n'+
    '                                  <div class="tabs">\n'+
    '                                    <div class="tab-item active">\n'+
    '                                        <img src="'+data.img1+'">\n'+
    '                                    </div>\n'+
    '                                    <div class="tab-item ">\n'+
    '                                        <img src="'+data.img2+'">\n'+
    '                                    </div>\n'+
    '                                    <div class="tab-item ">\n'+
    '                                        <img src="'+data.img3+'">\n'+
    '                                    </div>\n'+
    '                                  </div>\n'+
    '                                </div>\n'+
    '                            </div>';
    document.getElementById('sanphamNu-right').innerHTML+=render
}
}
productWomenlist()



//LƯU BỘ SƯU TẬP PHỤ KIÊN

var listBosuutapPhukien=[
    {
        id:13,
        name: 'Giày bốt da bóng',
        price:1880000,
        img1:'assets/img/bosutapnam/giay.jpg',
       
    },
    {
      id:14,
      name: 'Giày thể thao da lộn',
      price:1200000,
      img1:'/img/bosutapnam/giay1.jpg',
      img2:'/img/bosutapnam/giay2.jpg',
      img3:'/img/bosutapnam/giay3.jpg',
     
    },
    {
      id:15,
      name: 'Mũ cói dây viền đen',
      price:800000,
      img1:'/img/bosutapnam/mu1.jpg',
      img2:'/img/bosutapnam/mu2.jpg',
      img3:'/img/bosutapnam/mu3.jpg',
     
    },
    {
      id:16,
      name: 'Mũ len đính cục bông',
      price:250000,
      img1:'/img/bosutapnam/mulen1.jpg',
      img2:'/img/bosutapnam/mulen2.jpg',
      img3:'/img/bosutapnam/mulen3.jpg',
     
    },
    {
      id:17,
      name: 'Khăn lụa bản nhỏ',
      price:600000,
      img1:'/img/bosutapnam/khan1.jpg',
      img2:'/img/bosutapnam/khan2.jpg',
      img3:'/img/bosutapnam/khan3.jpg',
    
    }
  
]
Save('listPhukien',listBosuutapPhukien)

var productPhukien=function(){
    const getKey=createStorage('listPhukien')
    const getData=getKey.get('listPhukien')
    var [productPhukienOne, ...productPhukienAll]=getData;
    var data = productPhukienOne
        render="";
        render = '<div class="productMan-left-img">\n'+
        '                                    <img src="'+data.img1+'">\n'+
        '                                    <div class="overlay">\n'+
        '                                        <div class="overlay-button">\n'+
        '                                            <a href="#"><button type="button" class="btn btn-secondary" style="margin-right: 50px;">Xem sản phẩm</button></a>\n'+
        '                                            <a href="#"><button type="button" class="btn btn-secondary" onclick="addCard(\''+ data.id + '\')">Add to card</button></a>\n'+
        '                                          \n'+
        '                                        </div>\n'+
        '                                    </div>    \n'+
        '                                </div>                       \n'+
        '                                <div>\n'+
        '                                    <p class="nameProduct" >'+data.name+'</p>\n'+
        '                                    <p class="price">'+data.price+'đ</p>                           \n'+
        '                                </div>   ';
    document.getElementById('sanphamPhukien-left').innerHTML+=render;
}
  
productPhukien()

var productPhukienlist=function(){
    const getKey=createStorage('listPhukien')
    const getData=getKey.get('listPhukien')
    var [productPhukienOne, ...productPhukienAll]=getData;
    var render="";
        for(var i in productPhukienAll){
            var data=productPhukienAll[i];
                render = '<div class="card">\n'+
    '                                <div class="tabs-img">\n'+
    '                                   <div class="tab-pane active">\n'+
    '                                        <img class="card-img-top" src="'+data.img1+'" alt="Card image cap">\n'+
    '                                        <div class="overlay">\n'+
    '                                            <button type="button" class="btn btn-warning" onclick="addCard(\''+ data.id + '\')">Add to card</button>\n'+
    '                                        </div>\n'+
    '                                   </div>\n'+
    '                                   <div class="tab-pane">\n'+
    '                                        <img class="card-img-top" src="'+data.img2+'" alt="Card image cap">\n'+
    '                                        <div class="overlay">\n'+
    '                                            <button type="button" class="btn btn-warning" onclick="addCard(\''+ data.id + '\')">Add to card</button>\n'+
    '                                        </div>\n'+
    '                                    </div>\n'+
    '                                    <div class="tab-pane">\n'+
    '                                        <img class="card-img-top" src="'+data.img3+'" alt="Card image cap">\n'+
    '                                        <div class="overlay">\n'+
    '                                            <button type="button" class="btn btn-warning" onclick="addCard(\''+ data.id + '\')">Add to card</button>\n'+
    '                                        </div>\n'+
    '                                   </div>\n'+
    '                                </div>                          \n'+
    '                                <div class="card-body">\n'+
    '                                    <div class="card-body-top">\n'+
    '                                        <p class="card-title">'+data.name+'</p>\n'+
    '                                        <p class="card-price">'+data.price+'đ</p>\n'+
    '                                    </div>                            \n'+
    '                                  <div class="tabs">\n'+
    '                                    <div class="tab-item active">\n'+
    '                                        <img src="'+data.img1+'">\n'+
    '                                    </div>\n'+
    '                                    <div class="tab-item ">\n'+
    '                                        <img src="'+data.img2+'">\n'+
    '                                    </div>\n'+
    '                                    <div class="tab-item ">\n'+
    '                                        <img src="'+data.img3+'">\n'+
    '                                    </div>\n'+
    '                                  </div>\n'+
    '                                </div>\n'+
    '                            </div>';
    document.getElementById('sanphamPhukien-right').innerHTML+=render
}
}
productPhukienlist()

//var a=Object.assign({},listBosuutapPhukien,listBosuutapNu)
const tongcacsanpham=listDeal.concat(listBosuutapNam,listBosuutapNu,listBosuutapPhukien)
Save('listTong',tongcacsanpham)


//RENDER SỐ LƯỢNG GIỎ HÀNG


function tabs(){
    const all=document.querySelectorAll.bind(document)
    const panes=all('.tab-pane')
    const allTtem=document.querySelectorAll('.tab-item')  
allTtem.forEach(function(tab,index){
    const pane=panes[index]
    tab.onclick=function(){   
        tab.parentElement.querySelector('.tab-item.active').classList.remove('active')
        pane.parentElement.querySelector('.tab-pane.active').classList.remove('active')
        tab.classList.add('active')      
        pane.classList.add('active')   
    }
})
}
tabs()
