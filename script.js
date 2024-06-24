
//Typing text
document.addEventListener('DOMContentLoaded', function(){
    
    const dynamicTexts = ["Purushotham ", "a Web Developer", "a Back-End Developer", "a Front-End Developer"];
    const dynamicTextElement = document.getElementById('typing-text');
    let dynamicIndex = 0;

    // const text = "Welcome to my website";
    const text = "Welcome To My Website :)";
    const typingTextElement = document.getElementById('typing-text');
    
    const text1 ="Hello !'m "; 
    let index = 0;
    let fontSize = 80;
    let fontSizeDynamic=75;



    

    function type() {

        if(index < text.length) {
            // typingTextElement.innerHTML += `<span style="font-size: ${fontSize}px;">${text.charAt(index)}</span>`;
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed (milliseconds)
            
          }
        else{
            
            // dynamicTextElement.textContent = text;
            dynamicTextElement.textContent = text1+ dynamicTexts[dynamicIndex];
              //  dynamicTextElement.innerHTML = staticText; // Set static text with larger font size
              //  dynamicTextElement.innerHTML += `<span style="font-size: ${fontSizeDynamic}px;">${dynamicTexts[dynamicIndex]}</span>`;

            
            dynamicIndex = (dynamicIndex + 1) % dynamicTexts.length;
            setTimeout(type, 2000); // Adjust typing speed (milliseconds)
        }
    }

    type();
  });


  document.addEventListener('scroll', function() {
    var section2_img = document.querySelector('.section2 img');
    var section2_content = document.querySelector('.content');
    var section3_first_column = document.querySelector('.first-column');
    var section3_scnd_column = document.querySelector('.second-column');
    var section3_thrd_column = document.querySelector('.third-column');
    var box_content1 = document.querySelector('.box-content1');
    var box_content2 = document.querySelector('.box-content2');
    var box_content3 = document.querySelector('.box-content3');
    var box_content4 = document.querySelector('.box-content4');
    var box_content5 = document.querySelector('.box-content5');

    var message = document.querySelector('.message');
    var contact_me = document.querySelector('.contact-me');
    





    
    // first-column


    var section2_img_Position = section2_img.getBoundingClientRect().top;
    var section2_content_Position = section2_content.getBoundingClientRect().right;
    var section3_first_column_Position = section3_first_column.getBoundingClientRect().top;
    var section3_scnd_column_Position = section3_scnd_column.getBoundingClientRect().top;
    var box_content1_Position = box_content1.getBoundingClientRect().top;
    var box_content2_Position = box_content2.getBoundingClientRect().top;
    var box_content3_Position = box_content3.getBoundingClientRect().top;
    var box_content4_Position = box_content4.getBoundingClientRect().top;
    var box_content5_Position = box_content5.getBoundingClientRect().top;

    var message_Position = box_content5.getBoundingClientRect().top;
    var contact_me_Position = box_content5.getBoundingClientRect().top;
    
    var screenPosition = window.innerHeight / 1.2;

    // section 2
    if ((section2_img_Position < screenPosition )|| (section2_content_Position <screenPosition)) {
      section2_img.classList.add('show');
      section2_content.classList.add('show');
      
    } else {
      section2_img.classList.remove('show');
      section2_content.classList.remove('show');
    }
    // section 3
    
    if((section3_first_column_Position <screenPosition))
    {
      section3_first_column.classList.add('show');
      section3_scnd_column.classList.add('show');
      section3_thrd_column.classList.add('show');
      
    }
    else{
      section3_first_column.classList.remove('show');
      section3_scnd_column.classList.remove('show');
      section3_thrd_column.classList.remove('show');
      
    }

    if((box_content1_Position <screenPosition))
    {
     
      box_content1.classList.add('show');
      box_content2.classList.add('show');
      box_content3.classList.add('show');
      // section3_thrd_column.classList.add('show');
      
    }
    else{
      box_content1.classList.remove('show');
      box_content2.classList.remove('show');
      box_content3.classList.remove('show');
      // section3_scnd_column.classList.remove('show');
      // section3_thrd_column.classList.remove('show');
      
    }
    if(box_content4_Position<screenPosition)
    {
      
      box_content4.classList.add('show');
      box_content5.classList.add('show');
    }
    else{
      box_content4.classList.remove('show');
      box_content5.classList.remove('show');

    }
    if(message_Position < screenPosition || contact_me_Position< screenPosition)
    {

      message.classList.add('show');
      contact_me.classList.add('show');
    }
    else{
      message.classList.remove('show');
      contact_me.classList.remove('show');
    }
    


});

