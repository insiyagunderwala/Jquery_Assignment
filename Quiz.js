const Questions = [{
    Quiz:"1. What is capital of India?",
    options:["Gandhinagar",
             "Surat",
             "Delhi",
             "Mumbai"],
    answer : "Delhi"
    },
    {
        Quiz:"2. What is the capital of Thailand?",
        options:["Lampang",
                 "Phuket",
                 "Ayutthaya",
                 "Bangkok"],
        answer : "Bangkok"
    },
    {
        Quiz:"3. What is the capital of Gujarat?",
        options:["Surat",
                 "Vadodara",
                 "Gandhinagar",
                 "Rajkot"],
        answer : "Gandhinagar"
    },
    {
        Quiz:"4. Which is a union territory?",
        options:["Lakhadweep",
                 "Assam",
                 "Nagaland",
                 "Manipur"],
        answer : "Lakhadweep"
    },
    {
        Quiz:"5. Which of these is not a north-eastern state?",
        options:["Arunachal Pradesh",
                 "Meghalaya",
                 "Telangana",
                 "Sikkim"],
        answer : "Telangana"
    }
];

var count = 1 ;
var marks = 0 ;
var Answer ; 


$(document).ready(function(){
    $('#finish').hide();
    $('#result').hide();
    $('#main').hide();

    
    $('#button').click(function(){
        $('#startPage').hide();
        $('#finish').hide();
        $('#result').hide();
        $('#main').hide();
        addingQuestions(Questions,0);
    });

    
    $('#next').click(function(){
        check_result(Questions,count);

        if(count == 5){
            $('#startPage').hide();
            $('#result').hide();
            $('#finish').show();
            $('#next').hide();
        }
        else{
            console.log(count);
            $('#startPage').hide();
            $('#finish').hide();
            $('#result').hide();
            $('#next').show();
            buttons_manager();
            addingQuestions(Questions,count); 
            count++;  
        }

    });

    function buttons_manager(){
        if(count == 4){
            $('#next').hide();
            $('#finish').show();
        }
    }

    function check_result(Questions,i){
        var radioValue = $("input[type='radio']:checked").val();
        console.log("radio Value : " + radioValue);
        console.log("Answer : " + Answer);
        if(radioValue == Answer){
            marks = marks + 1 ;
        }
        console.log("Marks : "+ marks);
    }

    $('#finish').click(function(){
        //checking the answer
        check_result(Questions,count);
        $('#main').hide();
        $('#result').show();
        $("#marks").text(marks);
        $('#correct-answer').text(marks);
        if(marks==5){
        $("#message").text("Hurray!!! You got full marks!");
        }
        if(marks==4){
            $("#message").text("Yay!! Keep up the good work!");
        }
        if(marks==3){
            $("#message").text("Can do better!");
            }
    });

    $('#start_again').click(function(){
        count = 1;
        marks=0;    
        $('#startPage').show();
        $('#finish').hide();
        $('#result').hide();
        $('#main').hide();
        $('#next').show();
    });

    //create Question function
    function addingQuestions(Question,i){
        $('#main').show();
        $('#question').text(Question[i].Quiz); 
        $('.form-check-input').prop( "checked", false );

        //setting text to the Label
        $('#lbl1').text(Question[i].options[0]);
        $('#lbl2').text(Question[i].options[1]);
        $('#lbl3').text(Question[i].options[2]);
        $('#lbl4').text(Question[i].options[3]);

        //set the value to the radio button 
        $('#flexRadioDefault1').attr("value",Question[i].options[0]);
        $('#flexRadioDefault2').attr("value",Question[i].options[1]);
        $('#flexRadioDefault3').attr("value",Question[i].options[2]);
        $('#flexRadioDefault4').attr("value",Question[i].options[3]);

        //storing the answer in Answer var
        Answer = Question[i].answer;
    }
})



