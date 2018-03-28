var o = {
  template: {
    // 正文
    text: `
   <li>
            <div class="icons">
            <div class="up-down">
        <img class="down" src="./images/icon_movedown.png" alt="">
        <img class="up" src="./images/icon_moveup.png" alt="">
      </div>
      <div class="delete">
        <img src="./images/icon_delete.png" alt="">
      </div>
    </div>
      <textarea name="" id="" cols="30" rows="8" placeholder="请输入正文"></textarea>
      <div class="select-icon">
        <div class="line"></div>
         <img class="normal" src="./images/icon_tianjia_default.png" alt="">
         <img class="clicked" src="./images/icon_tianjia_expand.png" alt="">
         <div class="line"></div>
      </div>
      <div class="select-content">
         <ol class="triangle">
           <li>
             <img src="./images/icon_text.png" alt="">
             <span>文字</span>
           </li>
           <li>
             <img src="./images/icon_picture.png" alt="">
             <span>图片</span>
           </li>
           <li>
             <img src="./images/icon_stencil.png" alt="">
             <span>图片模版</span>
           </li>
           <li>
           <img src="./images/icon_dividingline.png" alt="" style="height:0.175rem;margin:.4rem 0;">
             <span>分割线</span>
           </li>
           <li>
             <img src="./images/icon_title.png" alt="">
             <span>二级标题</span>
           </li>
         </ol>
       </div>
   </li>
   `,
   //图片
    img:`
    <li>
      <div class="icons">
        <div class="up-down">
          <img class="down" src="./images/icon_movedown.png" alt="">
          <img class="up" src="./images/icon_moveup.png" alt="">
        </div>
        <div class="delete">
          <img src="./images/icon_delete.png" alt="">
        </div>
      </div>
      <div class="add-img">
         <div class="add">
         <input class="weui-uploader__input upload" type="file" accept="image/*">
         <div class="add-msg">
           <img class="icon-12-12" src="./images/icon_add.png" alt="">  
           <span>添加图片</span>
         </div>
         <img class="image" alt="">
         </div>
         <div class="cropper">
            <button class="setting-button cropper-img">确定</button>
         </div>
      </div>
        <div class="select-icon">
          <div class="line"></div>
           <img class="normal" src="./images/icon_tianjia_default.png" alt="">
           <img class="clicked" src="./images/icon_tianjia_expand.png" alt="">
           <div class="line"></div>
        </div>
        <div class="select-content">
          <ol class="triangle">
            <li>
              <img src="./images/icon_text.png" alt="">
              <span>文字</span>
            </li>
            <li>
              <img src="./images/icon_picture.png" alt="">
              <span>图片</span>
            </li>
            <li>
              <img src="./images/icon_stencil.png" alt="">
              <span>图片模版</span>
            </li>
            <li>
            <img src="./images/icon_dividingline.png" alt="" style="height:0.175rem;margin:.4rem 0;">
              <span>分割线</span>
            </li>
            <li>
              <img src="./images/icon_title.png" alt="">
              <span>二级标题</span>
            </li>
          </ol>
        </div>
    </li>
    `,
    // 分割线
    cutLine:`
    <li>
        <div class="icons">
        <div class="up-down">
        <img class="down" src="./images/icon_movedown.png" alt="">
        <img class="up" src="./images/icon_moveup.png" alt="">
      </div>
      <div class="delete">
        <img src="./images/icon_delete.png" alt="">
      </div>
      </div>
       <div class="cut-line">
       <div class="add middle-line1">
       </div>
         </div>
      <div class="select-icon">
        <div class="line"></div>
         <img class="normal" src="./images/icon_tianjia_default.png" alt="">
         <img class="clicked" src="./images/icon_tianjia_expand.png" alt="">
         <div class="line"></div>
      </div>
      <div class="select-content">
        <ol class="triangle">
          <li>
            <img src="./images/icon_text.png" alt="">
            <span>文字</span>
          </li>
          <li>
            <img src="./images/icon_picture.png" alt="">
            <span>图片</span>
          </li>
          <li>
            <img src="./images/icon_stencil.png" alt="">
            <span>图片模版</span>
          </li>
          <li>
          <img src="./images/icon_dividingline.png" alt="" style="height:0.175rem;margin:.4rem 0;">
            <span>分割线</span>
          </li>
          <li>
            <img src="./images/icon_title.png" alt="">
            <span>二级标题</span>
          </li>
        </ol>
       </div>
    </li>
    `,
    //二级标题
    secondary:`
     <li>
        <div class="icons">
        <div class="up-down">
          <img class="down" src="./images/icon_movedown.png" alt="">
          <img class="up" src="./images/icon_moveup.png" alt="">
        </div>
        <div class="delete">
          <img src="./images/icon_delete.png" alt="">
        </div>
       </div>
        <div class="secondary-head">
         <div class="add">
           <textarea name="" id="" cols="20" rows="2" maxlength="40" placeholder="请输入二级标题"></textarea>
           <span class="size12-gray1 use-length">0</span><span class="size12-gray1">/40</span>
         </div>
         </div>
        <div class="select-icon">
          <div class="line"></div>
           <img class="normal" src="./images/icon_tianjia_default.png" alt="">
           <img class="clicked" src="./images/icon_tianjia_expand.png" alt="">
           <div class="line"></div>
        </div>
        <div class="select-content">
          <ol class="triangle">
            <li>
              <img src="./images/icon_text.png" alt="">
              <span>文字</span>
            </li>
            <li>
              <img src="./images/icon_picture.png" alt="">
              <span>图片</span>
            </li>
            <li>
              <img src="./images/icon_stencil.png" alt="">
              <span>图片模版</span>
            </li>
            <li>
            <img src="./images/icon_dividingline.png" alt="" style="height:0.175rem;margin:.4rem 0;">
              <span>分割线</span>
            </li>
            <li>
              <img src="./images/icon_title.png" alt="">
              <span>二级标题</span>
            </li>
          </ol>
         </div>
     </li>
    `,
    modelImg:`
    <li>
      <div class="icons">
         <div class="up-down">
          <img class="down" src="./images/icon_movedown.png" alt="">
          <img class="up" src="./images/icon_moveup.png" alt="">
        </div>
        <div class="delete">
          <img src="./images/icon_delete.png" alt="">
        </div>
      </div>
      `,
      modelImg1:`
        <div class="select-icon">
          <div class="line"></div>
           <img class="normal" src="./images/icon_tianjia_default.png" alt="">
           <img class="clicked" src="./images/icon_tianjia_expand.png" alt="">
           <div class="line"></div>
        </div>
        <div class="select-content">
          <ol class="triangle">
            <li>
              <img src="./images/icon_text.png" alt="">
              <span>文字</span>
            </li>
            <li>
              <img src="./images/icon_picture.png" alt="">
              <span>图片</span>
            </li>
            <li>
              <img src="./images/icon_stencil.png" alt="">
              <span>图片模版</span>
            </li>
            <li>
                <img src="./images/icon_dividingline.png" alt="" style="height:0.175rem;margin:.4rem 0;">
              <span>分割线</span>
            </li>
            <li>
              <img src="./images/icon_title.png" alt="">
              <span>二级标题</span>
            </li>
           </ol>
        </div>
     </li>
    `,
    getString:'',//html()得到的字符串
  },
  container:'.contents ul>li',
  length:4,
  cropper:null,
  insert:function(){
    o.iconIndex = $(this).index()
    o.contentIndex = $(this).closest('.triangle').closest('li').index()
    if(o.contentIndex === o.length-1){//最后一个添加内容时，倒数第二个的icon要变化
         $('.contents ul>li').eq(o.contentIndex).find('.up-down .down').show()
    }
    switch(o.iconIndex){
       case 0: o.insertAfter(o.template.text,o.contentIndex) ;break
       case 1: o.insertAfter(o.template.img,o.contentIndex) ;break
       case 2: window.location.href = '/select-img-model.html';break
       case 3: o.insertAfter(o.template.cutLine,o.contentIndex);break
       case 4: o.insertAfter(o.template.secondary,o.contentIndex);break
    }
  },
  iconIndex:0,
  contentIndex:0,
  insertAfter:function(template,index){
    $(template).insertAfter($('.contents ul>li').eq(index))
    o.hideSelectIcon(index)
    o.initalUpDown()
  },
  onloadEvent:function(){
     $('.contents').on('click','ol.triangle li',o.insert)//增
     $('.contents ul').on('click','.delete',o.deleteItem)//删
     this.iconUpDown()
     $('.contents ul').on('click','.down',o.down)//下移
     $('.contents ul').on('click','.up',o.up)//上移
    o.input()
    $('.contents ul').on('change','.upload',o.uploadImg)//添加图片
    $('.contents ul').on('click','.cropper-img',o.cropImg)//点击确定获得裁剪后的图片
    o.getQueryString('model')?o.getModelMsg(o.getQueryString('model')):o.initalUpDown()//如果是在编辑模版点应用进来的页面，
  },
  hideSelectIcon:function(index){//隐藏选择框
    $('.contents ul>li').eq(index).find('.select-icon').removeClass('active')
  },
  deleteItem:function(){
    var index = $(this).closest('li').index()
    if(o.length===2){alert('不得少于两个');return}
    $('.contents ul>li').eq(index).remove()
    o.initalUpDown()
  },
  initalUpDown:function(){
    //  获取列表的长度
    this.length = $('.contents ul>li').length
    $('.contents ul>li').eq(0).find('.up-down .up').hide()
    $('.contents ul>li').eq(this.length-1).find('.up-down .down').hide()
  },
  iconUpDown:function(index,string){//上移和下移时icon的变化
    if(string === 'down'){
      if(index === 0){
        if(o.length ===2){
         $('.contents ul>li').eq(0).find('.up-down .down').show()
         $('.contents ul>li').eq(0).find('.up-down .up').hide()
         $('.contents ul>li').eq(1).find('.up-down .up').show()
         $('.contents ul>li').eq(1).find('.up-down .down').hide()
        }else{
         $('.contents ul>li').eq(0).find('.up-down .up').hide()
         $('.contents ul>li').eq(1).find('.up-down .up').show()
        }
      }else if(index === (o.length-2)){
         $('.contents ul>li').eq(index).find('.up-down .down').show()
         $('.contents ul>li').eq(index+1).find('.up-down .down').hide()
      }
    }else if(string === 'up'){
      if(index === (o.length-1) && index!==1){
        $('.contents ul>li').eq(index-1).find('.up-down .down').show()
        $('.contents ul>li').eq(index).find('.up-down .down').hide()
     }else if(index === 1){
       if(o.length===2){
        $('.contents ul>li').eq(0).find('.up-down .up').hide()
        $('.contents ul>li').eq(0).find('.up-down .down').show()
        $('.contents ul>li').eq(1).find('.up-down .up').show()
        $('.contents ul>li').eq(1).find('.up-down .down').hide()
       }else{
        $('.contents ul>li').eq(0).find('.up-down .up').hide()
        $('.contents ul>li').eq(1).find('.up-down .up').show()
       }
     }
    }
  },
  input:function(){//输入的内容移动时也要保留
      $('.contents ul').on('input','textarea',function(e){
        $(this).attr('value',e.target.value)
      })
  },
  down:function(){
    var index = $(this).closest('li').index()
    var value
    o.getString ='<li>'+$('.contents ul>li').eq(index).html()+'</li>'
    $('.contents ul>li').eq(index).remove()
    $(o.getString).insertAfter($('.contents ul>li').eq(index))
    value = $('.contents ul>li').eq(index+1).find('textarea').attr('value')
    if(value!==undefined){
       $('.contents ul>li').eq(index+1).find('textarea').val(value)
    }
    o.iconUpDown(index,'down')
  },
  up:function(){
    var index = $(this).closest('li').index()
    var value
    o.getString ='<li>'+$('.contents ul>li').eq(index).html()+'</li>'
    $('.contents ul>li').eq(index).remove()
    $(o.getString).insertBefore($('.contents ul>li').eq(index-1))
    value = $('.contents ul>li').eq(index-1).find('textarea').attr('value')
    if(value!==undefined){
       $('.contents ul>li').eq(index-1).find('textarea').val(value)
    }
    o.iconUpDown(index,'up')
  },
  uploadImg:function(e){
     let index = $(this).closest('li').index()
     let file = e.target.files[0]
     let reader = new FileReader()
     if(file){
       $('#natureImg').remove()
        reader.onload = function(e){
          $(o.container).eq(index).find('.cropper').addClass('active')
            var string = `<img src=${e.target.result} id="natureImg">`
            $(o.container).eq(index).find('.cropper').prepend(string)
            var natureImg = document.querySelector('#natureImg')
            natureImg.onload = function(){
            o.cropper = new Cropper(natureImg,{
              aspectRatio:3.66667/1,
              autoCropArea:0.9578,
              // scalable:false,
              // movabel:false,
              // cropBoxResizable:false,
              crop:function(e){
                }
            }) 
          }
        }
     }
     reader.readAsDataURL(file)
  },
  cropImg:function(){
    let index = $(this).closest('li').index()
    $('.contents ul>li').eq(index).find('.add-img .image').removeAttr('src')
    var a = o.cropper.getCroppedCanvas().toDataURL()//获取裁剪后图片的URL
    $('.contents ul>li').eq(index).find('.add-img .image').attr('src',a)
    $(o.container).eq(index).find('.cropper').removeClass('active')
    $('.contents ul>li').eq(index).find('.add-msg').addClass('active')
  },
  getQueryString:function(name){//获取路径里的参数
    var reg = new RegExp("[\?\&]"+ name +"=([^&]*)(&|$)");
    return window.location.href.match(reg)?window.location.href.match(reg)[1]:null
  },
  getModelMsg:function(ID){
    var fakeData = './images/img_zhanweitu04.png'//ajax获取
    var fakeId = '201801'//ajax获取
    //$.ajax({ID})
    var string =  `<div class="img-model">
                     <a href="./edit-img-model.html?id=${fakeId}">
                        <img src="${fakeData}" alt="">
                      </a>
                    </div>`
    o.insertAfter(o.template.modelImg+string+o.template.modelImg1,o.length-1)
  }
}
o.onloadEvent()