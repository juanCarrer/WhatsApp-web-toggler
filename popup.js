const toggleButtons = [...document.querySelectorAll('#toggleButtonsContainer button')]

toggleButtons.forEach(buttonElement => {
  const action = buttonElement.getAttribute('data-action')

  buttonElement.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0]
      chrome.tabs.sendMessage(tab.id, { type: action }, function handler (response) {
        console.log(`toggle action - ${action}`, response)
      })
  })
})
})