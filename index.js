import {endorsementInDB as endorsementsDB } from "./data.js";
import { getList } from "./list.js";
import {push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-a75cc-default-rtdb.firebaseio.com/"
}

document.addEventListener('DOMContentLoaded', ()=>{
    console.log(endorsementsDB)
    
    const endorsements=document.getElementById("mainContainer")
    const formBtn=document.getElementById("submitBtn")
    const reviewText=document.getElementById("endorsement")
    const fromInput= document.getElementById("from")
    const toInput= document.getElementById("to")

    formBtn.addEventListener("click", function() {
            let reviewValue = reviewText.value
            let fromValue = fromInput.value
            let toValue= toInput.value

            const newEndorsements= {
                review:reviewValue,
                to:toValue,
                from:fromValue,
                likes:0,
                isLiked:false
            }
            
            push(endorsementsDB, newEndorsements)
            
            clearInputFieldsEl()
        })

    onValue(endorsementsDB, function(snapshot) {
        if (snapshot.exists()) {
            let itemsArray = Object.entries(snapshot.val())
            clearEndorsement()
        
            let list= getList(itemsArray)

            renderList(list)
            
            } else {
            endorsements.innerHTML = "<p>No endorsements here... yet</p>"
        }
    })


    
    function  renderList(info){
        endorsements.innerHTML = info.join('')

    }

    function clearEndorsement(){
        endorsements.innerHTML =""
    }

    function clearInputFieldsEl() {
        reviewText.value = ""
        fromInput.value=""
        toInput.value=""
    }

})
