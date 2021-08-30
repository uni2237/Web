
var Links={
  setColor:function(color){
    //javascript 버전

    // var alist= document.querySelectorAll('a');
    // var i =0;
    //   while ( i<alist.length){
    //     alist[i].style.color=color;
    //     i=i+1;
    //   }

    //jquery 버전
    $('a').css('color',color);
  }
}

  var Body={
    setColor:function(color) {
      //document.querySelector('body').style.color=color;
      $('body').css('color',color);
    },
    setBackgroundColor:function(color) {
      //document.querySelector('body').style.backgroundColor=color;
      $('body').css('backgroundColor',color);
    }
  }


  function nightDayHandeler(self){

    if(self.value === 'night mode'){
      Body.setBackgroundColor('black')
      Body.setColor('white')
      self.value='day mode';
      Links.setColor('powderblue');

    } else {
      Body.setBackgroundColor('white')
      Body.setColor('black')
      self.value='night mode';
      Links.setColor('blue');
    }
  }
