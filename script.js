
function calc1(){
    var numericRegex = /^[0-9]+$/
    let total=parseFloat(document.getElementById("total").value)
    if(total>0)
    {
        console.log(total)
        if(numericRegex.test(document.getElementById("total").value))
        {
            document.getElementById("errorMsg").innerHTML=""
            document.getElementById("tip").disabled = false
            let total = parseFloat(document.getElementById("total").value)
            let tip = parseInt(document.getElementById("tip").value)
    
            document.getElementById("tipPercent").value = tip
            let ans1 = total*tip/100
            document.getElementById("tipAmount").value = ans1.toFixed(2)
            let ans2 = total+(total*tip/100)
            document.getElementById("totalWithTip").value = ans2.toFixed(2)
        }
        else
        {
            document.getElementById("errorMsg").innerHTML="you should put valid amount."
            document.getElementById("tip").disabled = true

            document.getElementById("tipAmount").value = 0
            document.getElementById("totalWithTip").value = 0

                 
        }
    }
    else
    {
        document.getElementById("errorMsg").innerHTML="you should put valid amount." 
        document.getElementById("tip").disabled = true

        document.getElementById("tipAmount").value = 0
        document.getElementById("totalWithTip").value = 0
    }
}