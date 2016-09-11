var React = require('react');
var {Link} = require('react-router');


   var About = (props) => {
     return(
       <div>
           <h1 className="text-center page-title">About</h1>
      <div className="container">
         <div className="question">
      <li> Who are you? Why are you a good fit for this role?</li>
     <p>I am a person that believes that with dedication you can achieve whatever you want,
       look I am an economist and learned web development by myself, also
       I believe that we are making transaction all the time so we have to be good at sales. </p>
     <p>I fit for the job because I am a dedicated person that cares about the costumer, and I am
       ready to learn and contribute with ShopStorm </p>
   </div>
   <div className="question">
       <li> Explain a scenario where you had to tell a customer “no” or had to correct their mistake.</li>
      <p>   Client: Hi, when I contract ShopStorm and we design the web with more images and other type of boxes,
         now that I open the web is another history.</p>
       <p>  Me: Correct Sir., let me ask you; from which device are you seeing the page? </p>
       <p> Client: From my smartphone </p>
       <p>  Me: All that you design for your website is there, we used the latest tech  technologies, and if you open the web
         from a computer or a big screen, you should see  what you design, Do you have a computer near you?</p>
<p> Client: yes </p>
<p> Me: Could you open the website and check? please </p>
<p> Client: the web is Ok  </p>
<p> Me: we used Media queries a web responsive technology that let us adapt to the costumer device, sometimes is better to do not have a lot of images in web for phones because is going to take more time and the user experience
  it is not going to be so good  , are you ok with your this ?</p>
<p> Client: Yes, I am </p>
<p> Me. Thanks for contact us , Is there anything else I can do for you? </p>
<p> Client: I am ok </p>
<p> Me: have a good day</p>
<p>Client : Good Bye </p>
     </div>
     <div className="question">
     <li> Do you believe the customer is always right?</li>
       <p> Yes I Do, and We have to be carefull with this principle, when answering or making questions,Always i got in mind:Client is right</p>
       </div>
       <div className="question">
       <li> What is your favorite GIF or emoji? </li>
       <img src="./images/emoj.jpg"/>
       </div>
 </div>
 </div>
     )
   };

module.exports = About;
