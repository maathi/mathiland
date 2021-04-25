function sendVisit() {
  fetch(`${process.env.REACT_APP_HORU}/add`)
}

function sendEvent(title) {
  fetch(`${process.env.REACT_APP_HORU}/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  })
}

export { sendVisit, sendEvent }
