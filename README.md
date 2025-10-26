# Customer Support Zone

**Customer Support Zone** হলো একটি React ভিত্তিক প্রজেক্ট যা কাস্টমার টিকেট প্রদর্শন, ট্র্যাক এবং রিজলভ করার জন্য তৈরি করা হয়েছে। প্রজেক্টটি Figma ডিজাইন অনুসারে তৈরি এবং এতে স্ট্যাটাস ম্যানেজমেন্ট, রেসপন্সিভ ডিজাইন এবং React-Toastify ব্যবহার করা হয়েছে।

---

## Features

- **Navbar**: ওয়েবসাইটের নাম/লোগো, মেনু আইটেম, New Ticket বাটন
- **Banner**: টিকেট স্ট্যাটিসটিক্স দেখানো (In Progress, Resolved)
- **Main Section**:
  - 10–15 টিকেটের JSON ডেটা
  - কার্ড লেআউটে টিকেট প্রদর্শন
  - Task Status Section: কার্ডে ক্লিক করলে Task Status এ যোগ হয়
  - Complete Button: ক্লিক করলে টিকেট Resolved List এ চলে যায় এবং In Progress কমে, Resolved বৃদ্ধি পায়
- **Footer**: Figma অনুযায়ী ডিজাইন করা
- **Responsiveness**: মোবাইল ও ডেক্সটপ উভয়ে রেসপন্সিভ
- **React-Toastify**: অ্যালার্টের পরিবর্তে স্টাইলিশ টোস্ট নোটিফিকেশন

---

## Project Logic

- কার্ডে ক্লিক করলে Task Status এ যোগ হয়
- Complete Button ক্লিক করলে:
  - Task Status থেকে রিমুভ
  - Resolved List এ যোগ
  - In Progress কমে, Resolved বাড়ে
  - Customer Tickets থেকে মুছে যায়

---

## Technologies Used

- React.js  
- React-Toastify  
- Tailwind CSS / DaisyUI  
- JavaScript (ES6+)  
- HTML5 & CSS3  

---

## Hosting & Repository

- **GitHub Repository:** [https://github.com/EmonHira135923](https://github.com/EmonHira135923/Customer-Support-Zone)  
- **Live Demo:** [https://yourusername.github.io/customer-support-zone](https://yourusername.github.io/customer-support-zone)  

---

**© 2025 Customer Support Zone. All Rights Reserved.**
