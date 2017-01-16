 $(function(){
    menuEvent(0);//初始化
    $("#main_container").css({"min-height":$(window).height()-$("#head").height()-$("#footer").height()});    
     videomenuEvent("#videomenu");/*视频课堂 左侧树菜单收缩*/
     videomenuEvent("#tractmore_tree");//互动专区 左侧树收缩
     commonlistEvent(); //全局通用列表事件
     searchdivFoldEvent(".searchdiv");//搜索折叠框-视频课堂
     searchdivFoldEvent(".course_top");//搜索折叠框-课程公告
     videoHover();//视频hover
 });
$(window).resize(function(){

    $("#main_container").css({"min-height":$(window).height()-$("#head").height()-$("#footer").height()});
});

/*
* 头部主菜单切换
*/
function menuEvent(init_index){
    $("#mainMenu").on("click","li",function(){
        gotoMenu($(this).index(),$(this).attr("data-src"));
    });
    $("#mainMenu ul li").eq(init_index).trigger("click");
}

function gotoMenu(index,src){
    $("#mainMenu li").eq(index).addClass("tabselected").siblings().removeClass("tabselected");
    $.ajaxSetup({cache : false});
    $("#main_container").load(
        src,
        null,
        function(result, status, text){
        if (status == 'error') {
            // $("#bj_main_container").load("/error/404.jsp");
            $("#main_container").html("<center><h1 style='font-size:100px;line-height:300px;color:orange;'>404</h1></center>");
        }
    });
}


/*
 *  tabs 选项卡切换功能
 *  @param {string} tabsId       //本选项卡的总的Id
 *  @param {string} menuItem     // 选项卡菜单元素
 *  @param {string} menuClass   // 选项卡菜单元素选中class
 *  @param {string} contentItem   //内容 元素
 *  @param {string} eventType : "click" or "mouseenter"
 *  @param {function}callbackfn  回调函数  选项卡切换后执行的函数
*/
 function tabs_init(setting){
    var $tabs= $(setting.tabsId);
    var $menuItem = $tabs.find(setting.menuItem);
    var menuClass = setting.menuClass

    var $contentItem =$tabs.find(setting.contentItem);
    var eventType = setting.eventType;

    $menuItem.on(eventType,function(){
         $(this).addClass(menuClass).siblings().removeClass(menuClass);
         $contentItem.eq($(this).index()).show().siblings().hide();

         if(setting.callbackfn!=null){
            setting.callbackfn($(this).index());
         }
    }).eq(0).trigger(eventType);
    $menuItem.eq(0).addClass(menuClass).siblings().removeClass(menuClass);
    $contentItem.eq(0).show().siblings().hide();
 }

 /*
    单击打开日历详情
 */
 function openCalDetail(){
    $("body").append("<div class='layerCal'></div>");
    $.ajaxSetup({cache : false});
    $(".layerCal").load("calendardetail.html");
    layer.open({
        type: 1,
        area:['760px','550px'],
        shade: 0.4,
        title: false, //不显示标题,
        shadeCLose:true,
        content: $('.layerCal'), //捕获的元素
        end: function(){
            $('.layerCal').remove();
        }
    });
 }


/*视频课堂 左侧树菜单构建*/
function videoMenusInit(targetId,josn){
    var str='';
    $.each(josn,function(i,iv){
        str +="<div class='menu-item' id='"+iv["id"]+"'>";
            str +="<div class='menu-title'>";
               str +="<span class='img img"+i+"'></span>";
               str +="<span class='name'>"+iv["name"]+"</span>";
               str +="<span class='menu-arrow'></span>";
            str +="</div>"; 
            str +="<div class='menu-content'>";    

        $.each(iv["menus"],function(j,jv){
            str +="<dl>"
            str +="<dt>"+jv["sortname"]+"</dt>";

            $.each(jv["submenus"],function(k,kv){
                str +="<dd data-option='"+kv["src"]+"'>"+kv["name"]+"</dd>";
            });

            str +="</dl>"
        });

           str +="</div>";
         str +="</div>";
    });
    $(targetId).html(str);
}
/*视频课堂 左侧树菜单收缩*/
 function videomenuEvent(targetId){
    var t = targetId + " .menu-title";
    $("#main_container").on("click",t,function(){
        if(!$(this).find(".menu-arrow").hasClass("open")){
            $(this).find(".menu-arrow").addClass("open");
            $(this).parent().find(".menu-content").slideDown();
        }else{
            $(this).parent().find(".menu-content").slideUp();
            $(this).find(".menu-arrow").removeClass("open");
        }       
        $(this).parent().siblings().find(".menu-content").slideUp();
        $(this).parent().siblings().find(".menu-arrow").removeClass("open");
    }).eq(0).trigger("click");
 }

