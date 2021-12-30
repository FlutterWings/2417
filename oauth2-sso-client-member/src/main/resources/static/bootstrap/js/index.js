/**
 * Created by 宇文智 on 2019/6/19.
 */
var flag=0; //0：隐藏 1：显示
$(".newData").click(function(){
    //新建
    if(flag==0){
        $('form').show();
        resetFrom();
        flag=1;
        $(this).attr("value","关闭新增表单")
        //关闭
    }else{
        $('form').hide();
        flag=0;
        $(this).attr("value","新增")
    }
});

//重置表单
function resetFrom(){
    $('#userInfo')[0].reset();      //通过调用 DOM 中的 reset 方法来重置表单。? 不太理解
    $('#userInfo option[value="-1"]').prop("selected",true);
    $('.man').prop('checked',"checked");
    $(".guid").prop("value",guid());
    // alert("id = "+$(".guid").val());
}
var nation={};
//添加民族数据列表
function addSelectData(){
    $('form').hide();
    $('#nation').append("<option value='-1' >请选择您的民族</option>")
    var nationData= "汉族 壮族 回族 满族 维吾尔族 苗族 彝族 土家族 藏族 蒙古族 侗族 布依族 瑶族 白族 朝鲜族 哈尼族 黎族 哈萨克族 傣族 畲族 傈僳族 东乡族 仡佬族 拉祜族 佤族 水族 纳西族 羌族 土族 仫佬族 锡伯族 柯尔克孜族 景颇族 达斡尔族 撒拉族 布朗族 毛南族 塔吉克族 普米族 阿昌族 怒族 鄂温克族 京族 基诺族 德昂族 保安族 俄罗斯族 裕固族 乌孜别克族 门巴族 鄂伦春族 独龙族 赫哲族 高山族 珞巴族 塔塔尔族"
    nation=nationData.split(" ");
    for(var key in nation){
        $('#nation').append('<option value="'+nation[key]+'">'+nation[key]+'</option>')
    }
    $('#province').append("<option  value='-1'>请选择您所在省份</option>")
    $('#citys').append("<option value='-1'>请选择您所在城市</option>")
    $('#county').append("<option value='-1'>请选择您所在区/县</option>")
    $.getJSON('config/index.json',function(data){
        infoJson=data;
    });
    //console.log(infoJson);
    //如果加载不了json文件中的数据，就是使用js文件中的变量
    if(JSON.stringify(infoJson)=="{}"){
        infoJson=AddressInfoData;
        var id=0;
        $.each(infoJson,function(key){
            id++;
            $('#province').append('<option  id="'+id+'" value="'+key+'" >'+key+'</option>')
        });
    }
}

//清空数据
function clearData(){
    //清除之前的列表数据
    $('#citys').empty();
    $('#county').empty();
    $("#citys").append("<option value='-1' id='chooseCity'>请选择您所在城市</option>");
    $("#county").append("<option value='-1' id='chooseCounty'>请选择您所在区/县</option>");
}
//1,先添加省数据
var infoJson={};
$('document').ready(function () {
    addSelectData();
    getUserInfoData();
});
//2,添加城市数据
function addCountyData(){
    $('#county').empty();
    $("#county").append("<option value='-1' id='chooseCounty'>请选择您所在区/县</option>");
    var city=$("#citys").val();
    var province=$("#province").val();
    $.each(infoJson[province][city],function (key,value) {
        $('#county').append('<option value="'+value+'">'+value+'</option>')
    })
}
//3,添加区/县数据
function addCitysData(){
    clearData();
    //获取当前选择的省份
    var province=$("#province").val();
    $.each(infoJson[province],function (key) {
        $('#citys').append('<option value="'+key+'">'+key+'</option>')
    })

}

//change事件调用以上两个方法
$('#province').change(function(){
    addCitysData();
});

$('#citys').change(function(){
    addCountyData()
});

 