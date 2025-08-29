
**# 1 no Ans**
- *getElementById*: এর মাধ্যমে নির্দিষ্ট এলিমেন্ট পাওয়া যায়।
- *getElementsByClassName*: একই নাম ব্যবহার করে একাধিক এলিমেন্ট পাওয়া যায়
- *querySelector*: এর মাধ্যমে যেকোনো একটা এলিমেন্ট পাওয়া যায়।
- *querySelectorAll*: এর মাধ্যমে একই রকম এলিমেন্ট গুলোকে NodeList আকারে পাওয়া যায়।


**# 2 no Ans**
```js
const newDiv = document.createElement('div');   // নতুন div তৈরি
newDiv.innerText = 'Hello World';               // ভিতরের লেখা বসানো
document.container.appendChild(newDiv);         // DOM-এ যোগ করা
```


**# 3 no Ans**
Event Bubbling
- কোন ইভেন্টে ক্লিক করার পর নিচের এলিমেন্ট থেকে ধাপে ধাপে tree আকারে উপরের দিকে উঠতে থাকে


**# 5 no Ans**
preventDefault() vs stopPropagation()

- preventDefault(): কোনো default কাজ বন্ধ করে 
- stopPropagation(): event-টা parent-এ ছড়াতে (bubble) দিবে না