

function Taodoituongitemgiohang(id,count){
    var itemgiohang=new Object()
        itemgiohang.id=id;
        itemgiohang.count=count;
        return itemgiohang;
}

function LayDanhSachItemGioHang(){
    var DanhSachItemGioHang=new Array();
    var jsondanhsachitemgiohang=localStorage.getItem('DanhSachItemGioHang')
    if(jsondanhsachitemgiohang != null){
        DanhSachItemGioHang=JSON.parse(jsondanhsachitemgiohang)
    }
    return DanhSachItemGioHang;
}

function addCard(id){
    var kiemtratontaitronggiohang=false;
    var DanhSachItemGioHang=LayDanhSachItemGioHang();
    for (var i in DanhSachItemGioHang){
        if(DanhSachItemGioHang[i].id == id){
            DanhSachItemGioHang[i].count++;
            kiemtratontaitronggiohang=true;
        }
    }
    if(kiemtratontaitronggiohang==false){
        var ItemGioHang=Taodoituongitemgiohang(id,1)
        console.log(ItemGioHang)
        console.log(DanhSachItemGioHang)
        DanhSachItemGioHang.push(ItemGioHang)
    }
    //Lưu xuống local
    console.log(DanhSachItemGioHang)
    Save('DanhSachItemGioHang',DanhSachItemGioHang)

}

function LayDanhSachItemGioHangDayDuDoiTuongTheoId(){
    var GioHang=new Array();
        DanhSachSanPham= LayDanhSachItemGioHang();
        const getKey=createStorage('listTong')
        const getData=getKey.get('listTong')
        for (var i in DanhSachSanPham){
            var IdDanhSachSanPham=DanhSachSanPham[i].id
            var countDanhSachSanPham={count:DanhSachSanPham[i].count}
            for (var i in getData){
                if (IdDanhSachSanPham == getData[i].id){
                    var DanhSachSanPhamCoCount=Object.assign({},getData[i],countDanhSachSanPham)
                    var total={total:DanhSachSanPhamCoCount.price*DanhSachSanPhamCoCount.count}
                    var DanhSachSanPhamDayDu=Object.assign({},DanhSachSanPhamCoCount,total)
                    GioHang.push(DanhSachSanPhamDayDu)
                }
            }
        }
    return GioHang
}

function RenderGioHang(){
    const DanhSachGioHang=LayDanhSachItemGioHangDayDuDoiTuongTheoId()
    render="";
    for (var i in DanhSachGioHang){
        data= DanhSachGioHang[i]
        render='<div class="product" >\n'+
        '                \n'+
        '                <div class="product-image">\n'+
        '                    <img src="'+data.img1+'">\n'+
        '                </div>\n'+
        '                <div class="product-details">\n'+
        '                    <div class="product-title">'+data.name+'</div>\n'+
        '                </div>\n'+
        '                <div class="product-price"><span>'+data.price+'</span></div>\n'+
        '                <div class="product-quantity">\n'+
        '                    <button onclick="giam(\''+ data.id + '\')" type="button" class="btn btn-warning">\n'+
        '                        <p>-</p>\n'+
        '                    </button>\n'+
        '                    <button class="count">'+data.count+'</button>\n'+
        '                    <button onclick="tang(\''+ data.id + '\')" type="button" class="btn btn-warning">\n'+
        '                        <p>+</p>\n'+
        '                    </button>\n'+
        '                </div>\n'+
        '                <div class="product-removal">\n'+
        '                    <button onclick="remove(\''+ data.id + '\')" class="remove-product">\n'+
        '                        Remove\n'+
        '                    </button>\n'+
        '                </div>\n'+
        '                <div class="product-line-price">\n'+
        '                    <span style="color: #ffac4b;">'+data.total+'</span>\n'+
        '                </div>\n'+
        '                \n'+
        '            </div>';
        document.getElementById('GioHang').innerHTML+=render;
    }
}
RenderGioHang()


function tang(id){
    var DanhSachItemGioHang=LayDanhSachItemGioHang()
    for (var i in DanhSachItemGioHang){
        if (DanhSachItemGioHang[i].id == id){
            DanhSachItemGioHang[i].count++;
            Save('DanhSachItemGioHang',DanhSachItemGioHang)
        }
    }
    location.reload()
}
function giam(id){
    var DanhSachItemGioHang=LayDanhSachItemGioHang()
    for (var i in DanhSachItemGioHang){
        if (DanhSachItemGioHang[i].id == id){
            DanhSachItemGioHang[i].count--;
            if (DanhSachItemGioHang[i].count == 0 ){
                DanhSachItemGioHang.splice(i,1)   
            }
            Save('DanhSachItemGioHang',DanhSachItemGioHang) 
        }
    }
    window.location.reload()
}

function remove(id){
    var DanhSachItemGioHang=LayDanhSachItemGioHangDayDuDoiTuongTheoId()
    for (var i in DanhSachItemGioHang){
        if (DanhSachItemGioHang[i].id == id){
            //DanhSachItemGioHang.shift(DanhSachItemGioHang[i])
            DanhSachItemGioHang.splice(i,1)
            Save('DanhSachItemGioHang',DanhSachItemGioHang)
        }
    }
    location.reload()
}

function total(){
    tong=0;
    var DanhSachSanPham=LayDanhSachItemGioHangDayDuDoiTuongTheoId()
        for (var i in DanhSachSanPham){
            tong+=DanhSachSanPham[i].total
        } 
    return tong;
}
function renderTotal(){
    var tong=total()
    render=""
    render='<p>Tổng tiền thanh toán: <span>'+tong+'</span></p>';
    document.getElementById('total').innerHTML+=render;
}
renderTotal()

function addCar(id){
    //Save('Giohang',cart)
    //alert('fdf'+idsanpham)

    var kiemtratontaitrongcard=false;
    const getKey=createStorage('listTong')
    const getData=getKey.get('listTong')
    const getKeyCart=createStorage('Giohang')
    const getDataCart=getKeyCart.get('Giohang')
    for (var i in getDataCart) {
        if (getDataCart[i].id == id){
            getDataCart[i].count++;
            kiemtratontaitrongcard=true
        }
    }
    if(kiemtratontaitrongcard==false){
        for (var i in getData){
            if (getData[i].id==id){
                getDataCart.push(getData[i])       
            }     
        }
    }
    //luuGioHang() 
    Save('Giohang',getDataCart)
    //console.log(cart)
}