/*视频课堂 搜索内容构建*/
function videosearchContentInit(josn){
    var str="<ul>";
    $.each(josn,function(i,value){
         str +="<li id='"+value["id"]+"'>";
           str +="<span class='videoimg' onclick=\"window.top.gotoMenu(3,'videoClassView.html')\" title='点击观看视频'><img src='"+value["imgurl"]+"' alt='"+value["imgurl"]+"'></span>";
            str +="<span class='video_namebg'></span>";
            str +="<span class='video_name'>"+value["name"]+"</span>";
            str +="<span class='dec'>";
                str +="<dl class='info'>";
                    str +="<dd class='name'><span onclick=\"window.top.gotoMenu(3,'videoClassView.html')\">"+value["name"]+"</span></dd>";
                    str +="<dd class='teacher'>讲师：<span>"+value["teacher"]+"</span></dd>";
                    str +="<dd class='time'>时长：<span>"+value["time"]+"</span></dd>";
                    str +="<dd class='decinfo'><span>"+value["dec"]+"</span></dd>";
                str +="</dl>";
            str +="</span>";
            str +="<span class='action'>";
                str +="<span class='view' data-option='video01' onclick=\"window.top.gotoMenu(3,'videoClassView.html')\">直接观看</span>";
                str +="<span class='onlinetest' onclick=\"window.top.gotoMenu(4,'onlinelist.html')\">在线测评</span>";
                str +="<span class='download' onclick=\"window.top.gotoMenu(2,'courseDownload.html')\">下载课件</span>";
            str +="</span>";           
         str +="</li>";
    });
    str +="</ul>";
    $("#searchcontent").html(str);
} 
function videoHover(){
   $("#main_container").on("mouseenter","#searchcontent ul li .videoimg",function(){
        $(this).parent("li").find(".dec").animate({"top":0},600);
    });
   $("#main_container").on("mouseleave","#searchcontent ul li",function(){
        $(this).find(".dec").stop().animate({"top":140},450);
    });
}
 /*加载最新，最热，推荐视频列表*/
function commonlistInit(setting){
     var str="<ul>";
    $.each(setting.josn,function(i,value){
        str += "<li onclick=\"window.top.gotoMenu(3,'videoClassView.html')\">";     
        str += "<span class='single'><em class='num'>"+_intFamat(i)+"</em>"+value["name"]+"</span>"; 
        str += "<span class='detail'>";
            str += "<span class='videoimg'><img src='"+value["imgurl"]+"' alt='"+value["imgurl"]+"'></span>";
            str += "<dl>";
                str += "<dd class='name'>"+value["name"]+"</dd>";
                str += "<dd class='teacher'>讲师 : "+value["teacher"]+"</dd>";
                str += "<dd class='time'>时长 : "+value["time"]+"</dd>";
            str += "</dl>";
        str += "</span>";
      str += "</li>";
    });
    str +="</ul>";
    $(setting.targetId).html(str);  
    $(".commonlist_container ul li .detail").hide();  
}


//全局通用列表事件
function commonlistEvent(){
    $("#main_container").on("mouseenter",".commonlist_container ul li",function(){
        $(this).siblings().find(".detail").hide();
        $(this).siblings().find(".single").show();
        $(this).find(".single").hide();
        $(this).find(".detail").show();
    });
}
//格式化字符串
function _intFamat(_int){
    if (_int<9) {
        return "0"+(_int+1);
    }else{
        return (_int+1);
    }
}

