/**
 * Created by 宇文智 on 2019/6/21.
 */
//验证表单数据
function checkFormData(formData){
    //2.1 验证用户名
    if(checkUserName(formData['name'])&&checkPwd(formData['pwd'])&&
        checkUserRealName(formData['realName'])&&
        checkage(formData['age'])&&checkEmail(formData['email'])&&checkSex(formData['sex'])
        &&checkSelectValue(formData)){
        return true;
    }else return false;
}
function checkSelectValue(formdata){
    var flag=true;
    if(formdata.nation==-1){
        alert("民族不能为空！");
        flag=false;
    }
    if (formdata.province==-1){
        alert("省级不能为空！");
        flag=false;
    }
    if (formdata.citys==-1){
        alert("市级不能为空！");
        flag=false;
    }
    if (formdata.county==-1){
        alert("县级不能为空！");
        flag=false;
    }
    return flag;
}
function checkUserName(userName){
    var re=/^[a-zA-Z]\w{3,15}$/;        //以字母开头，4-16位的由字母、数字和下划线组成的字符串,\w:字母数字下划线
    if(re.test(userName))
    {
        console.log("用户名规范");
        return true;
    }
    else
    {
        alert("用户名需要是以字母开头，4-16位的由字母、数字和下划线组成的字符串");
        return false;
    }
}
function checkPwd(pwd){
    if(pwd===""){
        alert("密码不能为空！");
        return false;
    }
    return true;
}
function checkage(age){
    var re=/^1[2-9]$|^[2-7][0-9]$|^80$/;
    if(re.test(age))
    {
        console.log("年龄合法");
        return true;
    }
    else{
        alert("年龄不合法！");
        return false;
    }
}
function checkSex(sex){
    //2.3 验证性别
    if(sex==='男'||sex==='女'){
        console.log("true");
        return true;
    }
    else {
        alert("性别错误！");
        return false;
    }
}
function checkEmail(email){
    //2.5 验证邮箱
    re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if( re.test(email))
    {
        console.log("邮箱正确");
        return true;
    }
    else{
        alert("邮箱不合法！");
        return false;
    }
}
function checkUserRealName(realName){
    //alert(realName)
    var re=/^[\u4e00-\u9fa5]{2,6}$/;       //汉字2-6
    if(re.test(realName))
    {
        console.log("真实姓名正确");
        return true;
    }
    else{
        alert("真实姓名为2-6个汉字");
        return false;
    }
}