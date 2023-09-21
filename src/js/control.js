import { loaderView, removeLoader } from './view/loaderView.js'
import { renderListItems } from './view/dropdownView.js'
import { menuIconView } from './view/mobileView.js'
import { moveCursor } from './view/cursorView.js'
import { faqView } from './view/faqView.js'
import {handleMouseMove, handleWindowResize} from './view/introTextView.js'
import Observer from './view/scrollView.js'

const textController = () => {
  var intervalID = setInterval(function(){
    // every 4 seconds execute following
    var visibleWord = document.getElementsByClassName('visible')[0],
        nextWord = visibleWord.nextSibling;
    // check if nextSibling is textnode (whitespace) - if so get next next sibling. 
    if(nextWord.nodeType == 3) nextWord = nextWord.nextSibling;
    // if there is a next node 
    if(!(nextWord == null)) {
      visibleWord.setAttribute('class','hidden');
      nextWord.setAttribute('class','visible');
    } else {
      clearInterval(intervalID);
    }
  }, 4000)
}

const controller = () => {
  const targetEl = document.querySelectorAll('.section')
  const faqDetails = document.querySelector('.faq-details')
  const upperText = document.querySelector('.intro-text .upper')
  const lowerText = document.querySelector('.intro-text .lower')
  const loginButton = document.querySelector('.main-button')
  // Menu controll
  menuIconView()
  // Login
  // renderListItems(loginButton)
  // cursor
  // requestAnimationFrame(moveCursor)
  
  // Intro Text
  textController()

  // IntersectionObserverAPI
  targetEl.forEach((e) => Observer.observe(e))
  // faq
  // faqDetails.addEventListener('click', (e) => {
  //   faqView(e)
  // })
}

// document.querySelector('main').style.display = 'none'
// spinner
window.onload = function () {
  // loaderView()
  // removeLoader()
  // setTimeout(async () => {
  // }, 3000)
  // document.querySelector('main').style.display = 'block'
  controller()
}
