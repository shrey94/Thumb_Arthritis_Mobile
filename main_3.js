const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();

document.getElementById("Date_Info").innerHTML = monthNames[d.getMonth()] + '&nbsp' + d.getDate()+ '<br>'+ 'EXERCISES';