

function LayDanhSachThongTinToanBoDonHang(){
    var ThongTinToanBoDonHang=new Array();
    var getData=localStorage.getItem('ThongTinToanBoDonHang')
    if (getData != null){
        ThongTinToanBoDonHang=JSON.parse(getData)
    }
    //console.log(ThongTinToanBoDonHang)
    return ThongTinToanBoDonHang;
}
LayDanhSachThongTinToanBoDonHang()
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
        var btn=document.querySelector('.btn-primary')
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
                            var ThongTinToanBoDonHang= LayDanhSachThongTinToanBoDonHang()
                            ThongTinToanBoDonHang.push(a)    
                            console.log(ThongTinToanBoDonHang)    
                            Save('ThongTinToanBoDonHang',ThongTinToanBoDonHang)
                        }

                        ///
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

                        var ThongTinToanBoDonHang= LayDanhSachThongTinToanBoDonHang()
                        ThongTinToanBoDonHang.push({tong:elementTongTien})   
                        Save('ThongTinToanBoDonHang',ThongTinToanBoDonHang)
                        alert('Đơn hàng của bạn đã được ghi nhận,Đăng nhập để xem chi tiết')
                    }
                    
                    
                    else{
                        alert('Vui lòng chọn hình thức vận chuyển')
                    }       
                    
                })
                
            
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


