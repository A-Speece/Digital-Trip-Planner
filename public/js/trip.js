$(function () {
  $("#datepicker").datepicker();
});

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

const newFormHandler = async (event) => {
  event.preventDefault();

  const eventName = document.querySelector("#event-name").value.trim();
  const time = document.querySelector("#event-time").value.trim();
  const activity = document.querySelector("#event-activity").value.trim();
  const total_cost = document.querySelector("#event-total-cost").value.trim();
  const date = document.querySelector("#datepicker").value.trim();

  if (eventName && time && date) {
    const response = await fetch(`/api/trip`, {
      method: "POST",
      body: JSON.stringify({
        event: eventName,
        time,
        date,
        activity,
        total_cost,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/trip");
    } else {
      alert("Failed to create event");
    }
  }
};

document
  .querySelector("#new-event-form")
  .addEventListener("submit", newFormHandler);

  document.querySelector('#logout').addEventListener('click', logout);