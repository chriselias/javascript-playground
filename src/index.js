const forms = [
  {
    "id": "1",
    "title": "Contact Form",
    "entries": "47"
  },
  {
    "id": "2",
    "title": "Appointment Request Form",
    "entries": "0"
  },
  {
    "id": "3",
    "title": "Landing Page Form(2)",
    "entries": "55"
  },
  {
    "id": "4",
    "title": "Test Form",
    "entries": "4"
  }
];

const total = forms.reduce((prev,current) => {
const a = prev
const b = Number(current.entries)
console.log(prev)
 return a + b;
}, 0)

const filtered = forms.filter(form => {
  return form.id === '3'
})

filtered[0].active = true;
console.log(filtered);
console.log(total)