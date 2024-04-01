import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-a75cc-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
export const endorsementInDB = ref(database, "endorsements")



export const reviewsData=[
{
    review: "Hi Bob! Your React Router course is so good. The students are going to LOVE IT. I’m so excited for the launch :) 🔥 Per",
    to: "Per",
    from:"Jose",
    likes:"4",
    isLiked:false

},
{
    review: "That transcription feature you completed for Scrimba 3.0 is amazing. I know you’ve been working hard on it for several months now. 👏👏👏 Really good work 🙌",
    to: "Abdellah",
    from:"Sindre",
    likes:"7",
    isLiked:true 
}
]
