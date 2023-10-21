console.log('cargando script')

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {

    if (request.type === 'sideBarButton') {
      handleToggleElement('#app > div > div > div._2Ts6i')
    }

    if (request.type === 'footerButton') {
      handleToggleElement('#app footer')
    }
    
    return true
  })


function handleToggleElement (query) {
  const element = document.querySelector(query)
  if (element.style.getPropertyValue('display') === 'none') {
    element.style.removeProperty('display')
  } else {
    element.style.setProperty('display', 'none')
  }
}
