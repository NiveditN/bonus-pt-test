angular.module('bonuspoint').factory('editions$', function() {
  return function(h,e,max){//e: holder of queue element, max, e:string, field name of the queue element value
      var q=[];
      var cursor; //the index of the current element, starting from 0, initial value null.
      max = max?max:10; // maximum editions stored
      function moveNext(){
          if(cursor<q.length-1){
              cursor++;
          }
      }
      function movePrevious(){
          if(cursor>0){
              cursor--;
         
          }
      }
      function moveLast(){
          cursor=q.length-1;
     
      }
      function moveFirst(){ 
          if(q.length>0){
               cursor=0;
        
          }          
      }
      function push(){
          dropTail();
          if(q.length=max){
            q.shift();
          }
          q.push(h[e]);
          cursor=q.length-1;
       
          
      }
      function dropTail(){//remove all element after the current one
          while(cursor<q.length-1){
              q.pop();
          }
      }
      e.editions={
          moveNext:moveNext,
          moveLast:moveLast,
          moveFirst:moveFirst,
          movePrevious:movePrevious,
          push:push,
          current:function(){return q[cursor];},
          length:function(){return q.length;}
      }
      e.editions.push();
      e.undo=function(){
          h.editions.movePrevious();
          h[e]=h.editions.current();
      }
      e.redo=function(){
          h.editions.moveLast();
          h[e]=h.editions.current();
      }

      
  };
});
angular.module('bonuspoint').factory('lock$', function() {
    
});
angular.module('bonuspoint').factory('element$', function() {
    
});

angular.module('bonuspoint').factory('cardModel$',['editions$','lock$','element$',function(){
   return function(){
       var cardModel={value:{}};
       editions$(cardModel,'value',10);
       lock$(cardModel,'value');
       element$(cardModel,'value');
       function open(cmid){//cmid: cardModel Id
           
       }
       function save(){
           
       }
       
       
       return cardModel;
   }
}]);

angular.module('bonuspoint').controller('cardEditor',['cardModel$',function(){
    $scope.cardModel=cardModel();
    $scope.cardModel.open(cmid)
}]);