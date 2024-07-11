const btn= document.querySelector('.btn');

let total_tip_amt = 0;

function tipCalculator (){
    console.log("clciked")
    if(document.getElementById('10').checked){
        let tip_10 = Number(document.getElementById('10').value);
        const input= document.querySelector('.total-amt').value;
        total_tip_amt = input*(tip_10/100);
        console.log("tip amt is :"+ total_tip_amt);
        const total_tip = document.querySelector('.total-tip')
        total_tip.innerHTML=`$${total_tip_amt}`
    }
    
    else if(document.getElementById('15').checked){
        let tip_15 = Number(document.getElementById('15').value);
        const input= document.querySelector('.total-amt').value;
        total_tip_amt = input*(tip_15/100);
        console.log("tip amt is :"+ total_tip_amt);
        const total_tip = document.querySelector('.total-tip')
        total_tip.innerHTML=`$${total_tip_amt}`
    }
    
    else if(document.getElementById('20').checked){
        let tip_20 = Number(document.getElementById('20').value);
        const input= document.querySelector('.total-amt').value;
        total_tip_amt = input*(tip_20/100);
        console.log("tip amt is :"+ total_tip_amt);
        const total_tip = document.querySelector('.total-tip')
        total_tip.innerHTML=`$${total_tip_amt}`
        }
    
    else if(document.getElementById('30').checked){
        const tip_30 = Number(document.getElementById('30').value);
        const input= document.querySelector('.total-amt').value;
        total_tip_amt = input*(tip_30/100);
        console.log("tip amt is :"+ total_tip_amt);
        const total_tip = document.querySelector('.total-tip')
        total_tip.innerHTML=`$${total_tip_amt}`
        }
    let custome_tip= document.querySelector('.custom-tip').value;
    console.log(custome_tip)
    if(custome_tip){
        custome_tip = Number(custome_tip)
        const input= document.querySelector('.total-amt').value;
        total_tip_amt = input*(custome_tip/100);
        console.log("tip amt is :"+ total_tip_amt);
        const total_tip = document.querySelector('.total-tip')
        total_tip.innerHTML=`$${total_tip_amt}`
    }
    
}