//搜索折叠框
function searchdivFoldEvent(targetId){
    $("#main_container").on("click",".searchdiv-fold.open",function(){
        $(this).prev(targetId).slideUp();
        $(this).addClass("close").removeClass("open").html("展开搜索");
    });
    $("#main_container").on("click",".searchdiv-fold.close",function(){
        $(this).prev(targetId).slideDown();
        $(this).addClass("open").removeClass("close").html("收起搜索");
    });    
}
/*课程公告-start*/
function commonlistInit_course(setting){
     var str="<ul>";
    $.each(setting.josn,function(i,value){
        str += "<li onclick=\"window.top.gotoMenu(2,'courseBulletion_detail.html')\">";     
        str += "<span class='single'><em class='num'>"+_intFamat(i)+"</em>"+value["name"]+"</span>"; 
        str += "<span class='detail'>";
            str += "<span class='videoimg'><img src='"+value["imgurl"]+"' alt='"+value["imgurl"]+"'></span>";
            str += "<dl>";
                str += "<dd class='name'>"+value["name"]+"</dd>";
                str += "<dd class='teacher'>讲师 : "+value["teacher"]+"</dd>";
                str += "<dd class='time'>时长 : "+value["time"]+"</dd>";
            str += "</dl>";
        str += "</span>";
      str += "</li>";
    });
    str +="</ul>";
    $(setting.targetId).html(str);  
    $(".commonlist_container ul li .detail").hide();  
}
/*课程公告 搜索内容构建*/
function courseBulletionInit(targetId,josn){
    var str="";
    $.each(josn,function(i,value){
        str +="<li>";
            str +="<span class='left_img' onclick=\"window.top.gotoMenu(2,'courseBulletion_detail.html')\">";
               str +=" <img src='"+value["imgurl"]+"' width='176' height='121'>";
            str +=" </span>"
            str +=" <span class='cousrsetitle'>"+value["name"]+"</span>";
            str +=" <span class='unit'>";
            str +="    <span class='unit_name'>"+value["unit"]+"</span>";
            str +="    <span class='date'>"+value["date"]+"</span>";
            str +="</span>";                    
            str +="<span class='detail_content'>"+value["detail"]+"</span>";
            str +="<span class='time'><em>时长 : </em>"+value["time"]+"</span>";
            str +="<span class='teacher'><em>讲师 : </em>"+value["teacher"]+"</span>";  
            str +="<span class='signnumbg'></span>";     
            str +="<span class='signnum'>"+value["signnum"]+"</span>";                              
            if(parseInt(value["left_signnum"])==0){
                str +="<span class='zero'>剩余名额："+value["left_signnum"]+"</span>";
                str +="<input class='now_sign full' value='立即报名' readonly='true'><span class='fullinfo'>名额已满</span>"; 
            }else{
                str +="<span class='left_signnum'>剩余名额："+value["left_signnum"]+"</span>";
                str +="<input class='now_sign' value='立即报名'>";
            }
                                     
        str +="</li>";
    });
 $(targetId).html(str);  
}

/*课件下载*/

/*课件下载 搜索内容构建*/
function courseDownloadInit(targetId,josn){
    var str="";
    $.each(josn,function(i,value){
        str +="<li>";
            str +="<span class='left_img' onclick=\"window.top.gotoMenu(2,'courseBulletion_detail.html')\">";
               str +=" <img src='"+value["imgurl"]+"' width='176' height='121'>";
            str +=" </span>"
            str +=" <span class='cousrsetitle'>"+value["name"]+"</span>";
            str +=" <span class='unit'>";
            str +="    <span class='unit_name'>"+value["unit"]+"</span>";
            str +="    <span class='date'>"+value["date"]+"</span>";
            str +="</span>";                    
            str +="<span class='detail_content'>"+value["detail"]+"</span>";
            str +="<span class='downloadnum1'>下载次数:"+value["downloadnum"]+"</span>"; 
            str +="<span class='downloadnum2bg'></span>";
            str +="<span class='downloadnum2'>已有"+value["downloadnum"]+"次下载</span>";
            str +="<span class='type'><em>课件</em>类型 : "+value["type"]+"</span>"; 
            str +="<span class='size'><em>课件</em>大小 : "+value["size"]+"</span>";               
            str +="<input class='now_down' value='立即下载'>";
                                     
        str +="</li>";
    });
 $(targetId).html(str);  
}
/*最新，推荐课件*/
function commonlistInit_courseDownload(setting){
     var str="<ul>";
    $.each(setting.josn,function(i,value){
        str += "<li onclick=\"window.top.gotoMenu(2,'courseBulletion_detail.html')\">";     
        str += "<span class='single'><em class='num'>"+_intFamat(i)+"</em>"+value["name"]+"</span>"; 
        str += "<span class='detail'>";
            str += "<span class='videoimg'><img src='"+value["imgurl"]+"' alt='"+value["imgurl"]+"'></span>";
            str += "<dl>";
                str += "<dd class='name'>"+value["name"]+"</dd>";
                str += "<dd class='teacher'>类型 : "+value["type"]+"</dd>";
                str += "<dd class='time'>大小 : "+value["size"]+"</dd>";
            str += "</dl>";
        str += "</span>";
      str += "</li>";
    });
    str +="</ul>";
    $(setting.targetId).html(str);  
    $(".commonlist_container ul li .detail").hide();  
}