//tạo fuction Validator 
// định nghĩa các rules
//truyền vào  object vì bên rule đã định nghĩa
// sử dụng DOM lấy ra selector form-1=formElement
//cần bắt được sự kiện ô input()
// định nghĩa return 2 hàm isEmail
// truyền vào 2 hàm  tham số đã ddingj nghĩa bên rules
// sau đó return về 1 object(có 1 fuction test để kiểm tra)
//quay lại fuction Validator duyệt qua mảng rules
//lấy ra #fulname và #Email   của 2 input bên trong from-1
// sau đó lắng nghe sự kiện onblur gán vào 1 fuction
//lấy ra value
// lấy ra hàm test
//lấy valu truyền vào test để kiểm tra nhập chưa
// sử dụng toán tử 3 ngôi để kiểm tra hàm test
//chạy hàm rule.test gán vào errorMessage
// lấy ra thẻ form-message dựa vào thẻ cha của nó là form-1 gán vào errorElement
// sử dụng classList để tạo màu đỏ


function LayDanhSachThongTinDangKy(){
    var ThongTinDangKy=new Array();
    var getData=localStorage.getItem('ThongTinDangKy')
    if (getData != null){
        ThongTinDangKy=JSON.parse(getData)
    }
    return ThongTinDangKy;
}

//LayDanhSachThongTinDangKy()

function Validator(options){
    // biến lưu lại các rules để ko bị ghì đè lên nhau
    var selectorRules={};

    //hàm thực hiện
    function validate(inputElement,rule){
        var errorElement=inputElement.parentElement.querySelector(options.errorSelector);
        //var errorMessage=rule.test(inputElement.value) 
        var errorMessage; 

        //lấy ra các rules của selector
        var rules=selectorRules[rule.selector];
        for(var i =0;i<rules.length;i++){
            errorMessage= rules[i](inputElement.value)
            if(errorMessage) break;
        }
            if(errorMessage){
                errorElement.innerText=errorMessage;
                inputElement.parentElement.classList.add('invalid')
            }
            else{
                errorElement.innerText='';
                inputElement.parentElement.classList.remove('invalid')
            }
            return !errorMessage;
    }
    var formElement=document.querySelector(options.form)
    
    if(formElement){
        // bỏ hành vi mặc định
        formElement.onsubmit=function(e){
            
            var isFormValid=true;
            //Lặp qua từng rules và valitdate
            options.rules.forEach(function(rule){
                var inputElement=formElement.querySelector(rule.selector);
                var isValid=validate(inputElement,rule)
                if(!isValid){
                    isFormValid=false;
                    e.preventDefault();
                }
            });
            // lấy dữ liệu form
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
            //* lấy dữ liệu form
            
        }
        //Lặp qua mỗi rules và xử lý(lắng nghe sự kiện)
        options.rules.forEach(function(rule){

            // lưu lại các rules cho mỗi input
            //lần đầu gán vào mảng nó là undifine
            //Khi undifine gán cho nó vào 1 mảng
            // sau lần đầu tiên chạy nó sẽ là undifine và được gán vào mảng,qua lần thứ 2 chạy nó sẽ là 1 cái mảng và mình push cái rule tiếp theo vào mảng đó
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }
            else{
                selectorRules[rule.selector]=[rule.test]
            }
            var inputElement=formElement.querySelector(rule.selector);
            if(inputElement){
                // xử lý trường hợp người dùng onblur ra khỏi
                inputElement.onblur=function(){
                    validate(inputElement,rule)
                }
                //xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput=function(){
                    var errorElement=inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText='';
                    inputElement.parentElement.classList.remove('invalid')
                }
            }         
        });
      
    }
}


Validator.isRequired=function(selector,message){
    return {
        selector:selector,
        test:function(value){
            return value.trim() ? undefined : message|| 'Vui lòng nhập trường này' 
        }
    }
}

Validator.isEmail=function(selector,message){
    return {
        selector:selector,
        test:function(value){
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message|| 'Trường này phải là Email'
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

/// kiểm tra đăng nhập
Validator.DangNhapEmail=function(selector,getThongTin,message){
    return {
        selector:selector,
        test:function(value){
            var getData= getThongTin()
            var isSuccess=getData.some(function(data){ 
                
                return data.email == value
            }) 
            return value = isSuccess ? undefined : message|| 'Email không hợp lệ'
        }
    }
}

Validator.DangNhapPassword=function(selector,getThongTin,message){
    return {
        selector:selector,
        test:function(value){
            var getData= getThongTin()
            //lấy ra value email nhập vào
            var inputElement=document.querySelector('#email').value
            // chạy vòng lặp lấy ra mật khẩu tương ứng với email đó,rồi kiếm tra mật khẩu nhập vào có tương ứng với email ở trên hay không
            for (var i in getData){
                if (getData[i].email==inputElement){
                    var MatKhauCuaEmail=getData[i].password
                }
            }
            return value == MatKhauCuaEmail ? undefined : message|| 'Password không hợp lệ'
        }
    }
}
Validator.DangKyLan2=function(selector,getThongTin,message){
    return {
        selector:selector,
        test:function(value){
            var getData= getThongTin()
            var isSuccess=getData.every(function(data){ 
                return data.email != value
            })
            return value = isSuccess ? undefined : message|| 'Email này đã dùng cho tài khoản khác'
            
        }
    }
}
//Đổi mật khẩu
