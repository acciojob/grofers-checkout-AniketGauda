const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

    let arr = document.getElementsByClassName("price");
    let sm=0;
    for(let i=0;i<arr.length;i++){
        sm+=parseInt(arr[i].innerHTML);
    }

    let ltc = document.createElement("td");
    let rtc = document.createElement("td");

    ltc.setAttribute("class","item");
    rtc.setAttribute("class","price");

    let pDiv = document.getElementById("tbl");
    ltc.textContent = `Total Price`;
    rtc.textContent = `${sm}`;

    let tmpP = document.createElement("tr");
	tmpP.setAttribute("id","ans");

    tmpP.appendChild(ltc);
    tmpP.appendChild(rtc);

    pDiv.appendChild(tmpP);
  
};

getSumBtn.addEventListener("click", getSum);

