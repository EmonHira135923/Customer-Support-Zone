### ✅ Readme:

Create a README file to answer the following question-

- What is JSX, and why is it used?
- What is the difference between State and Props?
- What is the useState hook, and how does it work?
- How can you share state between components in React?
- How is event handling done in React?

---

###

### 1 . - What is JSX, and why is it used?

### উত্তর : ---->

JSX (JavaScript XML) হলো একটি syntax যা React-এ HTML-এর মতো structure লিখতে দেয়।

Use: এটি component structure সহজে বোঝার মতো করে তোলে।

উদাহরণ:

const element = <h1>Hello, World!</h1>;

JSX সরাসরি browser-এ চলতে পারে না, তাই React এটাকে JavaScript objects-এ convert করে।

### 2. - What is the difference between State and Props?

### উত্তর : ---->

### State:

এটি একটি কম্পোনেন্টের ভিতরে থাকা লোকাল ডাটা।

এটি পরিবর্তনযোগ্য (Mutable), অর্থাৎ কম্পোনেন্টের ভিতরে আপডেট করা যায়।

কম্পোনেন্ট নিজেই এটি নিয়ন্ত্রণ করে।

সাধারণত ব্যবহার হয় ইউজারের ইন্টার‌্যাকশন ট্র্যাক করা, এলিমেন্ট টগল করা ইত্যাদিতে।

### Props:

এটি পেরেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো ডাটা।

এটি অপরিবর্তনীয় (Immutable), অর্থাৎ চাইল্ড কম্পোনেন্ট থেকে পরিবর্তন করা যায় না।

নিয়ন্ত্রণ থাকে পেরেন্ট কম্পোনেন্টের কাছে।

সাধারণত ব্যবহার হয় কম্পোনেন্টগুলোর মধ্যে তথ্য পাঠাতে।

### 3. - What is the useState hook, and how does it work?

### উত্তর : ---->

### useState Hook:

useState হল React-এর একটি Hook যা কম্পোনেন্টে লোকাল স্টেট তৈরি করতে দেয়।

এটি একটি ভ্যারিয়েবল (স্টেট) এবং সেই স্টেট আপডেট করার জন্য একটি ফাংশন রিটার্ন করে।

কিভাবে কাজ করে:

স্টেট ডিফাইন করা হয়:

const [count, setCount] = useState(0);

count = স্টেট ভ্যারিয়েবল (এখানে শুরুতে 0)

setCount = স্টেট আপডেট করার ফাংশন

স্টেট আপডেট করা যায়:

setCount(count + 1);

এই ফাংশন কল করলে কম্পোনেন্ট রি-রেন্ডার হয় এবং নতুন স্টেট মান দেখা যায়।

ব্যবহার:

UI-তে ডাইনামিক ডাটা হ্যান্ডেল করতে যেমন বাটনে ক্লিক করা, ইনপুট মান আপডেট করা ইত্যাদি।

### 4. - How can you share state between components in React?

### উত্তর : ---->

### Props দিয়ে শেয়ার করা (Parent → Child)

একটি প্যারেন্ট কম্পোনেন্টে স্টেট রাখা হয়।

সেই স্টেটকে চাইল্ড কম্পোনেন্টে props হিসেবে পাঠানো হয়।

চাইল্ড কম্পোনেন্ট সেই ডাটা ব্যবহার করতে পারে।

উদাহরণ:

function Parent() {
const [count, setCount] = useState(0);

return <Child count={count} setCount={setCount} />;
}

function Child({ count, setCount }) {
return (

<div>
<p>Count: {count}</p>
<button onClick={() => setCount(count + 1)}>Increase</button>
</div>
);
 }

### Lifting State Up

দুই বা ততোধিক কম্পোনেন্টের মধ্যে স্টেট শেয়ার করতে হলে সাধারণত প্যারেন্ট কম্পোনেন্টে স্টেট রাখা হয়।

সব চাইল্ড কম্পোনেন্ট সেই প্যারেন্টের মাধ্যমে স্টেট ব্যবহার করে।

### Context API

বড় অ্যাপ্লিকেশনে অনেক লেভেলে ডাটা পাঠাতে হয়।

React.createContext() ব্যবহার করে স্টেট গ্লোবালভাবে শেয়ার করা যায়।

উদাহরণ:

const CountContext = React.createContext();

function App() {
const [count, setCount] = useState(0);
return (
<CountContext.Provider value={{ count, setCount }}>
<Child />
</CountContext.Provider>
);
}

function Child() {
const { count, setCount } = useContext(CountContext);
return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

### State Management Libraries

বড় প্রোজেক্টে Redux, Zustand, Recoil ইত্যাদি লাইব্রেরি ব্যবহার করে স্টেট শেয়ার করা হয়।

### 5. - How is event handling done in React?

### উত্তর : ---->

### JSX তে ইভেন্ট হ্যান্ডলিং

ইভেন্ট নাম camelCase ফরম্যাটে লেখা হয়।

যেমন: onClick, onChange, onSubmit ইত্যাদি।

ফাংশন পাস করা হয় {} ব্রেসের মধ্যে।

উদাহরণ:

function MyButton() {
const handleClick = () => {
alert("Button clicked!");
};

return <button onClick={handleClick}>Click Me</button>;
}

### Parameters সহ ইভেন্ট হ্যান্ডলিং

যদি ফাংশনে আর্গুমেন্ট দিতে হয়, তখন অ্যারো ফাংশন ব্যবহার করতে হয়।

function MyButton({ name }) {
const handleClick = (user) => {
alert(`Hello ${user}`);
};

return <button onClick={() => handleClick(name)}>Greet</button>;
}

### Event Object ব্যবহার করা

প্রতিটি ইভেন্ট ফাংশনে event অবজেক্ট আসে।

event.preventDefault() ব্যবহার করে ডিফল্ট আচরণ আটকানো যায়।

function MyForm() {
const handleSubmit = (e) => {
e.preventDefault();
alert("Form submitted!");
};

return (

<form onSubmit={handleSubmit}>
<button type="submit">Submit</button>
</form>
);
}

### Important Points

HTML এর মত "onclick" নয়, সবই camelCase।

"return false" ব্যবহার করে ইভেন্ট বন্ধ হয় না; preventDefault() ব্যবহার করতে হবে।

ফাংশনকে সরাসরি কল না করে {handleClick} আকারে পাঠানো হয়।
