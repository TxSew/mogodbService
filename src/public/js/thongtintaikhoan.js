function RenderThongTinDonHang() {
    const getKey = createStorage('ThongTinToanBoDonHang')
    const getData = getKey.get('ThongTinToanBoDonHang')
    const getKeyThongTinDangNhap = createStorage('ThongTinDangNhap')
    const ThongTinDangNhap = getKeyThongTinDangNhap.get('ThongTinDangNhap')
    for (var i in ThongTinDangNhap) {
        var EmailDangNhap = ThongTinDangNhap[i].email
    }

    // TÌM RA ĐỐI TƯỢNG EMAIL TRÙNG VỚI EMAIL ĐĂNG NHẬP VÀ TRẢ VỀ TOÀN BỘ ĐỐI TƯỢNG BAO GÒM TÊN ĐỊA CHỈ SDT,EMAIL
    const listEmail = getData.filter(function (data) {
        if (data.email === EmailDangNhap)

            return data.email
    })


    // LẶP LẤY RA EMAIL ĐANG NHẬP VÀO VD: edu.@gmail.com
    for (var i in listEmail) {
        //EmailDangNhap
        var Email = listEmail[i].email
    }

    var Total = [] // mảng dùng để lưu địa chỉ và tổng tiền đơn hàng

    // VÒNG LẶP TÌM LẤY RA ĐỊA CHỈ VÀ TỔNG TIỀN ĐƠN HÀNG
    const AddressTotal = getData.forEach(function (data, index) {
        if (Email === data.email) {

            // vị trí tương ứng của email đó
            var vitri = index
            // lặp từ vị trí trên tìm ra total gần nhất 
            for (var i = vitri; i < getData.length; i++) {

                if (getData[i].email != undefined) {
                    Total.push({ address: getData[i].address })
                }

                if (getData[i].tong != undefined) {
                    console.log(getData[i].tong)
                    Total.push({ tong: getData[i].tong })
                    Total.splice(2)
                }
            }
        }
    })

    function RenderHTML() {
        render = '';
        //  kiểm tra thông tin đang nhập có trùng với thông tin mua hàng hay ko,nếu ko thì ko in ra
        for (var i in listEmail) {
            if (listEmail[i].email === EmailDangNhap) {
                for (var i in Total) {
                    var data = Total[0]
                    var data2 = Total[1]
                }
                render = ' <td data-label="Địa chỉ">' + data.address + '</td>\n' +
                    '  <td data-label="Tổng đơn hàng">' + data2.tong + '</td>\n' +
                    '';
                document.getElementById('table').innerHTML += render;
            }
            break
        }
    }
    RenderHTML()

}


RenderThongTinDonHang()



function RenderThongTaiKhoan() {
    render = '';
    renderLoiChao = ''
    const getKey = createStorage('ThongTinToanBoDonHang')
    const getData = getKey.get('ThongTinToanBoDonHang')
    const getKeyThongTinDangNhap = createStorage('ThongTinDangNhap')
    const ThongTinDangNhap = getKeyThongTinDangNhap.get('ThongTinDangNhap')

    for (var i in ThongTinDangNhap) {
        var EmailDangNhap = ThongTinDangNhap[i].email
    }

    const listEmail = getData.filter(function (data) {
        return data.email
    })
    function taikhoan() {
        for (var i in listEmail) {
            var a = listEmail[i]
            //console.log(listEmail[i])
            if (listEmail[i].email === EmailDangNhap) {
                render = ' <p><span>Họ tên: </span>' + a.fullname + '</p>\n' +
                    '                <p class="Email"><span>Email: </span>' + a.email + '</p>\n' +
                    '                <p><span>Điện thoại: </span>' + a.number + '</p>\n' +
                    '                <p><span>Địa chỉ: </span>' + a.address + '</p>';
                document.getElementById('thong-tin').innerHTML += render
                renderLoiChao = '<p>Xin chào, <span>' + a.fullname + ' !</span></p>';
                document.getElementById('hello').innerHTML += renderLoiChao;
                break
            }
        }
    }
    taikhoan()
}
RenderThongTaiKhoan()


function tabs() {
    const all = document.querySelectorAll.bind(document)
    const panes = all('.right')
    const allTtem = document.querySelectorAll('.left')
    allTtem.forEach(function (tab, index) {
        const pane = panes[index]
        tab.onclick = function () {
            tab.parentElement.querySelector('.left.active').classList.remove('active')
            pane.parentElement.querySelector('.right.active').classList.remove('active')
            tab.classList.add('active')
            pane.classList.add('active')
        }
    })
}
tabs()