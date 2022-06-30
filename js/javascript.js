$(()=>{
 
  // 네비게이션(왼쪽)
  const $leftList = $('.left-container > nav > .gnb > li>a');
  const $leftLnb = $('.left-container > nav > .gnb > li > .lnb');
  
  // 메인슬라이드
  const $mainSlide = $('#main-wrap > section > .top > .visual > .visual-slides>li');
  const $mainStart = $('#main-wrap > section > .top > .visual > .btn-container > .btn-start');
  const $mainPause = $('#main-wrap > section > .top > .visual > .btn-container > .btn-pause');
  const $slideList = $('#main-wrap > section > .top > .visual > .list > li');

  // 뉴스
  const $newsList = $('#main-wrap > section > .mid > .news > .news-category > li');
  const $newsCont = $('#main-wrap > section > .mid > .news > .news-cont');

  // sns
  const $snsList = $('#main-wrap > section > .bottom > .cont > .sns > .sns-list>li');
  const $sns = $('#main-wrap > section > .bottom > .cont > .sns > ol > li');

  // cont3 슬라이드
  const $leftSlide = $('.slides > .left > li');
  const $rightSlide = $('.slides > .right > li');
  const $leftIndicator = $('#main-wrap > section > .bottom > .cont > .left > .btn > .pagination > ul > li');
  const $rightIndicator = $('#main-wrap > section > .bottom > .cont > .right > .btn > .pagination > ul > li');
  // const $leftStart = $('#main-wrap > section > .bottom > .cont > .left > .btn > .start-pause > .start');
  // const $rightStart = $('#main-wrap > section > .bottom > .cont > .right > .btn > .start-pause > .start');
  // const $leftPause = $('#main-wrap > section > .bottom > .cont > .left > .btn > .start-pause > .pause');
  // const $rightPause = $('#main-wrap > section > .bottom > .cont > .right > .btn > .start-pause > .pause');

  // service 슬라이드
  const $servSlide = $('#main-wrap > section > .bottom .slides-container > .slides');
  const $servicePrev = $('#main-wrap > section > .bottom > .service > .prev');
  const $serviceNext = $('#main-wrap > section > .bottom > .service > .next');

  // business
  const $openBox = $('#main-wrap > section > .bottom > .company > .business > .busi-box');
  const $openBtn = $('#main-wrap > section > .bottom > .company > .business > a');
  const $closeBtn = $('#main-wrap > section > .bottom > .company > .business > .busi-box > a');

  let nowIdx;
  let intervalKey;
  let aniChk = false;

  // 메인 슬라이드 함수
  const mainFadeFn = ()=>{
    // 이전슬라이드 사라짐
    $mainSlide.filter('.on').stop().fadeOut(1000).removeClass('on');
    // 이번슬라이드 나타남
    $mainSlide.eq(nowIdx).stop().fadeIn(1000).addClass('on');
    // list 활성화
    $slideList.eq(nowIdx).addClass('on').siblings().removeClass('on');
  };

  // 메인 슬라이드 자동재생 함수
  const mainAuto = ()=>{
    
    // 반복실행을 하기 위한 setInterval
    intervalKey = setInterval(()=>{
    // 재생정지를 하기 위한 intervalKey
      if(nowIdx<1){
        nowIdx++;
      }else{
        nowIdx=0;
      }

      mainFadeFn();      
    7000},7000);
  }
  // cont 슬라이드 함수
  const leftFadeFn = ()=>{
    $leftSlide.stop().fadeOut().eq(nowIdx).fadeIn().siblings().fadeOut();
    $leftIndicator.eq(nowIdx).addClass('on').siblings().removeClass('on');
  };
  const rightFadeFn = ()=>{
    $rightSlide.eq(nowIdx).stop().fadeIn(1000).siblings().fadeOut(1000);
    $rightIndicator.eq(nowIdx).addClass('on').siblings().removeClass('on');
  };
  
  // 슬라이드 자동재생 함수
  const leftAuto = ()=>{
    
    // 반복실행을 하기 위한 setInterval
    intervalKey = setInterval(()=>{
    // 재생정지를 하기 위한 intervalKey
      if(nowIdx<4){
        nowIdx++;
      }else{
        nowIdx=0;
      }

      leftFadeFn();      
    1000},1000);
  }

  const rightAuto = ()=>{
    
    // 반복실행을 하기 위한 setInterval
    intervalKey = setInterval(()=>{
    // 재생정지를 하기 위한 intervalKey
      if(nowIdx<4){
        nowIdx++;
      }else{
        nowIdx=0;
      }

      mainFadeFn();      
    1000},1000);
  }
  // 네비게이션 lnb 나타남
  $leftList.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $leftList.index(evt.currentTarget);  
    
    $leftLnb.eq(nowIdx).stop().slideToggle(400);
    $leftList.eq(nowIdx).parent().siblings().find('.lnb').stop().slideUp(400);
  });


  // 메인 배너 슬라이드
  // list에 대한 자바스크립트
  $slideList.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $slideList.index(evt.currentTarget);
    mainFadeFn();
  });

  // start 버튼에 대한 자바스크립트
  $mainStart.on('click',(evt)=>{
    evt.preventDefault();

    mainAuto();
  });

  // pause 버튼에 대한 자바스크립트
  $mainPause.on('click',(evt)=>{
    evt.preventDefault();

     clearInterval(intervalKey);
  });

  // korail news
  $newsList.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $newsList.index(evt.currentTarget);
   
    $newsList.eq(nowIdx).addClass('on').siblings().removeClass('on');
    
    //cont
    // fade를 사용한줄 알았으나 css 트랜지션 사용한것 같음
    // $newsCont.stop().fadeOut(100).eq(nowIdx).fadeIn(400);
    $newsCont.eq(nowIdx).addClass('on').siblings().removeClass('on');

  });

  // korail sns
  $snsList.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $snsList.index(evt.currentTarget);
    $snsList.eq(nowIdx).addClass('on').siblings().removeClass('on');

    $sns.eq(nowIdx).addClass('on').siblings().removeClass('on');
    
  });

  // cont3 slide
  
  // left slide
  $leftIndicator.on('click',(evt)=>{
    evt.preventDefault();
    
    nowIdx = $leftIndicator.index(evt.currentTarget);
    
    leftFadeFn();
  });

  // right slide
  $rightIndicator.on('click',(evt)=>{
    evt.preventDefault();

    nowIdx = $rightIndicator.index(evt.currentTarget);
    rightFadeFn();
  });

  // start
  $leftStart.on('click',(evt)=>{
    evt.preventDefault();
    
    leftAuto();
  });

  $rightStart.on('click',(evt)=>{
    evt.preventDefault();
    
    rightAuto();
  });

  // pause
  $leftPause.on('click',(evt)=>{
  });


  // 서비스 슬라이드
  $servicePrev.on('click',(evt)=>{
    evt.preventDefault();
  });

  // 다음버튼
  $serviceNext.on('click',(evt)=>{
    evt.preventDefault();
    
    nowIdx = 0;

    if(aniChk === false){

      aniChk = true;
    
        if(nowIdx<8){
          nowIdx++;
        }else{
          nowIdx=0;
        }
    
    
        //컨테이너 이동
        $servSlide.stop().animate({left : 0},400,()=>{
          $('.slides-container>.slides>li').eq(0).appendTo($servSlide);
          $servSlide.css({left : 0});

          aniChk = false;
        });
    }
  
  });
  
  //이전버튼
  $servicePrev.on('click',(evt)=>{
    evt.preventDefault();
    
    nowIdx = 0;

    if(aniChk === false){

      aniChk = true;
    
        if(nowIdx>0){
          nowIdx--;
        }else{
          nowIdx=8;
        }
    
    
        //컨테이너 이동
        $servSlide.stop().animate({left: 0}, ()=>{
          $(".slides-container>.slides>li").last().prependTo($servSlide);
          $servSlide.css({left: 0});

          aniChk = false;
        });
    }
  
  });

  // business
  // open
  $openBtn.on('click',(evt)=>{
    evt.preventDefault();
    
    $openBox.stop().slideDown();
  });
  $openBtn.on('mouseenter',()=>{
    $openBtn.stop().animate({backgroundPositionY:-36});
  });
  $openBtn.on('mouseleave',()=>{
    $openBtn.stop().animate({backgroundPositionY:0});
  });

  // close

  // 경영공시 바로가기
  $closeBtn.on('click',(evt)=>{
    evt.preventDefault();

    $openBox.stop().slideUp();
  });
  $closeBtn.on('mouseover',()=>{
    $closeBtn.children('.frame').stop().animate({backgroundPositionY:0});
  });
  $closeBtn.on('mouseout',()=>{
    $closeBtn.children('.frame').stop().animate({backgroundPositionY:-36});
  });
  
  // 페이지 load시 슬라이드 자동재생
  $(window).on('load',()=>{
    mainAuto();
   
  });
});