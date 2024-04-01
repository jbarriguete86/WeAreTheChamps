import {endorsementInDB as endorsementsDB } from "./data.js";
import { getList } from "./list.js";
import {push, onValue, update} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


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

            if(reviewValue && fromValue && toValue ){
                const newEndorsements= {
                    review:reviewValue,
                    to:toValue,
                    from:fromValue,
                    likes:0,
                    isLiked:false
                }
                
                push(endorsementsDB, newEndorsements)
                
                clearInputFieldsEl()
            } else {
                alert("You need to fill in the information first")
            }

        })

    onValue(endorsementsDB, function(snapshot) {
        if (snapshot.exists()) {
            let itemsArray = Object.entries(snapshot.val())

            itemsArray.reverse()
            clearEndorsement()
        
            let list= getList(itemsArray)

            renderList(list)

            document.addEventListener("click", (e) => {
                if (e.target.id) {
                    const element = itemsArray.find(item => item[0] === e.target.id)
                    if (element) {
                        const [key, value] = element
                        if (!value.isLiked) {
                            value.likes++
                        } else {
                            value.likes--
                        }
                        value.isLiked = !value.isLiked
                        update(endorsementsDB, { [key]: value })
                    }
                }
            })
            
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