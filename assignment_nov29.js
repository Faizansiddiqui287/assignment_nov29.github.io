var kbc = {
    'ques': 0,
    questions: function(){
            var ques1=prompt(kbc.list[0]+kbc.options);
            var ques2=prompt(kbc.list[1]+kbc.options);
            var ques3=prompt(kbc.list[2]+kbc.options);
            var ques4=prompt(kbc.list[3]+kbc.options);

            if(ques1 == kbc.correct_ans[0]){
              console.log("correct answer");
            }else{
              console.log("incorrect answer");
            }
            if(ques2 == kbc.correct_ans[1]){
              console.log("correct answer");
            }else{
              console.log("incorrect answer");
            }
            if(ques3 == kbc.correct_ans[2]){
              console.log("correct answer");
            }else{
              console.log("incorrect answer");
            }
            if(ques4 == kbc.correct_ans[3]){
              console.log("correct answer");
            }else{
              console.log("incorrect answer");
            }
        
    },
    
    'list': ["which type of JS lang is? :","The function and  var are known as:?"," Which of the following type of a variable is volatile?","The linkage of a set of prototype objects is known as___?"],

    'correct_ans': ["Object-base","Declaration statements","Mutable variable","prototype chain"],

    'options':["1. Object-Base","2. Declaration statements","3. Mutable variable","4. prototype chain"],

  };

  var abc = kbc.list;
  console.log(abc);
  var xyz = kbc.questions();
  console.log(xyz);