import { reviewsData as data, endorsementInDB as endorsementsDB } from "./data.js";
import {push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



export function getList(dat){

    return dat.map(item => {
        const {to, review, from, likes, isLiked} = item
        return `
        <div>
        <p class="toText">to: ${to}</p>
        <p class="endorsement">${review}</p>
        <p class="fromText">from: ${from}</p>
        <p class="likeIcon">
            <span><i class="${isLiked ? "fa-solid" : "fa-regular"} fa-heart"></i></span>
            ${likes}
        </p>
    </div>`
    });
}
