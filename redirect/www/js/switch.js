var mqstring = '(orientation:portrait) and (min-width:500px), (orientation:landscape) and (min-width:600px)';

function init_location()
{
    var mq = window.matchMedia(mqstring);
    if(mq.matches)
    {
        window.location = "tablet.html";
    }
}

function init_mq_listener()
{
    var mq = window.matchMedia(mqstring);
    mq.addListener(function(newmq)
                   {
                       if(newmq.matches)
                       {
                           window.location = "tablet.html";
                       }
                       
                   });
}