const ThongTinToanBoDonHang=[]
function Validator(options) {
    function getParent(element,selector) {

    }
    
    var selectorRules={}
    function Validate(inputElement,rule) {
        var errorMessage //=rule.test(inputElement.value)
        // lấy ra các rules
        var rules =selectorRules[rule.selector]
        // lặp qua từng rules và check
        for (var i=0;i<rules.length;i++){
            errorMessage= rules[i](inputElement.value)
            if (errorMessage){
                break;
            }
        }

        var errorElement=inputElement.parentElement.querySelector('.form-message')
            if (errorMessage){
                errorElement.innerText = errorMessage;
                inputElement.parentElement.classList.add('invalid')
                }
            else {
                errorElement.innerText ='';
                inputElement.parentElement.classList.remove('invalid')
                }
            return !errorMessage
    }
    var formElement=document.querySelector(options.form)
    if (formElement){
        
        var btn=document.querySelector('#submit')
            //Việc 1 kiểm tra lỗi
            btn.addEventListener('click',function(){
                var isFormValid=true
                 // lặp qua từng rule và validate
                 options.rules.forEach(function(rule){
                    var inputElement=formElement.querySelector(rule.selector)
                    var isValid=Validate(inputElement,rule)
                    if(!isValid){
                        isFormValid=false;
                    }
                });
                if(isFormValid){
                    // trường hop submit với javascript
                    if(typeof options.onSubmit === 'function'){
                        var enableInputs=formElement.querySelectorAll('[name]')
                        var formValues=Array.from(enableInputs).reduce(function(values,input){
                            values[input.name]=input.value
                            return values
                },{})
                        options.onSubmit(formValues) 
                    }
                    //trường hợp submit với hành vi mặt định
                }
            })
                //Lấy ra password đã đổi và email tương ứng với mật khẩu đó
                btn.addEventListener('click', function(){
                    function EmailDoiMK(){
                        
                        const TaiKhoanMatKhau = createStorage('ThongTinDangNhap')
                        var ThongTin = TaiKhoanMatKhau.get('ThongTinDangNhap')
                        for (var i in ThongTin) {
                            var Email=ThongTin[i].email
                        }
                        //console.log(valuePassword,Email)
                        //console.log(Email)
                        return  Email ;
                    }
                    function TimRaDoiTuongChuaMK(){
                        var valuePassword=document.querySelector('#password_confirmation').value
                        var Email=EmailDoiMK()
                        const TaiKhoanMatKhau = createStorage('ThongTinDangKy')
                        var ThongTin = TaiKhoanMatKhau.get('ThongTinDangKy')
                        var ObjectChuaEmail=ThongTin.find(function(thongtin){
                            return Email === thongtin.email
                           
                        })
                        //ObjectChuaEmail.push('fdf')
                        Object.assign({}, ObjectChuaEmail.password=valuePassword)
                        Object.assign({}, ObjectChuaEmail.password_confirmation=valuePassword)
                        //ObjectChuaEmail.push({password:valuePassword})
                        //ObjectChuaEmail.replace(ObjectChuaEmail.password,valuePassword)
                        console.log(ObjectChuaEmail)
                        console.log(ThongTin)
                        Save('ThongTinDangKy',ThongTin)
                    }
                    TimRaDoiTuongChuaMK()
                    
                })
                 

                //btn.addEventListener('click', a )
                    //console.log(valuePassword)
                
                /*
                btn.addEventListener('click', function(){
                    const DanhSachSanPham=LayDanhSachItemGioHangDayDuDoiTuongTheoId()
                    var enableInputs=formElement.querySelectorAll('[name]')
                    var formValues=Array.from(enableInputs)
                    var isSuccess= formValues.every(function(e){
                            return e.value != ''
                    })

                    if (isSuccess == true){
                        for (var i in DanhSachSanPham){
                            var a=DanhSachSanPham[i]
                            ThongTinToanBoDonHang.push(a)    
                        } 
                        console.log(ThongTinToanBoDonHang)
                    }
                    else{
                        alert('Vui lòng nhập đầy đủ thông tin')
                    }
                })
                btn.addEventListener('click', function(){
                    var checked=document.getElementsByName('radio-group')
                    var radioValues=Array.from(checked)
                    var isSuccess= radioValues.some(function(check){
                            return check.checked
                    })
                    if (isSuccess == true){
                        var elementTongTien=document.querySelector('.total-right').innerText
                        //console.log(elementTongTien)
                        ThongTinToanBoDonHang.push({total:elementTongTien})    
                        Save('ThongTinToanBoDonHang',ThongTinToanBoDonHang)
                        alert('Đơn hàng của bạn đã được ghi nhận,Đăng nhập để xem chi tiết')
                    }
                    
                    else{
                        alert('Vui lòng chọn hình thức vận chuyển')
                    }       
                })
                //console.log(ThongTinToanBoDonHang)
            */
        }  
        options.rules.forEach(function(rule){
            // lưu lại rules
            if (Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }
            else{
                selectorRules[rule.selector]=[rule.test]
            }
            var inputElement=formElement.querySelector(rule.selector)
            if (inputElement){
                inputElement.onblur=function(){
                   
                     Validate(inputElement,rule)
                }
            }
        })
        
    }

Validator.isRequired=function(selector,message){
    return {
            selector:selector,
            test:function(value) {
                return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
            }
    }
}

Validator.isEmail=function(selector,message){
    return {
        selector:selector,
        test:function (value) {
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là Email'
        }
    }
}
Validator.isNumber=function(selector,message){
    return {
        selector:selector,
        test:function (value) {
            var regex=/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng number phone'
        }
    }
}

Validator.minLength=function(selector,min,message){
    return {
        selector:selector,
        test:function(value){
            return value.length >=min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}
Validator.isConfirmed=function(selector,getConfirmValue,message){
    return {
        selector:selector,
        test:function(value){
            return value==getConfirmValue() ? undefined : message|| 'Giá trị nhập vào không chính xác'
        }
    }
}

Validator.passwordOld=function(selector,getThongTin,message){
    return{
        selector:selector,
        test:function(value){
            return value==getThongTin() ? undefined : message|| 'Mật khẩu cũ không chính xác'
        }
    }
}


