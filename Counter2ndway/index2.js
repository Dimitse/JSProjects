//app state- The only source of truth
const DEFAULT = 0;
let counter = DEFAULT

const counterDOM  = document.querySelector("#counter")
const btns =document.querySelectorAll('.btn')

/**
 * 1.Listener
 */
btns.forEach(function(btn){
    btn.addEventListener('click',function(event){
        if(event.currentTarget.id === 'btnDecr'){
            onDecreaseClicked()
        }else if(event.currentTarget.id === "btnIncr"){
            onIncreaceClicked()
        }else{
            onResetClicked()
        }
    })
})

//2.Controllers

/**
 * Actions taken after 'Decrease" button clicked
 * Actions include decreasing the counter.
 */
function onDecreaseClicked(){
    decreaseCounter()
}
/**
 * Actions taken after 'Increase" button clicked
 * Actions include increasing the counter.
 */
function onIncreaceClicked(){
    increaseCounter()
}
/**
 * Actions taken after 'Reset" button clicked
 * Actions include reset the counter.
 */
function onResetClicked(){
    resetCounter()
}

/**
 * Decreaces the counter and synchronizes the UI.
 */
function decreaseCounter(){
    counter--
    showCounter(counter)
}
/**
 * Increases the counter and synchronizes the UI.
 */
function increaseCounter(){
    counter ++
    showCounter(counter)
}
/**
 * Reset the counter and syncs the UI.
 */
function onResetClicked(){
    counter = DEFAULT
    showCounter(counter)
}

/**
 * Assigns the counter to the corresponding UI Element.
 * and styles accordingly.
 * @param {Number |Sring} counter - the counter value.
 */
function showCounter(counter){
    counterDOM.innerHTML = counter
    styleCounter(counter)
}
/**
 * Assigns a scecific color to the counter.
 * Green, when positive values, red when
 * negative values, black when zero.
 * @param {NUmber} counter = the counter value.
 */
function styleCounter(counter){
    if(counter > 0){
        counterDOM.style.color ='green'
    }else if(counter < 0){
        counterDOM.style.color = 'red'
    }else{
        counterDOM.style.color =' black'
    }
}


