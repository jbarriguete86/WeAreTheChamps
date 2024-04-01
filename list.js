export function getList(dat){
    console.log(dat)
    return dat.map(item => {
        
        const {to, review, from, likes, isLiked} = item[1]
        return `
        <div>
        <p class="toText">to: ${to}</p>
        <p class="endorsement">${review}</p>
        <p class="fromText">from: ${from}</p>
        <p class="likeIcon">
            <span><i id=${item[0]} class="${isLiked ? "fa-solid" : "fa-regular"} fa-heart"></i></span>
            ${likes}
        </p>
    </div>`
    });
}
