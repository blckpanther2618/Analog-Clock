function main()
{
    var secHand =document.querySelector(".second-hand");
    var minHand =document.querySelector(".min-hand");
    var hrHand =document.querySelector(".hour-hand");
    function call()
    {
        var date= new Date();

        var secVal = date.getSeconds();
        var secDeg = ((secVal/60)*360)+90;
        secHand.style.transform=`rotate(${secDeg}deg)`;

        var minVal =date.getMinutes();
        var minDeg=((minVal/60)*360)+((secVal/60)*6)+90;
        minHand.style.transform=`rotate(${minDeg}deg)`;

        var hrVal =date.getHours();
        var hrDeg = ((hrVal/12)*360)+((minVal/60)*30)+90;
        hrHand.style.transform=`rotate(${hrDeg}deg)`;
    }
    setInterval(call,1000);
}