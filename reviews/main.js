//App State 
const reviews = [{id:0, personaName:"Anna B.", job:"Web Designer", img:"https://img.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg", descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, dolor quis officiis fugit doloremque atque dignissimos explicabo. Ex excepturi, error eum aliquam esse repudiandae eligendi quam molestiae similique, natus iure."},
{id:1, personaName:"John R.", job:"Java Junior Developer", img: "https://img.freepik.com/premium-photo/young-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-65212.jpg", descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, dolor quis officiis fugit doloremque atque dignissimos explicabo. Ex excepturi, error eum aliquam esse repudiandae eligendi quam molestiae similique, natus iure."},
{id:2, personaName:"Rita J.", job:"Senior Project Manager", img:"https://img.freepik.com/free-photo/positive-human-reactions-feelings-emotions-charming-elegant-middle-aged-sixty-year-old-female-with-short-gray-hair-with-pleased-smile-her-eyes-full-happiness-joy_343059-2855.jpg", descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, dolor quis officiis fugit doloremque atque dignissimos explicabo. Ex excepturi, error eum aliquam esse repudiandae eligendi quam molestiae similique, natus iure."},
{id:3, personaName:"Jack G.", job:"Java Senior Developer", img:"https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg", descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, dolor quis officiis fugit doloremque atque dignissimos explicabo. Ex excepturi, error eum aliquam esse repudiandae eligendi quam molestiae similique, natus iure."}
]

let personaId =Math.floor(Math.random()* reviews.length)

window.addEventListener('DOMContentLoaded', function(){
    showPersonaById(personaId)

  
    document.querySelector('#prevBtn').addEventListener('click',function(){
        onPrevBtnClicked
    })

    document.querySelector('#nextBtn').addEventListener('click',function(){
        onNextBtnClicked()
    })

    
})

function showPersonaById(personaId){
    const persona = reviews.find(p => p.id === personaId)
    const{personaName,job, img: image, descr } = persona
    document.querySelector('#personaImg').src = image
    document.querySelector('#personaName').innerHTML = personaName
    document.querySelector('#personaJob').innerHTML = job
    document.querySelector('#personaDesc').innerHTML = descr

}
/**
 * Actions taken after prev button clicked.
 * Actions include show previous persona.
 */

function onPrevBtnClicked(){
    showPrevPersona()
}
/**
 * Actions taken after next button clicked.
 * Actions include show next persona.
 */
function onNextBtnClicked(){
    showNextPersona()
}
/**
 * Finds the previous persona id and shows the persona.
 */
function showPrevPersona(){
    personaId = (personaId < 0)? reviews.length -1 : --personaId
    showPersonaById(personaId)
 }
 /**
  * Finds the next persona id and shows the persona.
  */
 function showNextPersona(){
    personaId =(++personaId % reviews.length)
    showPersonaById(personaId)
 }



