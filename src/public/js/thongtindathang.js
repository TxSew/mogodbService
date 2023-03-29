
function RenderThongTinDatHang() {

    const DanhSachSanPham = LayDanhSachItemGioHangDayDuDoiTuongTheoId();
    render = "";
    renderCount = "";
    for (var i in DanhSachSanPham) {
        var data = DanhSachSanPham[i];
        render = '<div class="san-pham">\n' +
            '                        <div class="san-pham-img">\n' +
            '                            <img src="' + data.img1 + '">\n' +
            '                        </div>\n' +
            '                        <div class="san-pham-name">\n' +
            '                            <p style="text-transform:lowercase;" >' + data.name + '</p>\n' +
            '                        </div>\n' +
            '                        <div class="san-pham-price">\n' +
            '                            <p >' + data.price + 'đ</p>\n' +
            '                        </div>\n' +
            '                    </div>  ';
        document.getElementById('san-pham').innerHTML += render;
    }
    renderCount = ' <span>(' + DanhSachSanPham.length + ' sản phẩm)</span>';
    document.getElementById('count').innerHTML += renderCount
}
RenderThongTinDatHang()

function renderTamTinh() {
    var tong = total()
    render = ""
    render = '<p class="tam-tinh-left">Tạm tính:</p>\n' +
        '       <p class="tam-tinh-right">' + tong + '</p>';
    document.getElementById('tam-tinh').innerHTML += render;
}
renderTamTinh()
function TinhTong() {
    var btn = document.getElementsByName('radio-group')

    for (var i in btn) {
        var currentValue = 0;
        var elementInput = btn[i]
        elementInput.onclick = function (e) {
            currentValue = Number(this.value)
            document.getElementById('van-chuyen').innerHTML = currentValue;
            var tong = 0;
            function TongDonHang() {
                var TongTien = Number(document.querySelector('.tam-tinh-right').innerText)
                tong = currentValue + TongTien
                document.getElementById('tong-tien-dat-hang').innerHTML = ''
                render = "";
                render = '<p class="total-left">Tổng cộng:</p>\n' +
                    '       <p class="total-right">' + tong + 'đ</p>';
                document.getElementById('tong-tien-dat-hang').innerHTML += render;
            }
            TongDonHang()

        }
    }
}
TinhTong()





