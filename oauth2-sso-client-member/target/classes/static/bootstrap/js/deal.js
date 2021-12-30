/**
 * Created by 宇文智 on 2019/6/19.
 */
//用户数据
var infoJsonData={};
function getUserInfoData(){
    $.getJSON('config/userInfo.json',function (data) {
        infoJsonData=data;
    });

    if(JSON.stringify(infoJsonData)=="{}"){
        //alert("dhlashdf")
        infoJsonData=UserInfoData;
    }
    addDataToTable();
}



//从userInfo.json中添加三条记录到表中
function addDataToTable(){
    str='';
    // console.log(infoJsonData);
    //alert("fhdslaf");
    $.each(infoJsonData,function (key,value) {

        str+="<tr><td>"+value['name']+"</td><td>"+value['pwd']+"</td><td>"+value['realName']+"</td><td>"+ value['sex']+"</td><td>"+value['age']+"</td>" +
            "<td>"+value['email']+"</td><td>"+value['nation']+"</td><td>"+value['province']+"</td><td>"+value['citys']+"</td>" +
            "<td>"+value['county']+"</td><td>" +
            "<button class='"+key+"' " + 'onclick="editFormData(\''+key+'\')"' + ">编辑</button>" +
            "<button class='"+key+"' " + 'onclick="deleteFormData(\''+key+'\')"' + ">删除</button></td>" +
            "</tr><br>";
    });
    $('table').append(str);
}

//点击编辑按钮,将信息加载到表单中根据guid
function editFormData(guid){
    //alert(guid);
    //1,将数据加入表单中
    addDataToForm(guid);
    $(".newData").attr("value","编辑中");
}

//点击编辑后将数据加到表单中
function addDataToForm(guid){
    //console.log(infoJsonData[guid]);
    //每次点击后先清除selected和checked属性
    $('#nation option').removeAttr("selected");
    $('#province option').removeAttr("selected");
    $('#citys option').removeAttr("selected");
    $('#county option').removeAttr("selected");
    $('input:radio').removeAttr("checked");

    $('.guid').prop('value',guid);
    $('.name').prop('value',infoJsonData[guid]['name']);
    var b=new Base64();
    $('.pwd').prop('value',b.decode(infoJsonData[guid]['pwd'])); //将密码解码
    $('.realName').prop('value',infoJsonData[guid]['realName']);
    infoJsonData[guid]['sex']=='男'? $('.man').prop('checked','checked') : $('.woman').prop('checked','checked');
    $('.age').prop('value',infoJsonData[guid]['age']);
    $('.email').prop('value',infoJsonData[guid]['email']);

    var str="#nation option[value='"+infoJsonData[guid]['nation']+"']";
    $(str).prop("selected",true);

    $('#province option[value="'+infoJsonData[guid]["province"]+'"]').prop("selected",true);
    addCitysData();
    $('#citys option[value="'+infoJsonData[guid]["citys"]+'"]').prop("selected",true);
    addCountyData()   ;
    $("#county option[value='"+infoJsonData[guid]['county']+"']").prop("selected",true);

    $('form').show();
}

//2,获取表单中的数据，对数据进行验证
//2.1 获取修改后数据  使用数组进行储存
//2.2 对数据进行验证
$('#submit').click(function () {
    var formData=getFromData();
    console.log(formData);
    if(checkFormData(formData)){
        //修改或新建
        if(infoJsonData[$('.guid').val()]){
            //2.3 修改userInfoData数组
            editUserInfo(formData);
            alert("修改成功！");
        }else{
            //2.3 新建用户信息
            addUserInfo(formData);
            console.log(infoJsonData);
            alert("注册成功！");
        }
        $("#info tr:not(:first)").remove();   //清空表格中的数据
        addDataToTable();                       //此时的数据
        $('form').hide();
        $('.newData').attr("value","新增");

    }else console.log('信息不合法！');

});

var arr=['name','pwd','realName','sex','age','email','nation','province','citys','county'];
//修改用户信息
function editUserInfo(formData){
    $.each(arr,function (key,value) {
        infoJsonData[$('.guid').val()][value]=formData[value];
    });
}
//添加用户信息
function addUserInfo(formData){
    infoJsonData[$('.guid').val()]={
        'name':formData['name'],
        'pwd':formData['pwd'],
        'realName':formData['realName'],
        'sex':formData['sex'],
        'age':formData['age'],
        'email':formData['email'],
        'nation':formData['nation'],
        'province':formData['province'],
        'citys':formData['citys'],
        'county':formData['county']
    };

}
//获取表单修改后数据
function getFromData(){
    var formData={};
    formData['name']=$('.name').val();
    //字符串加密
    var b=new Base64();
    formData['pwd']=b.encode($('.pwd').val());
    formData['realName']=$('.realName').val();
    formData['sex']=$('input:radio:checked').val();
    formData['age']=$('.age').val();
    formData['email']=$('.email').val();
    formData['nation']=$('#nation option:selected').val();
    formData['province']=$('#province option:selected').val();
    formData['citys']=$('#citys option:selected').val();
    formData['county']=$('#county option:selected').val();
    return formData;
}

//删除信息
function deleteFormData(userId){
    delete infoJsonData[userId];
    alert("删除成功！");
    resetFrom();
    $('form').hide();
    $('.newData').attr("value","新增");
    console.log(infoJsonData);
    $("#info tr:not(:first)").remove();   //清空表格中的数据
    addDataToTable();
}